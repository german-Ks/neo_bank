import illustrationUrl from "../../../../Components/Icons/Illustration.svg";

import {
  StyledFeatureItem,
  StyledFeatureList,
  StyledIllustration,
  StyledIllustrationWrapper,
  StyledList,
  StyledText,
  StyledTitle,
} from "./styled";

export const Illustration = () => {
  return (
    <StyledIllustrationWrapper>
      <StyledIllustration
        src={illustrationUrl}
        alt="Illustrartion"
      ></StyledIllustration>
      <StyledList>
        <StyledTitle>We Provide Many Features You Can Use</StyledTitle>
        <StyledText>
          You can explore the features that we provide with fun and have their
          own functions each feature
        </StyledText>
        <StyledFeatureList>
          <StyledFeatureItem>✅ Powerful online protection.</StyledFeatureItem>
          <StyledFeatureItem>✅ Cashback without borders.</StyledFeatureItem>
          <StyledFeatureItem>✅ Personal design.</StyledFeatureItem>
          <StyledFeatureItem>✅ Work anywhere in the world.</StyledFeatureItem>
        </StyledFeatureList>
      </StyledList>
    </StyledIllustrationWrapper>
  );
};
