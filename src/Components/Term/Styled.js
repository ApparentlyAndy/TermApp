import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.15rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  border-right: 1px solid rgba(0, 0, 0, 0.25);
  transition: all 150ms ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export const ListNo = styled.p`
  flex: 1;
  height: 100%;
  width: 100%;
  font-size: 3.5rem;
  color: rgba(0, 0, 0, 0.1);
  font-weight: 700;
  transition: all 150ms ease-in-out;
  ${Container}:hover & {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const Wrapper = styled.div`
  flex: 5;
  display: flex;
  width: 100%;
  align-items: center;
`;

export const TermText = styled.p`
  flex: 4;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  transition: all 150ms ease-in-out;
  ${Container}:hover & {
    color: rgba(255, 255, 255, 1);
  }
`;

export const DeleteIcon = styled.img`
  height: 2rem;
  flex: 1;
  opacity: 0.1;
  transition: opacity 150ms ease-in-out;
  cursor: pointer;
  ${Container}:hover & {
    opacity: 1;
  }
`;
