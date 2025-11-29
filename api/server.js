import serverless from "serverless-http";
import app from "../server/src/server.js";

const handler = serverless(app);

// Vercel needs default export
export default handler;
