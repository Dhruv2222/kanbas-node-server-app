import Hello from "./Hello.js"
import AssignmentRoutes from "./Kanbas/assignments/routes.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import express from 'express'
const app = express();
app.use(cors());
app.use(express.json());
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Hello(app);
Lab5(app);
app.listen(4000)