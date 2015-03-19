package com.addressbook.web;

import com.britesnow.snow.web.RequestContext;
import com.britesnow.snow.web.auth.*;
import com.addressbook.entity.*;
import com.addressbook.dao.*;
import com.britesnow.snow.web.param.annotation.WebParam;
import com.britesnow.snow.web.rest.annotation.WebGet;
import com.britesnow.snow.web.rest.annotation.WebPost;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import java.util.*;
import com.britesnow.snow.web.param.annotation.WebModel;
import com.addressbook.web.annotation.*;

/**
 * Created by Stev.L on 03/16/15.
 */
@Singleton
public class GroupContactService {
    @Inject
    private DaoRegistry daoTool;
    @Inject
    private WebResponseBuilder responseBuilder;
    @WebGet("/group-contact/listByContact")
    public WebResponse listByContact(@WebParam("contactId")Long contactId){
        return WebResponse.success(daoTool.groupContactDao.listByContactId(contactId));
    }
    @WebPost("/group-contact/create")
    public WebResponse create(@WebParam("contactId")Long contactId,@WebParam("groupId") Long groupId)
    {
        GroupContact gContact = new GroupContact();
        gContact.setGroupId(groupId);
        gContact.setContactId(contactId);
        return WebResponse.success(daoTool.groupContactDao.create(gContact));
    }
    @WebPost("/group-contact/delete")
    public  WebResponse delete(@WebParam("id")Long id)
    {
        return WebResponse.success(daoTool.groupContactDao.delete(id));
    }
}
