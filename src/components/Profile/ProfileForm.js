import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import { Alert } from "@smooth-ui/core-sc";

import {
   Form,
   Input,
   InputDiv,
   ButtonBox,
   FormButton,
   FormHeader
} from "../../styles/Forms";

const StyledProfileForm = styled(Form)`
   padding: 0;
   border: none;
`;

//Yup form validation
const FormSchema = yup.object().shape({
   first_name: yup.string().required("Please enter your first name."),
   last_name: yup.string().required("Please enter your last name."),
   occupation: yup.string(),
   age: yup.string().notRequired()
});

const ProfileForm = props => {
   const { register, handleSubmit, errors } = useForm({
      validationSchema: FormSchema
   });

   return (
      <StyledProfileForm onSubmit={handleSubmit(props.createProfile)}>
         <FormHeader>Create a dōjō profile!</FormHeader>
         <InputDiv>
            <Input
               placeholder="First Name"
               type="text"
               name="first_name"
               ref={register}
            />
            {errors.first_name && (
               <Alert variant="danger">{errors.first_name.message}</Alert>
            )}
         </InputDiv>

         <InputDiv>
            <Input
               placeholder="Last Name"
               type="text"
               name="last_name"
               ref={register}
            />
            {errors.last_name && (
               <Alert variant="danger">{errors.last_name.message}</Alert>
            )}
         </InputDiv>

         <InputDiv>
            <Input
               placeholder="Occupation"
               type="text"
               name="occupation"
               ref={register}
            />
            {errors.occupation && (
               <Alert variant="danger">{errors.occupation.message}</Alert>
            )}
         </InputDiv>

         <InputDiv>
            <Input placeholder="Age" type="text" name="age" ref={register} />
            {errors.age && <Alert variant="danger">{errors.age.message}</Alert>}
         </InputDiv>

         <ButtonBox>
            <FormButton variant="secondary" type="submit">
               Submit
            </FormButton>
         </ButtonBox>
      </StyledProfileForm>
   );
};

export default ProfileForm;
