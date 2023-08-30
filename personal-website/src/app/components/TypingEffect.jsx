import React from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
    return (
      <Typewriter
        options={{
          strings: [
            "Junior Software Engineer",
            "Junior Software Developer",
            "Web Dev",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    );
  }
