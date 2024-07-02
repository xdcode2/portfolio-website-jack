import React from "react";

/**
 * Listens for window resize events and checks if the window's  width and height exceed specified target values.
 *
 * @param {Object} params
 * @param {number} params.targetX - The target width to compare against.
 * @param {number} params.targetY - The target height to compare against.
 * @returns {Object} An object containing boolean values indicating whether the window's
 * width and height have exceeded the specified targets.
 */

export const useResize = ({ targetX = 768, targetY = 768 }) => {
    const [resized, setResized] = React.useState({
        resizedX: false,
        resizedY: false,
    });

    React.useEffect(() => {
        const handleResize = () => {
            setResized(() => ({
                resizedX: window.innerWidth >= targetX,
                resizedY: window.innerHeight >= targetY,
            }));
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [targetX, targetY]);
    return resized;
};
