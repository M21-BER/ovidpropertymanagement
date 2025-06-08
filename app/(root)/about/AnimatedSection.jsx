"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedSection({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  reverse,
}) {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-start ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div initial="hidden" animate="visible" variants={textVariants}>
        {title && (
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">{title}</h2>
        )}
        {paragraphs.map((text, idx) => (
          <p key={idx} className="mb-5 text-base sm:text-lg leading-relaxed">
            {text}
          </p>
        ))}
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={imageVariants}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="rounded-lg shadow-lg"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}
