TabularTables = {};

Transactions = new Mongo.Collection('transactions');

Router.route('/logon');
Router.route('/transaction');
Router.route('/cashflow');

Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', {
  template: 'transaction' 
});


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
