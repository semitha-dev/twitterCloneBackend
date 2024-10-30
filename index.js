const express = require('express');
const cors = require('cors');
const http = require('http');
const connectDB = require('./db');
const Message = require('./models/newpostmodel');

// Connect to the database
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Route to add a new post
app.post('/addPost', async (req, res) => {
    try {
        const { content } = req.body;
        const newMessage = new Message({ content });
        await newMessage.save();
        res.status(201).send('Post added');
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).send('Error saving message');
    }
});

// Route to insert a sample post
app.get('/insert-sample', async (req, res) => {
    try {
        const sampleMessage = new Message({ content: 'This is a sample post.' });
        await sampleMessage.save();
        res.send('Sample post added');
    } catch (error) {
        console.error('Error inserting sample post:', error);
        res.status(500).send('Error inserting sample post');
    }
});

// Route to get all posts
app.get('/getPosts', async (req, res) => {
    try {
        const messages = await Message.find();
        console.log('Fetched messages:', messages); // Log the fetched messages
        res.send(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).send('Error fetching messages');
    }
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
