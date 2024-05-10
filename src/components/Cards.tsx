/*

<AnimatePresence>
              <motion.div
                className={`${isClicked ? "hidden" : "flex"} w-full h-full`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 5 }}
              >
                <Gallery
                  pathKey="path1"
                  slowDuration={500}
                  fastDuration={300}
                />
              </motion.div>
              <motion.div
                className={`${isClicked ? "flex" : "hidden"} w-full h-full`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 5 }}
              >
                <Gallery
                  pathKey="path2"
                  slowDuration={500}
                  fastDuration={300}
                />
              </motion.div>
            </AnimatePresence>



            <div className=" hidden h-[200px] w-[200px] md:h-[300px] md:w-[300px] overflow-hidden rounded-md shadow-md shadow-black/30 border-[--light-font-color] border-8">
              <img
                className="h-[200px] md:h-[300px] min-w-full max-w-none mx-[-70px] md:mx-[-100px] scale-150  "
                src="src\assets\images\buw\DSCF2210 (1).jpg"
                alt=""
              />
            </div>

*/
