import React, { useState, useEffect } from "react";
const HeroBG: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set a delay to prevent rapid re-rendering or excessive requests
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return loaded ? (
    <iframe
      src={`${process.env.PUBLIC_URL}/embedJS/particles.html`}
      style={{ border: "none", width: "100%", height: "100vh" }}
      title="Particle Parallax"
    />
  ) : (
    <div>Loading...</div>
  );
};
export default HeroBG;
