questions = new Mongo.Collection('questions');

schema = new SimpleSchema({
    question : {
        type: String,
        label: 'Question',
        max: 500,
        optional: false
    },
    answer: {
        type: String,
        label: 'Answer',
        optional: false
    }
});
questions.attachSchema(schema);