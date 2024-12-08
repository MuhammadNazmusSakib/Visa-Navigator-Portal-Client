import React from "react";
import { Typewriter } from "react-simple-typewriter";

const WelcomeSection = () => {
    return (
        <div className="text-center px-4 py-20">
            <h1 className="text-4xl font-bold mb-4">Welcome to Visa Explorer!</h1>
            <p className="text-xl">
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
            <p className="text-xl ">
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
            <p className="text-xl">
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
