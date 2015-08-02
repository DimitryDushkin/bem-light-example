modules.define( 'i-ga', function(provide) {
    provide({

        hit: function(propertyType, cardId) {
            console.log('Google Analytics hit ', propertyType, cardId);
        }

    });
});
