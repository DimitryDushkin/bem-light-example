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

            this.findBlockInside('property-sort').on(
                'propertySortChanged',
                this._onPropertySortChanged,
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

    },

    _onPropertySortChanged: function(e, sortParam) {
        var sortDetails = sortParam.split("_");
        var sortParamName = sortDetails[0];
        var sortOrder = sortDetails[1];
        tinysort('.property', { data: sortParamName, order: sortOrder });
    }

}));

});
