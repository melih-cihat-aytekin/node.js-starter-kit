const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

const PORT = 5000;

app.use(bodyParser.json())
app.use(cors())
app.set("view engine", "ejs")
app.use("/assets" , express.static("assets"));


app.get('/' , (req,res) => {
    res.render("index")
})

app.get('/fikirler', (req, res) => {
    res.json({veri: "Ahmet"})
  });

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log("Server is running...")
})