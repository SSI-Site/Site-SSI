import React, { useState, useRef } from 'react';

const Accordion = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);

    return (
        <div className="accordion-item">
            <div
                className="accordion-header"
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer"
                }}
            >
                <h6>{title}</h6>
                <span className='accordion-icon'>{open ? "−" : "+"}</span>
            </div>
            <div
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