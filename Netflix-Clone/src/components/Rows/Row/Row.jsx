import React, { useEffect, useState } from 'react'
import axios from '../../../utils/axios'
import './row.css'

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      let sample = []
      try {
        const response = await axios.get(props.fetchPath);
        console.log(response.data.results)

        setMovies(response.data.results)
      } catch (error) {
        console.log(error)
      }

    })()
  }, [])

  return (
    <div className='row'>
      <h1 className='row-title'>
        {props.title}
      </h1>
      <div className="row-poster">
        {
          movies?.map((movie, index) => {
            const posterEnd = movie.poster_path;
            const posterLink = `https://image.tmdb.org/t/p/original${posterEnd}`;
            const poster = (
              <div key={index} className='poster-box'>
                <img src={posterLink} alt="" key={index} className='poster' />
              </div>
            )
            return poster;

          })

        }
      </div>
    </div >
  )
}

export default Row
