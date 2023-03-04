import { Post } from "./Post";
import { Comment } from "./Comment";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
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
}
