import React from "react";
import pikachu from "../assets/pikachu.png";

export default function Home() {
  return (
    <div className="mt-5 text-center d-flex flex-column align-items-center">
      <h1>Welcome PokeMaster !</h1>
      <div className="pikachu-img">
        <img className="img-fluid pt-5" alt="" src={pikachu}/>
      </div>
    </div>
  );
}
