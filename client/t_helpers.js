// Template Helpers
  Template.t_addQuestions.helpers({
// read all the questions from collection and put them in "questions"
    questions: function(){
      return QuestionBank.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.t_takeSurvey.helpers({
// read all the questions from collection and put them in "questions"
    questions: function(){
      return QuestionBank.find({}, {sort: {counter: 1}});
    }
  });

