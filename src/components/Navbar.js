export default function Navbar() {
    return (
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-gray-900">Stonepedia</a>
          <div className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  