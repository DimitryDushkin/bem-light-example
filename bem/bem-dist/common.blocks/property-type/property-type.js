// verbose module declaration:
modules.define(
    'property-type',
    ['i-bem__dom'],
    function(provide, BEM) {

provide(BEM.decl('property-type', {

    onSetMod: {
        js: function() {
            this.domElem.selectize({
                delimiter: ',',
                persist: false,
                create: function(input) {
                    return {
                        value: input,
                        text: input
                    }
                }
            });
            this.bindTo('change', this._onChange);
        }
    },

    _onChange: function(e) {
        this.emit("propertyTypeChanged", $(e.target).val());
    }

}));

});
