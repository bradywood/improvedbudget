Meteor.startup(function () {
    if (Categories.find().count() != 0) {
      Categories.remove();
    };
    if (Categories.find().count() === 0) {
      JSON.parse(Assets.getText("category.json")).category.forEach(function( doc) {
        Categories.insert(doc);
      });
    };
    Meteor.publish('transactions', function() {
        console.log("transactions have been published");
        return Transactions.find({});
    });
    Meteor.publish('categories', function() {
        console.log("categories have been published");
        return Categories.find({});
    });
});
