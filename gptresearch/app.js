const express = require('express'); // Slide 16 - Your First Express Application
const morgan = require('morgan');
const mongoose = require('mongoose'); // getting-started.js
const { ComputerSecurity, History, SocialScience } = require('./models/mongodb');

const PORT = 3000;

const app = express(); // express app

// https://platform.openai.com/docs/quickstart
const { OpenAI } = require('openai');
const openai = new OpenAI();

// const completion = await openai.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [
//         { role: "system", content: "You are a helpful assistant." },
//         {
//             role: "user",
//             content: "Write a haiku about recursion in programming.",
//         },
//     ],
// });

// console.log(completion.choices[0].message);



const dbURI = 'mongodb+srv://dramranb:professor4020a2024@itec4020a.n1uno.mongodb.net/ChatGPT_Evaluation?retryWrites=true&w=majority&appName=itec4020a'
mongoose.connect(dbURI)
    .then((result) => app.listen(PORT), console.log('connected to db'))
    .catch((err) => console.log(err));


app.set('view engine', 'ejs'); // register view engine
// app.set('views', 'myviews');

app.use(express.static('public')); // middleware & static files
app.use(morgan('dev'));


// Middleware routes - redirect to homepage
app.get('/', (req, res) => {
    res.redirect('/chatpgt-efficiency-evaluation-research');
});

// Homepage routes
app.get('/chatpgt-efficiency-evaluation-research', (req, res) => {
    res.render('index', {
        title: 'ChatGPT Efficiency Evaluation Research',
        documents: ''
    })
    .catch((err) => {
        console.log(err);
    })
})

// Computer_Security routes
app.get('/computer-security-mcq', (req, res) => {
    ComputerSecurity.aggregate([{ $sample: { size: 1 } }])
        .then((result) => {
            res.json({ documents: result })
        })
        .catch((err) => {
            console.log(err);
        })
})

// History routes
app.get('/prehistory-mcq', (req, res) => {
    History.aggregate([{ $sample: { size: 1 } }])
    .then((result) => {
        res.json({ documents: result })
    })
    .catch((err) => {
        console.log(err);
    })
})

// Social_Science routes
app.get('/sociology-mcq', (req, res) => {
    SocialScience.aggregate([{ $sample: { size: 1 } }])
    .then((result) => {
        res.json({ documents: result })
    })
    .catch((err) => {
        console.log(err);
    })
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});