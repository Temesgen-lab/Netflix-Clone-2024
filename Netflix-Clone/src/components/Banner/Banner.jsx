import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import requests, { API_KEY, arrRequests } from '../../utils/requests';
import './banner.css'
const Banner = () => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(arrRequests[0][1]);
        const singleMovie = response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ];

        setMovie(singleMovie)
      }
      catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [])
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }
  return (
    <div className='banner'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '90vh'
      }}
    > <div className="banner-box">
        <div className="banner-contents">
          <h1 className='banner-title'>
            {movie?.name || movie?.title || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className='banner-button  play'>Play</button>
            <button className='banner-button '>My List</button>
          </div>
          <p className="banner-desc">{truncate(movie?.overview, 150)}</p>
        </div>
        <div className="banner-fade" ></div>
      </div></div>
  )
}

export default Banner;
