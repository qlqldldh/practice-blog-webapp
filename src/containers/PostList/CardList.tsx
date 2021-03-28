import React, { FunctionComponent } from 'react';
import { postType } from '../../types/post';
import PostListCardItem from './CardItem';

type ListProp = {
    posts: postType[],
};

const PostListCardList: FunctionComponent<ListProp> = ({posts}) => {
    console.log(posts)
    return (
        <>
            {posts.map((post: postType) => <PostListCardItem post={post} />)}
            {/* <div>Hello World</div> */}
        </>
    );
};

export default PostListCardList;
