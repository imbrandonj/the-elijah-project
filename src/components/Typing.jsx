import React, { useState, useEffect } from 'react';
/*
    Typing.jsx

    displays a typing effect of the `words` argument to the speed of `rate`
*/
export default function Typing({ words, rate }) {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let i = 0;

    const typeNextCharacter = () => {
      if (i < words.length) {
        const nextCharacter = words.charAt(i);

        if (nextCharacter === '/') {
          // `/` acts as a delimiter
          setTypedText(prevText => prevText + '<br>');
        } else {
          setTypedText(prevText => prevText + nextCharacter);
        }

        i++;

        // call the function again after a delay
        setTimeout(typeNextCharacter, rate); // recursion!
      }
    };

    // start typing when the component mounts
    typeNextCharacter();

    // clean up when the component unmounts
    return () => setTypedText('');
  }, [words]);

  return <p dangerouslySetInnerHTML={{ __html: typedText }} />;
}
