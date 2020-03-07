import React from "react";

import styled from "styled-components";
import Lottie from "react-lottie";
import { InsideContainer } from "../../styles/Container.js";
import LoadingTasks from "../../assets/loading-tasks.json";

const defaultOptions = {
   loop: true,
   autoplay: true,
   animationData: LoadingTasks,
   isClickToPauseDisabled: true,
   rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
   }
};

const LoadingContainer = styled(InsideContainer)`
   height: 70vh;
   padding: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   overflow: hidden;
`;

const Loading = () => {
   return (
      <LoadingContainer>
         <Lottie
            isClickToPauseDisabled={true}
            options={defaultOptions}
            width={"400px"}
            height={"auto"}
         />
      </LoadingContainer>
   );
};

export default Loading;
