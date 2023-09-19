import { ProjectInput } from "./components/project-input";
import { ProjectListActive } from "./components/project-list-active";
import { ProjectListFinished } from "./components/project-list-finished";

new ProjectListActive('active');
new ProjectInput();
new ProjectListFinished('finished');

