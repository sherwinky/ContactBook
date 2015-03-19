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
public class ContactService {
    @Inject
    private DaoRegistry daoTool;
    @Inject
    private WebResponseBuilder responseBuilder;
    @WebGet("/contact/list")
    public WebResponse listContact(@WebParam("groupId")Long groupId)
    {
        return responseBuilder.success(daoTool.contactDao.list(null,groupId,""));
    }
    @WebGet("/contact/get")
    public WebResponse getContact(@WebParam("id")Long id)
    {
        return responseBuilder.success(daoTool.contactDao.get(id).get());
    }
    @WebPost("/contact/create")
    public WebResponse create( @JsonParam("props") Contact contact)
    {
        Long id = daoTool.contactDao.create(contact);
        return WebResponse.success(id);
    }
    @WebPost("/contact/update")
    public WebResponse update(@JsonParam("props") Contact contact)
    {
        daoTool.contactDao.update(contact);
        return WebResponse.success();
    }
    @WebPost("/contact/delete")
    public WebResponse delete(@WebParam("id") Long id)
    {
        daoTool.contactDao.delete(id);
        return WebResponse.success();
    }
}
