// Slide 24-25: Questions
const express = require('express');
const app = express();
const PORT = 3000;
const mongodb = require('./mongodb');

// const fs = require('fs');
// fs.readFile('/ITEC4020_dataset/computer_security_test.csv', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// Task A
app.set('view engine', 'ejs');

// Task B
// app2.use((req, res, next) => {
//     const date = new Date().toISOString().split('T')[0];
//     console.log(`[${date}] - ${req.method} request to ${req.path}`)
//     next();
// });

// app.use(express.json()); // Middleware to parse JSON body
app.get('/mongodb', async(req, res) => {
    db.Computer_Security.find({});
})
// POST Route
app.post('/books', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.json(newBook);
});

// PUT Route
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === bookId);
    if (index !== -1) {
        books[index] = req.body;
        res.json(books[index]);
    } else {
        res.status(404).json({ message: 'Book not found!' });
    }
});

// DELETE Route
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === bookId);
    if (index !== -1) {
        books.splice(index, 1);
        res.json({ message: 'Book deleted successfully!' });
    } else {
        res.status(404).json({ message: 'Book not found!' });
    }
});

// // Given users array
// const users = [
//     { id: 1, name: 'Alice'},
//     { id: 2, name: 'Bob'},
//     // ... you can add more users if needed
// ];

// // Task C
// app.get('/users', (req, res) => {
//     res.render('users', { users: users });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});

// const app2 = express();

// app2.get('/mongodb', (req,res) => {
//     res.json(computerSecuritySchema);
// });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});