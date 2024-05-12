import styled from 'styled-components';

export const ModalBox = styled.div`
  display: inline-flex;
  padding: 40px 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.1);

  h2 {
    color: #323f47;
    text-align: center;

    /* Mobile*/
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 120% */
    letter-spacing: -0.2px;
    width: 316px;
    color: rgba(50, 63, 71, 1);
  }

  p {
    color: #323f47;
    text-align: center;

    /* Mobile/Main text */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    letter-spacing: -0.14px;
    width: 296px;
  }
  .popular {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px;
  }
  .close {
    fill: ${({ theme }) => theme.color.green};
    cursor: pointer;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 516px;
    height: 244px;
  }

  h2 {
    font-size: 28px;
  }

  p {
    font-size: 18px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  button {
    display: flex;
    padding: 14px 129px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 30px;
    background: var(--Accent, #9be1a0);
    box-shadow: 0 0 40px rgb(8, 49, 29);
  }

  button:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.hoverButton};
  }

  button:active {
    box-shadow: ${({ theme }) => theme.boxShadow.activeButton};
  }

  .confirm {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.red};
  }

  .cancel {
    color: ${({ theme }) => theme.color.green};
    background-color: ${({ theme }) => theme.color.accent};
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 516px;
    margin-left: 200px;
    flex-direction: row-reverse;

    button {
      width: 170px;
      height: 60px;
      padding: 24px 30px 40px 30px;
    }
  }
`;
