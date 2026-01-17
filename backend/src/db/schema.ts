import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    sub: serial().unique(),
    name: text('name'),
    email: text('email'),
    picture: text('picture'),
});
