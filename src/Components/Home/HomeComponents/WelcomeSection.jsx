import React from "react";
import { Typewriter } from "react-simple-typewriter";

const WelcomeSection = () => {
    return (
        <div className="text-center py-20 light:bg-blue-100 dark:bg-gray-800">
            <h1 className="text-4xl font-bold mb-4">Welcome to Visa Explorer!</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
                <Typewriter
                    words={[
                        "Find the perfect visa for your destination!",
                        // "Your dream journey starts here.",
                        // "Hassle-free visa applications."
                    ]}
                    loop={5}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300">
                <Typewriter
                    words={[

                        "Your dream journey starts here.",
                        // "Hassle-free visa applications."
                    ]}
                    loop={5}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300">
                <Typewriter
                    words={[
                        // "Find the perfect visa for your destination!",
                        // "Your dream journey starts here.",
                        "Hassle-free visa applications."
                    ]}
                    loop={5}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </p>
        </div>
    );
};

export default WelcomeSection;
