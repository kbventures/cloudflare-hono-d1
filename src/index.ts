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
    origin: "*", // Allow all origins for now. Use specific domains in production.
    allowMethods: ["POST", "GET", "OPTIONS", "DELETE", "PATCH"],
    allowHeaders: ["Content-Type"], // Ensure the required headers are allowed.
  })
);
app.route("/todo", todoRoutes);

export default app;
