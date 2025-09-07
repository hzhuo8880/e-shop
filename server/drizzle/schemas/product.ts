// server/db/schema.ts
import { pgTable, varchar, text, decimal, timestamp, boolean } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
  id: varchar('id', { length: 255 }).primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  handle: varchar('handle', { length: 255 }).notNull().unique(),
  description: text('description'),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  currencyCode: varchar('currency_code', { length: 3 }).notNull().default('USD'),
  availableForSale: boolean('available_for_sale').notNull().default(true),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});