import http from "node:http";
import { Database } from "./database";

const database = new Database

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method == "GET" && url == "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method == "POST" && url == "/users") {
    users.push({
      id: 1,
      name: "Jhon Doe",
      email: "jhondoe@email.com",
    });
    return res.writeHead().end();
  }

  console.log(method, url);

  return res.writeHead(404).end();
});

server.listen(3333);