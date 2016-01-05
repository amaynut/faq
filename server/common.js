Meteor.publish('questions', function(){
    return questions.find();
});