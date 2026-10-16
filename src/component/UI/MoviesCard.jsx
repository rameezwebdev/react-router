import { NavLink, useLoaderData, useNavigate } from "react-router-dom"
import './movieDetail.css';

const MoviesDetail = () => {
    const detail = useLoaderData();
     const nav = useNavigate();
    const {Poster,Title,Genre,Plot,BoxOffice,Country} = detail;
    console.log(detail);

    const handleNavegate = () => {
        nav(-1);
    }

  return (
       <div className="movie-detail-container">
  <div className="movie-detail-card">
    <div className="movie-detail__media">
      <img 
        src={Poster} 
        className="movie-detail__image" 
        alt={Title} 
      />
    </div>
    
    <div className="movie-detail__info">
      <h1 className="movie-detail__title">{Title}</h1>
      <span className="movie-detail__genre">{Genre}</span>
      <p className="movie-detail__plot"><strong>Plot:</strong> {Plot}</p>
      
      <div className="movie-detail__action">
        <button onClick={handleNavegate} className="movie-detail__btn btn2">Back</button>
        <button className="movie-detail__btn">Watch Now</button>
      </div>
    </div>
  </div>
</div>



  )
}

export default MoviesDetail
