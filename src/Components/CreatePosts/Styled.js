import styled from "styled-components";
import { Input, Select } from "antd";

export const Container = styled.div`
  padding: 1%;
  display: flex;
  margin-top: 5%;
  margin-left: 10%;
  padding-bottom: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 10px;
  }
`;

export const Col = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.1rem;
  margin: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  align-items: center;

  color: #11468f;
`;

export const BodyField = styled.textarea`
  width: 220px;
  font-size: 12px;
  line-height: 16px;
  border-radius: 5px;

  padding: 0px 0px 0px 16px;
  color: #5a5a5a;
  border: 1px solid #d4d4d4;
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InputField = styled(Input)`
  width: 220px;
  height: 47px;
  font-size: 12px;
  line-height: 16px;
  border-radius: 5px;

  padding: 0px 0px 0px 16px;
  color: #5a5a5a;
  border: 1px solid #d4d4d4;
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SelectField = styled(Select)`
  width: 100%;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 220px;
  height: 47px;

  font-size: 14px;
  line-height: 16px;
  align-items: center;
  text-align: center;

  border: none;
  background: #11468f;
  color: white;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 80vw;
  }
`;
