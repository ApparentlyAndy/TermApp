import React, { useContext, useState } from "react";
import { Container, Title, Form, TermInput, AddButton } from "./Styled";
import TermContext from "../../Context/TermContext";

const TermAdd = () => {
  const [term, setTerm] = useState("");
  const { terms, dispatch } = useContext(TermContext);

  const InputChange = e => {
    setTerm(e.target.value);
  };

  const AddTermHandler = () => {
    dispatch({ type: "ADD_TERM", id: terms.length, term: term });
    setTerm("");
  };

  const EnterHandler = e => {
    if (e.keyCode === 13) {
      dispatch({ type: "ADD_TERM", id: terms.length, term: term });
      setTerm("");
    }
  };

  return (
    <Container>
      <Title>TermApp</Title>
      <Form>
        <TermInput
          placeholder="Enter term"
          onChange={InputChange}
          onKeyUp={EnterHandler}
          value={term}
        />
        <AddButton onClick={AddTermHandler}>Add Term</AddButton>
      </Form>
    </Container>
  );
};

export default TermAdd;
