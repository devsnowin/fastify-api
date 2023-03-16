import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import userRoutes from './modules/user/user.route';

const app = fastify({ logger: true });
const PORT = process.env.PORT || 3001;

app.get('/', (req: FastifyRequest, reply: FastifyReply) => {
  reply.send({ data: 'hi' });
});

(async () => {
  app.register(userRoutes, { prefix: 'api/users' });

  try {
    app.listen({ port: PORT as number, host: '0.0.0.0' });
    console.log(`Listening on http://localhost:${PORT}`);
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
})();
