import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Input, Button, Alert } from "@smooth-ui/core-sc";

// Style
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

//Yup form validation
const FormSchema = yup.object().shape({
   email: yup.string().required("Please enter an email for your account."),
   password: yup.string().required("Please make sure to enter a password.")
});

const LoginForm = props => {
   const { register, handleSubmit, errors, reset } = useForm({
      validationSchema: FormSchema,
      mode: "onBlur"
   });

   const onLoginSubmit = data => {
      console.log("Login Button! ", data);
      reset();
   };

   const onRegisterSubmit = data => {
      console.log("Register button! ", data);
      reset();
   };

   return (
      <StyledForm onSubmit={handleSubmit(onLoginSubmit)}>
         <h2>Authenticate</h2>

         <FormInput>
            <StyledInput
               placeholder="Email"
               type="email"
               name="email"
               ref={register}
            />
            {errors.email && (
               <Alert variant="danger">{errors.email.message}</Alert>
            )}
         </FormInput>

         <FormInput>
            <StyledInput
               placeholder="Password"
               type="password"
               name="password"
               ref={register}
            />
            {errors.password && (
               <Alert variant="danger">{errors.password.message}</Alert>
            )}
         </FormInput>

         <AccountButtons>
            <StyledButton outline type="submit">
               Log In
            </StyledButton>
            <StyledButton onClick={handleSubmit(onRegisterSubmit)}>
               Register
            </StyledButton>
         </AccountButtons>
      </StyledForm>
   );
};

export default LoginForm;
