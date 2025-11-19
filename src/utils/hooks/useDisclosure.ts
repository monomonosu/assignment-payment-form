import { useCallback, useState } from "react";

type UseDisclosureType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useDisclosure = (initial = false): UseDisclosureType => {
  const [isOpen, setIsOpen] = useState(initial);

  const open = useCallback(() => setIsOpen(true), []);

  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, open, close };
};
