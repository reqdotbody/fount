CREATE TABLE "Categories" (
  "id" integer NOT NULL,
  "name" varchar(30) NOT NULL,
  "img" VARCHAR(255) NOT NULL,
  CONSTRAINT Categories_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "Subcategories" (
  "id" integer NOT NULL,
  "name" varchar(30) NOT NULL,
  "catID" integer NOT NULL,
  CONSTRAINT Subcategories_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "Links" (
  "id" integer NOT NULL,
  "subcatID" integer NOT NULL,
  "title" varchar(140) NOT NULL,
  "url" VARCHAR(255) NOT NULL,
  "votes" integer NOT NULL,
  "userID" integer NOT NULL,
  CONSTRAINT Links_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "Users" (
  "id" integer NOT NULL,
  "name" varchar(30) NOT NULL,
  "password" varchar(30) NOT NULL,
  CONSTRAINT Users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "Votes" (
  "linkID" integer NOT NULL,
  "userID" integer NOT NULL,
  "vote" integer NOT NULL,
) WITH (
  OIDS=FALSE
);


ALTER TABLE "Subcategories" ADD CONSTRAINT Subcategories_fk0 FOREIGN KEY (catID) REFERENCES Categories(id);

ALTER TABLE "Links" ADD CONSTRAINT Links_fk0 FOREIGN KEY (subcatID) REFERENCES Subcategories(id);
ALTER TABLE "Links" ADD CONSTRAINT Links_fk1 FOREIGN KEY (userID) REFERENCES Users(id);

ALTER TABLE "Votes" ADD CONSTRAINT Votes_fk0 FOREIGN KEY (linkID) REFERENCES Links(id);
ALTER TABLE "Votes" ADD CONSTRAINT Votes_fk1 FOREIGN KEY (userID) REFERENCES Users(id);

