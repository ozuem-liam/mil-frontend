import React, { useState } from "react";
import { Container, Label, InputField, Button, Grid, Col } from "./Styled";

import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";

function CreateUsers() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [loader, setLoader] = useState(false);
  const [errMsg, setErrMsg] = useState("");


  const handleSubmit = async () => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      username: userName,
      date_of_birth: dateOfBirth.split("-").reverse().join("-"),
    };
    if (
      firstName?.length < 1 ||
      lastName?.length < 1 ||
      userName?.length < 1 ||
      dateOfBirth?.length < 1
    ) {
      setErrMsg("* Fields are Required");
      setTimeout(() => {
        setErrMsg("");
      }, 3000);
    }
    setLoader(true);

    try {
      var response = await axios.post(
        process.env.REACT_APP_URL + "api/user",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setLoader(false);
        setFirstName("");
        setLastName("");
        setUserName("");
        setDateOfBirth("");
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
            First name
          </Label>
          <InputField
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
          />
        </Col>

        <Col>
          <Label>
            Last Name
          </Label>
          <InputField
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
          />
        </Col>

        <Col>
          <Label>
            Username 
          </Label>
          <InputField
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
          />
        </Col>

        <Col>
          <Label>
            Date of Birth
          </Label>
          <InputField
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            placeholder="Date of Birth"
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