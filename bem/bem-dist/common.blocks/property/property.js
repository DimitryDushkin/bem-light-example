modules.define(
    'i-bem__dom',
    function(provide, BEMDOM) {

BEMDOM.decl('property', {
    onSetMod : {
        js : {
            inited : function() {
                alert('inited');
            }
        }
    }

}, {
    live: function() {
        this.liveInitOnEvent('click');
    }
});

provide(BEMDOM);

});
