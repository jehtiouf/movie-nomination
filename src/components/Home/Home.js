import React,{useState} from 'react';
import Search from "../search/Search"
import ResultsViewList from '../ResultsViewList/ResultsViewList';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import {Container} from 'react-bootstrap'

const Home = () => {
    const nominations = JSON.parse(localStorage.getItem("nominations"));
    var number = 0;
    if(nominations)
    {
      number = nominations.length;
    }
    const [movieList, setMovieList] = useState([]);
    const [numNominations, setNumNominations] = useState(number);

    return(
    <Container>
      <Header/>
      <Banner numNominations={numNominations}/>
      <Search setMovieList={setMovieList} />
      <ResultsViewList setNumNominations={setNumNominations} movieList={movieList}/>
    </Container>
    );
}

export default Home;