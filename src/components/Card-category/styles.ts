import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 2rem;
  border: 0.001rem solid ${({ theme }) => theme.colors.buttonActive};

  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 30rem;
  @media (min-width: 768px) {
    width: 30rem;
  }
`;

export const Actions = styled.div`
  margin-top: 1rem;
  svg:last-child {
    margin-left: 1rem;
  }

  svg {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
  }
`;
