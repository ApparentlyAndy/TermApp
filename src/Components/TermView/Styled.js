import styled from "styled-components";

export const Container = styled.div`
  flex: 3.5;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 5rem;
  overflow-y: auto;
  position: relative;
  z-index: 100;
`;
