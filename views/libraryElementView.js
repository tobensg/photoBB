var LibraryElementView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td><%= title %></td>'),
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  
  initialize: function() {
    this.render();
  },

  events: {
    'click': function() {
      this.model.swap();
    }
  }
});