// TODO: refactor to prisma

// import PG from 'pg'

// const { Client } = PG
// let _client: InstanceType<typeof Client> | null = null

// export async function useDBClient() {
//   if (!_client) {
//     _client = new Client({
//       host: process.env.POSTGRES_SQL_HOST,
//       port: Number(process.env.POSTGRES_SQL_PORT),
//       database: process.env.POSTGRES_SQL_DATABASE,
//       user: process.env.POSTGRES_SQL_USER,
//       password: process.env.POSTGRES_SQL_PASSWORD,
//     })
//     await _client.connect()
//   }
//   return _client
// }
