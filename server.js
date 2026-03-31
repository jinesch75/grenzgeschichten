const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Railway volume mount or local fallback
const DATA_DIR = process.env.RAILWAY_VOLUME_MOUNT_PATH || path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'questions.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

app.use(express.json({ limit: '2mb' }));
app.use(express.static(__dirname));

// GET /api/questions – load saved question overrides
app.get('/api/questions', function(req, res) {
  try {
    if (fs.existsSync(DATA_FILE)) {
      var data = fs.readFileSync(DATA_FILE, 'utf8');
      res.json(JSON.parse(data));
    } else {
      res.json(null);
    }
  } catch (e) {
    console.error('Error reading questions:', e);
    res.json(null);
  }
});

// POST /api/questions – save question overrides
app.post('/api/questions', function(req, res) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(req.body, null, 2), 'utf8');
    res.json({ ok: true });
  } catch (e) {
    console.error('Error saving questions:', e);
    res.status(500).json({ error: 'Failed to save' });
  }
});

// DELETE /api/questions – reset to defaults
app.delete('/api/questions', function(req, res) {
  try {
    if (fs.existsSync(DATA_FILE)) {
      fs.unlinkSync(DATA_FILE);
    }
    res.json({ ok: true });
  } catch (e) {
    console.error('Error deleting questions:', e);
    res.status(500).json({ error: 'Failed to reset' });
  }
});

app.listen(PORT, function() {
  console.log('Grenzgeschichten running on port ' + PORT);
});
