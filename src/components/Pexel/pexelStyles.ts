import styled from "styled-components";

export const Ul = styled.ul`
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  gap: 1em;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Li = styled.li`
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
`;
