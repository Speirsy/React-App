import React from "react";

const FilmSelector = ({films, handleFilmChange}) => {

    const handleChange = (event) => {
        handleFilmChange(event.target.value)
    } 

    const filmOptions = films.map((film) => {
        return (
            <option key={film.id} value={film.id}>
                {film.title}
            </option>  
        )
    })

  
    return ( 
        <select onChange={handleChange}>
            {filmOptions}
        </select>


     );
}
 
export default FilmSelector;