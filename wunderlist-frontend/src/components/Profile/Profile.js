import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Button } from "@smooth-ui/core-sc";
import { FaUserCircle } from "react-icons/fa";
import Container from "../../styles/Container";

import LoadingAnimation from "../Animations/Loading";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

const StyledProfile = styled.section`
   background-color: ${({ theme }) => theme.colors.primary};
   border-radius: 0 0 10px 10px;

   width: 100%;
   padding: 30px;
`;

const CurrentInfo = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   align-items: flex-start;

   h1 {
      margin: 0 0 10px 0;
   }

   p {
      margin: 0;
      font-size: 1.1rem;
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

const ProfileTab = styled.div`
   height: 54px;

   background: ${({ theme }) => theme.colors.secondary};

   border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
   border-radius: 5px 5px 0 0;

   display: flex;
   align-items: center;

   padding: 0 30px;

   span {
      font-size: 1.333rem;
      font-weight: 600;
      margin: 0;
      color: ${({ theme }) => theme.colors.primary};
   }
`;

const Profile = () => {
   const [profile, setProfile] = useState({});
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      axiosWithAuth()
         .get("/profile")
         .then(res => {
            if (res.data.profile.length >= 0) {
               setProfile(res.data.profile[1]);
            }
            setTimeout(() => {
               setLoading(false);
            }, 1000);
         })
         .catch(err => {
            console.log(err);
         });
   }, []);

   const createProfile = user => {
      axiosWithAuth()
         .post("/profile", {
            first_name: user.first_name || "",
            last_name: user.last_name || "",
            age: user.age || null,
            occupation: user.occupation || ""
         })
         .then(res => {
            console.log("Created profile:", res.data);
            setProfile(res.data.profile);
         })
         .catch(err => {
            console.log("Profile post error:", err);
         });
   };

   const editProfile = user => {
      axiosWithAuth()
         .put("/profile/1", {
            ...profile,
            ...user
         })
         .then(res => {
            setProfile(profile => {
               const newProfile = {
                  ...profile,
                  ...res.data.newProfile
               };
               console.log("new", newProfile);
               return newProfile;
            });
         })
         .catch(err => {
            console.log("Profile put error:", err);
         });
   };

   const deleteProfile = userData => {
      axiosWithAuth()
         .delete("/delete/1")
         .then(res => {
            console.log("Deleted profile:", res.data);
            setProfile({});
         })
         .catch(err => {
            console.log("Profile delete error", err);
         });
   };

   console.log(profile);
   return (
      <Container flexDirection="column">
         <ProfileTab>
            <span>Profile Information</span>
         </ProfileTab>
         {loading && <LoadingAnimation />}
         {!loading && (
            <StyledProfile>
               <CurrentInfo>
                  <ProfileInfo>
                     <h1>{`${profile.first_name} ${profile.last_name}`}</h1>
                     <p>Occupation: {profile.occupation || "Unknown"}</p>
                     {profile.age && <p>{profile.age} years old</p>}
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
            </StyledProfile>
         )}
      </Container>
   );
};

export default Profile;
