"use client"

import React from "react";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondarySecond?: () => void;
    secondaryLabel?: string; 
}

const Modal = () => {
    return (  );
}
 
export default Modal;