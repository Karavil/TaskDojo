import React from "react";
import { useForm } from "react-hook-form";
import { Alert } from "@smooth-ui/core-sc";
import * as yup from "yup";
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
   name: yup.string().required("Please enter a name for your task."),
   description: yup.string("Please make sure to enter a password.")
});

const NewTaskForm = props => {
   const { register, handleSubmit, errors, reset } = useForm({
      validationSchema: FormSchema,
      mode: "onBlur"
   });
   return (
      <Form>
         <FormHeader>What's the task?</FormHeader>
         <InputDiv>
            <Input
               placeholder="Name of the task"
               type="text"
               name="name"
               ref={register}
            />
            {errors.email && (
               <Alert variant="danger">{errors.name.message}</Alert>
            )}
         </InputDiv>
         <InputDiv>
            <Input
               placeholder="Description"
               type="text"
               name="description"
               ref={register}
            />
            {errors.password && (
               <Alert variant="danger">{errors.description.message}</Alert>
            )}
         </InputDiv>
         <ButtonBox>
            <FormButton variant="secondary" type="submit">
               Add Task
            </FormButton>
         </ButtonBox>
      </Form>
   );
};

export default NewTaskForm;
