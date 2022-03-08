import React from "react";
import styled, { useTheme } from "styled-components";
import { CloseIcon } from "../../components/Svg";
import { ButtonSquare } from "../../components/ButtonSquare";
import { FarmApe } from "../../components/Image";
import { MarketModalProps } from "./types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ theme }) => theme.zIndices.modal - 5};
`;
const StyledModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white2};
  color: ${({ theme }) => theme.colors.text};
  z-index: ${({ theme }) => theme.zIndices.modal};

  ${({ theme }) => theme.mediaQueries.md} {
    width: 80%;
    max-width: 900px;
    height: 500px;
    max-height: 500px;
    border-radius: 20px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;
const ModalHeader = styled.div`
  display: flex;
  flex-direction: column-reverse;
  .left-header-con {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    align-self: center;
  }
`;
const LeftHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 1.5em;
  }
`;
const Title = styled.h5`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  line-height: 24px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 22px;
    line-height: 30px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 30px;
    line-height: 30px;
  }
`;
const Description = styled.p`
  margin-top: 1em;
  font-weight: 500;
  text-align: center;
  font-size: 16px;
  line-height: 18px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
    line-height: 24px;
  }
`;
const CloseButton = styled.button`
  width: 70px;
  height: 70px;
  align-self: flex-end;
  border: none;
  background: transparent;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    position: absolute;
    right: 0;
    top: 0;
  }
`;
const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  a {
    color: ${({ theme }) => theme.colors.yellow};
    text-decoration: underline;
    font-size: 14px;
    border: none;
    background: transparent;
    padding: 0;
    text-transform: uppercase;
    &:hover {
      cursor: pointer;
    }
  }
  button {
    text-transform: uppercase;
    margin-top: 10px;
  }
`;

const StyledButton = styled(ButtonSquare)`
  width: 274px;
  height: 44px;
  padding: 10px 20px;
  font-weight: 700;

`;

const MarketModal: React.FC<MarketModalProps> = ({ title, description, onDismiss, startEarning, children }) => {
  const theme = useTheme();


  return (
    <Container>
      <StyledModal>
        <ModalHeader>
          <div className="left-header-con">
            <LeftHeader>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </LeftHeader>

            {/* <FarmApeWrapper>
              <FarmApe />
            </FarmApeWrapper> */}
          </div>

          <CloseButton onClick={onDismiss}>
            <CloseIcon color={theme.isDark ? "#FFF" : "primary"} width="30px" fontWeight="bold" />
          </CloseButton>
        </ModalHeader>

        {children}

        <ModalFooter>
          <StyledButton onClick={startEarning}>
            Start Earning
          </StyledButton>
        </ModalFooter>
      </StyledModal>
    </Container>
  );
};

MarketModal.defaultProps = {
  onDismiss: () => null,
  startEarning: () => null,
};

export default MarketModal;
