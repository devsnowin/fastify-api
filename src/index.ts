import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import userRoutes from './modules/user/user.route';

const app = fastify({ logger: true });
const PORT = Number(process.env.PORT) || 3001;

app.get('/', (req: FastifyRequest, reply: FastifyReply) => {
  reply.send({ data: 'hello world ✨' });
});

(async () => {
  app.register(userRoutes, { prefix: 'api/users' });

  try {
    app.listen({ port: PORT, host: '0.0.0.0' });
    app.log.info(`Listening on http://localhost:${PORT}`);
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
})();
