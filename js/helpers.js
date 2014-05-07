Ember.TextSupport.reopen({
    attributeBindings: ['required']
});

Ember.View.extend({
    classNameBindings: ['isEnabled:enabled:disabled'],
    isEnabled: true
});