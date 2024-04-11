import { defineConfig } from 'drizzle-kit'

defineConfig({
    schema: './server/db/schema.ts',
    out: './server/db/migrations',
    driver: 'd1',
    dbCredentials: {
        wranglerConfigPath: './wrangler.toml',
        dbName: 'linkit',
    }
})