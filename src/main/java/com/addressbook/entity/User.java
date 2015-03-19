package com.addressbook.entity;

/**
 * Created by Stev.L on 03/14/15.
 */
public class User extends BaseEntity {
    private String name;
    private String password;
    private String firstName;
    private String lastName;
    public User(){

    }

    public  String getName(){
        return name;
    }
    public void setName(String val){
        name = val;
    }

    public  String getPassword(){
        return password;
    }
    public void setPassword(String val){
        password = val;
    }

    public  String getFirstName(){
        return firstName;
    }
    public void setFirstName(String val){
        firstName = val;
    }
    public String getLastName(){
        return lastName;
    }
    public void setLastName(String val){
        lastName = val;
    }

}
