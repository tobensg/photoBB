var HeaderView = Backbone.View.extend({
  
  render: function() {
    this.$el.html('<h1>Photo Library</h1>');
    this.$el.append(this.addImage);
    
    return this;
  },

  addImage: '<div style="padding-bottom: 15px;">Image Url<input type="text" id="newURL" size="40"> Image Title<input type="text" id="newTitle" size="40"> <button id="newImage">submit</button></div>',
  
  initialize: function() {
    this.render();
  },

  events: {
    'click #newImage': function() {
      var newURL = $('#newURL').val();
      var newTitle = $('#newTitle').val();
      console.log('NI', newTitle, newURL);
      this.collection.addNewImage(newURL, newTitle);
    }
  }
  
});