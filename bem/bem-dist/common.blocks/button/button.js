modules.define('button', ['i-bem__dom'], function(provide, BEM) {

provide(BEM.decl('button', {}, {

    live: function() {
        this.liveBindTo('click', function() {
            this.emit('clicked');
        });
    }

}));

});
