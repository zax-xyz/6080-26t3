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

const messageSchema = {
  type: "object",
  properties: {
    username: { type: "string" },
    colour: { type: "string" },
    message: { type: "string" },
  },
};

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
const routes = async (fastify, options) => {
  fastify.get(
    "/messages",
    {
      schema: {
        description: "gets a list of every message in the database",
        response: {
          200: {
            description: "list of messages",
            type: "array",
            items: messageSchema,
          },
        },
      },
    },
    async (request, reply) => {
      return messages;
    },
  );

  fastify.post(
    "/message",
    {
      schema: {
        description: "create a new message",
        body: messageSchema,
        response: {
          200: {
            description: "success",
            type: "object",
            properties: {
              status: { type: "string" },
            },
          },
        },
      },
    },
    async (request, reply) => {
      addMessage(request.body);
      return { status: "ok" };
    },
  );
};

export default routes;
