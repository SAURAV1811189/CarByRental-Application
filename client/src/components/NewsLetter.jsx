const NewsLetter = () => {
  return (
    <div data-aos="fade-up" className="px-40">
        <section className=" text-white py-16 px-6 md:px-20 rounded-3xl my-16 shadow-xl">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl text-black font-bold">Subscribe to Our Newsletter</h2>
        <p className="text-lg tex text-indigo-600">
          Get updates on the latest vehicle deals, exclusive offers, and more — straight to your inbox!
        </p>

        <form className="flex flex-col border sm:flex-row justify-center items-center gap-4 mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 border px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-indigo-100 transition"
          >
            🚀 Subscribe
          </button>
        </form>
      </div>
    </section>
    </div>
  );
};

export default NewsLetter;
