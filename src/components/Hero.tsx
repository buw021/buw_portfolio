import { useState, useEffect } from "react";
import Gallery from "./Gallery";
import { motion, AnimatePresence } from "framer-motion";
import SkillLogo from "./SkillLogo";
const slideTransition = {
  up: { opacity: 0, y: 400 },
  slideUp: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 1,
      duration: 1,
      stiffness: 300,
      damping: 56,
    },
  },
  upup: { opacity: 0, y: 30 },
  slideUpUp: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      stiffness: 300,
      damping: 56,
    },
  },
  slideUpUpUp: {
    y: -50,
    opacity: 0,
    transition: {
      type: "spring",
      duration: 1,
      stiffness: 300,
      damping: 56,
    },
  },
  down: { opacity: 0, y: -400 },
  slideDown: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 1,
      duration: 1,
      stiffness: 300,
      damping: 56,
    },
  },
  left: { opacity: 0, x: -400 },
  slideLeft: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 2.5,
      duration: 1,
      stiffness: 300,
      damping: 56,
    },
  },
  right: { opacity: 0, x: 400 },
  slideRight: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 2.5,
      duration: 1,
      stiffness: 300,
      damping: 56,
    },
  },
};

const servicesArr = [
  {
    type: "services",
    title: "Web design",
    pictureUrl: "fa-solid fa-laptop",
    content:
      "Crafting responsive and user-friendly web designs tailored to elevate your unique business.",
  },
  {
    type: "services",
    title: "Photography",
    pictureUrl: "fa-solid fa-camera",
    content:
      "Discover the beauty of authenticity with my Photography, specializing in capturing vivid, natural colors.",
  },
  {
    type: "services",
    title: "Graphic Design",
    pictureUrl: "fa-solid fa-wand-magic-sparkles",
    content:
      "Creating compelling and visually stunning graphic designs for posters and invitations.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  /*const [galleryPath, setGalleryPath] = useState("path1");
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);*/
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? -1000 : 1000,
      };
    },
    center: {
      x: 0,
    },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
      };
    },
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % servicesArr.length);
    setDirection(1);
  };

  /*const prevSlide = () => {
    setCurrentSlide((prev) => {
      let newSlide = prev - 1;
      if (newSlide < 0) {
        newSlide += servicesArr.length; // Add the length to wrap around to the end
      }
      return newSlide;
    });
    setDirection(-1);
  };*/

  /*const [isClicked, setIsClicked] = useState(true);*/

  /*const changeGallery = () => {
    setGalleryPath((prev) => (prev === "path1" ? "path2" : "path1"));
  };*/

  const talkAbout = [
    "design",
    "ideas",
    "photography",
    "collaboration",
    "connection",
  ];
  const [text, setText] = useState(talkAbout[0]);
  const [, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1 === talkAbout.length ? 0 : prevIndex + 1;
        setText(talkAbout[newIndex]);
        return newIndex;
      });
    }, 5000); // Change text every 2 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div className="flex flex-col px-5 py-5 items-center justify-center gap-2 md:px-10 md:py-10 md:flex-col w-[100%] xl:flex-row 2xl:flex-row">
      <motion.div
        className="relative container bg-[url('src/assets/images/buw/DSCF2210.jpg')] bg-cover bg-[left_-60px_bottom_0px] md:bg-[left_-20px_bottom_0px] md:w-[100%] xl:w-[50%] 2xl:w-[50%] h-[auto] p-5 md:p-[2.5rem] md:max-w-3xl md:h-[45rem] rounded-2xl flex flex-col gap-10 justify-between"
        variants={slideTransition}
        initial="left"
        animate="slideLeft"
      >
        <div className=" flex flex-col  mt-1 md:mt-[1.75rem] md:justify-center h-[100%] gap-2">
          <h1 className=" dm-sans-paragraph text-[--light-font-color] text-[1.5rem] md:ml-0 md:text-[3.5rem] leading-[1.75rem] md:leading-[3.5rem] tracking-wide">
            Hello, I'm
          </h1>
          <h1 className=" dm-sans-name text-[--light-font-color] text-[4rem] md:ml-0 md:text-[8rem] leading-[3.5rem] md:leading-[7rem] ">
            rulph
            <br />
            buwen
          </h1>
          <hr className="h-px my-2 bg-[--light-font-color] border-0 opacity-70 hidden"></hr>
          <div className="mx-1 md:w-[375px]">
            <p className="dm-sans-paragraph text-[--light-font-color] text-[1rem] md:text-[18px] text-pretty tracking-wide leading-8">
              A Front-End developer with a passion for creating intuitive and
              visually appealing web designs. I'm also a Photographer and a
              Graphic Designer and I love watching, reading comics and video
              games too.
            </p>
          </div>
        </div>

        <SkillLogo />

        <a className="absolute bottom-5 right-7  flex-row gap-2 hidden" href="">
          <img src="src\assets\dot.svg" alt="" />
          <img src="src\assets\dot.svg" alt="" />
          <img src="src\assets\dot.svg" alt="" />
        </a>
      </motion.div>
      <div className="container bg-none w-[100%] h-auto md:max-w-3xl xl:h-[45rem] rounded-3xl flex flex-col gap-2 relative">
        <motion.div
          className="flex flex-col gap-2 h-auto xl:h-[60%] xl:flex-row rounded-2xl"
          initial="right"
          animate="slideRight"
        >
          {/*isClicked ? <motion.div></motion.div> : <motion.div></motion.div>*/}

          <motion.div
            className={` container bg-[--dark-sub-color2] xl:w-[50%] min-h-[25rem] py-3 px-5 md:h-full rounded-2xl relative justify-center flex flex-row items-center overflow-hidden`}
            variants={slideTransition}
          >
            <AnimatePresence>
              {/*isOpen2 && (
                <motion.div
                  className="bg-[--dark-color] w-[100%] h-[100%] z-10  absolute flex flex-col justify-center item-center rounded-2xl"
                  initial={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ y: "-100%", opacity: 1 }}
                >
                  <div
                    className="text-[--light-font-color] text-center hover:opacity-50 hover:cursor-pointer"
                    onClick={() => setIsOpen2(false)}
                  >
                    click to open
                  </div>
                </motion.div>
              )*/}
            </AnimatePresence>
            <div className="hidden text-[--light-font-color] justify-end absolute md:absolute top-0 right-0 m-5 hover:cursor-pointer">
              <img
                src="src\assets\arrow.svg"
                alt=""
                className="w-[20px] h-auto"
              />
            </div>
            <span className="text-xl md:text-xl text-[--light-font-color] absolute top-0 left-0 mx-5 my-5 leading-1 opacity-80 uppercase">
              what i do
            </span>
            <AnimatePresence custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-[full] h-[85%] rounded-lg justify-center items-left px-5 py-3 mt-10  flex flex-row absolute hover:cursor-pointer"
                onClick={nextSlide}
              >
                <div
                  className="w-full h-full rounded-lg justify-center items-left relative px-5 py-5 flex flex-col gap-3 shadow-md"
                  style={{
                    background: "rgb(251,236,219, 0.15)",
                  }}
                >
                  <div className="my-4 mx-1">
                    <i
                      className={`${servicesArr[currentSlide].pictureUrl} w-[100px] h-[100px] text-[100px] transition ease-in-out text-[--light-font-color] hover:scale-105 hover:opacity-80 duration-200`}
                    ></i>
                  </div>
                  <h1 className="dm-sans-name text-[--light-font-color] text-[1.875rem] md:text-[2.5rem] leading-8 tracking-wide">
                    {servicesArr[currentSlide].title}
                  </h1>
                  <p className="w-full h-full text-base md:text-lg dm-sans-paragraph text-[--light-font-color] font-medium overflow-hidden text-pretty tracking-wide">
                    {servicesArr[currentSlide].content}
                  </p>
                  <i className="text-[--light-font-color] fa-solid fa-arrow-right absolute bottom-3 right-4 opacity-80 transition ease-in-out hover:scale-105 hover:opacity-50 duration-200"></i>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <motion.div
            className={` container bg-[--dark-sub-color1] xl:w-[50%] min-h-[25rem] py-3 px-5 md:h-full rounded-2xl relative justify-center flex flex-row items-center overflow-hidden`}
            variants={slideTransition}
          >
            <AnimatePresence>
              {/*isOpen && (
                <motion.div
                  className="custom-border bg-[--dark-color] w-[100%] h-[100%] z-10  absolute flex flex-col justify-center item-center rounded-2xl"
                  initial={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ y: "-100%", opacity: 1 }}
                >
                  <div
                    className="text-[--light-font-color] text-center hover:opacity-50 hover:cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    click to open
                  </div>
                </motion.div>
              )*/}
            </AnimatePresence>

            <div className="hidden text-[--light-font-color] justify-end absolute md:absolute top-0 right-0 m-5 hover:cursor-pointer">
              <img
                src="src\assets\arrow.svg"
                alt=""
                className="w-[20px] h-auto"
              />
            </div>
            <span className="text-xl md:text-xl text-[--light-font-color] absolute top-0 left-0 mx-5 my-5 leading-1 opacity-80 uppercase">
              contact me
            </span>
            <AnimatePresence custom={direction}>
              <motion.div className="w-[100%] h-[85%] rounded-lg justify-center items-left px-5 py-3 mt-10  flex flex-row absolute ">
                <div
                  className="w-[100%] h-[100%] rounded-lg justify-center items-left relative px-5 py-5 flex flex-col gap-4 shadow-md"
                  style={{
                    background: "rgb(251,236,219, 0.15)",
                  }}
                >
                  <div className="flex flex-col gap-2 mt-0">
                    <h1 className="dm-sans-name text-[--light-font-color] text-[2rem] md:text-[2.65rem] leading-10 ">
                      Let's talk about
                    </h1>

                    <div className="w-auto h-[2.25rem] md:h-[2.85rem] overflow-hidden relative flex items-center mt-[-5px]">
                      <AnimatePresence>
                        <motion.h1
                          key={text} // Add a key for AnimatePresence to work correctly
                          className="dm-sans-name text-[--light-font-color] text-[2rem] md:text-[2.65rem] leading-8 absolute"
                          variants={slideTransition}
                          initial="upup"
                          animate="slideUpUp"
                          exit="slideUpUpUp"
                        >
                          {text}
                        </motion.h1>
                      </AnimatePresence>
                    </div>
                  </div>
                  <p className="w-full h-full text-base md:text-lg dm-sans-paragraph text-[--light-font-color] font-medium overflow-hidden text-pretty">
                    While I may be a person of few words, I'm constantly on the
                    lookout for new opportunities.
                  </p>
                  <div className="social-icons gap-3 flex justify-center items-center">
                    <a
                      href="mailto:buwentejano@yahoo.com"
                      className="text-5xl transition ease-in-out text-[--light-font-color] hover:scale-110 hover:opacity-80 duration-200 border-[--light-font-color] px-[0.6rem] py-1 border-2 rounded-md hover:bg-[--light-font-color] hover:text-[--dark-sub-color1]"
                    >
                      <i className="fa-regular fa-envelope"></i>
                    </a>

                    <a
                      className="text-5xl transition ease-in-out text-[--light-font-color] hover:scale-110 hover:opacity-80 duration-200 border-[--light-font-color] px-[0.65rem] py-1 border-2 rounded-md hover:bg-[--light-font-color] hover:text-[--dark-sub-color1]"
                      href="https://www.instagram.com/buw_21/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      className="text-5xl  transition ease-in-out text-[--light-font-color] hover:scale-110 hover:opacity-80 duration-200 border-[--light-font-color] px-[0.65rem] py-1 border-2 rounded-md hover:bg-[--light-font-color] hover:text-[--dark-sub-color1]"
                      href="https://www.linkedin.com/in/rulph-buwen-tejano-658155201/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
        <motion.div
          className={` xl:h-[40%] container bg-[--dark-color] w-[100%] h-[20rem] md:max-w-3xl  rounded-2xl p-4 relative flex justify-center items-center gap-3`}
          variants={slideTransition}
          initial="right"
          animate="slideRight"
          exit="slideLeft"
        >
          <div
            className="w-full h-full rounded-xl p-3"
            style={{
              background: "rgb(251,236,219, 0.10)",
            }}
          >
            <Gallery pathKey="path2" slowDuration={500} fastDuration={300} />
          </div>
          <div className=" text-[--light-font-color] hover:cursor-pointer mr-[-5px]">
            <h1 className="text-xl ">|||</h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
