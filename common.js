TabularTables = {};

Transactions = new Mongo.Collection('transactions');

Categories = new Mongo.Collection('categories');

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Transactions = new Tabular.Table({
  name: "Transactions",
  collection: Transactions,
  columns: [
    {data: "Status", title: "Status"},
    {data: "Date", title: "Date"},
    {data: "Account Name", title: "Account Name"},
    {data: "Original Description", title: "Description"},
    {data: "Category", title: "Category"},
    {data: "Currency", title: "Currency"},
    {data: "Amount", title: "Amount"},
    {data: "User Description", title: "User Description"},
    {data: "Memo", title: "Memo"},
    {data: "Classification", title: "Classification"}
  ]
});
