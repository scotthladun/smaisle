import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./theme/GlobalStyles";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import app, { createShoppingList, loginAnonymous } from "./contexts/MongoDB";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [shoppingList, setShoppingList] = useState(null);

  useEffect(() => {
    loginAnonymous().then(user => {
      console.log("Successfully logged in!", user);
      setUser(user);
      const mongoDb = app.currentUser.mongoClient('mongodb-atlas');
      createShoppingList(mongoDb, user);
    });
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
