import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Typed } from 'react-typed';
import { useInView } from 'react-intersection-observer';

const TypewriterText = ({ text, tagName: Tag = 'div', className }) => {
  const [inView, setInView] = useState(false);
  const { ref, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const typedRef = useRef(null);

  useLayoutEffect(() => {
    if (isInView) {
      setInView(true);
    }
  }, [isInView]);

  useEffect(() => {
    if (inView && typedRef.current && text && text.trim()) {
      new Typed(typedRef.current, {
        strings: [text.trim()],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1000,
        showCursor: false,
      });
    }
  }, [inView, text]);

  return (
    <Tag className={className} ref={ref}>
      <span ref={typedRef} />
    </Tag>
  );
};

export default TypewriterText;
