import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db.js'
import cors from 'cors'
import Contact from './contactsModel.js'




dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

// GET /api/contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); //
    return res.status(200).json(contacts);
  } catch (error) {
    console.error('GET /api/contacts error:', error);
    return res.status(500).json({ message: 'Error fetching contacts', error: error.message });
  }
});


// POST /api/contacts
app.post('/api/contacts', async (req, res) => {
  console.log('POST /api/contacts body:', req.body);

  try {
    const contact = await Contact.create(req.body);
    console.log('Contact created:', contact);
    return res.status(201).json(contact);
  } catch (error) {
    console.error('POST /api/contacts error:', error);
    return res.status(400).json({ message: 'Error creating contact', error: error.message });
  }
});


app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
      connectDB()
    });