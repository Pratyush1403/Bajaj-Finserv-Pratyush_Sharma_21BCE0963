const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res.status(400).json({ is_success: false, message: 'Invalid data' });
  }

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => /^[A-Za-z]$/.test(item));
  const highestLowercaseAlphabet = alphabets
    .filter(item => item === item.toLowerCase())
    .sort()
    .slice(-1);

  res.json({
    is_success: true,
    user_id: 'Pratyush Sharma',
    email: 'pratyushsharma1404@gmail.com',
    roll_number: '21BCE0963',
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
  });
});

// GET method for operation code
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});