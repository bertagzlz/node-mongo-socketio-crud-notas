import { config } from "dotenv";
config(); // lee las var de entorno

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/socketsdb";
