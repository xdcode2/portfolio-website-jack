import React from "react";

export const useClickOutside = (ref, callback) => {
    React.useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!ref?.current?.contains(event.target)) {
                if (typeof callback === "function") callback(event);
            }
        };

        window.addEventListener("mousedown", handleOutsideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [callback, ref]);
};
