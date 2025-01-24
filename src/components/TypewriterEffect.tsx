'use client';

import { cn } from '@/utils/utils';
import { AnimatePresence, motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect, useState } from 'react';

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(''),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        {
          display: 'inline-block',
          opacity: 1,
          width: 'fit-content',
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: 'easeInOut',
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className='inline'>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className='inline-block'>
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black opacity-0 hidden`, word.className)}>
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        'text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center',
        className
      )}>
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          'inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500',
          cursorClassName
        )}></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(''),
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className='inline-block'>
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black `, word.className)}>
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn('flex space-x-1 my-6', className)}>
      <motion.div
        className='overflow-hidden pb-2'
        initial={{
          width: '0%',
        }}
        whileInView={{
          width: 'fit-content',
        }}
        transition={{
          duration: 2,
          ease: 'linear',
          delay: 1,
        }}>
        <div
          className='text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold'
          style={{
            whiteSpace: 'nowrap',
          }}>
          {renderWords()}{' '}
        </div>{' '}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          'block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500',
          cursorClassName
        )}></motion.span>
    </div>
  );
};

export const TypewriterEffectLoop = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100; // Typing speed (ms)
  const deletingSpeed = 50; // Deleting speed (ms)
  const delayBeforeDeleting = 1000; // Delay before deleting (ms)
  const delayBeforeNextWord = 500; // Delay before the next word starts (ms)

  const currentWord = words[currentWordIndex];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText.length < currentWord.text.length) {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.text.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting effect
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.text.slice(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayedText.length === currentWord.text.length) {
      // Start deleting after a delay
      timeout = setTimeout(() => setIsDeleting(true), delayBeforeDeleting);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to the next word
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, delayBeforeNextWord);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWord.text, words.length]);

  return (
    <div className={cn('flex space-x-1', className)}>
      <motion.div
        className='overflow-hidden'
        initial={{
          width: '0%',
        }}
        animate={{
          width: 'fit-content',
        }}
        transition={{
          duration: 2,
          ease: 'linear',
        }}>
        <div
          // className='text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold'
          style={{
            whiteSpace: 'nowrap',
          }}>
          {displayedText.split('').map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn('dark:text-white text-black', currentWord.className)}>
              {char}
            </span>
          ))}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          'block rounded-sm w-[4px] h-full bg-blue-500',
          cursorClassName
        )}></motion.span>
    </div>
  );
};
