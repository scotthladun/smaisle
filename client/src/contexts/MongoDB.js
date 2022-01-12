import * as Realm from "realm-web";

const app = new Realm.App({ id: 'smaisle-web-react-qnqdf' });

export async function loginAnonymous() {
    if (app.currentUser) {
        return app.currentUser;
    }
    // Create an anonymous credential
    const credentials = Realm.Credentials.anonymous();
    try {
        // Authenticate the user
        const user = await app.logIn(credentials);
        // `App.currentUser` updates to match the logged in user
        // assert(user.id === app.currentUser.id)
        return user
    } catch (err) {
        console.error("Failed to log in", err);
    }
}

// Setup shopping list document for anonymous user and store it in MongoDB
// Each list will be deleted from the database after 2 days from createdAt date
export async function createShoppingList(mongoDb, user) {
    const db_connect = mongoDb.db("data").collection("lists");
    db_connect.updateOne(
        { "user": user.id },
        {
            "$set": {
                "name": "Shopping List",
                "user": user.id,
                "items": [],
                "createdAt": new Date(),
            }
        },
        { "upsert": true }
    ).then(() => {
        console.log("Successfully created shopping list!");
    }).catch(err => {
        console.error("Failed to create shopping list!", err);
    });
}

// Add item to shopping list
export async function addToShoppingList(mongoDb, user, product) {
    const db_connect = mongoDb.db("data").collection("lists");
    db_connect.updateOne(
        { "user": user.id },
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
}


export default app;