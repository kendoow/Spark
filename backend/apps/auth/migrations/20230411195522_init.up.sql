-- SQLBook: Code
CREATE TABLE "users" (
  "user_id" bigserial PRIMARY KEY,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL
);	
	
create TABLE "tokens"(
    id SERIAL PRIMARY KEY,
    "refresh_token" VARCHAR(255),
    "token_id" INTEGER,
    FOREIGN KEY("token_id") REFERENCES "users" ("user_id")
);

ALTER TABLE "tokens" ADD FOREIGN KEY ("token_id") REFERENCES "users" ("user_id");
