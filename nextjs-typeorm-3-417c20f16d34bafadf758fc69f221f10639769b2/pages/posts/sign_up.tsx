import { NextPage } from "next";
import { ChangeEventHandler, useEffect, useState } from "react";

const sign_up: NextPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const register = () => {};
  return (
    <div>
      <h1>注册页面</h1>
      <div>
        <form onSubmit={register}>
          <div>
            <label>用户名：</label>
            <input
              type="text"
              placeholder="请输入用户名"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div>
            <label>密码：</label>
            <input
              type="password"
              placeholder="请输入密码"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div>
            <label>确认密码：</label>
            <input
              type="password"
              placeholder="请确认密码"
              value={formData.passwordConfirm}
              onChange={(e) =>
                setFormData({ ...formData, passwordConfirm: e.target.value })
              }
            />
          </div>
          <div>
            <button type="submit">注册</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default sign_up;
