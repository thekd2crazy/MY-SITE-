import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const tasksTable = pgTable('tasks', {
    id: uuid().defaultRandom().primaryKey(),
    title: text().notNull(),
    done: boolean().default(false).notNull(),
})

export const blogsTable = pgTable('blogs', {
    id: uuid().defaultRandom().primaryKey(),
    title: text().notNull(),
    post: boolean().default(false).notNull(),

})

export const usersTable = pgTable('users', {
    id: uuid().defaultRandom().primaryKey(),
    login: text().notNull().unique(),
    password: text().notNull(),
})