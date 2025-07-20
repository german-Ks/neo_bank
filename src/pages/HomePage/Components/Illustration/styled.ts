import { styled } from "styled-components";

export const StyledIllustrationWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Rubik", sans-serif;
  @media (max-width: 1350px) {
    max-width: 920px;
  }
  @media (max-width: 1000px) {
    max-width: 650px;
    justify-content: center;
  }
  @media (max-width: 700px) {
    max-width: 450px;
  }
`;

export const StyledIllustration = styled.img`
  padding-top: 112px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const StyledList = styled.article`
  padding-top: 186px;
  @media (max-width: 1000px) {
    padding-top: 150px;
  }
`;

export const StyledTitle = styled.h3`
  margin: 0;
  font-size: 35px;
  font-weight: 500;
  @media (max-width: 1000px) {
    font-size: 30px;
  }
`;

export const StyledText = styled.p`
  margin: 20px 0 25px 0;
  font-size: 16px;
  color: rgba(79, 86, 101, 1);
`;

export const StyledFeatureList = styled.ul`
  padding: 0;
  list-style: none;
  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
  }
`;

export const StyledFeatureItem = styled.li`
  line-height: 30px;
  font-size: 14px;
  padding-bottom: 12px;
  color: rgba(79, 86, 101, 1);
`;
