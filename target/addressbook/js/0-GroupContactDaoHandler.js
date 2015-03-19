var app = app || {};
(function($) {

    function GroupContactDaoHandler(entityName){
        GroupContactDaoHandler._super.constructor.call(this,entityName,
            {
                list:"group-contact/list",
                create:"group-contact/create",
                update:"group-contact/update",
                "delete":"group-contact/delete",
                "get":"group-contact/get"
            });
    }
    brite.inherit(GroupContactDaoHandler,RemoteDaoHandler);
    GroupContactDaoHandler.prototype.create = function(groupId,contactId){
        var params = {
                contactId : contactId,
                groupId:groupId
            };
        var url = this._opts.contextPath + "group-contact/create";
        return app.doPost (url, params);
    };

    app.GroupContactDaoHandler =  GroupContactDaoHandler;
})(jQuery); 