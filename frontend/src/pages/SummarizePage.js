import React, { useState } from 'react';
import axios from 'axios';

const SummarizePage = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = async () => {
    try {
      const response = await axios.post('http://localhost:5000/summarize', { text });
      setSummary(response.data.summary);
    } catch (error) {
      console.error('Error summarizing text:', error);
    }
  };

  return (
    <div>
      <h1>Document Summarizer</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your document text here..."
      />
      <button onClick={handleSummarize}>Summarize</button>
      {summary && (
        <div>
          <h2>Summary</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default SummarizePage;