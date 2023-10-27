import { useEffect, Suspense } from "react";
import "./App.css";
import { getRandomNumber } from "./utils/random";
import axios from "axios";
import { useState } from "react";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";
import Header from "./components/Header";

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loiding...</h1>}>
        <main className=" bg-[url('/images/backgroundPage.jpg')] bg-cover  bg-full px-4 min-h-screen bg-black text-cyan-50">
          <Location location={location} setLocation={setLocation} />
          <ResidentList residents={location?.residents ?? []} />
        </main>
      </Suspense>
    </>
  );
}

export default App;
