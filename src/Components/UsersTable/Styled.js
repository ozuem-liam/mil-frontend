import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 0 0 0 0.5rem;
  margin-left: 8%;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

export const Row = styled.div`
  margin-left: 3.5rem;
  padding-right: 20%;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 7fr 1.5fr 1fr;
  margin-right: 20%;
  margin-left: 3.5rem;
  padding-top: 2rem;
  padding-bottom: 10px;
  border-bottom: 3px solid rgba(17, 70, 143, 0.04);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
    text-align: center;
    margin-left: 10px;
  }
`;
export const Prefix = styled.div`
  display: flex;
  background: #11468f;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  color: #fff;
  font-weight: 450;
`;

export const Header = styled.h1`
  font-weight: 500;
  padding: 10px 0px 10px 16px;
  margin-right: 20%;
  margin-left: 3rem;
  margin-bottom: 0;
  letter-spacing: 1px;
  color: #373a3c;
  background: rgba(17, 70, 143, 0.04);
  border-radius: 6px;
  font-size: 0.9rem;
`;
