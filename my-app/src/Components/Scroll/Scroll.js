import React, { createContext, useContext } from 'react';

const ScrollContext = createContext();

export function useScroll() {
    return useContext(ScrollContext);
}

export function ScrollProvider({ children }) {
    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 100)
        }
    };

    return (
        <ScrollContext.Provider value={scrollToElement}>
            {children}
        </ScrollContext.Provider>
    );
}
