import './App.css';
import React, { useLayoutEffect, useState } from 'react';
import { Score } from './features/score/Score.js';
import { Board } from './features/board/Board.js';
// Add import statements below
import { useDispatch } from 'react-redux';
import { setBoard, resetCards } from './features/board/boardSlice.js';

const App = () => {
  // Add dispatch variable below
  const dispatch = useDispatch();

  const startGameHandler = () => {
    // Add action dispatch below
    dispatch(setBoard());
  };

  const tryAgainHandler = () => {
    // Add action dispatch below
    dispatch(resetCards());
  };

  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="App">
      <div className="display-all">
        <Score />
        <Board />
        <footer className="footer">
          <button onClick={startGameHandler} className="start-button">
            Start Game
          </button>
          <button onClick={tryAgainHandler} className="try-new-pair-button">
            Try New Pair
          </button>
        </footer>
      </div>
      { size[0]<493 && <div className="rotate">
                        <img src='/rotate-screen.png' alt='rotate'/>
                       </div>}
    </div>
  );
};

export default App;
