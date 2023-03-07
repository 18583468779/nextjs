import { Post } from "./Post";
import { Comment } from "./Comment";
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { getDatabaseConnection } from "lib/getDatabaseConnection";

@Entity("users")
@Index(["username"], { unique: true })
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column("varchar")
  username: string;
  @Column("varchar")
  passwordDigest: string;
  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
  @OneToMany((type) => Post, (post) => post.author)
  posts: Post[];
  @OneToMany((type) => Comment, (comment) => comment.user)
  comments: Comment[];
  password:string = '';
  passwordConfirmation:string = '';
  errors = {
   username:[] as string[],
   password:[] as string[],
   passwordConfirmation:[] as string[]
  }
  async validate(){
    const connect = await getDatabaseConnection();
    // console.log('object',this.username,this.password,this.passwordConfirmation);
    if (this.username.trim() === "") {
      this.errors.username.push("不能为空");
    }
    if (!/[a-zA-Z0-9]/.test(this.username.trim())) {
      this.errors.username.push("格式不合法");
    }
    if (this.username.trim().length > 42) {
      this.errors.username.push("用户名太长");
    }
    const found = await connect.manager.find(User, { username:this.username });
    if (found.length >0) {
      this.errors.username.push("用户名已存在，请重新更换用户名");
    }
    if (this.password === "") {
      this.errors.password.push("密码不能为空");
    }
    if (this.password !== this.passwordConfirmation) {
      this.errors.passwordConfirmation.push("密码不匹配");
    }
  }
  hasErrors(){
    console.log('this.errors',this.errors);
    return !!Object.values(this.errors).find(v => v.length >0)
  }
}
