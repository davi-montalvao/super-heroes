import styled, { css } from "styled-components";

import { ButtonProps } from ".";

const variants = {
  secondary: css`
    border: 0.1rem solid ${({ theme }) => theme.colors.textGreen};
    background: transparent;
    :hover {
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.buttonActive};
    }
  `,

  danger: css`
    background: transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.error};

    :hover {
      background: ${({ theme }) => theme.colors.error};
      color: ${({ theme }) => theme.colors.error};
    }
  `,
};

export const ButtonContainer = styled.button<ButtonProps>`
  ${({ theme, variant, color, background, active }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${background || theme.colors.background};
    border: 0;
    padding: 0.8rem 2.4rem;
    border-radius: ${theme.radii.small};
    color: ${color || theme.colors.textGreen};
    transition: ${theme.transition.default};
    font-size: ${theme.fontSizes.default};
    font-weight: 700;

    * {
      transition: ${theme.transition.default};
    }

    ${active === true &&
    css`
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.buttonActive};
    `}

    ${active === false &&
    css`
      border: 0.1rem solid ${({ theme }) => theme.colors.textGreen};
      background: transparent;
    `}


    :disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `}
`;
