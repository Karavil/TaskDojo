import styled from "styled-components";

const Container = styled.div`
   display: flex;
   flex-direction: ${props => props.flexDirection || "row"};
   width: 1200px;
`;

export default Container;
