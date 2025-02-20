import React from "react";

const Heading = () => {
  return (
    <div className="text-center my-5">
      <h1 className="text-5xl font-bold text-zinc-700 animate-bounce">
        Let's Catch Pokémon
      </h1>
      <audio
        controls
        autoPlay
        className="mt-3 mx-auto block w-72 sm:w-96 rounded-lg shadow-md bg-gray-100"
        onCanPlayThrough={(e) => {
          e.currentTarget.muted = false; // Unmute once playable
        }}
      >
        <source src="music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Heading;
