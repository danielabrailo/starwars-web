import React from "react";

const MovieDetails = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    return (
        <>
        {props.movies.map((movie, index) => (
            <div className="d-flex flex-column justify-content-center mb-3">
                <h2>{movie.title}</h2>

                <span><button class="remove-btn" onClick={() => props.handleRemoveDetailsClick(movie)}> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="black" class="bi bi-x-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg></button></span>

           

                <p>{movie.opening_crawl}</p>

                <span><button class="like-btn" onClick={() => props.handleFavouritesClick(movie)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg><FavouriteComponent/></button></span>

                               
            </div>
                       
        ))}
        </>
    );
};

export default MovieDetails;