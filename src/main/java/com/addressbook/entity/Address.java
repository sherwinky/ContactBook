package com.addressbook.entity;

/**
 * Created by Stev.L on 03/14/15.
 */
public class Address extends BaseEntity {
    private String street;
    private String city;
    private String state;
    private String zip;
    private String country;
    private Long contactId;

    public String getZip() {

        return zip;
    }
    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getCountry() {
        return country;
    }
    public void setCountry(String country) {
        this.country = country;
    }

    public Long getContactId() {
        return contactId;
    }
    public void setContactId(Long contactId) {
        this.contactId = contactId;
    }

    public String getStreet(){
        return street;
    }
    public  void setStreet(String val){
        street = val;
    }

    public  String getCity(){
        return city;
    }
    public void setCity(String val){
        city = val;
    }

    public String getState(){
        return state;
    }
    public void setState(String val){
        state = val;
    }
}
