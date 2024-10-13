const HeroSection = () => {
  return (
    <div
      className="mx-auto flex flex-col h-screen justify-center items-center text-center p-10 bg-cover bg-center"
      style={{
        backgroundImage: 'url("/images/hero.jpg")', // Ganti dengan path gambar yang sesuai
      }}
    >
      <div>
        <p className="text-slate-950 font-bold tracking-widest mt-4 text-2xl">
          Welcome to Land Films
        </p>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-sky-800 via-sky-700 to-red-500 bg-clip-text text-transparent mb-1">
          Find your next movie
        </h1>
        <p className="text-slate-600 font-semibold p-2 rounded-lg">
          Find your next movie. Stream on your phone, tablet, laptop, and TV
          without paying more.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
