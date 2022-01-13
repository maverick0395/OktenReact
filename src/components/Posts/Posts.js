import Post from '../Post/Post';

const Posts = ({posts}) => {

    return (
        <div className={'posts'}>
            {posts.map(value => <Post key={value.id} post={value} />)}
        </div>
    );
};

export default Posts;