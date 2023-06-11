function introduction(name) {
    return 'Hi, my name is Aki.';
}
introduction(Aki);
introduction(Aki, Ember.js)
function introductionWithLanguage(name, language) {
    return 'Hi, my name is {Aki} and I am learning to program in {Ember.js}.'
}
function introductionWithLanguageOptional(name,language ="JavaScript") {
    return 'Hi, my name is Gracie and I am learning to program in JavaScript.';
    introductionWithLanguageOptional(Gracie);
}