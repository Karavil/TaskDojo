// import React from "react";
// import * as yup from "yup";

// import {
//    Form,
//    Input,
//    InputDiv as InputContainer,
//    ButtonBox,
//    FormButton,
//    FormHeader
// } from "../../styles/Forms";

// // Yup form validation
// const FormSchema = yup.object().shape({
//    image: yup.string().required("Please upload an image for your avatar")
// });

// const NewAvatarForm = props => {
//    const { register, handleSubmit, errors } = useForm({
//       validationSchema: FormSchema,
//       defaultValues: {
//          task: task.task || "",
//          description: task.description || "",
//          due_date: formatEpoch(task.due_date)
//       }
//    });

//    return (
//       <Form onSubmit={handleSubmit()}>
//          <FormHeader>Upload Avatar Image</FormHeader>
//          <InputContainer>
//             <Input
//                placeholder="Name of the task"
//                type="text"
//                name="task"
//                ref={register}
//             />
//             {errors.image && (
//                <Alert variant="danger">{errors.image.message}</Alert>
//             )}
//          </InputContainer>

//          <ButtonBox>
//             <FormButton variant="secondary" type="submit">
//                Submit
//             </FormButton>
//          </ButtonBox>
//       </Form>
//    );
// };

// export default NewAvatarForm;
