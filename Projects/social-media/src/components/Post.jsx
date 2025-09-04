import {AiFillDelete} from "react-icons/ai"
import {BiLike} from "react-icons/bi"
import { PostList } from "../store/PostListContext";
import { useContext } from "react";

const Post = ({ post }) => {

  const {deletePost} = useContext(PostList)

  return (
    <div className="card card-margin" style={{ width: "38rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => 
         <span className="badge text-bg-primary tag-css hashtag" key = {tag}>{tag}</span>
        )}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <BiLike /> {post.reactions}
        </span>
        <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger" key = {post.id} onClick={() => deletePost(post.id)}>
          <AiFillDelete />
        </span>
      </div>
    </div>
  );
};

export default Post;
