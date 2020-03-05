import React from "react";

import styled from "styled-components";
import Lottie from "react-lottie";
import LoadingTasks from "../../assets/loading-tasks.json";

const defaultOptions = {
   loop: true,
   autoplay: true,
   animationData: LoadingTasks,
   rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
   }
};

const LoadingContainer = styled.div`
   padding: 20px 30px;
   width: 100%;

   border-radius: 0 0 10px 10px;

   background: ${({ theme }) => theme.colors.background};
`;

const Loading = () => {
   return (
      <LoadingContainer>
         <Lottie options={defaultOptions} height={"20%"} width={"20%"} />
      </LoadingContainer>
   );
};

export default Loading;
