import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import styled from "styled-components";
import { FaUserAstronaut } from "react-icons/fa";

const StyledDropzone = styled.section`
   width: 40vw;

   background: ${({ theme }) => theme.colors.secondary};

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;

   padding: 10px 30px 30px;

   h3 {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 400;
   }

   &:hover {
      cursor: pointer;
   }
`;

const Icon = styled(FaUserAstronaut)`
   fill: ${({ theme }) => theme.colors.primary};
   font-size: 64px;
`;
function MyDropzone(props) {
   const onDrop = useCallback(acceptedFiles => {
      console.log(acceptedFiles[0]);
      props.uploadAvatar(acceptedFiles[0]);
   }, []);

   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop
   });

   return (
      <StyledDropzone {...getRootProps()}>
         <input {...getInputProps()} />
         {isDragActive ? (
            <h2>Drop it here...</h2>
         ) : (
            <>
               <h3>
                  <b>Drop</b> your avatar here, or <b>click</b> to select an
                  image file.
               </h3>
               <Icon />
            </>
         )}
      </StyledDropzone>
   );
}

export default MyDropzone;
