import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledCurrentNewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1300px;
  width: 100%;
  @media (max-width: 1400px) {
    max-width: 1100px;
    width: 100%;
    overflow: hidden;
  }
  @media (max-width: 1200px) {
    max-width: 900px;
    width: 100%;
    overflow: hidden;
  }
  @media (max-width: 1000px) {
    max-width: 700px;
    width: 100%;
    overflow: hidden;
  }
  @media (max-width: 800px) {
    max-width: 500px;
    width: 100%;
  }
  @media (max-width: 600px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const StyledCurrentTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin: 0 0 8px 0;
  color: rgba(28, 28, 30, 1);
  @media (max-width: 1000px) {
    font-size: 30px;
    text-align: center;
  }
`;

export const StyledCurrentText = styled.h4`
  line-height: 50px;
  margin: 0%;
  font-size: 16px;
  font-weight: 500;
  color: rgba(28, 28, 30, 1);
  @media (max-width: 1000px) {
    font-size: 13px;
    text-align: center;
  }
`;

export const StyledCardsList = styled.div`
  display: flex;
  gap: 80px;
  max-width: 1280px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 24px 10px 48px 10px;
  padding-top: 24px;
  padding-bottom: 48px;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1400px) {
    max-width: 1100px;
    width: 100%;
    overflow: hidden;
  }
  @media (max-width: 1200px) {
    max-width: 900px;
    width: 100%;
    overflow: hidden;
  }
  @media (max-width: 1000px) {
    max-width: 700px;
    width: 100%;
  }
  @media (max-width: 800px) {
    max-width: 500px;
    width: 100%;
  }
  @media (max-width: 600px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const StyledCurrentCardWrapper = styled(Link)`
  display: flex;
  width: 320px;
  height: 448px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 28px;
  border: 1px solid rgba(187, 187, 187, 0.08);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  text-decoration: none !important;
  color: black;
`;

export const StyledCard = styled.div`
  width: 256px;
  height: 384px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  text-align: center;
`;

export const StyledCardImage = styled.img`
  width: 256px;
  height: 120px;
`;

export const StyledCardDescription = styled.div`
  width: 256px;
  height: 100px;
  font-size: 20px;
  overflow: hidden;
  line-height: 25px;
`;

export const StyledCardText = styled.div`
  width: 256px;
  height: 92px;
  overflow: hidden;
  line-height: 23px;
`;

export const StyledNewsButtons = styled.div`
  display: flex;
  gap: 20px;
  width: 148px;
  height: 64px;
  align-self: end;
  @media (max-width: 600px) {
    align-self: center;
  }
`;

export const StyledBtnLeft = styled.button`
  background-color: rgba(245, 244, 255, 1);
  border: none;
  padding: 0;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #002ccc;
    border-radius: 32px;
    border: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
    pointer-events: none;
  }
`;

export const StyledBtnRight = styled.button`
  background-color: rgba(245, 244, 255, 1);
  border: none;
  padding: 0;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #002ccc;
    border-radius: 30px;
    border: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
    pointer-events: none;
  }
`;
