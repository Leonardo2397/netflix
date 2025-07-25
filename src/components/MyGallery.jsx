import React, { useEffect, useState } from 'react';

const MyGallery = ({ searchTerm }) => {
    // definisco una componente che accetti searchTerm come prop
  const [movies, setMovies] = useState([]);
  // stato locale che contiene i dati dei film ricevuti, 
  // inizialmente è un array vuoto
  const API_KEY = 'd45c02ba';
  //costante per chiave api

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
          console.log(`Nessun film trovato per la ricerca: "${searchTerm}"`);
        }
      })
      .catch((error) => {
        console.error('Errore nel fetch dei film:', error);
        setMovies([]);
      });
  }, [searchTerm]);

  return (
    <div className="container my-4 bg-dark">
      <h2 className="text-light mb-3">{searchTerm}</h2>
      <div className="row">
        {movies.slice(0, 6).map((movie) => (
          <div key={movie.imdbID} className="col-6 col-sm-4 col-md-2 mb-3">
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
              alt={movie.Title}
              className="img-fluid rounded shadow"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyGallery
