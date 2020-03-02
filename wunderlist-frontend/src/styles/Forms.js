import styled from "styled-components";
import { Input as SmoothInput, Button } from "@smooth-ui/core-sc";

export const Form = styled.form`
   display: flex;
   flex-direction: column;

   width: 650px;
   padding: 20px 50px;

   margin: 0 auto;

   border: 1px solid grey;
   border-radius: 15px;
`;

export const Input = styled(SmoothInput)`
   width: 100%;
`;

export const InputDiv = styled.div`
   margin: 10px 0;
`;

export const ButtonBox = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`;

export const FormButton = styled(Button)`
   width: ${props => props.width || "100%"};
   margin: 15px 0;
`;
