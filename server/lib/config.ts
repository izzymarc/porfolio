import { z } from 'zod';
import { config as dotenvConfig } from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenvConfig({ path: path.resolve(process.cwd(), '.env') });

const configSchema = z.object({
  nodeEnv: z.enum(['development', 'production', 'test']).default('development'),
  port: z.coerce.number().default(5000),
  databaseUrl: z.string().url(),
  corsOrigin: z.string().url(),
  rateLimitWindowMs: z.coerce.number().default(900000),
  rateLimitMaxRequests: z.coerce.number().default(100),
  email: z.object({
    service: z.string(),
    user: z.string().email(),
    password: z.string(),
    from: z.string().email(),
    to: z.string().email(),
  }),
});

const config = configSchema.parse({
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL,
  corsOrigin: process.env.CORS_ORIGIN,
  rateLimitWindowMs: process.env.RATE_LIMIT_WINDOW_MS,
  rateLimitMaxRequests: process.env.RATE_LIMIT_MAX_REQUESTS,
  email: {
    service: process.env.EMAIL_SERVICE,
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD,
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
  },
});

export default config; 