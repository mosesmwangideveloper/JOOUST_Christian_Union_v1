import { useState } from "react";

export default function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return { isOpen, toggleMenu, closeMenu };
}
