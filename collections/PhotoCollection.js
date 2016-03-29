var PhotoCollection = Backbone.Collection.extend({
  model: PhotoModel,

  addNewImage : function(newURL, newTitle){
    this.add({ url: newURL, title: newTitle});
    console.log('add to coll');
  }
});