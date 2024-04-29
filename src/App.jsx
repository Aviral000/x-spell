import React, { useEffect, useState } from 'react'

export default function App() {
  const [word, setWord] = useState({
    teh: "the",
    wrok: "work",
    fot: "for",
  })

  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');
  const [alert, setAlert] = useState(false);

  const spellMistakeArr = text.split(' ');
  const finder = spellMistakeArr.map((ele) => {
    const correctedWord = word[ele.toLowerCase()];
    return correctedWord;
  });
  const spellMistake = finder.join(' ');

  const toggle = () => {
    if (spellMistake) {
      setCorrection(spellMistake);
      setAlert(true);
    } else {
      setAlert(false);
      setCorrection("");
    }
  }

  useEffect(() => {
    toggle();
  }, [spellMistake])

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
      {
        alert && (
          <p>Did you mean: {correction}</p>
        )
      }
    </div>
  )
}
