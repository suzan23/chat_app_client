import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";
import { transformImage } from "../../lib/features";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction={"row"}>
      <AvatarGroup max={max}>
        {avatar.map((i, index) => {
          return (
            <Box width={"5rem"} height={"3rem"} key={index}>
              <Avatar
                key={Math.random() * 100}
                src={transformImage(i)}
                alt={`Avatar ${index}`}
                sx={{
                  width: "3rem",
                  height: "3rem",

                  position: "absolute",
                  // left: {
                  //   xs: `${0.5 + index}rem`,
                  //   sm: `${index}rem`,
                  // },
                  //   border: "2px solid black",
                }}
              />
            </Box>
          );
        })}
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
