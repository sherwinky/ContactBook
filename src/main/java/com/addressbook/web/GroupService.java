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
public class GroupService {
    @Inject
    private DaoRegistry daoTool;
    @Inject
    private WebResponseBuilder responseBuilder;
    @WebGet("/group/list")
    public WebResponse listContact(@WebParam("groupId")Long groupId)
    {
        return responseBuilder.success(daoTool.groupDao.list(null,""));
    }
    @WebGet("/group/get")
    public WebResponse getContact(@WebParam("id")Long id){
        return responseBuilder.success(daoTool.groupDao.get(id).get());
    }
    @WebPost("/group/create")
    public WebResponse create( @JsonParam("props") Group group)
    {
        Long id = daoTool.groupDao.create(group);
        return WebResponse.success(id);
    }
    @WebPost("/group/update")
    public WebResponse update(@JsonParam("props") Group group)
    {
        daoTool.groupDao.update(group);
        return WebResponse.success();
    }

    @WebGet("/group/list-by-contact")
    public WebResponse listGroupByContact(@WebParam("contactId") Long contactId){
        return WebResponse.success(daoTool.groupDao.listByContact(contactId));
    }
}
