import { useState, useEffect } from 'react';
import { matchaList } from './data.js';

const backgroundColors = ['#2849d9', '#01632a', '#f3f3f3'];
const fontColors = ['#FFFFFF', '#f5ebd5', '#ef6c00'];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  // https://ghost-together.medium.com/how-to-change-background-color-dynamically-in-react-on-mouse-click-8af02fdc5e95
  useEffect(() => {
    document.body.style.backgroundColor = backgroundColors[index % backgroundColors.length];
    document.body.style.color = fontColors[index % fontColors.length];
  }, [index]);

  function handleClick() {
    setIndex((index + 1) % matchaList.length);
  }

  let matcha = matchaList[index];
  return (
    <>
        <h2>
          <i>{matcha.name}</i>
        </h2>

        <h3>
          ({index + 1} of {matchaList.length})
        </h3>

        <img
          src={matcha.url}
          alt={matcha.name}
          className="matcha-image"
        />

        <p>{matcha.description}</p>

        <div className="button-container">
          <button onClick={handleClick}>next</button>
        </div>
    </>
  );
}
