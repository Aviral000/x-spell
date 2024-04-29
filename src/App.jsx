import React, { useEffect, useState } from 'react';

export default function App() {
  const [word, setWord] = useState({
    teh: "the",
    wrok: "work",
    fot: "for",
  });
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const spellMistakeArr = text.split(' ');
    const correctedWord = spellMistakeArr.find((ele) => {
      const corrected = word[ele.toLowerCase()];
      return corrected && corrected !== ele;
    });

    if (correctedWord) {
      const corrected = word[correctedWord.toLowerCase()];
      setCorrection(corrected);
      setAlert(true);
    } else {
      setAlert(false);
      setCorrection("");
    }
  }, [text, word]);

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        type="text"
        id='word'
        placeholder='Enter text...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={5}
        cols={40}
      />
      {alert && (
        <p>Did you mean: {correction}?</p>
      )}
    </div>
  );
}