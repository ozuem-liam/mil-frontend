import React, { useState } from "react";
import { Container, Label, BodyField, InputField, Button, Grid, Col } from "./Styled";

import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";

function CreateUsers() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [loader, setLoader] = useState(false);
  const [errMsg, setErrMsg] = useState("");


  const handleSubmit = async () => {
    const data = {
      title: title,
      body: body,
      userId: userId,
    };
    if (
      title?.length < 1 ||
      body?.length < 1 ||
      userId?.length < 1
    ) {
      setErrMsg("* Fields are Required");
      setTimeout(() => {
        setErrMsg("");
      }, 3000);
    }
    setLoader(true);

    try {
      var response = await axios.post(
        process.env.REACT_APP_URL + "posts",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setLoader(false);
        setTitle("");
        setBody("");
        setUserId("");
        window.location.reload();
        return
      }
    } catch (e) {
      setLoader(false);
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
  };

  return (
    <Container>
      <Grid>
        <Col>
          <Label>
            Title
          </Label>
          <InputField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </Col>

        <Col>
          <Label>
            Body
          </Label>
          <BodyField
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write something here"
          />
        </Col>

        <Col>
          <Label>
            UserId
          </Label>
          <InputField
            type="number"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="User Id"
          />
        </Col>
    </Grid>
    <Col>
        <Button type="button" onClick={() => handleSubmit()}>
            {loader ? <LoadingOutlined /> : "SUBMIT"}
        </Button>
        <br />
      <p style={{ color: "red" }}>{errMsg}</p>
      <br />
    </Col>
    </Container>
  );
}

export default CreateUsers;