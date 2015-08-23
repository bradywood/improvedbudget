Meteor.subscribe("categories");
Meteor.subscribe("transactions");

Template.changeCategory.helpers({
    changeCategoryItem: function(){
      var _categories = Categories.find({});
      return _categories;
    }
});

Template.changeCategory.transactionRowItem = function() {
  console.log(this);
}

Template.changeCategory.hasChangeCategory = function() {
  console.log(this.Category);
  return true;
}

checkIfNotCategorized = function(transactionItemRecord) {
  if (transactionItemRecord.Category == 'uncategorized' || transactionItemRecord.Category === undefined)
  {
    return true;
  }
  return false;
}

getBudget = function() {
  var transactions = Transactions.find({}).fetch();

}

Template.changeCategory.uncategorizedIsSelected = function() {
  console.log(this.Category);
  return checkIfNotCategorized(this);
}

Template.changeCategory.changeCategorySelected = function() {
  console.log(this);
  console.log(this.Category);
  if(checkIfNotCategorized(this))
  {
    return false;
  }
  else {
    //check to see if this item is selected.
    //if (this.Category === '')
    ;
  }

}

Template.changeCategory.events({
  'click .check-out': function () {
    console.log(this._id);
    //addBookToCheckoutCart(this._id);
  }
});
