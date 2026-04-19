import React from 'react';

export const SplitText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} className="inline-flex overflow-hidden py-4 -my-4">
          {word.split('').map((char, charIndex) => (
            <span key={`char-${wordIndex}-${charIndex}`} className="char inline-block whitespace-pre">
              {char}
            </span>
          ))}
          {wordIndex !== words.length - 1 && <span className="inline-block whitespace-pre"> </span>}
        </span>
      ))}
    </span>
  );
};
