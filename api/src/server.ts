import { app } from "./app";

const PORT = 3333;

try {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
} catch (e) {
  console.error(`An error occurred, server could not be started: ${e}`);
}
