package com.addressbook.dao;

import com.britesnow.snow.web.db.hibernate.HibernateDaoHelper;
import com.google.common.base.Function;
import com.mchange.v2.c3p0.ComboPooledDataSource;
import org.j8ql.DB;
import org.j8ql.DBBuilder;
import org.j8ql.Runner;
import org.j8ql.query.*;
import com.addressbook.entity.BaseEntity;

import javax.inject.Inject;
import javax.inject.Named;
import javax.inject.Singleton;
import java.sql.SQLException;
import java.util.*;
import java.util.stream.Stream;
import static org.j8ql.query.Query.*;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * Created by Stev.L on 03/14/15.
 */
@Singleton
public class DaoHelper {
    DB db;
    private ComboPooledDataSource cpds;
    private static volatile DaoHelper _instance;

    @Inject
    private DaoHelper(@Named("db.url") String url, @Named("db.user") String user, @Named("db.pwd") String pwd) {

        Properties p = new Properties(System.getProperties());
        p.put("com.mchange.v2.log.MLog", "com.mchange.v2.log.FallbackMLog");
        p.put("com.mchange.v2.log.FallbackMLog.DEFAULT_CUTOFF_LEVEL", "OFF");
        System.setProperties(p);

        cpds = new ComboPooledDataSource();
        cpds.setJdbcUrl(url);
        cpds.setUser(user);
        cpds.setPassword(pwd);
        cpds.setUnreturnedConnectionTimeout(1000);
        db = new DBBuilder().build(cpds);
    }

    public static DaoHelper getInstance()
    {
        if(_instance == null)
        {
            Properties prop = loadConfig();
            synchronized (DaoHelper.class){
                if(_instance == null)
                {
                    String url ;
                    String user;
                    String pwd;
                    if(prop != null )
                    {
                        url = prop.getProperty("db.url");
                        user = prop.getProperty("db.user");
                        pwd = prop.getProperty("db.pwd");
                    }
                    else
                    {
                        throw new MissingFormatArgumentException("The snow.properties file not existed");
                    }
                    _instance = new DaoHelper(url,user,pwd);
                }
            }
        }
        return _instance;
    }
    public Map getPoolInfo(){
        Map poolInfo = new HashMap();
        try {
            poolInfo.put("numConnections",cpds.getNumConnectionsDefaultUser());
            poolInfo.put("numBusyConnections",cpds.getNumBusyConnectionsDefaultUser());
            poolInfo.put("numIdleConnections",cpds.getNumIdleConnections());
        } catch (SQLException e) {
            // TODO: need to use logger.warn
        }
        return poolInfo;
    }

    // --------- DML Query --------- //
    public <T> T execute(InsertQuery<T> query){
        try (Runner runner = db.openRunner()) {
            return runner.exec(query);
        }
    }


    public <T> T execute(UpdateQuery<T> query){
        try (Runner runner = db.openRunner()) {
            return runner.exec(query);
        }
    }


    public <T> T execute(DeleteQuery<T> query){
        try (Runner runner = db.openRunner()) {
            return runner.exec(query);
        }
    }
    // --------- /DML Query --------- //


    // --------- SelectQuery --------- //
    public <T> Optional<T> first(SelectQuery<T> query){
        try (Runner runner = db.openRunner()) {
            return runner.first(query);
        }
    }

    public long count(SelectQuery query){
        try (Runner runner = db.openRunner()) {
            return runner.count(query);
        }
    }

    public <T> Stream<T> stream(SelectQuery<T> query){
        try (Runner runner = db.openRunner()) {
            return runner.stream(query);
        }
    }
    public <T> List<T> list(SelectQuery<T> query){
        try (Runner runner = db.openRunner()) {
            return runner.list(query);
        }
    }
    // --------- /SelectQuery --------- //


    public int executeUpdate(String sql,Object... values) {
        try (Runner runner = db.openRunner()){
            return runner.executeUpdate(sql,values);
        }
    }

    private  static Properties loadConfig()
    {
        Properties prop = new Properties();
        InputStream input = null;
        String rootFolder = DaoHelper.class.getProtectionDomain().getCodeSource().getLocation().getPath();
        rootFolder =  rootFolder.substring(0,rootFolder.length()-"classes/".length());//remove last class;
        String fileName = null;
        if(rootFolder.contains("WEB-INF"))
        {
            fileName = "snow.properties";
        }
        else
        {
            fileName = "addressbook/WEB-INF/snow.properties";
        }
        try {

            input = new FileInputStream(rootFolder+fileName);

            // load a properties file
            prop.load(input);
            return prop;

        } catch (IOException ex) {
            ex.printStackTrace();
            throw new MissingFormatArgumentException("snow.properties is not existed Path="+rootFolder);
        } finally {
            if (input != null) {
                try {
                    input.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

}
