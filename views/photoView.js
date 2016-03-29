var PhotoView = Backbone.View.extend({
  initialize: function() {
    this.model = new PhotoModel();
    this.render();
  },  
  
  setPhoto: function(photo) {
    this.model = photo;
    this.render();
  },

  dropDown: '<br>Change the Rating: <select id="rater"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>',

  template: _.template('<img src="<%= url %>" style="width: 50%; height: 50%"​><br><%= title %>&nbsp;&nbsp;&nbsp;&nbsp;<%= rating %> out of 5 '),

  render: function() {
    this.$el.css({'width' : '50%', 'padding-left': '20px', 'float': 'right'});
    this.$el.html(this.template(this.model.attributes));
    this.$el.append(this.dropDown);
    return this;
  },

  events: {
    'change #rater': function() {
      var newRating = $("#rater").val();
      // console.log('changed rating', newRating);
      this.model.changeRating(newRating);
    }
  }


});