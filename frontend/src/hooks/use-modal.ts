import { useState } from "react";

export const useModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);
  const modalToggle = () => setOpen((prev) => !prev);

  return { open, modalOpen, modalClose, modalToggle };
};
