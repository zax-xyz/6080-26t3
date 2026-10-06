import fs from "node:fs/promises";

const messagesFn = "messages.json";

/** @type { username: string, colour: string, message: string } Message */

/** @type {Message[]} */
const messages = JSON.parse(await fs.readFile(messagesFn, { encoding: "utf8" }));

/**
 * @param {Message} message
 */
const addMessage = async message => {
  messages.push(message);
  await fs.writeFile(messagesFn, JSON.stringify(messages));
};

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
const routes = async (fastify, options) => {
  fastify.post("/message", async (request, reply) => {
    addMessage(request.body);
    return { status: "ok" };
  });

  fastify.get("/messages", async (request, reply) => {
    return messages;
  });
};

export default routes;
