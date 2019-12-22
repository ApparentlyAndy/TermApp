import React from "react";
import { Container, ListNo, Wrapper, TermText, DeleteIcon } from "./Styled";

const Term = ({ term, listNo, deleteTerm }) => {
  return (
    <Container>
      <ListNo>{listNo}</ListNo>
      <Wrapper>
        <TermText>{term.term}</TermText>
        <DeleteIcon
          src={require("../../Assets/remove.svg")}
          onClick={() => deleteTerm(term.id)}
        />
      </Wrapper>
    </Container>
  );
};

export default Term;
