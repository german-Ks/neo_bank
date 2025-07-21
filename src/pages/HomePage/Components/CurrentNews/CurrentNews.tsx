import { useEffect, useRef, useState } from "react";
import { BtnLeft } from "../../../../Buttons/Btn-left";
import { BtnRight } from "../../../../Buttons/Btn-Right";
import { getNewsList } from "../../../../lib/getNewsList";
import {
  StyledBtnLeft,
  StyledBtnRight,
  StyledCard,
  StyledCardDescription,
  StyledCardImage,
  StyledCardsList,
  StyledCardText,
  StyledCurrentCardWrapper,
  StyledCurrentNewsWrapper,
  StyledCurrentText,
  StyledCurrentTitle,
  StyledNewsButtons,
} from "./styled";
import type { TNews } from "../../../../types/NewsType";
import useMedia from "use-media";

export const CurrentNews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [newsState, setNewsState] = useState<TNews[]>([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const isMobile = useMedia({ maxWidth: "600px" });
  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };
  const SCROLL_STEP = isMobile ? 400 : 500;
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL_STEP, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: SCROLL_STEP, behavior: "smooth" });
  };

  useEffect(() => {
    const getApiNews = async () => {
      try {
        const data = await getNewsList();
        setNewsState(data);
      } catch (err) {
        console.error("Ошибка загрузки новостей:", err);
      }
    };
    getApiNews();
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons);

    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      resizeObserver.disconnect();
    };
  }, [newsState]);

  return (
    <StyledCurrentNewsWrapper>
      <StyledCurrentTitle>
        Current news from the world of finance
      </StyledCurrentTitle>
      <StyledCurrentText>
        We update the news feed every 15 minutes. You can learn more by clicking
        on the news you are interested in.
      </StyledCurrentText>
      <StyledCardsList ref={scrollRef}>
        {newsState
          .filter(
            (item) =>
              item.description &&
              item.urlToImage &&
              item.urlToImage.startsWith("http")
          )
          .map((item) => (
            <StyledCurrentCardWrapper
              to={item.url}
              target="_blank"
              key={item.title}
            >
              <StyledCard>
                <StyledCardImage src={item.urlToImage} alt="Картинка Новости" />
                <StyledCardDescription>{item.title}</StyledCardDescription>
                <StyledCardText>{item.description}</StyledCardText>
              </StyledCard>
            </StyledCurrentCardWrapper>
          ))}
      </StyledCardsList>
      <StyledNewsButtons>
        <StyledBtnLeft onClick={scrollLeft} disabled={!canScrollLeft}>
          <BtnLeft />
        </StyledBtnLeft>

        <StyledBtnRight onClick={scrollRight} disabled={!canScrollRight}>
          <BtnRight />
        </StyledBtnRight>
      </StyledNewsButtons>
    </StyledCurrentNewsWrapper>
  );
};
