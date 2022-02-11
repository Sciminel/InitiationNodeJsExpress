const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.urlencoded( { extended: false }))

app.listen(5500, () => {
    console.log("Le server est sur le port 5500")
});

app.get("/message", (req, res) => {
    res.sendFile(__dirname+"/index.html");
});

app.post("/", (req, res) => {
    let nbr1 = Number(req.body.nombre1);
    let nbr2 = Number(req.body.nombre2);
    let ope = req.body.operateur;

    res.send(`${calcul(nbr1, nbr2,ope)}`);

});


function calcul(a,b, ope){
    switch (ope){
        case "+":
            result =  a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        case "%":
            result = a % b;
            break;
        default : 
            result = "Désolé je ne connais pas cette opérateur";
            break;

    }
    return result;
}
