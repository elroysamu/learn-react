import { useEffect, useState } from "react";


export const useOnlineStatus = () => {
    console.log("useOnlineStatus rendering");
    const [isOnline, setIsOnline] = useState(true);

    const handleOnline = () => {
        setIsOnline(true);
    };

    const handleOffline = () => {
        setIsOnline(false);
    };

    useEffect(() => {
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            console.log("Cleaning up event listeners");
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return isOnline;
}