var app = app || {};
(function($) {

    function GroupDaoHandler(entityName){
        GroupDaoHandler._super.constructor.call(this,entityName,
            {
                list:"group/list",
                create:"group/create",
                update:"group/update",
                "delete":"group/delete",
                "get":"group/get"
            });
    }   
    brite.inherit(GroupDaoHandler,RemoteDaoHandler);
    GroupDaoHandler.prototype.listByContact=function(contactId){
        var params = {contactId : contactId};
        var url = this._opts.contextPath + "group/list-by-contact";
        return app.doGet(url, params);
    };

    app.GroupDaoHandler =  GroupDaoHandler;
})(jQuery); 