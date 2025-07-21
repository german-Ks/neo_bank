import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledHeaderWrapper = styled.div`
  display: flex;
  height: 64px;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  width: 100%;
  @media (max-width: 1350px) {
    max-width: 920px;
  }
  @media (max-width: 1000px) {
    max-width: 750px;
  }
`;

export const StyledLogoWrapper = styled.div`
  cursor: pointer;
`;

export const StyledMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 700px) {
    gap: 10px;
  }
`;

export const StyledTextWrapper = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  width: max-content;
  text-decoration: none !important;
  color: rgba(29, 25, 41, 1);
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

export const StyledBtnWrapper = styled.button`
  width: 128px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(0, 60, 255, 1);
  border: none;
  font-size: 16px;
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
  border-radius: 16px;
  cursor: pointer;
  margin-left: 10px;
  @media (max-width: 700px) {
    font-size: 13px;
  }
  @media (max-width: 600px) {
    width: 120px;
    height: 40px;
  }
`;
