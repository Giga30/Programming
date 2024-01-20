import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [playerX, setPlayerX] = useState(10);
  const [playerY, setPlayerY] = useState(10);

  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);

  const canvasRef = useRef(null);

  let canvas;
  let ctx;

  function updateDxDy(deltaTime){
    if (keys.d) {
      setDx(5);
    }
    if(keys.a){
      setDx(-5);
    }
    if(keys.w){
      setDy(-5);
    }
    if(keys.s){
      setDy(5);
    }

    movePlayer(deltaTime)
    if (keys.d == false) {
        setDx(0);
    }
    if(keys.a == false){
        setDx(0);
    }
    if(keys.w == false){
        setDy(0);
    }
    if(keys.s == false){
        setDy(0);
    }
  }

  function movePlayer(deltaTime){
    if(dx != 0 && dy != 0){
        setDx(dx * (Math.sqrt(2)/2))
        setDy(dy * (Math.sqrt(2)/2))
    }
    setPlayerX(playerX + dx);
    setPlayerY(playerY + dy);
    console.log(dy)
  }

  function renderPlayer(){
    if(ctx){
       ctx.fillRect(playerX, playerY, 30, 15);
    }
  }

  useEffect(() => {
      canvas = canvasRef.current;
      ctx = canvas.getContext('2d');
  }, [])

  let lastFrameTime = performance.now();

  const gameLoop = () => {
    const currentTime = performance.now();
    const deltaTime = (currentTime - lastFrameTime) / 1000;
    lastFrameTime = currentTime;

    if(ctx){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    updateDxDy(deltaTime);
    renderPlayer()

    requestAnimationFrame(gameLoop);
  };

  useEffect(() => {
    requestAnimationFrame(gameLoop);
  }, [gameLoop]);

  const keys = {};
  window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
  });

  window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
  });

  return (
    <div className="m-8">
      <h1>React Movement Logic (v: Beta 1.0.0)</h1>
      <canvas className='w-96 h-96 border-2 border-black' ref={canvasRef}></canvas>
    </div>
  );
}

export default App;
