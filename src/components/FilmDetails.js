import React from "react";

const FilmDetails = ({selectedFilm}) => {
    return ( 

        <>

        <p>Film Name : {selectedFilm.title}</p>
        <p>Plot :   {selectedFilm.description}</p>
        <p>Year : {selectedFilm.release_date}</p>
        <p></p>

        </>
     );
}
 
export default FilmDetails;