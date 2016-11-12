QuestionBank = new Mongo.Collection('questionbank');
SurveyResponseBank = new Mongo.Collection('surveyresponsebank');

QuestionBankSchema = new SimpleSchema({
  counter: {type: String},
  checked: {type: Boolean, optional:true},
  text: {type: String},
  createdAt: {type:Date}
}); //schema that says only three fields allowed for questionbank collection

QuestionBank.attachSchema (QuestionBankSchema); //this ensures only three fields get added to collection

SurveyResponseBankSchema = new SimpleSchema({
  counter: {type: String},
  response: {type: String},
  createdAt: {type:Date}
}); //schema that says only three fields allowed for questionbank collection

SurveyResponseBank.attachSchema (SurveyResponseBankSchema); //this ensures only three fields get added to collection
