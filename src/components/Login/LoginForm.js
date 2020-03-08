import React from "react";
// import styled from 'styled-components';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import { Alert } from "@smooth-ui/core-sc";

import axios from "axios";
import { BASE_API_URL } from "../../utils/Constants";

import {
   Form,
   Input,
   InputDiv,
   ButtonBox,
   FormButton,
   FormHeader
} from "../../styles/Forms";

//Yup form validation
const FormSchema = yup.object().shape({
   email: yup.string().required("Please enter an email for your account."),
   password: yup.string().required("Please make sure to enter a password.")
});

const LoginForm = () => {
   const { register, handleSubmit, errors, reset } = useForm({
      validationSchema: FormSchema,
      mode: "onBlur"
   });

   const onLoginSubmit = data => {
      console.log("Login Button! ", data);
      // login request sends --> tasks page
      axios
         .post(BASE_API_URL + "/login", {
            email: data.email,
            password: data.password
         })
         .then(res => {
            reset();
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
      axios
         .post(BASE_API_URL + "/register", {
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

   /**
    * Demo Content
    */
   const demoSubmit = () => {
      let random = "";
      let nums = "0123456789abcABC";
      for (let i = 0; i < 15; i++) {
         random += nums[Math.floor(Math.random() * nums.length)];
      }
      console.log(random);
      const data = {
         email: random + "@demo.com",
         password: random
      };
      alert(
         `You are being logged in. Remember, you will lose all your tasks after logging out with a demo account. Please create a real account to access your tasks across other devices and browsers.`
      );
      onRegisterSubmit(data);
   };

   const DemoButton = styled(FormButton)`
      margin: -5px 0 0;
   `;

   // routerHistory
   const history = useHistory();

   return (
      <Form onSubmit={handleSubmit(onLoginSubmit)}>
         <FormHeader>Sign in to continue.</FormHeader>

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
            <FormButton outline variant="secondary" width="49%" type="submit">
               Sign In
            </FormButton>
            <FormButton
               variant="secondary"
               width="49%"
               onClick={handleSubmit(onRegisterSubmit)}
            >
               Register
            </FormButton>
         </ButtonBox>
         <DemoButton variant="secondary" onClick={() => demoSubmit()}>
            Try Demo
         </DemoButton>
      </Form>
   );
};

export default LoginForm;
