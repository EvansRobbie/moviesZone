import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=cd3e7c20"
function App() {

    const [movies, setMovies] = useState([])

    const [searchTitle, setSearchTitle] = useState("")

    function searchMovies(title){
      fetch(`${API_URL}&s=${title}`)
      .then(res => res.json())
      .then(data => setMovies(data.Search))
      
    }
    const handleChange = (e) =>{
      setSearchTitle(e.target.value)
    } 
    const movieElement = movies?.map((movie) => (
      <MovieCard {...movie}/>
    ))

    useEffect(() =>{
      searchMovies("Batman")
    },[])
    return (
      <div className="App">
        <h1>MovieZone</h1>
        <div className='search'>
      <input placeholder="Movie Name" onChange={handleChange}/>
      <button onClick={() => searchMovies(searchTitle)}>Search</button>
      </div>
      {movies?.length > 0 ? (
          <div className="container">
            {movieElement}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    );
  }

export default App;
