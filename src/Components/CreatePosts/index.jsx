import React, { useState } from "react";
import { Container, Label, BodyField, InputField, Button, Flex } from "./Styled";
import { LoadingOutlined } from "@ant-design/icons";

function CreateUsers({errMsg, createPost, loading}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  


  const handleSubmit = async () => {
    const data = {
      title: title,
      body: body,
      userId: 1,
    };
    createPost(data);
  };


  return (
    <Container>
      <Flex>
          <Label>
            Title
          </Label>
          <InputField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
      </Flex>

        <Flex>
          <Label>
            Body
          </Label>
          <BodyField
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write something here"
            />
        </Flex>
        <Flex>
          <Button type="button" onClick={() => handleSubmit()}>
              {loading ? <LoadingOutlined /> : "SUBMIT"}
          </Button>
        </Flex>
        <br />
      <p style={{ color: "red" }}>{errMsg}</p>
      <br />
    </Container>
  );
}

export default CreateUsers;