Meteor.subscribe("categories");
Meteor.subscribe("transactions");

Template.changeCategory.helpers({
    changeCategoryItem: function(){
      var _categories = Categories.find({});
      return _categories;
    }
});

