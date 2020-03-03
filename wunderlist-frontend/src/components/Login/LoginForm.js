import React from "react";
// import styled from 'styled-components';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Alert } from "@smooth-ui/core-sc";
import axios from "axios";
import { useHistory } from "react-router-dom";

import {
   Form,
   Input,
   InputDiv,
   ButtonBox,
   FormButton
} from "../../styles/Forms";

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

      // login request sends --> tasks page
      axios
         .post(baseUrl + "/login", {
            email: data.email,
            password: data.password
         })
         .then(res => {
            console.log(res.data);
            localStorage.setItem("AUTH_TOKEN", res.data.token);
            localStorage.setItem("USER_ID", res.data.id);
            history.push("/tasks");
         })
         .catch(err => {
            console.log("Login Error:", err.response);
         });
   };

   const onRegisterSubmit = data => {
      console.log("Register button! ", data);
      reset();

      axios
         .post(baseUrl + "/register", {
            email: data.email,
            password: data.password
         })
         .then(res => {
            console.log("Registration successful:", res.data);
            // registration includes token to login --> tasks page
            onLoginSubmit(data);
         })
         .catch(err => {
            console.log("Registration Error:", err.response);
         });
   };

   // routerHistory
   const history = useHistory();
   // baseUrl
   const baseUrl = "https://wunderlist7.herokuapp.com/api";

   return (
      <Form onSubmit={handleSubmit(onLoginSubmit)}>
         <h2>Authenticate</h2>

         <InputDiv>
            <Input
               placeholder="Email"
               type="email"
               name="email"
               ref={register}
            />
            {errors.email && (
               <Alert variant="danger">{errors.email.message}</Alert>
            )}
         </InputDiv>

         <InputDiv>
            <Input
               placeholder="Password"
               type="password"
               name="password"
               ref={register}
            />
            {errors.password && (
               <Alert variant="danger">{errors.password.message}</Alert>
            )}
         </InputDiv>

         <ButtonBox>
            <FormButton outline width="49%" type="submit">
               Log In
            </FormButton>
            <FormButton width="49%" onClick={handleSubmit(onRegisterSubmit)}>
               Register
            </FormButton>
         </ButtonBox>
      </Form>
   );
};

export default LoginForm;
