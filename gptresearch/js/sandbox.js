// mongoose and mongo sandbox routes
app.get('/add-docu', (req, res) => {
    const docu = new ComputerSecurity({
        _id: 2,
        question: 'Is this test question 2 a question?',
        option1: 'A',
        option2: 'B',
        option3: 'C',
        option4: 'D',
        anticipated: 'C',
        responseGPT: ''
    });

    docu.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
})

app.get('/all-docus', (req, res) => {
    ComputerSecurity.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/single-docu', (req, res) => {
    ComputerSecurity.findById('2')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});