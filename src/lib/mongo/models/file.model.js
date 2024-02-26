import mongoose, { Schema } from 'mongoose';

const fileScheme = new Schema({

    file: { type: String,  required: true },
    folder: { type: String, default: 'uploads' },
    path: { type: String,  required: true },
    
});

fileScheme.index({file:1, domain:1}, { unique: true });
export default mongoose.models.file || mongoose.model('file', fileScheme);