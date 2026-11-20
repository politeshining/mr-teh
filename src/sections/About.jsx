import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean architecture I build scalable, high-performance solutions
    from prototype to production`;

  const aboutText = `
    I’m **Darius Mark**, a frontend-focused web developer passionate about building clean, responsive, and user-friendly websites and web applications. With a strong foundation in **HTML, CSS, JavaScript, and React**, alongside experience with **PHP, MySQL, and API integration**, I build interactive digital experiences that combine functionality with thoughtful design.
    Through personal projects, collaborative development, and my experience at **Harvoxx Tech Hub**, I’ve developed practical skills in responsive web design, component-based development, authentication, database-driven applications, and problem-solving.
    I enjoy tackling technical challenges, writing maintainable code, and continuously improving my skills. My current focus is mastering modern frontend development while strengthening my full-stack capabilities and building practical solutions that make a meaningful impact.
    I’m eager to contribute to innovative projects, collaborate with other developers, and grow through opportunities that challenge me to become a better software developer.
  `;

  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Cod with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-base lg:text-lg text-white/60">
        <img
          ref={imgRef}
          src="images/about-img.png"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
