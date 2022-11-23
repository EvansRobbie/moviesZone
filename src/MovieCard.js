import React from 'react'

const MovieCard = (props) => {
  return (
    <div className="movie" key={props.id}>
      <div>
        <p>{props.Year}</p>
      </div>

      <div>
        <img src={props.Poster !== "N/A" ? props.Poster : "https://via.placeholder.com/400"} alt={props.Title} />
      </div>

      <div>
        <span>{props.Type}</span>
        <h3>{props.Title}</h3>
      </div>
    </div>
  )
}

export default MovieCard