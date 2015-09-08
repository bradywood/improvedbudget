/**
 * Created by bradywood on 29/08/15.
 */

Session.setDefault('appName', 'Improved Budget');

Router.configure({
//    loadingTemplate: 'loading',
//    notFoundTemplate: 'notFound',
    layoutTemplate: 'layout'
});

Router.route('/', function () {
    this.render('homepage');
});

Router.route('/transactions', function () {
    this.render('transactions');
});

Router.route('/categories', function () {
    this.render('categories');
});

Template.menu.appName = function() {
    return Session.get('appName');
};

Template.categories.categoryList = function() {
    return Categories.find();
};

Template.categories.events({
    'click .addCategory':function(events,template){
        Modal.show('categoryForm');
    }
})

Template.categoryForm.events({
    'click .save': function(events, template){
        var id = template.find('.id').value;
        var name = template.find('.name').value;
        var regex = template.find('.regex').value;
        var parentid = template.find('.parentId').value;
        var orderid = template.find('.orderId').value;
        addCategory(id,name,regex,parentid,orderid);
        Modal.hide('categoryForm');
    },
    'click .cancel': function(events, template){
        alert('cancel');
    }
})

var addCategory = function(id,name,regex,parentid,orderid){
    Categories.insert({id:id,name:name,regex:regex,parentid:parentid,orderid:orderid});
}