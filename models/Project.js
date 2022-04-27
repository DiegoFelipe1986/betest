import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true
    },
    title:{
        type: String,
        trim: true
    },
    content: {
        type: String,
        trim: true
    },
    img_url_logo:{
        type: String,
        trim: true
    },
    img_url_content:{
        type: String,
        trim: true
    },
    theme:{
        type: String
    },
    order:{
        type: Number
    },
}, {
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
