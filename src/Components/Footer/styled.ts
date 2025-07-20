import styled from "styled-components";

export const StyledFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #e8e8e8;
`;

export const StyledFooterContainer = styled.footer`
  max-width: 1300px;
  width: 100%;
  margin: 96px 0 92px 0;
  font-family: sans-serif;
  font-family: "Ubuntu", sans-serif;
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

export const StyledFooterTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 28px;
`;

export const StyledLogoFooter = styled.img``;

export const StyledLogoDContacts = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledContacts = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 6px;
    @media (max-width: 920px) {
      font-size: 26px;
    }
    @media (max-width: 700px) {
      font-size: 22px;
    }
  }

  a {
    color: rgba(45, 55, 72, 1);
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    @media (max-width: 920px) {
      font-size: 14px;
    }
  }
`;

export const StyledFooterLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
  @media (max-width: 920px) {
    font-size: 14px;
  }
  @media (max-width: 700px) {
    gap: 14px;
  }

  span {
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledFooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.81);
  padding-top: 32px;
  font-size: 16px;
  color: rgba(45, 55, 72, 1);
  max-width: 1300px;
`;
