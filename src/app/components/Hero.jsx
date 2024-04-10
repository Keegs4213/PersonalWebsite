import Typewriter from "./TypingEffect";
import "../style.css";
import Image from "next/image";


export default function Hero() {
  return (
<div className="flex justify-center items-center text-center" style={{ height: '700px' }}>
      
      <div>
        <h1 className="text-5xl mb-4" id="h1">
          Hello! My name is Keegan
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>

        <h2 className="text-xl text-blue-400">
          I am a: <br></br>
        
        </h2>
  <Typewriter />
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
        <a href="https://docs.google.com/document/d/e/2PACX-1vRBHdj3ywrr-NqcoCMzRi0V9NJAi7rGZROMAjVO5Wwqh3kNfYEcvkEOhEaG7dz3i-yWwSz4FvsbCk9R/pub" target="_blank">
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
          
        </div>
      </div>
    </div>
  );
}
