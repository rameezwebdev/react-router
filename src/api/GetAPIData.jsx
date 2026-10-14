export const getAPIDATA = async () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

   try {
    const respon = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=titanic&page=1`
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