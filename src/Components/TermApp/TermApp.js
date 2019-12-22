import React, { useReducer, useEffect } from "react";
import { Container } from "./Styled";
import TermAdd from "../TermAdd/TermAdd";
import TermView from "../TermView/TermView";
import TermAppReducer from "../../Reducers/TermAppReducer";
import TermContext from "../../Context/TermContext";

const TermApp = () => {
  useEffect(() => {
    let terms = window.localStorage.getItem("terms");
    dispatch({ type: "POPULATE_TERMS", terms: JSON.parse(terms) || [] });
    // window.localStorage.setItem("terms", JSON.stringify([]));
  }, []);

  const [terms, dispatch] = useReducer(TermAppReducer, []);

  useEffect(() => {
    window.localStorage.setItem("terms", JSON.stringify(terms));
  }, [terms]);

  return (
    <TermContext.Provider value={{ terms, dispatch }}>
      <Container>
        <TermAdd />
        <TermView />
      </Container>
    </TermContext.Provider>
  );
};

export default TermApp;
