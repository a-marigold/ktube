import { pgTable, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    sub: text('sub').unique().notNull(),
    name: text('name'),
    email: text('email'),
    picture: text('picture'),
});
