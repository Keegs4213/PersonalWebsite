export default function Navbar() {
    return (
      <div className="flex justify-between items-center py-4 px-8">
        <div className="flex space-x-4">
          <a href="/" className="text-gray-600 hover:text-black">Home</a>
          <a href="/about" className="text-gray-600 hover:text-black">About</a>
          <a href="/portfolio" className="text-gray-600 hover:text-black">Portfolio</a>
          <a href="/contact" className="text-gray-600 hover:text-black">Contact</a>
        </div>
      </div>
    );
  }
  