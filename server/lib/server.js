Meteor.startup(function () {
    Meteor.publish('transactions', function() {
        console.log("transactions have been published");
        return Transactions.find({});
    });
});
