var app = app || {};
(function($) {

    function ContactDaoHandler(entityName){
        ContactDaoHandler._super.constructor.call(this,entityName,
            {
                list:"contact/list",
                create:"contact/create",
                update:"contact/update",
                "get":"contact/get",
                "delete":"contact/delete"
            });
    }
    brite.inherit(ContactDaoHandler,RemoteDaoHandler);
    ContactDaoHandler.prototype.getContactListByGroup = function(opts){
        var params = opts;// JSON.stringify(opts);
        var url = this._opts.contextPath + this._opts["list"];
        return app.doGet(url, params);
    };


    app.ContactDaoHandler =  ContactDaoHandler;
})(jQuery); 