import logoFooterUrl from "../../Components/Icons/logo-footer.svg";

import {
  StyledContacts,
  StyledFooterBottom,
  StyledFooterContainer,
  StyledFooterLinks,
  StyledFooterTop,
  StyledFooterWrapper,
  StyledLogoDContacts,
  StyledLogoFooter,
} from "./styled";

export const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledFooterContainer>
        <StyledFooterTop>
          <StyledLogoDContacts>
            <StyledLogoFooter src={logoFooterUrl} alt="Logo"></StyledLogoFooter>
            <StyledContacts>
              <strong>+7 (495) 984 25 13</strong>
              <a href="mailto:info@neoflex.ru">info@neoflex.ru</a>
            </StyledContacts>
          </StyledLogoDContacts>

          <StyledFooterLinks>
            <span>About bank</span>
            <span>Ask a Question</span>
            <span>Quality of service</span>
            <span>Requisites</span>
            <span>Press center</span>
            <span>Bank career</span>
            <span>Investors</span>
            <span>Analytics</span>
            <span>Business and processes</span>
            <span>Compliance and business ethics</span>
          </StyledFooterLinks>
        </StyledFooterTop>

        <StyledFooterBottom>
          We use cookies to personalize our services and improve the user
          experience of our website. Cookies are small files containing
          information about previous visits to a website. If you do not want to
          use cookies, please change your browser settings
        </StyledFooterBottom>
      </StyledFooterContainer>
    </StyledFooterWrapper>
  );
};
