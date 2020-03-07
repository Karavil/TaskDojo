import React, { useState } from "react";
import Lottie from "react-lottie";
import FloatingNinja from "../../assets/floating-ninja.json";

import Modal from "react-modal";
import ModalStyle from "../../styles/ModalStyle";
import NewTaskForm from "../TaskForms/NewTask";

import styled from "styled-components";
import { Button } from "@smooth-ui/core-sc";
import { InsideContainer } from "../../styles/Container";

const defaultOptions = {
   loop: true,
   autoplay: true,
   animationData: FloatingNinja,
   rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
   }
};

const FirstTaskButton = styled(Button)`
   width: 30%;
   margin: 30px 0 0;

   font-weight: 600;

   position: relative;
`;
const Content = styled(InsideContainer)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   height: 70vh;
   padding-bottom: 7.5vh;

   h2 {
      text-align: center;
      font-size: 1.5rem;
      margin: 0;
   }

   p {
      margin: 5px;
      font-size: 1.1rem;
   }
`;

const NoTasks = ({ taskFunctions }) => {
   const [modalIsOpen, setIsOpen] = useState(false);

   function openModal() {
      setIsOpen(true);
   }

   function closeModal() {
      setIsOpen(false);
   }

   return (
      <>
         <Content>
            <Lottie
               isClickToPauseDisabled={true}
               options={defaultOptions}
               height={"auto"}
               width={"500px"}
            />

            <h2>
               You don't have any tasks. Got some goals in mind? It's time to
               start now!
            </h2>
            <p>Your tasks are synchronized across all devices and platforms.</p>
            <FirstTaskButton onClick={openModal} variant="secondary">
               Create Task
            </FirstTaskButton>
         </Content>
         <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={ModalStyle}
         >
            <NewTaskForm
               taskFunctions={taskFunctions}
               closeModal={closeModal}
            />
         </Modal>
      </>
   );
};

export default NoTasks;
