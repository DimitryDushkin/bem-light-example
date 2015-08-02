// verbose module declaration:
// modules.define(
//     'i-ga',
//     ['i-bem'],
//     function(provide, BEM) {


// less verbose declaration:
modules.define('i-bem', function(provide, BEM) {

provide(BEM.decl('i-ga', {}, {

    hit: function(propertyType, cardId) {
        console.log('Google Analytics hit ', propertyType, cardId);
    }

}));

});
