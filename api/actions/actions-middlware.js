// add middlewares here related to actions
const actions = require('./actions-model')

const checkId = (req, res, next) => {
    actions.get(req.params.id).then(act => {
        if(!act) return res.status(404).json({message: "The action(s) do not exist"})
        next()
    })

}

const checkBody = (req, res, next) => {
    const { body } = req;
    if(!("project_id" in body) || !("description" in body) || !("notes" in body))
    return res.status(400).json({message: "Please add all required fields : project_id , project, notes"})
    next()
}

module.exports = {
    checkId,
    checkBody
}

