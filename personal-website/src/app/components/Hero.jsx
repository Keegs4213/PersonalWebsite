import Typewriter from "./TypingEffect";
import "../style.css";
import Image from "next/image";


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

        <h2 className="text-xl text-blue-400">
          I am a: <br></br>
          <Typewriter />
        </h2>

        <div className="flex justify-center items-center mb-4">
          <Image
            src="/codingcartoon.svg"
            alt="a picture"
            width={400}
            height={300}
            className="codingCartoon"
          ></Image>
        </div>
        <div>
          
          <a href="https://drive.google.com/file/d/1ogu26_-CkmDKRrKxu2-3V5DdYn8RSnIy/view?usp=sharing" target="_blank">
          <button class="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-500 rounded-full">
  Check my Resume
</button>
          </a>
          &nbsp; &nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/keegan-greig/" target="_blank">
          <button class="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-500 rounded-full">
  Linked in
</button>
          </a>
          {/* add light and dark mode button */}
        </div>
      </div>
    </div>
  );
}
