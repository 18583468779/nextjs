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
}
