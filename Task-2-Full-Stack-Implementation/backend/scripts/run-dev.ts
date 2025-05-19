import { execSync } from "child_process";

execSync("npm run migrate", { stdio: "inherit" });
execSync("npm run seed", { stdio: "inherit" });
execSync("npm run generate-graphql-schema", { stdio: "inherit" });
execSync("npm run dev", { stdio: "inherit" });