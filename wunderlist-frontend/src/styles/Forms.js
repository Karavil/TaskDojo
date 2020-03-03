import styled from "styled-components";
import { Input as SmoothInput, Button } from "@smooth-ui/core-sc";

export const Form = styled.form`
   width: 650px;
   padding: 30px 50px;
   margin: 0 auto;

   border: 2px solid ${({ theme }) => theme.colors.secondary};
   background: ${({ theme }) => theme.colors.primary};
   color: white;

   border-radius: 15px;
`;

export const Input = styled(SmoothInput)`
   width: 100%;
   border: 3px solid ${({ theme }) => theme.colors.background};
   background-color: white;
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
   border-width: 2px;
   border-color: ${({ theme }) => theme.colors.secondaryDark};

   color: white;

   font-weight: 700;
   font-size: 1.2rem;

   margin: 15px 0;

   &:hover,
   :not(:disabled):hover {
      color: white;
   }
`;

export const FormHeader = styled.h2`
   margin: 5px 0 20px;
   color: white;
`;
