import { drizzle } from "drizzle-orm/d1";

export function initializeDrizzle(D1: any) {
  return drizzle(D1)
}