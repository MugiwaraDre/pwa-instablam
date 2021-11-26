import React, { useState } from "react";
import { Camera } from "./components/media/camera";
import pic1 from "./assets/picture1.jpg";
import pic2 from "./assets/picture2.jpg";
import { usePosition } from "./components/hooks/use-geolocation";
import { Root, PhotoCard, Footer, GalleryWrapper, Pics, Model } from "./styles";

function App() {
  const [isCamOpen, setIsCamOpen] = useState(false);
  const [cardImage, setCardImage] = useState();
  const [gallery, setGallery] = useState([{ src: pic1 }, { src: pic2 }]);
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const watch = true;
  const { latitude, longitude, timestamp, error } = usePosition(watch);

  const getImg = (imgSrc) => {
    console.warn(imgSrc);
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const handleRemove = (index) => {
    const newGallery = (gallery) => gallery.filter((_, i) => i !== index);
    setGallery(newGallery);
  };

  return (
    <div className='App'>
      <Root>
        <h1>Instablam</h1>
        {isCamOpen && (
          <Camera
            onCapture={(blob) => {
              setCardImage(blob);
              console.log(gallery);
            }}
            onClear={() => setCardImage(undefined)}
          />
        )}

        {cardImage && (
          <div className='img-container'>
            <h3>Preview 👇</h3>
            <PhotoCard src={cardImage && URL.createObjectURL(cardImage)} />
            <button
              onClick={() => {
                const picture = {
                  src: URL.createObjectURL(cardImage),
                  lat: latitude,
                  lon: longitude,
                  time: timestamp,
                };
                setGallery([...gallery, picture]);
              }}
            >
              Save
            </button>
          </div>
        )}

        {gallery && (
          <>
            <Model className={model ? "open" : ""}>
              <img src={tempImgSrc} alt='Noimg' />
              <button onClick={() => setModel(false)}>X</button>
            </Model>
            <GalleryWrapper>
              {gallery.map((item, index) => {
                return (
                  <>
                    {" "}
                    <div className='card-container' key={index}>
                      <Pics key={index} onClick={() => getImg(item.src)}>
                        <img
                          src={item.src}
                          style={{ width: "100%" }}
                          alt='Noimg'
                        />
                      </Pics>

                      <p>
                        {error
                          ? error
                          : `Lat: ${item.lat} Longitude:${item.lon} Time:${item.time} `}
                      </p>
                      <button onClick={() => handleRemove(index)}>
                        Delete ☝️{" "}
                      </button>
                      <a download href={item.src}>
                        <button>Download ☝️ </button>
                      </a>
                    </div>
                  </>
                );
              })}
            </GalleryWrapper>
          </>
        )}

        <Footer>
          <button onClick={() => setIsCamOpen(true)}>Open Camera</button>
          <button
            onClick={() => {
              setIsCamOpen(false);
              setCardImage(undefined);
            }}
          >
            Close Camera
          </button>
        </Footer>
      </Root>
    </div>
  );
}

export default App;
