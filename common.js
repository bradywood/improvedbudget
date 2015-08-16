TabularTables = {};

Transactions = new Mongo.Collection('transactions');
Categories = new Mongo.Collection('category');

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Transactions = new Tabular.Table({
  name: "Transactions",
  collection: Transactions,
  columns: [
    {data: "Status", title: "Status"},
    {data: "Date", title: "Date"},
    {data: "Account", title: "Account Name"},
    {data: "Description", title: "Description"},
    {data: "Debit", title: "Debit"},
    {data: "Credit", title: "Credit"},
    {data: "Classification", title: "Classification"
    {
      tmpl: Meteor.isClient && Template.changeCategory,
      title: "Category",
      data: "Category"
    }
  ]
});
