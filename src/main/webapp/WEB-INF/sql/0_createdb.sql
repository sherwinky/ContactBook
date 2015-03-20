SELECT pg_terminate_backend(pg_stat_activity.pid)
	FROM pg_stat_activity
	WHERE pg_stat_activity.datname = 'address_db'
		AND pid <> pg_backend_pid();
DROP DATABASE IF EXISTS address_db;
DROP USER IF EXISTS addr_user;
CREATE USER addr_user PASSWORD '123';
CREATE DATABASE address_db owner addr_user ENCODING = 'UTF-8';
grant addr_user to postgres;