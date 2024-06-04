import React from "react";
interface SpotifyEmbedProps {
  title: string;
  src: string;
}
const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({ title, src }) => {
  return (
    <div id={title} className="spotify-embed mt-5 fade-into-view">
      <iframe
        className="embed-player"
        style={{ borderRadius: "20px" }}
        src={src}
        width="100%"
        height="152"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};
export default SpotifyEmbed;
