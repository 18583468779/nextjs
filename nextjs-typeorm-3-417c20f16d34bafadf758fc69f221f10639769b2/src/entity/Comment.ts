import { Post } from "./Post";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity("comments")
export class Comment {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column("text")
  content: string;
  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
  @ManyToOne((type) => User, (user) => user.comments)
  user: User;
  @ManyToOne((type) => Post, (post) => post.comments)
  post: Post;
}
