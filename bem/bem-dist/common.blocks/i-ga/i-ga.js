modules.define(
    'i-ga',
    ['i-bem'],
    function(provide, BEM) {

provide(BEM.decl(this.name, {}, {

    hit: function(propertyType, cardId) {
        console.log('Google Analytics hit ', propertyType, cardId);
    }

}));

});
