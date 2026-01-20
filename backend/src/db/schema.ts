import { pgTable, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    sub: text('sub').unique().notNull(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    picture: text('picture'),
});
