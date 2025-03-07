import { bigint, boolean, integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const sessionTable = pgTable('session', {
	id: text('id').primaryKey(),
	shop: text('shop').notNull(),
	state: text('state').notNull(),
	isOnline: boolean('isOnline').default(false).notNull(),
	scope: text('scope'),
	expires: timestamp('expires', { mode: 'date' }),
	accessToken: text('accessToken'),
	userId: bigint('userId', { mode: 'number' })
});

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	age: integer('age')
});
