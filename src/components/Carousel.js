
import { useState, useEffect, useRef } from "react";
import { Carousel } from 'primereact/carousel';
import 'primeicons/primeicons.css';
const MyCarousel = (props) => {
  const [trending, setTrinding] = useState([])
  useEffect(()=>{
      const trendingSongs = async () => 
      fetch(props.api, {
        headers: {
          projectId: "f104bi07c490",
        }
      }).then(res => res.json()).then((rep) => {
        setTrinding(rep)

      });
      trendingSongs();

    },[])

  console.log(trending.data)
  
  const apiBaseURL = "https://academics.newtonschool.co/api/v1/musicx/song";
  const projectId = "a1lrklb22kg7";

  const user = localStorage.getItem('jwt');
  const headers = {
    Authorization: `Bearer ${user}`,
    'Content-Type': 'application/json',
    projectId: projectId,
  };

  const [currentSong, setCurrentSong] = useState("");
  const [currentSrc, setCurrentSrc] = useState("");
  var audio = useRef();

  function playSong(id) {
    if (id === currentSong) {
      audio.current.pause();
      setCurrentSong("");
      return;
    }

    fetch(`${apiBaseURL}/${id}`, { headers })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((res) => {
        setCurrentSong(res.data._id);
        console.log(res.data.audio_url);
        audio.current.pause();
        setCurrentSrc(res.data.audio_url);
        audio.current.src = res.data.audio_url;
        audio.current.play();
      })
      .catch((e) => console.log(e));

    return (
      <audio id="player" ref={audio} controls hidden>
        <source src={currentSrc} ></source>
      </audio>
    );
  }


  const [play, setPlay] = useState(false)

  

  
  const productTemplate = (product) => {
    return (
      
        <div className="border-1 surface-border border-round m-2 py-5 px-3">
          <div className=" bg-gray-500">
          <img src={product.thumbnail}  className=" w-60 shadow rounded" />
          <div>
            { currentSong === product._id ?
            (!play ?
            <button 
            onClick={() => {
              playSong(product._id)
              setPlay(prev => !prev)
            }}
            className="mt-[10px] mb-[5px] w-[100%] "><i className="pi pi-play-circle" style={{ fontSize: '2rem', color: 'white'}}></i></button> :
            <button onClick={() => {
              playSong(product._id)
              setPlay(prev => !prev)
            }}
            className="mt-[10px] mb-[5px] w-[100%] "><i className="pi pi-stop-circle" style={{ fontSize: '2rem', color: 'white' }}></i></button>) :

            <button 
            onClick={() => {
              playSong(product._id)
              setPlay(prev => !prev)
            }}
            className=" mt-[10px] mb-[5px] w-[100%] "><i className="pi pi-play-circle" style={{ fontSize: '2rem', color: 'white' }}></i></button>
            }
          </div>
          </div>
          <h4 className=" w-44 font-medium pt-3 truncate">{product.title}</h4>
          <p className="w-44 truncate opacity-50">{product.artist[0].description}</p>
          <audio id="player" ref={audio} controls hidden>
          <source src={currentSrc} ></source>
          </audio>
        </div>
    );
  };

  return (
    <div className=" bg-white m-10">
    <h1 className=" font-semibold text-3xl pl-5 pt-5">{props.title}</h1>
    <Carousel value={trending.data} numVisible={5} numScroll={3} itemTemplate={productTemplate} />
    </div>
  )
}

export default MyCarousel;