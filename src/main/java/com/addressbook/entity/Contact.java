package com.addressbook.entity;

/**
 * Created by Stev.L on 03/14/15.
 */
public class Contact extends BaseEntity {
    private String firstName;
    private String lastName;
    private Address address;

    public Contact(){
        super();
        address = new Address();
    }
    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
