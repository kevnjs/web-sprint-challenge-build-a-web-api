// Write your "projects" router here!
const express = require('express')
const router = express.Router()
const projects = require('./projects-model')
const pWare = require('./projects-middleware')


router.get('/', (req, res) => {
    projects.get().then(proj => res.json(proj))
})

router.get('/:id', pWare.checkId, (req, res) => {
    projects.get(req.params.id).then(proj => res.json(proj))
})

router.post('/', pWare.checkBody, (req, res) => {
    projects.insert(req.body).then(proj => res.json(proj))
})

router.put('/:id', pWare.checkId, pWare.checkBody, (req, res) => {
    projects.update(req.params.id, req.body).then(proj => res.json(proj))
})

router.delete('/:id', pWare.checkId, (req, res) => {
    projects.get(req.params.id).then(p => {
        projects.remove(req.params.id).then(res.json(p))
    })
})


router.get('/:id/actions',pWare.checkId, (req, res) => {
    projects.getProjectActions(req.params.id).then(action => res.json(action))
})


module.exports = router;