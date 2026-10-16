export const getMovieDetail = async ({ params }) => {
  const id = params.movieID;  
  const KEY = import.meta.env.VITE_API_KEY;

   try {
    const respon = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${KEY}`
    );

    const result = await respon.json();

    if (result.Response === "False") {
      throw new Error(result.Error);
    }

    return result;
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};