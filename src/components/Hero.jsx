import hero from "../assets/dashboard.png";
import { Button } from "./Button";

const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-green-950 via-green-900 to-emerald-900 text-white flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* LEFT CONTENT (animated center feel) */}
        <div className="text-center md:text-left animate-fadeInUp">
          <span className="inline-block bg-white/10 text-emerald-300 px-3 py-1 rounded-full text-sm backdrop-blur animate-pulse">
            NEW
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight animate-fadeInUp delay-100">
            The Unified
            <br />
            DevSecOps Platform
          </h1>

          <p className="mt-6 text-gray-300 animate-fadeInUp delay-200">
            DeepSource secures your entire development lifecycle with static
            analysis and AI.
          </p>

          <div className="flex gap-4 mt-8 justify-center md:justify-start animate-fadeInUp delay-300">
            <Button variant="primary">Quickstart</Button>
            <Button variant="ghost">Contact Sales</Button>
          </div>
        </div>

        {/* RIGHT IMAGE (commented + optional animation) */}

        {/*
        <div className="flex justify-center md:justify-end animate-float">
          <img
            src={hero}
            alt="dashboard"
            className="w-full max-w-xl object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>
        */}
      </div>
    </section>
  );
};

export default Hero;
