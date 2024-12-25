import { forwardRef, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, open }) {
  const dialog = useRef();

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
