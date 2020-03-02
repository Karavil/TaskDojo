import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { Input, Button, Alert } from "@smooth-ui/core-sc";

const StyledForm = styled.form`
   display: flex;
   flex-direction: column;

   width: 650px;
   padding: 20px 50px;

   margin: 0 auto;

   border: 1px solid grey;
   border-radius: 15px;
`;

const StyledInput = styled(Input)`
   width: 100%;
`;

const FormInput = styled.div`
   margin: 10px 0;
`;

const AccountButtons = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`;
const StyledButton = styled(Button)`
   width: 49%;
   margin: 15px 0;
`;

const LoginForm = props => {
   const { register, handleSubmit, errors } = useForm();

   return (
      <StyledForm>
         <h2>Authenticate</h2>

         <FormInput>
            <StyledInput placeholder="Email" type="email" name="email" />
            <Alert variant="danger">
               This is a primary alert—check it out!
            </Alert>
         </FormInput>

         <FormInput>
            <StyledInput placeholder="Email" type="email" name="email" />
            <Alert variant="danger">
               This is a primary alert—check it out!
            </Alert>
         </FormInput>

         <AccountButtons>
            <StyledButton outline type="submit">
               Log In
            </StyledButton>
            <StyledButton type="submit">Register</StyledButton>
         </AccountButtons>
      </StyledForm>
   );
};

export default LoginForm;
