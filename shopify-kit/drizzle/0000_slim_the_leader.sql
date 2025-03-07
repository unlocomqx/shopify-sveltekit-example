CREATE TABLE "session" (
	"id" text PRIMARY KEY NOT NULL,
	"shop" text NOT NULL,
	"state" text NOT NULL,
	"isOnline" boolean DEFAULT false NOT NULL,
	"scope" text,
	"expires" timestamp,
	"accessToken" text,
	"userId" bigint
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"age" integer
);
