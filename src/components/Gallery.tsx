// src/components/ImageGallery.tsx
import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  animate,
  AnimatePresence,
} from "framer-motion";
import useMeasure from "react-use-measure";

interface ImageModule {
  default: string;
}

const Gallery: React.FC<{
  pathKey: string;
  slowDuration: number;
  fastDuration: number;
}> = ({ pathKey, slowDuration, fastDuration }) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    let imageModules;
    switch (pathKey) {
      case "path1":
        imageModules = import.meta.glob<ImageModule>(
          "../assets/images/roselle/*.{png,jpg,jpeg,svg}",
          { eager: true }
        );
        break;
      case "path2":
        imageModules = import.meta.glob<ImageModule>(
          "../assets/images/buw/*.{png,jpg,jpeg,svg}",
          { eager: true }
        );
        break;
      default:
        imageModules = import.meta.glob<ImageModule>(
          "../assets/images/roselle/*.{png,jpg,jpeg,svg}",
          { eager: true }
        );
        break;
    }
    setImages(Object.values(imageModules).map((module) => module.default));
  }, [pathKey]);

  const FAST_DURATION = fastDuration;
  const SLOW_DURATION = slowDuration;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [duration, setDuration] = useState(FAST_DURATION);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setShuffledImages(shuffleArray([...images]));
  }, [images]);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [finish, setFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2;
    /*if theres a gap formula is -width / 2 - gap*/

    if (finish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    if (isPaused) {
      controls?.stop();
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender, isPaused]);

  return (
    <div className="carousel flex justify-center items-center w-full h-full overflow-hidden relative rounded-xl">
      <div className="slider flex absolute left-0 h-full m-auto">
        <motion.div
          className="flex h-full gap-2"
          ref={ref}
          style={{ x: xTranslation }}
          onHoverStart={() => {
            setFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setFinish(true);
            setDuration(FAST_DURATION);
          }}
          /*drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}*/
        >
          {[...shuffledImages, ...shuffledImages].map((url, index) => (
            <div
              className="slide flex justify-center relative hover:cursor-pointer"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                setIsPaused(true);
                setIsOpen(true);
                setSelectedImage(url);
              }}
            >
              {hoveredIndex === index && (
                <motion.div
                  className="absolute inset-0 z-10 flex justify-center items-center "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/*<motion.span className="text-white/50 underline underline-offset-4 z-10"
                   initial={{ opacity: 0, scale: 0.5 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{
                     duration: 0.5,
                     ease: [0, 0.71, 0.2, 1.01]
                   }}
                  >view</motion.span>*/}
                  <div className="absolute bg-[--light-font-color] pointer-events-none opacity-10 w-full h-full rounded-xl" />
                </motion.div>
              )}
              <img
                loading="lazy"
                className="img-carousel rounded-xl border-white"
                src={url}
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && selectedImage && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-[--dark-color] opacity-90 "
              onClick={() => {
                setIsOpen(false);
                setIsPaused(false);
              }}
            />
            <div className="absolute w-auto h-[90vh]">
              <img
                loading="lazy"
                className="w-full h-full z-10 p-5 object-contain border-white"
                src={selectedImage}
                alt="Preview"
                onClick={() => {
                  setIsOpen(false);
                  setIsPaused(false);
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

const shuffleArray = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
