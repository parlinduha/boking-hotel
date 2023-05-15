"use client"

import React, { useEffect, useState } from "react";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryLabel?: string; 
}

const Modal: React.FC<ModalProps> = ({
    isOpen, onClose, onSubmit, title, body,footer, actionLabel, disabled, secondaryLabel, secondaryAction
}) => {

    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    return (  );
}
 
export default Modal;