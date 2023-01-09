import { useState, useRef, createRef } from "react";
import { faCaretLeft, faCaretRight, faDiamond, faCircle } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Carousel({ width = "half", images}) {
  console.log(`images are: ${images}`)
  const [currentImage, setCurrentImage] = useState(0);
  const refs =
    images &&
    images.reduce((acc, val, i) => {
      acc[i] = createRef();
      return acc;
    }, {});

  // console.log(images)

  const scrollToImage = (i) => {
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const totalImages = images.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`absolute text-[color:var(--ls-purple)] z-10 h-15 w-15 flex items-center justify-center bottom-0 top-0 ${
        isLeft ? "left-2" : "right-2"
      }`}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? (
          <FontAwesomeIcon icon={faCaretLeft} className=" fa fa-3x opacity-70 transition ease-in-out hover:scale-[1.2] duration-100" />
        ) : (
          <FontAwesomeIcon icon={faCaretRight} className="fa fa-3x opacity-70 transition ease-in-out hover:scale-[1.2] duration-100" />
        )}
      </span>
    </button>
  );

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative w-full h-full ">
        <div className="carousel inline-flex overflow-hidden snap-x snap-mandatory w-full h-full">
          {images &&
            images.map((img, i) => (
              <div
                className="w-full h-full flex-shrink-0"
                key={img}
                ref={refs[i]}
              >
                <Image 
                priority
                src={img} 
                width={1200}
                height={800}
                alt="alt text goes here"
                className="w-full h-full object-cover" />
              </div>
            ))}
          {sliderControl(true)}
          {sliderControl(false)}
          <div className=" absolute bottom-0 flex justify-center left-0 right-0">
            {images &&
              images.map((img, i) =>
                i === currentImage ? (
                  <button
                    key={"button-" + img.toString()}
                    onClick={() => scrollToImage(i)}
                  >
                    <FontAwesomeIcon icon={faDiamond} className="w-4 h-4 text-[color:var(--ls-purple)] opacity-70 z-10 mx-2 mb-4 scale-[1.3]" />
                  </button>
                ) : (
                  <button
                    key={"button-" + img.toString()}
                    onClick={() => scrollToImage(i)}
                  >
                    <FontAwesomeIcon icon={faCircle} className="w-4 h-4 text-[color:var(--ls-purple)] opacity-70 z-10 mx-2 mb-4 transition ease-in-out hover:scale-[1.3] duration-100" />
                  </button>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
