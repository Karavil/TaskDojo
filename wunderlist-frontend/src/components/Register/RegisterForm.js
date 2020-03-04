import React from "react";
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
   FormButton,
   FormHeader
} from "../../styles/Forms";

//Yup form validation
const FormSchema = yup.object().shape({
   email: yup.string().required("Please enter an email for your account."),
   password: yup.string().required("Please make sure to enter a password.")
});

const RegisterForm = props => {
   const { register, handleSubmit, errors, reset } = useForm({
      validationSchema: FormSchema,
      mode: "onBlur"
   });

   const onRegisterSubmit = data => {
      console.log("Register button! ", data);
      // complete registration request sends to profile page
      // register button to redirect to 'register page' for completion or remain on 'login page' ?
      axios
         .post(baseUrl + "/register", {
            email: data.email,
            password: data.password
         })
         .then(res => {
            console.log(res.data);
            history.push("/login");
            reset();
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
      <Form onSubmit={handleSubmit(onRegisterSubmit)}>
         <FormHeader>Register</FormHeader>
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
            <FormButton variant="secondary" type="submit">
               Register
            </FormButton>
         </ButtonBox>
      </Form>
   );
};

export default RegisterForm;
