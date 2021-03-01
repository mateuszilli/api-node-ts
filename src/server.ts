import { app } from "./app";

const port = 3333;
app.listen(port, () => {
    console.info('The server is running on port: ' + port)
});