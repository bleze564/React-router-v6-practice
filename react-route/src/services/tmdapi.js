const API_KEY = "3a34dffb9a5abf5c0a1fa6a215bc83f1";

export async function getTrendingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to load movies");
  }

  return response.json();
}
