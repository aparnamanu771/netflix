import {React,useEffect,useState} from 'react'
import instance from './instance'

function Row({title,fetchUrl}) {
    const base_url = "https://image.tmdb.org/t/p/original/";

    const [movies,setMovies]=useState([])

    // api call
    const fetchData=async ()=>{
        const response=await instance.get(fetchUrl)
        setMovies(response.data.results)
    }
    console.log(movies);

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
        <h1>{title}</h1>
        {
            movies.map(movie=>(
                <img
                src={`${base_url}${movie.backdrop_path}`}
                />
            ))
        }
    </div>
  )
}

export default Row