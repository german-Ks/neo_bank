import styled from "styled-components";

export const StyledSupportWrapper = styled.div`
  width: 100%;
  background: #f7f6ff;
  padding: 64px 0 98px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    max-width: 450px;
  }
`;

export const StyledLabel = styled.h4`
  color: rgba(235, 128, 29, 1);
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  margin: 0 0 26px 0;
`;

export const StyledTitle = styled.h3`
  font-size: 30px;
  line-height: 41px;
  font-weight: 700;
  color: rgba(28, 28, 30, 1);
  margin: 0 0 30px 0;
`;

export const StyledSubtitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  line-height: 4px;
  color: rgba(28, 28, 30, 1);
  margin-bottom: 62px;
`;

export const StyledForm = styled.div`
  max-width: 524.8px;
  width: 100%;
  height: 89.84px;
  border-radius: 20px;
  background: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 32px;
  box-shadow: 0px 10px 20px rgba(54, 58, 120, 0.1);
  gap: 10px;
  box-sizing: border-box;
`;

export const StyledEmailIcon = styled.img`
  border-radius: 4px;
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  color: rgba(144, 146, 176, 1);
  width: 106px;
  &::placeholder {
    color: #94a3b8;
  }
`;

export const StyledButton = styled.button`
  width: 161.48px;
  height: 44.92px;
  border-radius: 20px;
  border: none;
  background: rgba(104, 109, 241, 1);
  color: white;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
`;

export const StyledSubscribe = styled.div``;

export const StyledSendIcon = styled.img`
  width: 23.91px;
  height: 26.04px;
  border-radius: 50%;
`;
