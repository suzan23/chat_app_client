import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import moment from "moment";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />

      <ProfileCard heading={"Bio"} text="Hello" />
      <ProfileCard
        heading={"Username"}
        text="suzan_jaipuri"
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading={"Name"} text="Suzan jaipuri" Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment("2024-05-04T18:30:00.000Z").from()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      color={"white"}
      textAlign={"center"}
    >
      {Icon && Icon}
      <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography variant="caption" color="gray">
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;
