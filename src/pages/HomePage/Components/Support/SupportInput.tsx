import sendIconUrl from "../../../../Components/Icons/send-icon.svg";

import mailIconUrl from "../../../../Components/Icons/mail-icon.svg";

import {
  StyledSupportWrapper,
  StyledLabel,
  StyledTitle,
  StyledSubtitle,
  StyledForm,
  StyledEmailIcon,
  StyledInput,
  StyledButton,
  StyledSendIcon,
  StyledSubscribe,
} from "./styled";

export const SupportInput = () => {
  return (
    <StyledSupportWrapper>
      <StyledLabel>Support</StyledLabel>
      <StyledTitle>Subscribe Newsletter & get</StyledTitle>
      <StyledSubtitle>Bank News</StyledSubtitle>
      <StyledForm>
        <StyledEmailIcon src={mailIconUrl} alt="Mail"></StyledEmailIcon>
        <StyledInput placeholder="Your email" />
        <StyledButton>
          <StyledSendIcon src={sendIconUrl} alt=""></StyledSendIcon>
          <StyledSubscribe> Subscribe</StyledSubscribe>
        </StyledButton>
      </StyledForm>
    </StyledSupportWrapper>
  );
};
