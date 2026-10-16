import { NavLink } from "react-router-dom";

export const MovieCard = ({currMovie}) => {
    const {Poster,Title, imdbID} = currMovie;
    return(
        <>
          <li>
            <div className="main-container">
                <div className="poster-container">
                    <img 
                    src={Poster} 
                    alt={imdbID} 
                    className="poster" 
                    />
                </div>
               
                    <h2 className="title">{Title}</h2>
                <div className="ticket-container">
                    <div className="ticket_content">
                        <NavLink to={`/movies/${imdbID}`}>
                            <button className="ticket_buy-btn">
                                Watch Now
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
          </li>
        </>
    )

}