import styled from "styled-components";

const Container = styled.div`
   display: flex;
   flex-direction: ${props => props.flexDirection || "row"};
   width: 1200px;
`;

export const InsideContainer = styled.div`
   padding: 20px 30px;
   width: 100%;

   border-radius: 0 0 10px 10px;

   background: ${({ theme }) => theme.colors.background};
`;

export default Container;
