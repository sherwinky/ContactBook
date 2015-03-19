package com.addressbook.entity;

/**
 * Created by Stev.L on 03/16/15.
 */
public class GroupContact extends BaseEntity {
    private Long groupId;
    private Long contactId;

    public Long getGroupId() {
        return groupId;
    }

    public void setGroupId(Long groupId) {
        this.groupId = groupId;
    }

    public Long getContactId() {
        return contactId;
    }

    public void setContactId(Long contactId) {
        this.contactId = contactId;
    }
}
