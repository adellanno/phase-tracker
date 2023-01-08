import express, { Express } from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import schema from "./src/schema/schema";
import cors from "cors";

dotenv.config();

export const app: Express = express();

const port = process.env.PORT;

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
