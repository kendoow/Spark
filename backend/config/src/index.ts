import { resolve } from 'path';

import * as dotenv from 'dotenv';
import { cleanEnv, str } from 'envalid';

try {
  dotenv.config({ path: resolve(process.cwd(), '../../.env') });

} catch(err) {
	console.log('Ошибка при чтении env директории')
}

export const config = cleanEnv(process.env, {
  DATABASE_URL: str({
    default: 'postgresql://tsuwari:tsuwari@postgres:5432/tsuwari?schema=public',
  }),
  NODE_ENV: str({ choices: ['development', 'production'], default: 'development' }),
//   REDIS_URL: str({ default: 'redis://localhost:6379/0' }),
});