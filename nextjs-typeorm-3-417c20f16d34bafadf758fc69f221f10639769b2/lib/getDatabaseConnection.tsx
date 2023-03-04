//项目启动调用api跟后端数据链接
import { createConnection, getConnectionManager } from "typeorm";

const promise = (async function () {
  console.log("创建connection");
  const manager = getConnectionManager();
  const hasDefaultConnection = manager.has("default");
  if (!hasDefaultConnection) {
    return createConnection();
  } else {
    const current = manager.get("default");
    if (current.isConnected) {
      //connection被关闭了
      return current;
    } else {
      return createConnection();
    }
  }
})();

export const getDatabaseConnection = async () => {
  return promise;
};
