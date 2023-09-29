import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  // Untuk hit API database dari TMDB
  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjA5NjYyZDcwNDI5ODFhNThkNThiNjljYTBiZDc0OCIsInN1YiI6IjY1MTQyMzIwOWI4NjE2MDBmZjY3OTU1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F7fbXCr5b6imvT0wId4a4eLiSzo5U_nWEUlTRMFKdfw",
          },
        });
        const { data } = response;
        console.log(data);
      } catch (error) {
        alert(error);
      }
    };
    getPopularMovies();
  }, []);

  return;
};

export default Home;
