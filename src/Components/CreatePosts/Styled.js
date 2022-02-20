import styled from "styled-components";
import { Input } from "antd";

export const Container = styled.div`
  padding: 40px;
  width: 80%;
  display: flex;
  padding-bottom: 0;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
`;

export const Flex = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  width: 100%;
  align-items: left;
  color: #11468f;
`;

export const BodyField = styled.textarea`
  width: 100%;
  height: 50px;
  font-size: 15px;
  border-radius: 5px;

  padding-left: 10px;
  margin: 0px;
  color: #5a5a5a;
  border: 1px solid #d4d4d4;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InputField = styled(Input)`
  width: 100%;
  height: 50px;
  font-size: 15px;
  border-radius: 5px;
  padding-left: 10px;
  margin: 0px;
  color: #5a5a5a;
  border: 1px solid #d4d4d4;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;

  font-size: 25px;
  margin: 0px;
  align-items: center;
  text-align: center;

  border: none;
  background: #11468f;
  color: white;
  border-radius: 5px;
`;
