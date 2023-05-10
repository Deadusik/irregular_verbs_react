-- exercise table 

ALTER TABLE exercise ADD name VARCHAR(100) NOT NULL;
ALTER TABLE exercise
ALTER COLUMN rating SET DEFAULT 0;

TRUNCATE TABLE exercise CASCADE;

INSERT INTO exercise (name) VALUES ('Глаголи по таблицям');

SELECT * FROM exercise;

CREATE TABLE exercise (
	id BIGSERIAL PRIMARY KEY, 
	rating REAL NOT NULL
);

-- parent comment table
INSERT INTO parent_comment (exercise_id) VALUES ('2');

SELECT * FROM parent_comment;

CREATE TABLE parent_comment (
	id BIGSERIAL PRIMARY KEY,
	exercise_id BIGINT UNIQUE REFERENCES exercise (id)
);

-- comment table

SELECT * FROM "comment";

INSERT INTO "comment" ("text", publish_date, user_id, parent_comment_id)
VALUES ('Hello I like this exercise, It is a good way to learn irregular verbs', '2023-05-10', 1, 2);

ALTER TABLE "comment" 
RENAME COLUMN test TO "text";

CREATE TABLE "comment" (
	id BIGSERIAL PRIMARY KEY,
	"text" VARCHAR(300) NOT NULL,
	publish_date DATE NOT NULL, 
	user_id BIGINT REFERENCES "user" (id),
	parent_comment_id BIGINT REFERENCES parent_comment (id)
);

-- verb table

CREATE TABLE verb (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	transcription VARCHAR(100) NOT NULL,
	form VARCHAR(30) NOT NULL,
	sound_path VARCHAR(100),
	table_verb_item_id BIGINT REFERENCES table_verb_item (id)
);

-- table verb item table

CREATE TABLE table_verb_item (
	id BIGSERIAL PRIMARY KEY,
	translate VARCHAR(100) NOT NULL,
	color_rarity VARCHAR(100) NOT NULL
);

-- user table 
SELECT * FROM "user";

CREATE TABLE "user" (
	id BIGSERIAL PRIMARY KEY,
	login VARCHAR(30) UNIQUE NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	role VARCHAR(30) NOT NULL,
	password VARCHAR(100) NOT NULL
);