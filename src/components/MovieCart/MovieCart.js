import React from 'react';
import {Container} from 'react-bootstrap'
import './MovieCart.css'
import {Link} from 'react-router-dom'
const MovieCart = () => 
{
    var nominations = JSON.parse(localStorage.getItem("nominations"));

    const Remove = (id,title,year) => {
        for(var i = 0  ; i < nominations.length; i ++)
        {
            if(nominations[i].Id == id)
            {
                nominations.splice(i,1);
            }
        }
        localStorage.setItem("nominations", JSON.stringify(nominations));
        console.log(title);
        if(!alert(title + " (" + year + ") " + " successfully removed from your Nominations!")){window.location.reload();}
    }
    return (
        <Container>
            <div className="header-link" >
            <Link  to="/">Back to search</Link>
            </div>
            <h2 className="text-center text-justify">Your Nominations</h2>
            <div>
            {nominations && nominations.map(nomination => 
                    <div className="row wrapper-nomination">
                    <div className="box col-sm-4 ">
                    <img src={nomination.Poster}/>
                    </div>
                    <div className="box text col-sm-4">
                    <h5>{nomination.Title} ({nomination.Year})</h5>
                    <button onClick={()=> Remove(nomination.Id,nomination.Title,nomination.Year)}
                     className="btn btn-danger">Remove</button>
                    </div>
                    </div>
                    )}
            </div>
        </Container>
            
        
    );
}

export default MovieCart