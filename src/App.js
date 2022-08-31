import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";


//Here is your API key: a24e073b

const API_URL = 'http://www.omdbapi.com/?apikey=a24e073b';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies('Spiderman')
    }, []);

    return (
        <div className="app">
            <h1>Movie Empire React Project</h1>
            <div className="search">
                <input 
                    placeholder="Search for your favorite movies"
                    value={searchTerm}
                    onChange={(e) => setsearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                 />
            </div>

            {
                movies?.length > 0
                 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movies={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
           
        </div>
    )
}

export default App;