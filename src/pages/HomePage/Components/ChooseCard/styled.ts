import { styled } from "styled-components";

export const StyledChooseCardWrapper = styled.section`
  padding-top: 131px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1350px) {
    max-width: 920px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 700px) {
    max-width: 450px;
  }
`;
export const StyledTextDBtn = styled.div`
  max-width: 609px;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
  }
`;

export const StyledText = styled.h2`
  font-size: 48px;
  @media (max-width: 1000px) {
    font-size: 36px;
    text-align: center;
  }
`;

export const StyledBtn = styled.button`
  width: 160px;
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
  @media (max-width: 1000px) {
  }
`;

export const StyledCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const StyledCard = styled.img`
  width: 250px;
  height: 149px;
  @media (max-width: 1000px) {
    width: 200px;
    height: 130px;
  }
`;
