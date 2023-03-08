import axios, { AxiosResponse } from "axios";
import { withSessionSsr } from "lib/withIronSessionApiRoute ";
import { NextPage } from "next";
import { Router } from "next/router";
import { useState, useCallback } from "react";

const SignIn:NextPage = ()=>{
    const [formData, setFormData] = useState({
        username: "",
        password: ""
      });
      const [errors, setErrors] = useState({
        username: [],
        password: []
      });
    
      const onSubmit = useCallback(
        (e) => {
          e.preventDefault();
          axios.post(`/api/v1/sessions`, formData).then(
            (res) => {
              console.log(res);
              if(res.status = 200){
                window.alert('登录成功')
                // Router.push('/')
              }
            },
            (error) => {
              if (error.response) {
                const response: AxiosResponse = error.response;
                if (response.status === 422) {
                  setErrors({ ...errors, ...response.data });
                }
              }
            }
          );
        },
        [formData]
      );
    return <>
        <h1>登录页面</h1> 
        <form onSubmit={onSubmit}>
        <div>
          <label>
            用户名
            <input
              type="text"
              value={formData.username}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  username: e.target.value,
                })
              }
            />
          </label>
          {errors.username?.length > 0 && (
            <div>{errors.username.join(",")}</div>
          )}
        </div>
        <div>
          <label>
            密码
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
            />
          </label>
          {errors.password?.length > 0 && (
            <div>{errors.password.join(",")}</div>
          )}
        </div>
        <div>
          <button type="submit">登录</button>
        </div>
      </form>
    </>
}

export default SignIn;

export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ req }) {
    //   const user = req.session.user;
  
    //   if (user.admin !== true) {
    //     return {
    //       notFound: true,
    //     };
    //   }
  console.log(req);
      return {
        props: {
        //   user: req.session.user,
        user: '',

        },
      };
    },
  );