import React, { useState, useRef, useId } from 'react';

const Accordion = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);
    const buttonId = useId();
    const contentId = `${buttonId}-content`;

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(o => !o);
        }
    };

    return (
        <div className="accordion-item">
            <div
                id={buttonId}
                role="button"
                tabIndex="0"
                aria-expanded={open}
                aria-controls={contentId}
                onClick={() => setOpen(o => !o)}
                onKeyDown={handleKeyDown}
                className="accordion-header"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                }}
            >
                <h6>{title}</h6>
                <span className="accordion-icon">{open ? "−" : "+"}</span>
            </div>
            <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                ref={contentRef}
                className="accordion-content"
                style={{
                    maxHeight: open ? contentRef.current?.scrollHeight : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)",
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Accordion;