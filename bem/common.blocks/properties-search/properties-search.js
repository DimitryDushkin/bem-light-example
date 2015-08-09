modules.define(
    'properties-search',
    ['i-bem__dom'],
    function(provide, BEM) {

provide(BEM.decl('properties-search', {

    onSetMod: {
        js: function() {
            this.params.propertyTypes = [];

            this.findBlockInside('property-type').on(
                'propertyTypeChanged',
                this._onPropertyTypeChanged,
                this);
        }
    },

    _getOptionsList: function() {
        if (this._isNoProperties() || this._isProperties()) {
            return this._priceOptions();
        } else if (this._isHouse()) {
            return this._houseOptions();
        } else if (this._isPlot()) {
            return this._plotOptions();
        } else if (this._isApartmentOrRoom()) {
            return this._apartmentRoomOptions();
        }
    },

    _onChange: function(e) {
        this.emit("propertySortChanged", $(e.target).val());
    },

    _onPropertyTypeChanged: function(e, propertyTypes) {
        this.params.propertyTypes = propertyTypes;
        var selectize = this.findBlockInside('property-sort').domElem[0].selectize;
        var optionsList = this._getOptionsList();

        selectize.clear();
        selectize.clearOptions();
        selectize.load(function(callback) {
            callback(optionsList);
        });
    },

    ////////////////////////////////////////////////////////////////////////////////////

    _priceOptions: function() {
        return [
            {
                text: 'Цена (убыв.)',
                value: "price_desc"
            },
            {
                text: 'Цена (возр.)',
                value: "price_asc"
            }
        ];
    },

    _houseOptions: function() {
        return this._apartmentRoomOptions().concat(this._plotAreaOptions());
    },

    _plotOptions: function() {
        return this._plotAreaOptions().concat(this._priceOptions());
    },

    _apartmentRoomOptions: function() {
        return this._areaOptions().concat(this._priceOptions());
    },

    _areaOptions: function() {
        return [
            {
                text: 'Площадь (убыв.)',
                value: "area_desc"
            },
            {
                text: 'Площадь (возр.)',
                value: "area_asc"
            }
        ];
    },

    _plotAreaOptions: function() {
        return [
            {
                text: 'Площадь участка (убыв.)',
                value: "plot_area_desc"
            },
            {
                text: 'Площадь участка (возр.)',
                value: "plot_area_asc"
            }
        ];
    },

    _isNoProperties: function() {
        return this.params.propertyTypes.length == 0;
    },

    _isProperties: function() {
        return this.params.propertyTypes.length > 1;
    },

    _isHouse: function() {
        return this._isSpecificProperty("house");
    },

    _isPlot: function() {
        return this._isSpecificProperty("plot");
    },

    _isApartmentOrRoom: function() {
        return (this._isSpecificProperty("apartment") || this._isSpecificProperty("room"));
    },

    _isSpecificProperty: function(type) {
        return (this._isOneProperty() && this.params.propertyTypes[0] == type);
    },

    _isOneProperty: function() {
        return (this.params.propertyTypes.length == 1);
    },

}));

});
