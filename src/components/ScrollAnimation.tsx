import { ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';

import React, { useEffect, useRef } from 'react';
import getScrollAnimation from '@/utils/getScrollAnimation';

// const ScrollAnimationWrapper = () => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const animation = getScrollAnimation();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           controls.start('onscreen');
//         } else {
//           controls.start('offscreen');
//         }
//       },
//       { threshold: 0.1 } // Trigger when 10% of the element is in view
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [controls]);

//   return (
//     <motion.div
//       ref={ref}
//       initial='offscreen'
//       whileInView='onscreen'
//       animate={controls}
//       variants={animation}
//       className={className}
//       {...props}>
//       {children}

//     </motion.div>
//   );
// };

// export default ScrollAnimationWrapper;

export default function ScrollAnimationWrapper({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className: string;
  props?: any;
}) {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.3 }}
      className={className}
      {...props}>
      {children}
    </motion.div>
  );
}
