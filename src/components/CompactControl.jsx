import React, { useRef, useState, useEffect } from "react";
import {
    FaCog,
    FaMoon,
    FaSun,
    FaVolumeMute,
    FaVolumeUp,
    FaPlay,
    FaPause,
} from "react-icons/fa";

const VerticalToggleControls = () => {
    const audioRef = useRef(null);
    const [isControlOpen, setIsControlOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false); // default false
    const [isMuted, setIsMuted] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [volume, setVolume] = useState(1);
    const panelRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                panelRef.current &&
                !panelRef.current.contains(event.target)
            ) {
                setIsControlOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                panelRef.current &&
                !panelRef.current.contains(event.target)
            ) {
                setIsControlOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const handleVolumeChange = (e) => {
        const vol = parseFloat(e.target.value);
        const audio = audioRef.current;

        if (audio) {
            audio.volume = vol;
            audio.muted = vol === 0;
        }

        setVolume(vol);
        setIsMuted(vol === 0);
    };

    // Load theme preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        }
    }, []);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        const tryAutoplay = async () => {
            try {
                audio.muted = true; // Always start muted
                await audio.play();
                setIsPlaying(true);
                console.log("Audio autoplayed successfully.");
            } catch (err) {
                console.warn("Autoplay blocked. Waiting for user interaction.", err);

                // Retry after user interaction
                const enablePlayback = async () => {
                    try {
                        await audio.play();
                        audio.muted = false;
                        setIsMuted(false);
                        setIsPlaying(true);
                        console.log("Audio started after user interaction.");
                    } catch (error) {
                        console.error("Playback failed again:", error);
                    }

                    document.removeEventListener("click", enablePlayback);
                };

                document.addEventListener("click", enablePlayback);
            }
        };

        tryAutoplay();
    }, []);

    const toggleControls = () => {
        setIsControlOpen(!isControlOpen);
    };

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }

        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        const audio = audioRef.current;
        if (!audio) return;

        const newMuted = !isMuted;
        audio.muted = newMuted;
        setIsMuted(newMuted);
    };

    const toggleTheme = () => {
        const html = document.documentElement;
        const newTheme = !isDark;

        if (newTheme) {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }

        localStorage.setItem("theme", newTheme ? "dark" : "light");
        setIsDark(newTheme);
    };

    return (
        <div className="fixed bottom-6 left-6 z-[9999] flex flex-col items-center gap-3 pointer-events-auto">
            <audio ref={audioRef} src="/mixkit-classical-3-710.mp3" loop />

            {/* Control Panel */}
            {isControlOpen && (
                <div ref={panelRef} className="flex flex-col gap-3 mb-2 p-3 rounded-xl dark:shadow-gray-50 shadow-gray-700 backdrop-blur-sm shadow-sm transition-all">
                    {/* Play / Pause */}
                    <button
                        onClick={togglePlay}
                        className="text-gray-700 dark:text-white hover:text-green-400 text-xl"
                    >
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>

                    {/* Mute / Unmute */}
                    <div className="relative group flex flex-col items-center">
                        {/* Volume Icon */}
                        <button
                            onClick={toggleMute}
                            className="text-gray-700 dark:text-white hover:text-red-400 text-xl"
                        >
                            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                        </button>

                        {/* Volume Slider - show on hover */}
                        <div className="absolute -top-1 left-10 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-left">
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="w-28 accent-purple-400"
                            />
                        </div>
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="text-yellow-400 dark:text-white hover:text-yellow-500 text-xl"
                    >
                        {isDark ? <FaMoon /> : <FaSun />}
                    </button>
                </div>
            )}

            {/* Settings Button */}
            <button
                onClick={toggleControls}
                className="text-black dark:text-white dark:border-white border-2 border-black text-xl p-3 backdrop-blur-sm rounded-full transition"
            >
                <FaCog />
            </button>
        </div>
    );
};

export default VerticalToggleControls;
