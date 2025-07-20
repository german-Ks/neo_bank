import { useEffect, useMemo, useState } from "react";
import bankIconUrl from "../../../../Components/Icons/bank-icon.svg";
import { getCurrencies } from "../../../../lib/getCurrencies";

import {
  StyledFooter,
  StyledCurrensy,
  StyledBankIcon,
  StyledCardWrapper,
  StyledHeader,
  StyledLabel,
  StyledTable,
  StyledTimestamp,
  StyledTitle,
  StyledValue,
  StyledValueInfo,
} from "./styled";
import type { TValute } from "../../../../types/ValuteType";

export const ExchangeRateCard = () => {
  const [currencesDataState, setCurrenciesState] = useState<TValute[]>([]);
  const currencyExchangeRate = ["USD", "CNY", "CHF", "EUR", "JPY", "TRY"];
  useEffect(() => {
    getCurrencies(currencyExchangeRate).then((data) =>
      setCurrenciesState(data)
    );
  }, []);

  const refreshInterval = useMemo(() => 15 * 60 * 1000, []);

  const getDataCurrencies = () => {
    getCurrencies(currencyExchangeRate).then((data) =>
      setCurrenciesState(data)
    );
  };

  setInterval(getDataCurrencies, refreshInterval);

  return (
    <StyledCardWrapper>
      <StyledHeader>
        <StyledTitle>Exchange rate in internet bank</StyledTitle>
        <StyledTimestamp>
          Update every 15 minutes, MSC 02.07.2025
        </StyledTimestamp>
      </StyledHeader>
      <StyledCurrensy>Currency</StyledCurrensy>
      <StyledTable>
        {currencesDataState.map((el) => (
          <StyledValueInfo>
            {" "}
            <StyledLabel>{el.valuteCode}:</StyledLabel>{" "}
            <StyledValue>{el.value}</StyledValue>{" "}
          </StyledValueInfo>
        ))}
      </StyledTable>

      <StyledFooter>
        <div>All courses</div>
        <StyledBankIcon src={bankIconUrl} alt="Icon Bank"></StyledBankIcon>
      </StyledFooter>
    </StyledCardWrapper>
  );
};
