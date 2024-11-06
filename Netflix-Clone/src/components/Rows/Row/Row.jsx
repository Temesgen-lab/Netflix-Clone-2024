import React, { useEffect, useState } from 'react';
import axios from '../../../utils/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import './row.css';

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [rBtn, setrBtnVisibility] = useState(false);
  const [lBtn, setlBtnVisibility] = useState(true);
  const [trailerUrl, setTrailerUrl] = useState('')

  const itemsPerSlide = 4;
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(props.fetchPath);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [props.fetchPath]);

  const moveSlides = (step) => {
    const totalSlides = Math.ceil(movies.length / itemsPerSlide);
    setCurrentSlide((prevSlide) => {
      let newSlide = prevSlide;


      if (step === 1) {

        if (newSlide >= totalSlides) {
          newSlide = prevSlide;
          setrBtnVisibility(false)
          setlBtnVisibility(true)
        }
        else if (newSlide == 0) {
          newSlide = prevSlide;
          setrBtnVisibility(false)
          setlBtnVisibility(true)
        }
        else {
          newSlide += 1;
          setrBtnVisibility(true)
          setlBtnVisibility(true)
        }
      } else if (step === -1) {

        if (newSlide <= -totalSlides + 1) {
          newSlide = prevSlide;
          setlBtnVisibility(false)
          setrBtnVisibility(true)
        }
        else {
          setlBtnVisibility(true)
          setrBtnVisibility(true)
          newSlide -= 1;
        }
      }

      return newSlide;
    });
  };

  function handleClick(movie) {
    // if (trailerUrl) {
    //   setTrailerUrl('')


    //   // movieTrailer(movie?.name || movie?.title || movie?.original_name).then((url) => {
    //   //   const urlParam = new URL(url);
    //   //   const urlParams = new URLSearchParams(urlParam.search);

    //   //   setTrailerUrl(urlParams.get('v'))

    //   // })

    // }
    // else {
    movieTrailer(movie?.name || movie?.title || movie?.original_name).then((url) => {
      const urlParam = new URL(url);
      const urlParams = new URLSearchParams(urlParam.search);

      setTrailerUrl(urlParams.get('v'))

    })
    // }
  }
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }
  console.log(movies)
  return (
    <div className='row'>
      <h1 className='row-title'>{props.title}</h1>
      <div className='row-box'>
        <div className='row-poster' style={{ transform: `translateX(${currentSlide * 100}%)` }}>
          {movies.map((movie, index) => {
            const posterEnd = movie.backdrop_path ? movie.backdrop_path : movie.poster_path;
            const posterLink = `https://image.tmdb.org/t/p/original${posterEnd}`;
            return (<div className='poster-title-box'>
              <div key={index} className='poster-box'>
                <img src={posterLink} alt={movie.title} className='poster' onClick={() => handleClick(movie)} />
              </div>
              <p className='movie-name'>{movie?.name || movie?.title}</p></div>
            );
          })}
        </div>
        <div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
        <button className='carousel-btn prev' onClick={() => moveSlides(-1)} style={{ opacity: lBtn ? 0 : 0 }} >❮</button>
        <button className='carousel-btn next' onClick={() => moveSlides(1)} style={{ opacity: rBtn ? 0 : 0 }} >❯</button>
      </div>
    </div>
  );
}

export default Row;
