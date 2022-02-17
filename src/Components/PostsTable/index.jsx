import React, { useEffect } from "react";
import { Container, Header, TableRow, Prefix } from "./Styled";
import { DeleteOutlined, LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getPostsStart } from "../../redux/PostRedux/actions";

import { Table, Space } from "antd";
import axios from "axios"
import swal from "sweetalert"


function TableList({data, deletePost }) {

  return (
    <>
    {data.map((item, i) => {
      return (
        <TableRow key={i}>
          <div style={{display: "flex", justifyContent: "center"}}><Prefix>{item.name_prefix}</Prefix></div>
          <div style={{fontWeight: "600"}}>{item.username}</div>
          <div style={{fontWeight: "600"}}>{item.first_name + " " + item.last_name}</div>
          <div style={{fontWeight: "600"}}>{item.date_of_birth}</div>
          <DeleteOutlined style={{color: "red"}} onClick={() => deletePost(item.username)} />
        </TableRow>
      )}
      )}
      </>
  )
}

function PostsTable() {
  const dispatch = useDispatch();


  const deletePost = async (username) => {
    try {
      var response = await axios.delete(process.env.REACT_APP_URL + `api/${username}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if(response.status === 200) {
        dispatch(getPostsStart());
       swal({
         text: 'User Deleted Successfully',
         icon: "success"
       })
      }
    }
    catch(e) {
      console.log({e})
    }
  }

  const { users, loading } = useSelector((state) => state.users);

  const data = users && users?.map((item, i) => {
      return {
          id: i + 1,
          ...item
      }
  })

  useEffect(() => {
    dispatch(getPostsStart());
  }, [dispatch]);

  if(data.length === 0) {
    return (
      <Container>
        <Header>Posts</Header>
        <Space size="middle">
          <Table style={{ display: "flex", position: "absolute", marginLeft: "50%" }}/>
        </Space>
      </Container>
    )
  }

 

  return (
    <Container>
        <Header>Posts</Header>
        <br/>
        <Space size="middle">
          {loading ? <LoadingOutlined /> : <TableList data={data} key={data.id} deletePost={deletePost} />}
        </Space>
    </Container>
  );
}

export default PostsTable;