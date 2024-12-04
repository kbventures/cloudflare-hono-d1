import { Hono } from "hono";
import createTodo from "../controllers/todo/createTodo"
import getTodos from "../controllers/todo/getTodos";
const todoRoutes = new Hono();

todoRoutes.post("/",createTodo)
todoRoutes.get("/",getTodos)

export default todoRoutes;