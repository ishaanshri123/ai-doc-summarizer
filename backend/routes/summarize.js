const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/summarize', async (req, res) => {
  const { text } = req.body;
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
      { inputs: text },
      { headers: { Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}` } }
    );
    res.json({ summary: response.data[0].summary_text });
  } catch (error) {
    res.status(500).json({ error: 'Error summarizing text' });
  }
});

module.exports = router;