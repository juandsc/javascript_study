var people = {
  people: ['Will', 'Steve'],
  init: function() {
    this.cacheDom();
    this.bindEvents();
    this.render();
  },
  cacheDom: function() {
    this.$el = $('#peopleModule');
    this.$button = this.$el.find('button');
    this.$input = this.$el.find('input');
    this.$ul = this.$el.find('ul');
    this.template = this.$el.find('#people-template').html();
  },
  bindEvents: function() {
    this.$button.on('click', this.addPerson.bind(this));
    this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
  },
  render: function() {
    var data = {
      people: this.people,
    };
    this.$ul.html(Mustache.render(this.template, data));
  },
  addPerson: function() {
    this.people.push(this.$input.val());
    this.render();
    this.$input.val('');
  },
  deletePerson: function(event) {
    var $remove = $(event.target).closest('li'); // gets li element parent of i
    var i = this.$ul.find('li').index($remove); // gets de index inside ul
    this.people.splice(i, 1); // deletes form people list
    this.render(); // re-render
  }
};
people.init();
