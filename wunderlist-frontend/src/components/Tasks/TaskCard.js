import React, { useState } from "react";

import Modal from "react-modal";
import ModalStyle from "../../styles/ModalStyle";
import EditTaskForm from "../TaskForms/EditTask";

import styled from "styled-components";
import { GenreTag } from "../Tags/Tags";

const StyledTaskCard = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;

   padding: 8px 20px;
   margin: 20px 0;

   min-height: 62px;

   background: ${({ theme }) => theme.colors.primary};
   color: white;
   border-radius: 3px;

   box-shadow: 0 0 2px rgba(0, 0, 0, 0.22), 0 1px 2px rgba(0, 0, 0, 0.34);
   transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

   &:hover {
      cursor: pointer;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25), 0 3px 5px rgba(0, 0, 0, 0.22);
   }

   h3,
   p {
      margin: 5px 0;
   }

   p {
      color: ${({ theme }) => theme.colors.info};
   }
`;

const TaskInfo = styled.div`
   margin: 0 50px;
`;

const Left = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
`;

const Right = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-end;
`;

const TaskCard = ({ task, taskFunctions }) => {
   const [modalIsOpen, setIsOpen] = useState(false);

   function openModal() {
      setIsOpen(true);
   }

   function closeModal() {
      setIsOpen(false);
   }

   const Tags = task.tags.map((tag, index) => {
      return (
         <GenreTag key={index} outline variant={tag.color}>
            {tag.genre}
         </GenreTag>
      );
   });

   return (
      <>
         <StyledTaskCard onClick={openModal}>
            <Left>
               <input type="checkbox" value={task.complete} />
               <TaskInfo>
                  <h3>{task.name}</h3>
                  <p>{task.description}</p>
               </TaskInfo>
            </Left>
            <Right>{Tags}</Right>
         </StyledTaskCard>
         <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={ModalStyle}
         >
            <EditTaskForm
               task={task}
               taskFunctions={taskFunctions}
               closeModal={closeModal}
            />
         </Modal>
      </>
   );
};

export default TaskCard;
