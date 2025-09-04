import { useContext, useRef } from "react"
import { PostList } from "../store/PostListContext"

const CreatePost = () => {

  const {addPost} = useContext(PostList)

  const userIdElem = useRef();
  const postTitleElem = useRef();
  const postBodyElem = useRef();
  const reactionElem = useRef();
  const tagsElem = useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElem.current.value;
    const postTitle = postTitleElem.current.value;
    const postBody = postBodyElem.current.value;
    const reaction = reactionElem.current.value;
    const tags = tagsElem.current.value.split(" ");

    userIdElem.current.value = "";
    postTitleElem.current.value = "";
    postBodyElem.current.value = "";
    reactionElem.current.value = "";
    tagsElem.current.value = "";

    addPost(userId, postTitle, postBody, reaction, tags)
  }

  return <form className="form" onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="User_id" className="form-label">User Id</label>
      <input type="text" className="form-control" id="User_id" ref={userIdElem}/>
      <div id="emailHelp" className="form-text">Type your unique Id here.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="post_title" className="form-label" >Post Title</label>
      <input type="text" className="form-control" ref={postTitleElem} id="post_title"/>
    </div>
    <div className="mb-3">
      <label htmlFor="post_body" className="form-label" >Post Body</label>
      <textarea rows={4} type="text" id="post_body" ref={postBodyElem} className="form-control"/>
    </div>
    <div className="mb-3">
      <label htmlFor="reactions" className="form-label" >Reactions</label>
      <input type="number" className="form-control" ref={reactionElem} id="reactions" />
    </div>
    <div className="mb-3">
      <label htmlFor="Tags" className="form-label" >Tags</label>
      <input type="text" className="form-control" ref={tagsElem} id="Tags" />
      <div id="emailHelp" className="form-text">Enter tags with the space</div>
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
}

export default CreatePost