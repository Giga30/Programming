import React, { useState, useEffect, useRef } from 'react';

const CanvasGame = () => {
  const canvasRef = useRef(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const handleKeyPress = (e) => {
      const speed = 5;
      switch (e.key) {
        case 'ArrowUp':
          setPosition((prev) => ({ ...prev, y: prev.y - speed }));
          break;
        case 'ArrowDown':
          setPosition((prev) => ({ ...prev, y: prev.y + speed }));
          break;
        case 'ArrowLeft':
          setPosition((prev) => ({ ...prev, x: prev.x - speed }));
          break;
        case 'ArrowRight':
          setPosition((prev) => ({ ...prev, x: prev.x + speed }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    const drawCharacter = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'blue';
      ctx.fillRect(position.x, position.y, 50, 50);
    };

    const animate = () => {
      drawCharacter();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [position]);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Canvas Game</h1>
        <CanvasGame />
      </header>
    </div>
  );
}

export default App;
