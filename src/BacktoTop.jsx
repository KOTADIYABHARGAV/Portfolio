import { useEffect, useState } from "react";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        setIsVisible(window.scrollY > 100);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        handleScroll(); // Run on first mount
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-4 right-2 z-100  dark:shadow-gray-50 shadow-gray-700 shadow-sm rounded-xl transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <button
                onClick={scrollToTop}
                aria-label="Back to Top"
                className={`dark:text-white text-black dark:border-white border-black rounded-full backdrop-blur-sm md:px-3 md:py-4 px-2 py-2 md:tracking-widest text-sm font-medium transition-all duration-300`}
                style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                }}
            >
                <span className="md:inline hidden">↑ BACK TO TOP</span>
                <span className="md:hidden inline">↑</span>
            </button>
        </div >
    );
};

export default BackToTopButton;

