package com.addressbook.web;

import static com.britesnow.snow.util.MapUtil.mapIt;

import java.io.IOException;
import java.util.Map;
import java.net.URLDecoder;


import com.addressbook.entity.BaseEntity;
import com.addressbook.entity.Contact;
import com.addressbook.entity.Group;
import com.britesnow.snow.util.AnnotationMap;
import com.britesnow.snow.web.RequestContext;
import com.britesnow.snow.web.param.resolver.annotation.WebParamResolver;
import com.google.common.base.Throwables;
import com.google.inject.Singleton;
import com.addressbook.web.annotation.*;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.common.base.Splitter;

@Singleton
public class AppParamResolver {

    @WebParamResolver(annotatedWith = JsonParam.class)
    public Contact resolveContactParam(AnnotationMap annotationMap, Class paramType, RequestContext rc) {
        Map<String, String> map = this.convertJsonParam(annotationMap,rc);
        Contact result = new Contact();
        result.setFirstName(map.get("firstName").toString());
        result.setLastName(map.get("lastName").toString());
        setupIdParam(map,result);
        setupAddress(map,result);
        return result;
    }
    @WebParamResolver(annotatedWith = JsonParam.class)
    public Group resolveGroupParam(AnnotationMap annotationMap, Class paramType, RequestContext rc) {
        Map<String, String> map = this.convertJsonParam(annotationMap,rc);
        Group result = new Group();
        result.setName(map.get("name").toString());
        return result;
    }
    private  void setupAddress(Map<String, String> map,Contact contact){
        if(checkMap(map, "address.city"))
        {
            contact.getAddress().setCity(map.get("address.city").toString());
        }
        if(checkMap(map, "address.zip"))
        {
            contact.getAddress().setZip(map.get("address.zip").toString());
        }
        if(checkMap(map, "address.street"))
        {
            contact.getAddress().setStreet(map.get("address.street").toString());
        }
        if(checkMap(map, "address.state"))
        {
            contact.getAddress().setState(map.get("address.state").toString());
        }
        if(checkMap(map, "address.country"))
        {
            contact.getAddress().setCountry(map.get("address.country").toString());
        }
        if(checkMap(map, "address.contactId"))
        {
            String val = map.get("address.contactId");
            if(val != null && !val.equals("")) {
                contact.getAddress().setContactId(Long.parseLong(val));
            }
        }
        if(checkMap(map, "address.id")) {
            String val = map.get("address.id");
            if(val != null && !val.equals("")) {
                contact.getAddress().setId(Long.parseLong(val));
            }
        }

    }
    private boolean checkMap(Map<String,String> map, String key)
    {
        if(map.containsKey(key) && map.get(key)!= null)
        {
           return true;
        }
        else
        {
            return false;
        }
    }
    private void setupIdParam(Map<String, String> map,BaseEntity entity)
    {
        if(checkMap(map,"id"))
        {
            String val = map.get("id");
            if(val != null && !val.equals("")) {
                entity.setId(Long.parseLong(val));
            }
        }
        return;
    }
    private  Map<String, String>  convertJsonParam(AnnotationMap annotationMap,RequestContext rc)
    {
        JsonParam jsonParam = annotationMap.get(JsonParam.class);
        String paramName = jsonParam.value();
        String value = rc.getParam(paramName);
        try
        {
            value = URLDecoder.decode(value,"UTF-8");
        }
        catch (Exception ex)
        {
            value = rc.getParam(paramName);
        }
        Map<String, String> map = null;
        try
        {
            map = Splitter.on('&').trimResults().withKeyValueSeparator("=").split(value);
        }catch(Exception ex)
        {
          map = new java.util.HashMap<String,String>();
        }

        return map;
    }

}
