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
   height: 70vh;

   display: flex;
   justify-content: center;
   align-items: center;

   width: 100%;
   border-radius: 0 0 10px 10px;
   background: ${({ theme }) => theme.colors.background};
`;

const Loading = () => {
   return (
      <LoadingContainer>
         <Lottie options={defaultOptions} height="auto" width={"27.5%"} />
      </LoadingContainer>
   );
};

export default Loading;
