import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  background: linear-gradient(
    to top,

    rgba(178, 178, 178, 1),
    rgba(178, 178, 178, 0)
  );
  border-radius: 20px;
  margin: 48px 0 48px 0;
  max-width: 1300px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: 1350px) {
    max-width: 920px;
  }
  @media (max-width: 1000px) {
    max-width: 650px;
  }
  @media (max-width: 700px) {
    max-width: 450px;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 32px 24px 32px;
  @media (max-width: 1000px) {
    gap: 15px;
  }
  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const StyledTitle = styled.h3`
  font-size: 30px;
  font-weight: 500;
  color: rgba(28, 28, 30, 1);
  @media (max-width: 1000px) {
    font-size: 22px;
  }
`;

export const StyledTimestamp = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

export const StyledCurrensy = styled.h5`
  margin: 0 0 32px 32px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
`;

export const StyledTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 24px;
  max-width: 410px;
  margin-left: 32px;
  @media (max-width: 1000px) {
    max-width: none;
  }
  @media (max-width: 700px) {
    gap: 16px;
  }
`;

export const StyledValueInfo = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledLabel = styled.div`
  color: rgba(128, 128, 128, 1);
  font-weight: 600;
`;

export const StyledValue = styled.div`
  color: rgba(0, 0, 0, 1);
  font-weight: 700;
`;

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 0 32px 32px;
  color: rgba(255, 255, 255, 1);
`;

export const StyledBankIcon = styled.img`
  margin-right: 32px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;
