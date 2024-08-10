const express = require('express');
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//routes

   //browser
/* app.get("/users", (req, res) => {
    const html = `
    <ul>
    ${users.map((users) => `<li> ${users.first_name} </li>`).join("")}
    </ul>
    `;
    res.send(html);
});
 */

//mobile app wala

//REST API
app.get("/api/users", (req, res) => {//list all users
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
        return res.json({status: "pending"});
    })
    .delete((req, res) => {
        return res.json({status: "pending"});
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
app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));