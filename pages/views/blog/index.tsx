import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import { IPost } from '../../../types';
import PostPreview from '../../../components/post-preview';
import { BlogService } from '../../../src/blog/blog.service';

interface Props {
  posts: IPost[];
  source: string;
}

const Blog: NextPage<Props> = ({ posts, source }) => {
  return (
    <div>
      <h1>blog</h1>
      <div>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
      <div style={{ fontStyle: 'italic', fontSize: 14 }}>
        this page was rendered on the {source}
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  const props: Props = {
    source: 'server',
    posts: ctx.query.posts as any,
  };

  if (!Array.isArray(props.posts)) {
    const service = new BlogService();
    props.posts = service.all();
    props.source = 'client';
  }

  return { props };
}

export default Blog;
