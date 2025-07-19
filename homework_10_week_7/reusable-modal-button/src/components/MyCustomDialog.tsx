import { useRef, type PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { useEffect } from "react";

type MyCustomDialogProps = {
  isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

export default function MyCustomDialog({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<MyCustomDialogProps>) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialogRef.current?.showModal();
      dialogRef.current?.focus();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog ref={dialogRef} open>
      <p>I'm dialog</p>
      {children}
      <button onClick={onClose}>close X</button>
    </dialog>,
    document.getElementById("modal-root")!
  );
}
