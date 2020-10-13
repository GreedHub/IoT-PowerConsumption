import { Medition } from "./classes/Medition";

let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let cors = require('cors');

let appPort = 5000;
let app = express();
app.use(bodyParser());
app.use(cookieParser());
app.use(cors());

let meditions: Medition[] = [];

app.get("/",(req,res)=>{

    res.send(`Se enviaron ${meditions.length} mediciones`);

});

app.get("/consumoPromedio",(req,res)=>{

    let sumatoriaConsumos = meditions.reduce((acum,_medition)=> {
        
        acum.medition += _medition.medition;

        return acum;
    });

    console.log({sumatoriaConsumos, meditions})

    let promedioConsumos = sumatoriaConsumos.medition / (meditions.length -1);

    res.send(`El promedio de consumo es de ${promedioConsumos}A`);

});


app.post("/agregarConsumo",(req,res)=>{

    let {medition} = req.body;

    meditions.push(new Medition(medition));

    res.send("ok");

});

app.listen(appPort,()=>{
    console.log(`App listening on  http://localhost:${appPort}`);
});