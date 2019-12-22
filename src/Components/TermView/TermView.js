import React, { useContext } from "react";
import { Container } from "./Styled";
import TermContext from "../../Context/TermContext";
import Term from "../Term/Term";

const TermView = () => {
  const { terms, dispatch } = useContext(TermContext);

  const deleteTermHandler = id => {
    dispatch({ type: "REMOVE_TERM", id });
  };
  return (
    <Container>
      {terms.map((term, idx) => {
        return (
          <Term
            key={idx}
            term={term}
            listNo={idx + 1}
            deleteTerm={deleteTermHandler}
          />
        );
      })}
    </Container>
  );
};

export default TermView;
