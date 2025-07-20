import { getCurrency } from "../api";
import type { TValute } from "../types/ValuteType";

export const getCurrencies = async (arrCurrencies: string[]) => {
  const rates: TValute[] = [];
  try {
    const response = await getCurrency();

    const data = response.data;

    arrCurrencies.forEach((code) => {
      if (data.Valute[code]) {
        rates.push({
          valuteCode: code,
          value: data.Valute[code].Value.toFixed(2),
        });
      }
    });
  } catch (error) {
    console.error("Ошибка при получении данных с ЦБ РФ:", error);
  }
  return rates;
};
