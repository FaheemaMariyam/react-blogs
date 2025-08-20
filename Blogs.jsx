import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Blogs() {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      {Blogs.map((blg) => (
        <ul>
          <Link to={`/blogs-details/${blg.id}`}>
            <li key={blg.id}>
              <h3>{blg.title}</h3>
              <p>{blg.content}</p>
            </li>
          </Link>
        </ul>
      ))}
      <button onClick={()=>navigate(-1)}>Back</button>
    </div>
  );
}

export default Blogs;
