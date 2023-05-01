import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    flex-direction: unset;
    align-self: center;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 1rem;
`;

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.borderGray};
  padding: 1rem 1rem 1.6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 0 1.6rem;
    flex-direction: row;
    height: 7rem;
  }
`;

export const ButtonOption = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Footer = styled.div`
  justify-content: center;
  display: flex;
  padding-top: 1rem;
  gap: 1rem;
`;