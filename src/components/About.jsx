import React, { lazy, Suspense } from "react";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from '../hoc';
import { styles } from "../styles";

const Spline = lazy(() => import('@splinetool/react-spline'));

const About = () => {
  return (
    <div className="relative w-full h-[140vh] mx-auto overflow-hidden">
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I am a multi-talented professional with a diverse skill set encompassing<br/>cybersecurity analysis, electronics and communications engineering,<br/>data analysis, visual arts, music, software engineering, and ICT. With a<br/>unique blend of technical proficiency and creative flair, I bring a<br/>comprehensive approach to every project I undertake, ensuring innovative<br/>solutions that meet the highest standards of excellence.
        </motion.p>
      </>

      <div
        className="absolute w-full h-[100vh]"
        style={{
          backgroundImage: "url('/nightoutside.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene="https://prod.spline.design/EwcyzaJBNmgz8KXM/scene.splinecode" />
        </Suspense>
      </div>
    </div>
  );
};

export default SectionWrapper(React.memo(About), "about");
