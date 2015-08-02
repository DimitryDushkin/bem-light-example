// verbose module declaration:
// modules.define(
//     'property',
//     ['i-bem__dom', 'i-ga'],
//     function(provide, BEM, GA) {

// less verbose declaration:
modules.define('i-bem__dom', function(provide, BEM) {

provide(BEM.decl('property', {

    _onPhoneClick: function() {

        var phoneElem = this.elem('phone');

        if (this.hasMod(phoneElem, 'hidden')) {

            this.delMod(phoneElem, 'hidden');
            phoneElem.text('Звоните: ' + this.params.phone);

            // using of static method of block with verbose declaration
            //GA.hit(this.getMod('type'), this.params.id);

            // less verbose option
            BEM.blocks['i-ga'].hit(this.getMod('type'), this.params.id);

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
