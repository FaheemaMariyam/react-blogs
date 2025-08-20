import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogsDetails() {
  const [blogsDetails, setBlogsDetails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setBlogsDetails(res.data))
      .catch((err) => console.error(err));
  },[]);
  const params=useParams()
  const filtered=blogsDetails.filter((item)=>item.id.toString()===params.id)
  return (
    <div>
      {filtered.map((bdetail) => (
        <div key={bdetail.id}>
          <h2>{bdetail.title}</h2>
          <h3>{bdetail.content}</h3>
          <p>{bdetail.description}</p>
          <p>{bdetail.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogsDetails;
