import React,{useState} from "react";
import {Button, Container, Input} from 'react-bootstrap';

const Search = ({setMovieList}) => {
    const [keyword,setKeyword] = useState("");
    const handleChange = (e) => {
        setKeyword(e.target.value);
        fetch(`https://www.omdbapi.com/?apikey=23f2a90c&s=${keyword}`)
        .then(response => response.json())
        .then(saveMovies)
    }

    const saveMovies = (response) => {
        setMovieList(response.Search);
    }

    return(
        <Container>
        <h2>Search Movies</h2>
            <div className="input-group">
                <input className="form-control" 
                value={keyword} 
                placeholder="Search for movies..."
                onChange={handleChange}/>
            </div>
       </Container>

    )
}

export default Search;