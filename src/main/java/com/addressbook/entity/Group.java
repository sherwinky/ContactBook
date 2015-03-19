package com.addressbook.entity;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Stev.L on 03/14/15.
 */
public class Group extends BaseEntity {
    private String name;
    private List<GroupContact> groupContactList;
    public Group()
    {
        super();
        groupContactList = new ArrayList<GroupContact>();
    }
    public String getName()
    {
        return name;
    }
    public void setName(String val){
        name = val;
    }
    public List<GroupContact> getGroupContact()
    {
        return groupContactList;
    }
    public void setGroupContact(List<GroupContact> val)
    {
        groupContactList = val;
    }
}
