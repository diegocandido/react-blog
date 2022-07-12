import { useEffect, useState } from 'react';
import { Container, Movie, MovieList } from './style';

function Home() {

  const imagePath = 'https://image.tmdb.org/t/p/w500'

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=328e30d97723b14cb927d5adfc722139&language=pt-BR`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
      console.log(data.results)
    })
  }, [])

  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
      {movies.map(movie => {
        return (
          <Movie key={movie.id}>
            
              <img src={`${imagePath}${movie.poster_path}`} alt="{movie.title}" />
            
            <span>{movie.title}</span>
          </Movie>
        )
      })}
      </MovieList>
    </Container>
  );
}

export default Home;