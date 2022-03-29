import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        alt=""
        src="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quos
        explicabo eos. Sunt deleniti necessitatibus saepe inventore quidem error
        quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        quos explicabo eos. Sunt deleniti necessitatibus saepe inventore quidem
        error quo! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Debitis quos explicabo eos. Sunt deleniti necessitatibus saepe inventore
        quidem error quo!
      </p>
    </div>
  );
}

export default Post;
