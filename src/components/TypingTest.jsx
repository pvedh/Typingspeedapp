import React, { useState, useEffect } from 'react';
import { saveResults, getResults } from '../utils/storage';

const TypingTest = ({ onResults }) => {
  const [skillLevel, setSkillLevel] = useState('easy');
  const [textToType, setTextToType] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [results, setResults] = useState(null);

  const texts = {
    easy: ["The quick brown fox jumps over the lazy dog."],
    medium: ["Typing is a skill that improves with consistent practice."],
    hard: ["Complex sentences require more focus and accuracy to type."]
  };

  useEffect(() => {
    setTextToType(texts[skillLevel][Math.floor(Math.random() * texts[skillLevel].length)]);
  }, [skillLevel]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);

    if (!isTyping) {
      setStartTime(Date.now());
      setIsTyping(true);
    }

    if (value === textToType) {
      const endTime = Date.now();
      const timeTaken = (endTime - startTime) / 1000; // in seconds
      const wordsTyped = value.split(' ').length;
      const typingSpeed = Math.round((wordsTyped / timeTaken) * 60); // words per minute
      const accuracy = Math.round((value.length / textToType.length) * 100);

      const result = { typingSpeed, accuracy, date: new Date().toISOString() };
      setResults(result);
      saveResults([...getResults() || [], result]);
      onResults(result);
    }
  };

  const handleRestart = () => {
    setUserInput('');
    setStartTime(null);
    setIsTyping(false);
    setResults(null);
    setTextToType(texts[skillLevel][Math.floor(Math.random() * texts[skillLevel].length)]);
  };

  return (
    <div className="typing-test">
      <h2 className="text-center">Typing Test</h2>
      <div className="form-group">
        <label htmlFor="skillLevel">Select Skill Level:</label>
        <select
          id="skillLevel"
          className="form-control"
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <p className="mt-3">{textToType}</p>
      <textarea
        className="form-control mt-3"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Start typing here..."
      />
      {results && (
        <div className="results mt-4">
          <h3>Results</h3>
          <p>Typing Speed: {results.typingSpeed} WPM</p>
          <p>Accuracy: {results.accuracy}%</p>
          <button className="btn btn-primary mt-3" onClick={handleRestart}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default TypingTest;