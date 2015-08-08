modules.define(
    'property-sort',
    ['i-bem__dom', 'selectize'],
    function(provide, BEM, selectize) {

provide(BEM.decl('property-sort', {

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
        this.emit("propertySortChanged", $(e.target).val());
    }

}));

});
