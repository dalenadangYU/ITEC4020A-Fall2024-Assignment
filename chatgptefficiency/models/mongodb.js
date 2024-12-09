const mongoose = require('mongoose'); // getting-started.js

// Describing Schemas for each collection/domain
const Schema = mongoose.Schema;

const computerSecuritySchema = new Schema({ // Computer_Security Schema
    question: {
        type: String,
        required: true
    },
    optionA: {
        type: String,
        required: true
    },
    optionB: {
        type: String,
        required: true
    },
    optionC: {
        type: String,
        required: true
    },
    optionD: {
        type: String,
        required: true
    },
    anticipatedAnswer: String,
    responseGPT: {
        type: String,
        default: null
    }
});

const historySchema = new Schema({ // History Schema
    question: {
        type: String,
        required: true
    },
    optionA: {
        type: String,
        required: true
    },
    optionB: {
        type: String,
        required: true
    },
    optionC: {
        type: String,
        required: true
    },
    optionD: {
        type: String,
        required: true
    },
    anticipatedAnswer: String,
    responseGPT: {
        type: String,
        default: null
    }
});

const socialScienceSchema = new Schema({  // Social_Science Schema
    question: {
        type: String,
        required: true
    },
    optionA: {
        type: String,
        required: true
    },
    optionB: {
        type: String,
        required: true
    },
    optionC: {
        type: String,
        required: true
    },
    optionD: {
        type: String,
        required: true
    },
    anticipatedAnswer: String,
    responseGPT: {
        type: String,
        default: null
    }
});

// Compile Models from Schemas
const ComputerSecurity = mongoose.model('Computer_Security', computerSecuritySchema, 'Computer_Security');
const History = mongoose.model('History', historySchema, 'History');
const SocialScience = mongoose.model('Social_Science', socialScienceSchema, 'Social_Science');

// Export modules for use elsewhere
module.exports = { ComputerSecurity, History, SocialScience };