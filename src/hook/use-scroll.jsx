import React from "react";

/**
 * Listens for window scroll events and checks if the window's scroll position exceeds specified target values.
 *
 * @param {Object} params
 * @param {number} params.targetX - The target horizontal scroll position to compare against.
 * @param {number} params.targetY - The target vertical scroll position to compare against.
 * @returns {Object} An object containing boolean values indicating whether the window's
 * scroll position has exceeded the specified targets.
 */

export const useScroll = ({ targetX = 50, targetY = 50 }) => {
    const [scrolled, setScrolled] = React.useState({
        scrolledX: false,
        scrolledY: false,
    });

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(() => ({
                scrolledX: window.scrollX > targetX,
                scrolledY: window.scrollY > targetY,
            }));
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [targetX, targetY]);

    return scrolled;
};
