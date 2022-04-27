import Project from '../models/Project.js'


const projects = async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
}

const register = async (req, res) => {

    const {name} = req.body;
    const existProject = await Project.findOne({ name });

    if (existProject) {
        const error = new Error('Project already exist');
        return res.status(400).json({msg: error.message})
    }

    try {
        const project = new Project(req.body);
        const projectSaved = await project.save();
        res.json(projectSaved)
    } catch (error) {
        console.log(error)
    }
}

export { projects, register };