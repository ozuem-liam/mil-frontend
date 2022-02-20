import React from "react";
import { Container, Header, PostRow, Title, Body, Bin, Row } from "./Styled";
import { DeleteOutlined, LoadingOutlined } from "@ant-design/icons";



function TableList({data, deletePost}) {

  return (
    <>
    {data.map((item, i) => {
      return (
        <PostRow key={i}>
          <Title>{item.title}</Title>
          <Body>{item.body}</Body>
          <Bin><DeleteOutlined style={{color: "red"}} onClick={() => deletePost(item.id)} /></Bin>
        </PostRow>
      )}
      )}
      </>
  )
}

function PostsTable({loading, posts, deletePost}) {

  const data = posts && posts?.map((item, i) => {
    return {
        id: i + 1,
        ...item
    }
})

  if(data.length === 0) {
    return (
      <Container>
        <Header>Posts</Header>
        <Row>
          <PostRow />
        </Row>
      </Container>
    )
  }
 

  return (
    <>
    <Container>
        <Header>Posts</Header>
        <br/>
        <Row>
          {loading ? <LoadingOutlined /> : <TableList data={data} key={data.id} deletePost={deletePost} />}
        </Row>
    </Container>
    </>
  );
}

export default PostsTable;