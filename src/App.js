import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios"
import swal from "sweetalert"


import Layout from './Screens/Layout';
function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [errMsg, setErrMsg] = useState("");

  const deletePost = async (id) => {
    try {
      var response = await axios.delete(process.env.REACT_APP_URL + `posts/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if(response.status === 200) {
       setPosts(posts.filter(post => post.id !== id))
       swal({
         text: 'User Deleted Successfully',
         icon: "success"
       })
      }
    }
    catch(e) {
      throw e
    }
  }

  useEffect(() => {
    getPostsApi();
  }, []);

const getPostsApi = async () => {
  setLoading(true);
  try {    
    const response = await axios.get(process.env.REACT_APP_URL + "posts?userId=1", {
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response) {
      setPosts(response.data)
      setLoading(false);
    }
  } catch (error) {
    throw error; 
  }
}
const createPost = async (data) => {
  if (
    data.title?.length < 1 ||
    data.body?.length < 1
  ) {
    setErrMsg("* Fields are Required");
    setTimeout(() => {
      setErrMsg("");
      setLoading(false);
    }, 3000);
  }
  setLoading(true);
  try {
    var response = await axios.post(
        process.env.REACT_APP_URL + "posts",
        JSON.stringify(data),
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
    if (response.status === 200 || response.status === 201) {
      setPosts((posts) => [...posts, response.data])
      setLoading(false);
      return response.json();
    }
  } catch (e) {
    setLoading(false);
    if (e?.response?.data?.message?.message) {
      setErrMsg(e?.response?.data?.message?.message);
      setTimeout(() => {
        setErrMsg("");
      }, 3000);
    } else {
      setErrMsg(e?.response?.data?.message);
      setTimeout(() => {
        setErrMsg("");
      }, 3000);
    }
  }
}
  return (
    <div className="App">
     <Layout errMsg={errMsg} createPost={createPost} loading={loading} posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default App;
