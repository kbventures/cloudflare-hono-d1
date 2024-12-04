import { Hono } from "hono";
import todoRoutes from "./routes/todo";
import { cors } from "hono/cors";

type Bindings = {
  DB: D1Database;
  database_id: string;
  database_name: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => c.text("Hello Hono!"));

app.use(
  "/*",
  cors({
    origin: ["https://cloudflare-react-vite.pages.dev/"],
    allowMethods: ["POST", "GET", "OPTIONS", "DELETE", "PATCH"],
  })
);
app.route("/todo", todoRoutes);

export default app;
