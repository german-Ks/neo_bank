import { styled } from "styled-components";

export const StyledMapWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
  @media (max-width: 1350px) {
    max-width: 1000px;
  }
  @media (max-width: 1000px) {
    max-width: 650px;
  }
  @media (max-width: 700px) {
    max-width: 450px;
  }
`;

export const StyledMapTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin: 0 0 8px 0;
  color: rgba(28, 28, 30, 1);
  @media (max-width: 1000px) {
    font-size: 30px;
    text-align: center;
  }
`;

export const StyledMapText = styled.h5`
  line-height: 50px;
  margin: 0px 0 46px 0;
  font-size: 16px;
  font-weight: 500;
  color: rgba(28, 28, 30, 1);
  @media (max-width: 1000px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const StyledMapIcon = styled.img`
  @media (max-width: 1350px) {
    max-width: 1000px;
  }
  @media (max-width: 1000px) {
    max-width: 650px;
  }
  @media (max-width: 700px) {
    max-width: 450px;
  }
`;
