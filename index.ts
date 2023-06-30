import express from "express";
import bodyParser from "body-parser";
import {Database} from "./src/schemas/data-source";
import router from "./src/router/router";

const app = express();
const PORT = 8000;

Database.connectDB()
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());

app.use(router);
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
});