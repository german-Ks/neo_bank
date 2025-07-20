import { Header } from "../../Components/Header/Header";
import { ChooseCard } from "./Components/ChooseCard/ChooseCard";
import { ExchangeRateCard } from "./Components/ExchengeRate/ExchengeRate";
import { Footer } from "../../Components/Footer/Footer";
import { Illustration } from "./Components/Illustration/Illustration";
import { StyledPageWrapper } from "./styled";
import { MapComponent } from "./Components/MapComponent/MapComponent";
import { SupportInput } from "./Components/Support/SupportInput";
import { CurrentNews } from "./Components/CurrentNews/CurrentNews";

export const HomePage = () => {
  return (
    <>
      <StyledPageWrapper>
        <Header />
        <ChooseCard />
        <Illustration />
        <ExchangeRateCard />
        <MapComponent />
        <CurrentNews />
        <SupportInput />
      </StyledPageWrapper>
      <Footer />
    </>
  );
};
