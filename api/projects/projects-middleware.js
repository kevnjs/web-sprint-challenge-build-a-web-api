// add middlewares here related to projects
const projects = require('./projects-model')

const checkId = (req, res, next) => {
    projects.get(req.params.id)
    .then(proj =>{ 
        if(!proj) return res.status(404).json({message: "The project does not exist"})
        next()
    })
   
}

const checkBody = (req, res, next) => {
    const { body } = req;
    if(!("name" in body) || !("description" in body) || !("completed" in body)) return res.status(400).json({message: "Could not add the project"})
    next()
}


module.exports = {
    checkId,
    checkBody
};