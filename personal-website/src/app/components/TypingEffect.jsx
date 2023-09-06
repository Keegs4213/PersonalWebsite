import React from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
    return (
      <Typewriter
        options={{
          strings: [
            "Software Engineer",
            "Software Developer",
            "Full stack Developer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    );
  }
