import { Post } from "./entity/Post";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

createConnection()
  .then(async (connection) => {
    const { manager } = connection;
    const u1 = new User();
    u1.username = "xiewen";
    u1.passwordDigest = "xxx";
    await manager.save(u1);
    console.log(u1.id);
    const p1 = new Post();
    p1.title = "第一篇文章";
    p1.content = "这里是是小谢的第一篇文章";
    p1.authorId = "2";
    await manager.save(p1);
    connection.close();
  })
  .catch((error) => console.log(error));
