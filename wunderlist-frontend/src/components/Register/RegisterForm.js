import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Alert } from "@smooth-ui/core-sc";

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

const RegisterForm = props => {
   const { register, handleSubmit, errors, reset } = useForm({
      validationSchema: FormSchema,
      mode: "onBlur"
   });

   const onRegisterSubmit = data => {
      console.log("Register button! ", data);
      reset();
   };

   return (
      <Form onSubmit={handleSubmit(onRegisterSubmit)}>
         <h2>Register</h2>

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
            <FormButton type="submit">Register</FormButton>
         </ButtonBox>
      </Form>
   );
};

export default RegisterForm;
