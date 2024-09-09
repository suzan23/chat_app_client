import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup max={max}>
        {avatar.map((i, index) => {
          return (
            <Box width={"5rem"} height={"3rem"}>
              <Avatar
                key={Math.random() * 100}
                src={i}
                alt={`Avatar ${index}`}
                sx={{
                  width: "2rem",
                  height: "2rem",
                  position: "absolute",
                  left: {
                    xs: `${0.5 + index}rem`,
                    sm: `${index}rem`,
                  },
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
