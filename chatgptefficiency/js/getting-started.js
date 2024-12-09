// // Slide 32: a document-oriented database
// {
//     "_id": 1,
//     "first_name": "Leslie",
//     "last_name": "Yepp",
//     "cell": "8125552344",
//     "city": "Pawnee",
//     "hobbies": ["scrapbooking", "eating waffles", "working"]
// }


// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
}

const Schema = new mongoose.Schema;

const computerSecuritySchema = new Schema({
    _id: Schema.Types.ObjectId,
    question: String,
    option1: Mixed,
    option2: Mixed,
    option3: Mixed,
    option4: Mixed,
    answer: String,
});

const historySchema = new Schema({
    _id: Schema.Types.ObjectId,
    question: String,
    option1: Mixed,
    option2: Mixed,
    option3: Mixed,
    option4: Mixed,
    answer: String,
});

const socialScienceSchema = new Schema({
    _id: Schema.Types.ObjectId,
    question: String,
    option1: Mixed,
    option2: Mixed,
    option3: Mixed,
    option4: Mixed,
    answer: String,
});

const ComputerSecurity = mongoose.model('Computer_Security', computerSecuritySchema);
const History = mongoose.model('History', historySchema);
const SocialScience = mongoose.model('Social_Science', socialScienceSchema);


// // Slide 39: Mongoose Schema
// const { Schema } = mongoose;
// const blogSchema = new Schema({
//     title: String, // String is shorthand for { type: String }
//     author: String,
//     body: String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//         votes: Number,
//         favs: Number
//     }
// })


// // Slide 42: Schema to Model
// const Model = mongoose.model('Test', schema);

// const doc = new Model();
// doc._id instanceof mongoose.Types.ObjectId; // true


// // Slide 43: Models (2) create your own _id
// const schema = new Schema({ _id: Number });
// const Model = mongoose.model('Test', schema);

// const doc = new Model();
// await doc.save(); // Throws "document must have an _id before saving"

// doc._id = 1;
// await doc.save(); // works


// // Slide 45: Populate - Example
// const mongoose = require('mongoose');
// const Schema = new mongoose.Schema;

// const personSchema = new Schema({
//     _id: Schema.Types.ObjectId,
//     name: String,
//     age: Number,
//     stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
// });

// const storySchema = new Schema({
//     author: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
//     title: String,
//     fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
// });

// const Story = mongoose.model('Story', storySchema);
// const Person = mongoose.model('Person', personSchema);


// // Slide 46: Saving References
// const computer = new History({
//     _id: new mongoose.Types.ObjectId(),
//     name: 'Ian Fleming',
//     age: 50
// });

// computer.save(function (err) {
//     if (err) return handleError(err);

//     const security1 = new ComputerSecurity({
//         title: 'Casino Royale',
//         computer: computer._id // assign the _id from the person
//     });

//     security1.save(function (err) {
//         if (err) return handleError(err);
//         // that's it!
//     });
// });


// // Slide 47 - Population
// Story.
//     findOne({ title: 'Casino Royale' }).
//     populate('author').
//     exec(function (err, story) {
//         if (err) return handleError(err);
//         console.log('The author is %s', story.author.name);
//         // prints "The author is Ian Fleming"
//     });


// //Slide 48: Populating - Setting Populated Fields
// Story.findOne({ title: 'Casino Royale' }, function (err, story) {
//     if (err) {
//         return handleError(err);
//     }
//     story.author = author;
//     console.log(story.author.name);
//     // prints "Ian Fleming"
// });


// //Slide 49: Populating - Field Selection
// Story.
//     findOne({ title: /casino royale/i }).
//     populate('author', 'name'). // only return the Persons name
//     exec(function (err, story) {
//         if (err) return handleError(err);

//     console.log('The author is %s', story.author.name);
//     // prints "The author is Ian Fleming"

//     console.log('The authors age is %s', story.author.age);
//     // prints "The authors age is null"
// });


// // Slide 51: Validation (2)
// const schema = new Schema({
//     name: {
//         type: String,
//         required: true
//     }
// });
// const Cat = db.model('Cat', schema);

// // This cat has no name :(
// const cat = new Cat();
// cat.save(function(error) {
//     assert.equal(error.errors['name'].message,
//         'Path `name` is required.');

//     error = cat.validateSync();
//     assert.equal(error.errors['name'].message,
//         'Path `name` is required.');
// });


// // Slide 53: Bult-in Validators (2)
// const breakfastSchema = new Schema({
//     eggs: {
//         type: Number,
//         min: [6, 'Too few eggs'],
//         max: 12
//     },
//     bacon: {
//         type: Number,
//         required: [true, 'Why no bacon?']
//     },
//     drink: {
//         type: String,
//         enum: ['Coffee', 'Tea'],
//         required: function() {
//             return this.bacon > 3;
//         }
//     }
// });
// const Breakfast = db.model('Breakfast', breakfastSchema);


// // Slide 54: Bult-in Validators (3)
// const badBreakfast = new Breakfast({
//     eggs: 2,
//     bacon: 0,
//     drink: 'Milk'
// });

// let error = badBreakfast.validateSync();
// assert.equal(error.errors['eggs'].message,
//     'Too few eggs');
// assert.ok(!error.errors['bacon']);
// assert.equal(error.errors['drink'].message,
//     '`Milk` is not a valid enum value path for `drink`.');

// badBreakfast.bacon = 5;
// badBreakfast.drink = null;

// error = badBreakfast.validateSync();
// assert.equal(error.errors['drink'].message, 'Path `dirnk` is required.');

// badBreakfast.bacon = null;
// error = badBreakfast.validateSync();
// assert.equal(error.errors['bacon'].message, 'Why no bacon?');


// // Slide 55: Bult-in Validators (4) Custom error messages
// const breakfastSchema = new Schema({
//     eggs: {
//         type: Number,
//         min: [6, 'Must be at least 6, got {VALUE}'],
//         max: 12
//     },
//     bacon: 0,
//     drink: {
//         type: String,
//         enum: {
//             values: ['Coffee', 'Tea'],
//             message: '{VALUE} is not supported'
//         }
//     }
// });
// const Breakfast = db.model('Breakfast', breakfastSchema);


// // Slide 56: Validation - Custom Validators
// const userSchema = new Schema({
//     phone: {
//         type: String,
//         validate: {
//             validator: function(v) {
//                 return /\d{3}-\d{3}-\d{4}/.test(v);
//             },
//             message: props => `${props.value} is not a valid phone number!`
//         },
//         required: [true, 'User phone number required']
//     }
// });