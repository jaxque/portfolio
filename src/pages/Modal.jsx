import '../stylesheets/modal.css'

import React, { useState, useEffect } from 'react'

export function Modal ({isOpen, onClose, imageSrc, caption}) {
    const [show, setShow] = useState(isOpen)

    useEffect(() => {
        if (isOpen) {
            setShow(true)
        }
        else {
            const timeout = setTimeout(() => setShow(false), 300)
            return () => clearTimeout(timeout)
        }
    }, [isOpen])

    // Exit out of modal image by pressing escape
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!show) return null

    return (
        <div className={`modal_backdrop ${isOpen ? 'fade-in' : 'fade-out'}`} onClick={onClose}>
            <button className="modal_close_btn" onClick={onClose}>×</button>

            <div className='modal_content' onClick={(e) => e.stopPropagation()}>
                <img src={imageSrc} className='modal_image'/>
            </div>
        </div>
    )
}