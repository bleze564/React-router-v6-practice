const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTM0ZGZmYjlhNWFiZjVjMGExZmE2YTIxNWJjODNmMSIsIm5iZiI6MTc4MTE5NzIxMi4zMDU5OTk4LCJzdWIiOiI2YTJhZTk5Y2NhYTNkZGVhMjRhMTU4ODMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CLQsMIYNAvBedvb0usCp8XgvqAInLxeUZPu9Tefc0QU";

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

export async function getTrendingMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day",
    options,
  );
  return response.json();
}

export async function getMovieById(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}`,
    options,
  );
  return response.json();
}
export async function getMovieCast(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    options,
  );
  return response.json();
}
export async function getMovieReviews(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    options,
  );
  return response.json();
}
