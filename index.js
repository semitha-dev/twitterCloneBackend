const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://<username>:<password>@<cluster-url>/yourDatabaseName', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
        // Try finding documents after connection to verify
        const Message = mongoose.model('Message', new mongoose.Schema({ content: String }));
        const messages = await Message.find();
        console.log('Messages:', messages); // This should output any existing messages
    } catch (error) {
        console.error('Error:', error);
    }
};

connectDB();
