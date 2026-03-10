import Header from "./components/Header";
import style from "./App.module.css";
import Footer from "./components/Footer";
import Home from "./section/Home";
function App () {
    return(
     <>
      <Header/>
       <main>
        <Home/>
       </main>
      <Footer/>
     </>
    )
}

export default App;