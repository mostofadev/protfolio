"use client"
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const AdvancedTypewriter = ({ texts = [], typingSpeed = 100, deleteSpeed = 60, pauseDuration = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (texts.length > 0) {
      const currentText = texts[currentIndex % texts.length];

      if (!isDeleting) {
        // Adding characters one by one
        const nextChar = currentText.slice(0, displayedText.length + 1);
        setDisplayedText(nextChar);

        if (nextChar === currentText) {
          // Pause after completing one word
          timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Removing characters one by one
        const remainingChars = currentText.slice(0, displayedText.length - 1);
        setDisplayedText(remainingChars);

        if (remainingChars === "") {
          // Move to the next word after deleting
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }

      // Define the speed for typing or deleting
      timeout = setTimeout(() => {}, isDeleting ? deleteSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex, texts, typingSpeed, deleteSpeed, pauseDuration]);

  return <span className="text-green-400 text-[50px] sm:text-[60px] md:text-[80px] leading-[1.2] font-bold block transition-all">{displayedText}</span>;
};

export default AdvancedTypewriter;
