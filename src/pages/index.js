import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stonepedia - Modern Redesign</title>
        <meta name="description" content="Redesigned homepage for Stonepedia." />
      </Head>
      <Navbar />
      <main className="bg-gray-100">
        <section className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('/hero.jpg')" }}>
          <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
            <h1 className="text-5xl font-bold">Welcome to Stonepedia</h1>
            <p className="mt-4 text-lg">Discover quality and elegance in every piece.</p>
            <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg">
              Explore Now
            </button>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center">About Us</h2>
            <p className="mt-4 text-center text-gray-700">
              Stonepedia brings you the finest collection of stones and designs to elevate your spaces.
            </p>
          </div>
        </section>

        <section className="py-12 bg-gray-200">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white p-4 shadow-lg rounded-lg">
                  <img src={`/product-${i + 1}.jpg`} alt="Product" className="w-full h-40 object-cover rounded-lg" />
                  <h3 className="mt-4 text-lg font-semibold">Product {i + 1}</h3>
                  <p className="text-gray-600">Elegant design and quality materials.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center">Testimonials</h2>
            <div className="mt-8 space-y-6">
              <div className="p-6 bg-white rounded-lg shadow">
                <p className="text-gray-700 italic">"Stonepedia transformed my living space. Highly recommended!"</p>
                <p className="mt-4 text-right text-gray-900 font-bold">- John Doe</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
