// import { useState } from "react";
import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FaGithub, FaTelegram, FaDiscord, FaTiktok} from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

export const Hero = () => {
  // const [whiteDots] = useState(()=> Math.random());
  const skills = [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Java",
    "Redis",
    "Docker",
    "AWS",
    "Vercel",
    "Github Action",
    "Git",
    "Figma",
    "Tailwind CSS"
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hiddden ">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="wallpaper46.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-backgroundn/20 via-background/50 to-background" />
      </div>

      {/* white dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map(() => (
          /*eslint-disable react-hooks/purity*/
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-35 "
            style={{
              backgroundColor: "#FCDCF4",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-30 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-12 items-center">
          {/* Left col - text content */}
          <div className="space-y-8 ">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-2 py-2 rounded-full glass text-sm text-pink-300">
                <span className="w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse" />
                Web-Developer • React Specialist
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4 ">
                <h1 className="text-5xl md:text-6xl lg:text-6.5xl font-bold leading-tight animate-fade-in animate-delay-300">
                Crafting <span className="text-pink-300 glow-text"> digital</span>
                <br />
                experience with
                <br />
                <span className="font-serif italic font-normal text-white">
                    Precision.
                </span>
                </h1>
                <p className="text-lg text-muted-forground max-w-lg animate-fade-in animate-delay-400 text-shadow-gray-800">
                Hi, I'm Mengti - a beginner web-developmer in React, Next.js, and
                Typescript. I build scalable, performant web applications that
                is easy for users to use and understand.
                </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 animated-fade-in animated-delay-500 ">
                <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5 " />
                </Button>
                <AnimatedBorderButton/>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-5 animate-fade-in animated-delay-600 transition-all duration-300  ">
                {/* <span>Follow:</span> */}
                <a href="https://github.com/Saitokojo" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-7 h-7 hover:text-pink transition-colors" />
                </a>
                <a href="https://discord.gg/7NXWBr6Gy" target="_blank" rel="noopener noreferrer">
                    <FaDiscord className="w-7 h-7 hover:text-pink transition-colors" />
                </a>
                <a href="https://t.me/Mengtii132" target="_blank" rel="noopener noreferrer">
                    <FaTelegram className="w-7 h-7 hover:text-pink transition-colors" />
                </a>
                <a href="https://www.tiktok.com/@saito___________?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                    <FaTiktok className="w-7 h-7 hover:text-pink transition-colors" />
                </a>
            </div>
          </div>
          {/* Right col - profile image */}
          <div className="relatice animate-fade-in animated-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-pink-foreground/30 via-transparent to-pink-foreground/10 blur-2xl animate-pulse" />
                     <div className="relative glass rounded-2xl p-2 glow-border">
                        <img src={`${import.meta.env.BASE_URL}profile-picture.png`}
                        alt="Image"
                        className="w-full aspect-4/6 object-cover rounded-2xl "
                        />
                        {/* FLoating badge */}
                        <div className="absolute -buttom-4 -right-4 glass rounded-xl px-4 py3 animate-float ">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-pink-300 rounded-full animate-pulse" />
                            <span className="text-sm font-medium">Available</span>
                          </div>
                        </div>
                        {/* State badge */}
                        <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animated-delay-500">
                          <div className="text-2xl font-bold text-pink">2+</div>
                          <div className="text-xs text-muted-forground">Year Exp.</div>
                        </div>
                    </div>
            </div>
          </div>
        </div>
        {/* End of content */}

        {/* SKills Section */}
        <div className="mt-20 animate-fade-in animated-delay-600">
          <p className="text-sm text-muted-forground mb-6 text-center">Technology I work with</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills,...skills].map((skill,idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-forground/50 hover:text-pink-400 transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute button-8 left-1/2 -trasnlate-x-1/2 animate-fade-in animated-delay-800">
          <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-muted-forground hover:text-pink-400">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce"/>
          </a>
        </div>
      </div>
    </section>
  );
};
