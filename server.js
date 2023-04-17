import express from 'express';
import { engine } from 'express-handlebars';


const app = express(); 


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
 
const students =[ 
    {
        id: 1,
        name: "rahma",
    },
    {
        id: 2,
        name: "rahoom",
    },
    {
        id: 3,
        name: "roro",
    },
    {
        id: 4,
        name: "rahima",
    },
    {
        id: 5,
        name: "cu",
    },
];


app.get("/students", (req, res) => {
res.render("students" , { students });
});
app.listen(5000);0