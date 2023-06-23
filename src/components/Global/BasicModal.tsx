"use client";

import { Modal, Box } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
};

export default function BasicModal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Modal open={true}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}
