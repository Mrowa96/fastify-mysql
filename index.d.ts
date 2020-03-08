/// <reference types="node" />
// Definitions by: Paweł Mrowiec <https://github.com/mrowa96>

import { Server, IncomingMessage, ServerResponse } from "http";
import fastify from "fastify";
import mysql2, { ConnectionOptions } from "mysql2";

export declare type FastifyMysqlOptions = ConnectionOptions & {
  /**
   * Conenction type. If it is set up to something different than "connection", plugin will use mysql poll as client.
   */
  type?: "connection";

  /**
   * Plugin instance name.
   */
  name?: string;

  /**
   * If equal to true, plugin will use mysql2/promise instead of mysql2.
   */
  usePromise?: boolean;

  /**
   * Value which will be used to connect to mysql.
   */
  connectionString?: connectionString;
};

declare const fastifyMysql: fastify.Plugin<
  Server,
  IncomingMessage,
  ServerResponse,
  FastifyMysqlOptions
>;

export default fastifyMysql;
