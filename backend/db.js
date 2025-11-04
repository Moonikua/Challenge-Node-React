import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'M00n1ku4',
  database: 'challenge_posts',
  port: 5432
});

