const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Replace `yourDatabaseName` with the actual name of your database
        await mongoose.connect('mongodb+srv://root:cakebot211K@cluster1.88z2s.mongodb.net/yourDatabaseName?retryWrites=true&w=majority&appName=Cluster1');

        console.log('MongoDB connected');

        // Test query to find all documents in the Message collection
        const Message = mongoose.model('Message', new mongoose.Schema({ content: String }));
        const messages = await Message.find();
        console.log('Messages:', messages); // This should output any existing messages
    } catch (error) {
        console.error('Error:', error);
    }
};

connectDB();
