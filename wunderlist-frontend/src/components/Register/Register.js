import React from "react";
import styled from "styled-components";

import RegisterForm from "./RegisterForm";

const RegisterWrapper = styled.div`
   height: 90vh;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Register = () => {
   return (
      <RegisterWrapper>
         <RegisterForm />
      </RegisterWrapper>
   );
};

export default Register;
