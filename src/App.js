import React from 'react';
import styled from "styled-components";

import FormComponent from "./components/FormComponent";

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <AppWrapper>
      <FormComponent
        color="#906CD7"
      />
    </AppWrapper>
  );
}

export default App;
