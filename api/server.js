import serverless from "serverless-http";
import app from "../server/src/server.js";   // CHANGE path if needed

export const handler = serverless(app);
