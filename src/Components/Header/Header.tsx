import { LogoHeader } from "../Logo/logoHeader";
import {
  StyledBtnWrapper,
  StyledHeaderWrapper,
  StyledLogoWrapper,
  StyledMenuWrapper,
  StyledTextWrapper,
} from "./styled";

export const Header = () => {
  const menuItems = [
    { label: "Credit card", path: "/credit-card" },
    { label: "Product", path: "/product" },
    { label: "Account", path: "/account" },
    { label: "Resources", path: "/resources" },
  ];
  return (
    <StyledHeaderWrapper>
      <StyledLogoWrapper>
        <LogoHeader />
      </StyledLogoWrapper>
      <StyledMenuWrapper>
        {menuItems.map((el) => (
          <StyledTextWrapper key={el.path}>{el.label}</StyledTextWrapper>
        ))}
      </StyledMenuWrapper>
      <StyledBtnWrapper>Online Bank</StyledBtnWrapper>
    </StyledHeaderWrapper>
  );
};
