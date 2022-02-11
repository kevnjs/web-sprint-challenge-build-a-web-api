// Write your "actions" router here!
const express = require('express')
const router = express.Router()
const actions = require('./actions-model')
const aWare = require('./actions-middlware')


router.get('/', (req, res) => {
    actions.get().then(act => res.json(act))
})

router.get('/:id', aWare.checkId, (req, res) => {
    actions.get(req.params.id).then(act => res.json(act))
})

router.post('/', aWare.checkBody, (req, res) => {
    actions.insert(req.body).then(act => res.json(act))
})

router.put('/:id', aWare.checkId, aWare.checkBody, (req, res) => {
    actions.update(req.params.id, req.body).then(act => res.json(act))
})

router.delete('/:id', aWare.checkId, (req, res) => {
    actions.get(req.params.id).then(act => {
        actions.remove(req.params.id).then(res.json(act))
    })
    
})
module.exports = router;