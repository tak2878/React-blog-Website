import "./singlePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet elit. Quaerat, velit.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Tanveer</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlepostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nihil
          vitae natus blanditiis aperiam incidunt illum facilis. Sequi
          consectetur veniam eaque est quasi neque esse! Fuga, quia? Ducimus,
          officiis culpa, ipsa inventore deserunt minus, placeat saepe omnis
          doloremque magni doloribus rerum dolores reiciendis ab at delectus
          minima error obcaecati. Ea quasi doloremque cupiditate, error iure
          odio possimus, quidem dolores doloribus consequuntur facilis sunt
          aspernatur. Nemo soluta odio hic praesentium atque temporibus quae
          dolor rerum necessitatibus incidunt, nulla optio consequatur sunt
          repellendus quam quo placeat rem, culpa ad? Nostrum repudiandae enim
          laudantium maiores sint eum saepe ea, odit rerum, ab et! Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Quos nihil vitae natus
          blanditiis aperiam incidunt illum facilis. Sequi consectetur veniam
          eaque est quasi neque esse! Fuga, quia? Ducimus, officiis culpa, ipsa
          inventore deserunt minus, placeat saepe omnis doloremque magni
          doloribus rerum dolores reiciendis ab at delectus minima error
          obcaecati. Ea quasi doloremque cupiditate, error iure odio possimus,
          quidem dolores doloribus consequuntur facilis sunt aspernatur. Nemo
          soluta odio hic praesentium atque temporibus quae dolor rerum
          necessitatibus incidunt, nulla optio consequatur sunt repellendus quam
          quo placeat rem, culpa ad? Nostrum repudiandae enim laudantium maiores
          sint eum saepe ea, odit rerum, ab et!
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
