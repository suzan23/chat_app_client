import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { users_data } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
  const [members, setMembers] = useState(users_data);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const submitHandler = () => {
    console.log("submitted");
  };
  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };

  const closeHandler = () => {
    setSelectedMembers([]);
    setMembers([]);
    console.log("close");
  };
  const addMemberSubmitHandler = () => {
    console.log("added member");
    closeHandler();
  };
  return (
    <Dialog open>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {users_data.length > 0 ? (
            users_data.map((item) => (
              <UserItem
                key={item?._id}
                user={item}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(item._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={isLoadingAddMember}
            onClick={addMemberSubmitHandler}
          >
            Submit Changes
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
