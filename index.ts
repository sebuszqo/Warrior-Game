import * as express from "express";
import 'express-async-errors';
import * as methodOverride from "method-override";
import {static as expressStatic , urlencoded} from "express";
import {engine} from "express-handlebars";

// creating an express app
const app = express();

// methodOverride to use with PATCH PUT etc.
app.use(methodOverride('_method'));

// I will use it cuz we will get our data through forms
app.use(urlencoded({
    extended: true,
}));

// I will be serving static data from dir named 'public'
// app.use(expressStatic("__dir"))
app.use(expressStatic("public"));

// layouts engine - I will use express handlebars
app.engine('.hbs', engine({
    extname: '.hbs',
    //helpers: ???,
}));

// setting my view engine to .hbs
app.set('view engine', '.hbs')

app.get('/', (req,res)=>{
    res.send('Hello!');
});

//handling errors
// app.use(handleError)

// app is listening on port 3000 - console log to click every time when I need it - I do not have to copy it ;)
app.listen(3000, 'localhost', () =>{
    console.log("Listening on http://localhost:3000");
});



