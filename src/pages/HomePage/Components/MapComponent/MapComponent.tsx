import mapIconUrl from "../../../../Components/Icons/map-icon.svg";

import {
  StyledMapIcon,
  StyledMapText,
  StyledMapTitle,
  StyledMapWrapper,
} from "./styled";

export const MapComponent = () => {
  return (
    <StyledMapWrapper>
      <StyledMapTitle>
        You can use our services anywhere in the world
      </StyledMapTitle>
      <StyledMapText>
        Withdraw and transfer money online through our application
      </StyledMapText>
      <StyledMapIcon src={mapIconUrl} alt="Map"></StyledMapIcon>
    </StyledMapWrapper>
  );
};
