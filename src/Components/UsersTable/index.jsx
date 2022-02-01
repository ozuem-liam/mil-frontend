import React, { useEffect } from "react";
import { Container, Header, TableRow, Prefix } from "./Styled";
import { DeleteOutlined, LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getUsersStart } from "../../redux/UserRedux/actions";

import { Table, Space } from "antd";
import axios from "axios"
import swal from "sweetalert"


function TableList({data, deleteUser }) {

  return (
    <>
    {data.map((item, i) => {
      return (
        <TableRow key={i}>
          <div style={{display: "flex", justifyContent: "center"}}><Prefix>{item.name_prefix}</Prefix></div>
          <div style={{fontWeight: "600"}}>{item.username}</div>
          <div style={{fontWeight: "600"}}>{item.first_name + " " + item.last_name}</div>
          <div style={{fontWeight: "600"}}>{item.date_of_birth}</div>
          <DeleteOutlined style={{color: "red"}} onClick={() => deleteUser(item.username)} />
        </TableRow>
      )}
      )}
      </>
  )
}

function UsersTable() {
  const dispatch = useDispatch();
  // const [loader, setLoader] =false)


  const deleteUser = async (username) => {
    try {
      var response = await axios.delete(process.env.REACT_APP_URL + `api/${username}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if(response.status === 200) {
        dispatch(getUsersStart());
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
    dispatch(getUsersStart());
  }, [dispatch]);

  if(data.length === 0) {
    return (
      <Container>
        <Header>Users</Header>
        <Space size="middle">
          <Table style={{ display: "flex", position: "absolute", marginLeft: "50%" }}/>
        </Space>
      </Container>
    )
  }

 

  return (
    <Container>
        <Header>Users</Header>
        <br/>
        <Space size="middle">
          {loading ? <LoadingOutlined /> : <TableList data={data} key={data.id} deleteUser={deleteUser} />}
        </Space>
    </Container>
  );
}

export default UsersTable;