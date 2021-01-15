import React from 'react';
import {Button} from 'react-bootstrap';

class NominateButton extends React.Component {
    state = {
        isDisabled: false
    }
    NominateMovie = (title,year,poster,id) => {
        this.props.nominations.push({
            "Title":title,
            "Year":year,
            "Poster":poster,
            "Id":id
        });
        localStorage.setItem("nominations", JSON.stringify(this.props.nominations));
        let numNominations = JSON.parse(localStorage.getItem("nominations"));
        this.props.setNumNominations(numNominations.length);
        this.setState({isDisabled:true})
    }
    render() {
      return (
        <Button disabled={(this.props.nominationIds.includes(this.props.id)) || this.state.isDisabled}
        onClick={() => this.NominateMovie(this.props.title,this.props.year,this.props.poster,this.props.id)} 
        className="btn btn-success">Nominate
        </Button>
      )
    }
}

export default NominateButton;