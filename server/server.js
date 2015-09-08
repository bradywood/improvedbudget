Meteor.startup(function () {
    Meteor.publish('transactions', function() {
        console.log("transactions have been published");
        return Transactions.find({});
    });

    Meteor.publish('categories', function() {
        console.log("categories have been published");
        return Categories.find({});
    });

    return Meteor.methods({

        removeAllTransactions: function () {

            return Transactions.remove({});

        }
    });
});
