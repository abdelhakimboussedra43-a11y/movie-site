const movies = [
  {
    title: "The Dark Knight",
    year: "2008",
    genre: "Action • Crime • Drama",
    image:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    title: "Interstellar",
    year: "2014",
    genre: "Adventure • Drama • Sci-Fi",
    image:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    title: "Inception",
    year: "2010",
    genre: "Action • Sci-Fi • Thriller",
    image:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  },
  {
    title: "Avengers: Endgame",
    year: "2019",
    genre: "Action • Adventure • Sci-Fi",
    image:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0b0b0f]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold tracking-tight">
            MOVIE<span className="text-red-500">HUB</span>
          </h1>

          <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              Movies
            </a>
            <a href="#" className="hover:text-white">
              TV Shows
            </a>
            <a href="#" className="hover:text-white">
              Genres
            </a>
          </nav>

          <button className="rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/10">
            🔍 Search
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              Welcome to MovieHub
            </p>

            <h2 className="text-5xl font-black leading-tight md:text-7xl">
              Discover your next
              <span className="block text-red-500">
                favorite movie.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Discover movies and TV shows, explore popular titles, and find
              something new to watch every day.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-red-600 px-7 py-3 font-semibold hover:bg-red-700">
                Explore Movies
              </button>

              <button className="rounded-full border border-white/15 px-7 py-3 font-semibold hover:bg-white/10">
                Browse TV Shows
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
              Trending
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              Popular Movies
            </h3>
          </div>

          <a href="#" className="text-sm text-gray-400 hover:text-white">
            View all →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <article
              key={movie.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#121217] transition hover:-translate-y-1 hover:border-red-500/50"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="h-[360px] w-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="p-4">
                <h4 className="truncate text-lg font-bold">
                  {movie.title}
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  {movie.year}
                </p>

                <p className="mt-2 truncate text-xs text-gray-400">
                  {movie.genre}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Latest */}
      <section className="border-t border-white/10 bg-[#0e0e13]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
            Updated Daily
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            New Movies & TV Shows
          </h3>

          <p className="mt-4 max-w-2xl text-gray-400">
            New titles will appear here automatically once we connect the
            website to our movie database.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 MovieHub. All rights reserved.
      </footer>
    </main>
  );
}