var LibraryView = Backbone.View.extend({
  tagName: 'table',
  
  render: function() {
    this.$el.html('');
    this.$el.attr('align', 'right');
    this.$el.append('<th>Images</th>')
    this.collection.each(function(PhotoModel) {
      this.$el.append(new LibraryElementView({model: PhotoModel}).$el);
    }, this);

    return this;
  },
  
  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
  }
  
});