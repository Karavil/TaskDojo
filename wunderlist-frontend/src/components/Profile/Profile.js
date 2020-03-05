import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Container from "../../styles/Container";
import { Button } from "@smooth-ui/core-sc";
import { FaUserCircle } from "react-icons/fa";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

const ProfileContainer = styled(Container)`
   background-color: ${({ theme }) => theme.colors.primary};
   border-radius: 3px;
`;

const CurrentInfo = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   align-items: center;

   padding: 50px 30px;

   h1 {
      margin: 0;
   }
`;

const AvatarInfo = styled.section`
   display: flex;
`;

const ProfileInfo = styled.section``;

const DefaultAvatar = styled(FaUserCircle)`
   fill: ${({ theme }) => theme.colors.secondary};
   font-size: 8.5rem;
   margin: 0 20px;
`;

const AvatarButtons = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

const Profile = () => {
   const [profile, setProfile] = useState({
      first_name: "First",
      last_name: "Last",
      age: "1",
      occupation: "Dummy"
   });

   // useEffect(() => {
   //    axiosWithAuth()
   //       .get("/profile")
   //       .then(res => {
   //          setProfile(res.data);
   //       })
   //       .catch(err => {
   //          console.log(err);
   //       });
   // });

   const createProfile = userData => {
      axiosWithAuth()
         .post("/profile", {
            first_name: "matthew",
            last_name: "bedard",
            age: 25,
            occupation: "developer"
         })
         .then(res => {
            setProfile(res.userData);
         })
         .catch(err => {
            console.log("Profile post error:", err);
         });
   };

   const editProfile = userData => {
      axiosWithAuth()
         .put("/profile/1")
         .then(res => {
            setProfile(res.userData);
         })
         .catch(err => {
            console.log("Profile put error:", err);
         });
   };

   const deleteProfile = userData => {
      axiosWithAuth()
         .delete("/delete/2")
         .then(res => {
            setProfile(res.userData);
         })
         .catch(err => {
            console.log("Profile delete error", err);
         });
   };
   return (
      <ProfileContainer>
         <CurrentInfo>
            <ProfileInfo>
               <h1>My Profile</h1>
               <p>
                  {profile.first_name && `${profile.first_name}`}
                  {profile.last_name && ` ${profile.last_name}`}
               </p>
               {profile.occupation && <p>{profile.occupation}</p>}
               {profile.age && <p>{profile.age} years old.</p>}
            </ProfileInfo>
            <AvatarInfo>
               <DefaultAvatar />
               <AvatarButtons>
                  <Button outline variant="secondary">
                     Change Avatar
                  </Button>
                  <Button outline variant="secondary">
                     Upload Avatar
                  </Button>
                  <Button outline variant="warning">
                     Delete Avatar
                  </Button>
               </AvatarButtons>
            </AvatarInfo>
         </CurrentInfo>
      </ProfileContainer>
   );
};

export default Profile;
