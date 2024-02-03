import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { APIKey } from '../../config/key'
import { Container } from './style'
import { Link } from 'react-router-dom'
export default function Details () {

    const {id} = useParams()
    const [movie,setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=04ef14498df2f0f341096486eb13b7e0`)
        // https://api.themoviedb.org/3/movie/popular?api_key=SUA_CHAVE_DA_API&language=pt-BR&page=1
        .then(response => response.json())
        .then(data => {

            const {title, poster_path, overview, release_date} = data 
            const movie = {
                id,
                title,
                sinopse: overview,
                image:`https://image.tmdb.org/t/p/w500/${poster_path}`, 
                releaseDate:release_date
            }
            setMovie(movie)
        })
    },[id])

    return(
       <Container>
        <div className='movie'>
        <img src={movie.image}  alt={movie.sinopse} />
        <div className='details'>
            <h1>{movie.title}</h1>
            <span>Sinopse: {movie.sinopse}</span>
            <span className='release-fate'>Release: date : {movie.releaseDate}</span>
            <Link to="/"><button>Go Back</button></Link>
        </div>
        </div>
       </Container>
    )
}