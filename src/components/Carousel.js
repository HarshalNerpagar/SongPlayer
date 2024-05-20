
import { useState, useEffect } from "react";
import { Carousel } from 'primereact/carousel';
        

const MyCarousel = (props) => {
  const [trending, setTrinding] = useState([])
  
  useEffect(()=>{
      const trendingSongs = async () => 
      fetch(props.api, {
        headers: {
          projectId: "a1lrklb22kg7",
        }
      }).then(res => res.json()).then(rep => setTrinding(rep));
      trendingSongs();
    },[])
  // console.log(trending.data)


  
  const productTemplate = (product) => {
    return (
      
        <div className="border-1 surface-border border-round m-2 py-5 px-3">
          <img src={product.thumbnail}  className=" w-60 shadow rounded" />
          <h4 className="font-medium pt-3">{product.title}</h4>
          {/* <p className="text-wrap ...">{product.artist[0].description}</p> */}


        </div>
    );
  };

  return (
    <div className=" bg-white m-10">
        <h1 className=" font-semibold text-3xl pl-5 pt-5">{props.title}</h1>
        <Carousel value={trending.data} numVisible={6} numScroll={3} itemTemplate={productTemplate} />
    </div>
  )
}

export default MyCarousel;