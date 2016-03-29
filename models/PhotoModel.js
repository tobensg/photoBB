var PhotoModel = Backbone.Model.extend({
  
   defaults: {
    url: 'http://www.benmargolis.com/assets/images/placeholder_image_netobjects_240x180.gif',
    title: 'Click a photo in the library to display it here',
    rating: 0
  },

  swap : function(){
    this.trigger('swap', this);
  },

  changeRating : function(newRating){
    if (this.get('rating')!==newRating) {
      this.set('rating', newRating);
      this.trigger('swap', this);
    }
  }

});