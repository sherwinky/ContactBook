drop table IF EXISTS "group","contact","address","groupContact";
CREATE TABLE "group"
(
	id bigserial NOT NULL,
	"dateAdded" timestamp,
	"dateChanged" timestamp,
	"name" character varying(1024) NOT NULL,
	CONSTRAINT group_pkey PRIMARY KEY (id)
);
CREATE TABLE contact
(
	id bigserial NOT NULL,
	"dateAdded" timestamp,
	"dateChanged" timestamp,
	"firstName" character varying(128) NOT NULL,
	"lastName" character varying(128) NOT NULL,
	CONSTRAINT contact_pkey PRIMARY KEY (id)
);
CREATE TABLE address
(
	id bigserial NOT NULL,
	"dateAdded" timestamp,
	"dateChanged" timestamp,
	"street" character varying(256) NOT NULL,
	"city" character varying(128),
	"state" character varying(128),
	"zip" character varying(32),
	"country" character varying(128),
	"contactId" bigint NOT NULL,
	CONSTRAINT address_pkey PRIMARY KEY (id)
);
CREATE TABLE "groupContact"(
	id bigserial NOT NULL,
	"dateAdded" timestamp,
	"dateChanged" timestamp,
	"groupId" bigint NOT NULL,
	"contactId" bigint NOT NULL,
	CONSTRAINT "groupContact_pkey" PRIMARY KEY (id)
);
alter table "groupContact" add CONSTRAINT "groupContact_group_fk" FOREIGN KEY ("groupId") REFERENCES "group"(id)
	ON DELETE NO ACTION
	ON UPDATE NO ACTION;
alter table "groupContact" add CONSTRAINT "groupContact_contact_fk" FOREIGN KEY ("contactId") REFERENCES "contact"(id)
	ON DELETE NO ACTION
	ON UPDATE NO ACTION;
alter table "address" add CONSTRAINT "address_contact_fk" FOREIGN KEY ("contactId") REFERENCES "contact"(id)
	ON DELETE NO ACTION
	ON UPDATE NO ACTION;