import Typewriter from "./TypingEffect"
import '../styles.css'

export default function Hero() {
  return (
    <div className="h-screen flex justify-center items-center text-center">
      <div>
        <h1 className="text-5xl mb-4">
          Hello! My name is Keegan
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>
        <h2 className="text-xl text-gray-600">I'm a <Typewriter/></h2>
        <button>Check my Resume</button>
      <button>LinkedIn</button>
      {/* add light and dark mode button */}
      </div>
    </div>
  );
}
