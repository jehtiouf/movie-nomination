import React, {useRef} from 'react';
import {Container} from 'react-bootstrap';
import './ResultsViewList.css'
import NominateButton from '../NominateButton/NominateButton';


const ResultsViewList = ({movieList,setNumNominations}) => {
    var nominations = JSON.parse(localStorage.getItem("nominations"));
    var nominationIds = [];

    for(var i = 0 ; i < nominations.length ; i ++)
    {
        nominationIds.push(nominations[i].Id);
    }
    

    return(
        
        <Container>
            <div className="row">
            {movieList && movieList.map((movie,index) =>
                <div key={index} className="wrapper-view col-4">
                     <img className="img-fluid"src={movie.Poster}/> 
                     <h4 className="text-justify text-left">{movie.Title} ({movie.Year})</h4>
                     <NominateButton key={index} nominations={nominations}
                      nominationIds={nominationIds} 
                      title={movie.Title} 
                      year={movie.Year}
                      poster={movie.Poster} 
                      id={movie.imdbID}
                      setNumNominations={setNumNominations} />
                </div> )
            }
            {!movieList&& <h3 className="not-found">No results</h3>}
            </div>
        </Container>
    );
}

export default ResultsViewList;
