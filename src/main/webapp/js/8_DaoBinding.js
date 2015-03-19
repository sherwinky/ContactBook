var app = app || {};
(function(){

    // --------- Remote Das --------- //
    app.contactDao = brite.registerDao(new app.ContactDaoHandler("Contact"));
    app.groupDao = brite.registerDao(new app.GroupDaoHandler("Group"));
    app.groupContactDao = brite.registerDao(new app.GroupContactDaoHandler("GroupContact"));
})();