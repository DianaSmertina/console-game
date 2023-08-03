import App from "./application/app";

const args = process.argv.slice(2);

const app = new App(args);
app.run();