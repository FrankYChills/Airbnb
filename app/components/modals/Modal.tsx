"use client";

import { useCallback, useEffect, useState } from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionlabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionlabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false); //close the modal
    setTimeout(() => {
      onClose();
    }, 300); //for animations
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div
        className="bg-neutral-800/70 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed z-50 inset-0
      outline-none focus:outline-none "
      >
        <div className="relative w-full md:w-4/6 lg:w-3/5 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto"></div>
      </div>
    </>
  );
};

export default Modal;
