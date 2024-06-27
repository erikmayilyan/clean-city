import mongoose from 'mongoose';

const mongoUrl = 'mongodb+srv://cleaningWeb:Choco2001!@atlascluster.nfkaonm.mongodb.net/cleaning';
mongoose.connect(mongoUrl);

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('MongoDB is connected');
});

connection.on('error', (error) => {
  console.log('Error in MongoDB connection', error);
});

export default mongoose;
