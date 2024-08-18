import React from 'react';

export const useHandleScreenWidth = () => {
    const [innerWidth, setInnerWidth] = React.useState(0);

    React.useEffect(() => {
        const handleWindow = () => {
            setInnerWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleWindow);
        return () => {
           window.removeEventListener("resize",handleWindow)
        }
    }, [innerWidth, setInnerWidth])
    return {innerWidth}
};

