import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./theme/GlobalStyles";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import MyList from "./pages/MyList";
import app, { createShoppingList, loginAnonymous } from "./contexts/MongoDB";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [shoppingList, setShoppingList] = useState({});

  useEffect(() => {
    loginAnonymous().then(user => {
      console.log("Successfully logged in!", user);
      setUser(user);
      const mongoDb = app.currentUser.mongoClient('mongodb-atlas');
      createShoppingList(mongoDb, user);
    });
  }, []);

  const fetchShoppingList = () => {
    const mongoDb = app.currentUser.mongoClient('mongodb-atlas');
    const userId = app.currentUser;
    mongoDb.db("data").collection("lists").findOne({ "user": userId.id }).then(res => {
      setShoppingList(res);
      console.log(res);
    }

    );
  };

  useEffect(() => {
    fetchShoppingList();
  }, []);

  const handleAddToList = async (product) => {
    const mongoDb = app.currentUser.mongoClient('mongodb-atlas');
    const userId = app.currentUser;
    mongoDb.db("data").collection("lists").updateOne(
      { "user": userId.id },
      {
        "$push": {
          "items": {
            product
          }
        }
      }
    ).then(() => {
      console.log("Successfully added item to shopping list!");
    }).catch(err => {
      console.error("Failed to add item to shopping list!", err);
    });
  };

  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/products" element={<Products addToShoppingList={handleAddToList} />} />
        <Route path="/myLists" element={<MyList list={shoppingList} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
