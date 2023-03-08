import { getDatabaseConnection } from "lib/getDatabaseConnection";
import md5 from "md5";
import { User } from "src/entity/User";

export class SignIn {
    username:string = '';
    password:string = '';
    user:User
    errors={
        username:[] as string[],
        password:[] as string[]
    }
    async validate(){
        const connection = await getDatabaseConnection();// 第一次链接能不能用 get
        const user = await connection.manager.findOne(User, {where: {username:this.username}});
       if(user){
        if(md5(this.password)  !== user.passwordDigest){
            this.errors.password.push('密码不匹配')
        }
       }else{
        this.errors.username.push('用户名不存在')
       }
    }
    hasErrors(){
        return !!Object.values(this.errors).find(v => v.length >0)
    }
}