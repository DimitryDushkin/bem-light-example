modules.define(
    'property',
    ['i-bem__dom', 'i-ga'],
    function(provide, BEM, GA) {

provide(BEM.decl(this.name, {

    _onPhoneClick: function() {

        var phoneElem = this.elem('phone');

        if (this.hasMod(phoneElem, 'hidden')) {

            this.delMod(phoneElem, 'hidden');
            phoneElem.text('Звоните: ' + this.params.phone);

            GA.hit(this.getMod('type'), this.params.id);

        }

    }

}, {

    live: function() {
        this.liveBindTo('phone', 'click', function(e) {
            this._onPhoneClick(e);
        });
    }

}));

});
