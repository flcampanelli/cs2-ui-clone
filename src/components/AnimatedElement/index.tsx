import React from "react";

interface AnimatedElementProps {
  animationType: string;
  delay?: number;
  duration?: number;
  children: JSX.Element | JSX.Element[];
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  animationType,
  delay = 100,
  duration = 1500,
  children,
}) => {
  return (
    <div
      data-aos={animationType}
      data-aos-delay={delay}
      data-aos-duration={duration}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
