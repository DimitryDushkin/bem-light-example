// verbose module declaration:
modules.define(
    'property',
    ['i-bem__dom', 'i-ga', 'button'],
    function(provide, BEM, GA, Button) {

provide(BEM.decl('property', {

    _onPhoneClick: function() {

        var phoneElem = this.elem('phone');

        if (this.hasMod(phoneElem, 'hidden')) {

            this
                .delMod(phoneElem, 'hidden')
                .setMod(phoneElem, 'revealed');

            phoneElem.text('Звоните: ' + this.params.phone);

            GA.hit(this.getMod('type'), this.params.id);

        }

    },

    _onHideClick: function() {
        this.setMod('hidden');
    }

}, {

    live: function() {

        this.liveBindTo('phone', 'click', function(e) {
            this._onPhoneClick(e);
        });

        this.liveInitOnBlockInsideEvent('clicked', Button.getName(), function(e) {
            this._onHideClick(e);
        });

    }

}));

});
