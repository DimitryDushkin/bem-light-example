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
        if (this._isNoProperties()) {
            return this._getOptions(["price_asc", "price_desc"]);
        } else {
            var sortKeys = _.filter(this._sortKeys(), this._filterSortKey.bind(this));
            if (sortKeys.length >= 1) {
                return this._getOptions(sortKeys);
            } else {
                return [];
            }
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

    _isNoProperties: function() {
        return this.params.propertyTypes && this.params.propertyTypes.length == 0;
    },

    _filterSortKey: function(key) {
        var mappings = {
            "price_desc": ["apartment", "room", "house", "plot"],
            "price_asc": ["apartment", "room", "house", "plot"],
            "area_desc": ["apartment", "room", "house"],
            "area_asc": ["apartment", "room", "house"],
            "plot_area_desc": ["house", "plot"],
            "plot_area_asc": ["house", "plot"]
        };
        if (_.intersection(mappings[key], this.params.propertyTypes).length >= this.params.propertyTypes.length) {
            return true;
        } else {
            return false;
        }
    },

    _sortKeys: function() {
        return ["price_desc", "price_asc", "area_desc", "area_asc", "plot_area_desc", "plot_area_asc"];
    },

    _getOptions: function(keys) {
        var optionsDescriptions = this._optionsDescriptions();
        var result = [];
        for (var i = 0; i <= keys.length; i++) {
            var key = keys[i];
            optionsDescriptions[key] && result.push(optionsDescriptions[key]);
        }
        return result;
    },

    _optionsDescriptions: function() {
        return {
            "price_desc": {
                text: "Цена (убыв.)",
                value: "price_desc"
            },
            "price_asc": {
                text: "Цена (возр.)",
                value: "price_asc"
            },
            "area_desc": {
                text: "Площадь (убыв.)",
                value: "area_desc"
            },
            "area_asc": {
                text: "Площадь (возр.)",
                value: "area_asc"
            },
            "plot_area_desc": {
                text: "Площадь участка (убыв.)",
                value: "plot_area_desc"
            },
            "plot_area_asc": {
                text: "Площадь участка (возр.)",
                value: "plot_area_asc"
            }
        };
    }

}));

});
