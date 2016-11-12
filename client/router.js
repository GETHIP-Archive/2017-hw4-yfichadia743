//router to route URLs to appropriate places
Router.route('/', {
	template: 't_landingPage'
});

Router.route('/about', {
    template: 'about'
});

Router.route('/home', {
    template: 't_landingPage'
});

Router.route('/contact', {
	template: 'contact'
});

Router.route('/questions', {
	template: 't_addQuestions'
});

Router.route('/survey', {
	template: 't_takeSurvey'
});
