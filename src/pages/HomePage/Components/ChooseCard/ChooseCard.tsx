import {
  StyledBtn,
  StyledCard,
  StyledCardsWrapper,
  StyledChooseCardWrapper,
  StyledText,
  StyledTextDBtn,
} from "./styled";
import cart1 from "../../../../Components/Images/cart1.jpg";
import cart2 from "../../../../Components/Images/cart2.jpg";
import cart3 from "../../../../Components/Images/cart3.jpg";
import cart4 from "../../../../Components/Images/cart4.jpg";

export const ChooseCard = () => {
  return (
    <StyledChooseCardWrapper>
      <StyledTextDBtn>
        <StyledText>
          Choose the design you like and apply for card right now
        </StyledText>
        <StyledBtn>Choose the card</StyledBtn>
      </StyledTextDBtn>
      <StyledCardsWrapper>
        <StyledCard src={cart1} alt="карточка 1"></StyledCard>
        <StyledCard src={cart2} alt="карточка 2"></StyledCard>
        <StyledCard src={cart3} alt="карточка 3"></StyledCard>
        <StyledCard src={cart4} alt="карточка 4"></StyledCard>
      </StyledCardsWrapper>
    </StyledChooseCardWrapper>
  );
};
