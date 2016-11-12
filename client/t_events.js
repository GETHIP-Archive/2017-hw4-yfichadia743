// Template Events
Template.t_takeSurvey.events({
//event to record survey responses
    "submit .take-survey": function(event){
      event.preventDefault();
      var counter = QuestionBank.find().count();

      for (var j = 0, length = counter; j < length+1; j++) {
          // alert("response" + (j+1) )
          var radios = document.getElementsByName("response" + (j+1));
          // alert(radios.length); gets you the # of radio buttons
          for (var i = 0, length = radios.length; i < length; i++) {
              if (radios[i].checked) {
              // do whatever you want with the checked radio
              // alert(radios[i].value);
               SurveyResponseBank.insert({
                 counter: (j+1),
                 response: radios[i].value,
                 createdAt: new Date()
               });
              // only one radio can be logically checked, don't check the rest
            break;
            }
          }
      }
      // Clear Form
      // event.target.text.value='';

      // Prevent Submit
      alert("Your responses have been captured.  Many thanks.");
      return false;
    }
});
  
  Template.t_addQuestions.events({
  //event to record new questions 
    "submit .new-question": function(event){
      var text = event.target.text.value;
      var counter = QuestionBank.find().count() + 1;
      // alert(counter);
      QuestionBank.insert({
        counter: counter,
        text: text,
        createdAt: new Date()
      });

      // Clear Form
      event.target.text.value='';

      // Prevent Submit
      return false;
    },
    "click .toggle-checked": function(){
      QuestionBank.update(this._id, {$set:{checked: ! this.checked}});
    },
    "click .delete-todo": function(){
//      if(confirm('Are You Sure?')){
        QuestionBank.remove(this._id);
//      }
    }
  });
