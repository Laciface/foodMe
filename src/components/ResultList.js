import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Result from './Result'

const ResultList = () => {

    const [results, setResults] = useState([]);
    const {search} = useParams();

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(resp => setResults(resp.data.meals))
    }, [results]);

    return (
        <div>
            {results.map(result => (
                <Result details={result}/>
            ))}
        </div>
    );
}
export default ResultList;
