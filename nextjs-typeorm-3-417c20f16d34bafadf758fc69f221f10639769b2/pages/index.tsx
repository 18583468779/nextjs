import { GetServerSideProps, NextPage } from "next";
import { UAParser } from "ua-parser-js";
import { useEffect, useState } from "react";
import { getDatabaseConnection } from "lib/getDatabaseConnection";
import { Post } from "src/entity/Post";
import Link from "next/dist/client/link";

type Props = {
  posts: Post[];
};
const index: NextPage<Props> = (props) => {
  const { posts } = props;

  const [width, setWidth] = useState(0);
  useEffect(() => {}, []);
  return (
    <div>
      <h1>文章列表</h1>
      <div>
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const connect = await getDatabaseConnection();
  const posts = await connect.manager.find(Post);
  // console.log(posts);

  const ua = context.req.headers["user-agent"];
  const result = new UAParser(ua).getResult();
  return {
    props: {
      browser: result.browser,
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
};
