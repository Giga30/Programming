function App() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <header className="w-screen h-36 bg-blue-950 p-5 pl-8">
        <h1 className="text-white text-4xl">GIGA KURTANIDZE</h1>
        <h4 className="text-red-500 font-bold mt-1">GOAL-ORIENRTED ACADEMY</h4>
        <h6 className="text-slate-400 text-xs mt-1">+995 579 290 227</h6>
        <h6 className="text-slate-400 text-xs">kurtanidzegiga2010@gmail.com</h6>
        <div className="w-24 h-24 bg-slate-400 absolute top-5 right-8"></div>
      </header>
      <main className="h-full">
        <div className="h-5/6 w-72 bg-slate-600 mt-4 p-3 pl-7">
          <h4 className="text-red-500 font-bold">EXPERTISE</h4>
          <p className="text-slate-400">Leadership</p>
          <p className="text-slate-400">Full-Stack Development</p>
          <p className="text-slate-400">Cyber Security</p>
          <p className="text-slate-400">SQL Development</p>
          <p className="text-slate-400">Python Development</p>
          <p className="text-slate-400">C# Development</p>
          <p className="text-slate-400">Game Development</p>
          <p className="text-slate-400">Mathematics</p>
          <p className="text-slate-400">Physics</p>
        </div>
      </main>
    </div>
  );
}

export default App;
