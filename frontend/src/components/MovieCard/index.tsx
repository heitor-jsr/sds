import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
/* o código <Link to = {}`/form/${movie.id}`}> faz parte do bootstrap e serve
para acessar o link de acordo com a variável em que o link está armazenado

 */

type Props = {
    movie: Movie;
}

function MovieCard({movie}:Props) {

    return (<div>
        <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
        <div className="dsmovie-card-bottom-container">
            <h3>{movie.title}</h3>
            <MovieScore />
            <Link to = {`/form/${movie.id}`}>
                <div className="btn btn-primary dsmovie-btn">Avaliar</div>
            </Link>    
        </div>
    </div>
    );
}

export default MovieCard;