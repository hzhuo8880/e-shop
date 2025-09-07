// server/db/drizzle.ts
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { products } from './schemas/product';


const connectionString = process.env.POSTGRES_URL!;
const client = postgres(connectionString);
const db = drizzle(client, { schema: { product: products } });

export { db };

const getData = async () => {
  return await db.select().from(products);
};
