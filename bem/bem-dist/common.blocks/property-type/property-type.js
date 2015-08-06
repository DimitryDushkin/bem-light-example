// verbose module declaration:
modules.define(
    'property-type',
    ['i-bem__dom', 'select2'],
    function(provide, BEM, select2) {

provide(BEM.decl('property-type', {

    onSetMod: {
        js: function() {
            this.domElem.select2({
                // tags: true,
                multiple: true,
                width: "260px",
                placeholder: "Выберите тип недвижимости"
            });
            this.bindTo('change', this._onChange);
        }
    },

    _onChange: function(e) {
        this.emit("propertyTypeChanged", $(e.target).val());
    }

}));

});
