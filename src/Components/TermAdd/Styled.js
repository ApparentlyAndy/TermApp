import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #030f32;
  border-right: 1px solid rgba(0, 0, 0, 0.25);
  position: relative;
`;

export const Title = styled.h1`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 4rem;
  color: ghostwhite;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const TermInput = styled.input`
  width: 80%;
  height: 4rem;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: none;
  transition: all 100ms ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 1);
  }
`;

export const AddButton = styled.button`
  width: 80%;
  height: 4rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  background-color: #fa860a;
  border: none;
  border-radius: 25px;
  color: ghostwhite;
  font-weight: 700;
  text-transform: uppercase;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 1);
  cursor: pointer;
  transition: transform 150ms ease-in-out;
  &:hover {
    transform: scale(1.015);
  }
  &:focus {
    outline: none;
  }
`;
