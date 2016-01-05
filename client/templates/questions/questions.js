Template.questions.helpers({
    'questions': function(){
        return questions.find().map(function(question, index){
            question.i=index;
            return question;
        });
    }
});

