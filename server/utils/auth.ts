import { Lucia } from "lucia"
import { D1Adapter } from "@lucia-auth/adapter-sqlite"
import { GitHub } from "arctic"
import type { D1Database as WorkerD1Database } from "@cloudflare/workers-types";
import type { D1Database as MiniflareD1Database } from "@miniflare/d1";
type D1Database = WorkerD1Database | MiniflareD1Database;

export function initializeLucia(D1: D1Database) {
  const adapter = new D1Adapter(D1, {
    user: "user",
    session: "session",
  })
  return new Lucia(adapter, {
    sessionCookie: {
      attributes: {
        secure: !import.meta.dev,
      },
    },
    getUserAttributes: (attributes) => {
      return {
        username: attributes.username,
        name: attributes.name,
      }
    },
  })
}

export const github = new GitHub(
  process.env.GITHUB_CLIENT_ID!,
  process.env.GITHUB_CLIENT_SECRET!
)

declare module "lucia" {
  interface Register {
    Lucia: ReturnType<typeof initializeLucia>
    DatabaseUserAttributes: DatabaseUserAttributes
  }
}

interface DatabaseUserAttributes {
  name: string
  username: string
}