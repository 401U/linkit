import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"

export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name"),
  username: text("username").unique().notNull(),
  email: text("email"),
  isAdmin: integer("is_admin"),
  hashedPassword: text("hashed_password"),
})

export const session = sqliteTable("session", {
  id: text("id").primaryKey(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
})

export const oauth_account = sqliteTable("oauth_account", {
  providerId: text("provider_id").notNull(),
  providerUserId: text("provider_user_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
})

export const url_shortcut = sqliteTable("url_shortcut", {
  shortcutId: text("shortcut_id").primaryKey(),
  userId: text("user_id")
    .references(() => user.id, { onDelete: "cascade" }),
  from: text("from").unique().notNull(),
  to: text("to").notNull(),
})