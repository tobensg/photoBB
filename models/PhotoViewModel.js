var PhotoViewModel = Backbone.Model.extend({
  intialize: function(params) {
    this.set('currentPhoto', new PhotoModel());
    // var thisPhoto = this;
  },

  params.library.on('swap', function(photo) {
      this.set('currentPhoto', photo);
    }, this);
  }
});