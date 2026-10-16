import { useLoaderData, useNavigate } from "react-router-dom"
import { MovieCard } from "../component/UI/Card";
import '../component/UI/cardStyle.css'

export const Movies = () => {
    const movieData = useLoaderData();
    return<>
        <ul className="container grid grid-four--cols">
            {
                movieData?.Search?.map((curr) => {
                 return <MovieCard  key={curr.imdbID} currMovie={curr} />
                })
            }
        </ul>
    </>
}