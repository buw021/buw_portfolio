import Hero from "./components/Hero.tsx";
import Navbar from "./components/navbar.tsx";

const App = () => {
  return (
    <>
      <Navbar
        
        logo={"rbt"}
        menu={["Home", "Services", "Projects", "Gallery", "About"]}
      />
      <div className="w-[100%] relative flex items-center justify-center ">
        <Hero />
      </div>
    </>
  );
};

export default App;
