import { useState } from 'react';

function App() {
  const [count, setCount] = useState<number>(0);

  const onCountUpClick = () => {
    setCount(count + 1);
  };

  return (
    // REMOVE TEXT WHITE WITH WHITE BG on main.css
    // CREATE NEW FOLDERS INSIDE /src -> folder alias helpers are on tsconfig.json
    <main className="h-screen max-h-screen w-screen text-white">
      <div className="flex h-full w-full flex-col items-center justify-center gap-5">
        <div>
          <span className="text-2xl font-bold">All Your Code Goes In Here</span>
        </div>

        <span className="text-xl font-semibold">
          Template by{' '}
          <a
            href="https://devzaga.com"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            DevZAGA
          </a>
        </span>

        <button
          type="button"
          className="rounded-md bg-white p-2 text-indigo-700"
          onClick={onCountUpClick}
        >
          Button Clicked {count} times
        </button>
      </div>
    </main>
  );
}

export default App;
