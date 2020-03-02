import React from "react";
import styled from "styled-components";

import LoginForm from "./LoginForm";

const LoginWrapper = styled.div`
   height: 90vh;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Login = () => {
   return (
      <LoginWrapper>
         <LoginForm />
      </LoginWrapper>
   );
};

export default Login;
