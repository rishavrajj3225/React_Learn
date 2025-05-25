import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(12);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*>?";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str[char];
    }
    setPassword(pass);
  }, [length, number, character]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, character, number, passwordGenerator]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-600">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6 tracking-wide">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 text-lg bg-gray-100 text-gray-700 font-mono"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 transition font-semibold"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <label className="font-medium text-gray-700 w-28">Length</label>
            <input
              type="range"
              max={24}
              min={6}
              value={length}
              className="flex-1 accent-blue-600"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <span className="w-8 text-center font-semibold text-blue-700">{length}</span>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={number}
              id="numberallowed"
              className="accent-blue-600"
              onChange={() => setNumber((prev) => !prev)}
            />
            <label htmlFor="numberallowed" className="text-gray-700 font-medium">
              Include Numbers
            </label>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={character}
              id="characterAllowed"
              className="accent-blue-600"
              onChange={() => setCharacter((prev) => !prev)}
            />
            <label htmlFor="characterAllowed" className="text-gray-700 font-medium">
              Include Symbols
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
