import React, { useEffect, useState } from 'react';
import FilmSelector from '../components/FilmSelector';
import FilmDetails from '../components/FilmDetails';



const FilmContainer = () => {

    const [films, setFilms] = useState([])
    const [selectedFilm, setSelectedFilm] = useState({});

    const getFilms = () => {
    

        console.log("getting Film data");
        fetch("https://ghibliapi.herokuapp.com/films")

        .then( (response) => { 
            return response.json();
            
        })
        .then( (data) => {
            setFilms(data);
        })
        
         
    }

    const handleFilmChange = (id) => {
        console.log(id)
        const foundFilm = films.find((film) => film.id === id) 
        setSelectedFilm(foundFilm)  
    }
    
    useEffect(() => {

        getFilms();
    }, []);



    return(
        <>
        <h1>Studio Ghibli Films</h1>
        <FilmSelector 
        films={films}
        handleFilmChange={handleFilmChange}/> 
        <FilmDetails selectedFilm={selectedFilm}/>
        </>
         
    )
}
export default FilmContainer;

