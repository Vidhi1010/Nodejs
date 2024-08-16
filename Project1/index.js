const express = require("express");
let users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes

//browser
app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((users) => `<li> ${users.first_name} </li>`).join("")}
    </ul>
    `;
  res.send(html);
});

//mobile app wala

//REST API
app.get("/api/users", (req, res) => {
  //list all users
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    //get id
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
        // Remove the user from the array
        users = users.filter((user) => user.id !== id);
        return res.json({ message: `User with id ${id} has been deleted.` });
    } else {
        return res.status(404).json({ error: "User not found" });
    }
  });
/* app.get("/api/users/:id", (req, res) => {
    //get id
    const id = Number(req.params.id);//id is string so convert it into number

    //find id
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

//POST
app.post("/api/users", (req, res) => {
    //TODO: create new user
    return res.json({status: "pending"});
});

//PATCH
app.patch("/api/users/:id", (req, res) => {
    //TODO: edit the user with id
    return res.json({status: "pending"});
});

// DELETE
app.delete("/api/users/:id", (req, res) => {
    //TODO: delete the user with id
    return res.json({status: "pending"}); 
}); */

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({...body, id: users.length + 1});
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
  
});
/* app.post("/test", (req, res) => {
    console.log("Test route hit");
    res.send("Test route");
 }); */
 
app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
