modules.define(
    'properties-list',
    ['i-bem__dom'],
    function(provide, BEM) {

provide(BEM.decl('properties-list', {

    onSetMod: {
        js: function() {
            this.findBlockInside('property-type').on(
                'propertyTypeChanged',
                this._onPropertyTypeChanged,
                this);
        }
    },

    _onPropertyTypeChanged: function(e, propertyTypes) {

        var properties = this.findBlocksInside('property');

        if (!propertyTypes || propertyTypes.length === 0) {

            $.each(properties, function(i, property) {
                if (property.hasMod('hidden')) {
                    property.delMod('hidden');
                }
            });

            return;

        }


        $.each(properties, function(i, property) {

            if (propertyTypes.indexOf(property.getType()) == -1) {
                property.setMod('hidden');
            } else if (property.hasMod('hidden')) {
                property.delMod('hidden');
            }

        });

    }

}));

});
