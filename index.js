const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')


const videos = require('./videos.json')
console.log(videos)

const audios = require('./audios.json')

const images = require('./images.json')

const externalVideos = require('./external-videos.json')

const broadsheets = require('./broadsheets.json')

const cars = require('./cars.json')

const jsonParser = bodyParser.json()

app.get('/', (_req, res) => {
    res.send('ok')
})


app.post('/services/gopher/query/workspace/:clWorkspaceId/revisions', jsonParser, (req, res) => {
    console.log('got request')
    const query = req.body.queryRequest
    console.log(JSON.stringify(query))
    if (JSON.stringify(query).includes('external-video')) {
        const response = getFromWorkspace('external-video', req.params.clWorkspaceId)
        if (response) {
            return res.send(JSON.parse(response))
        }
        let v = JSON.parse(JSON.stringify(externalVideos))
        // a.assets = a.assets.map(asset => asset.asset)
        return res.send(v)
    }
    else if (JSON.stringify(query).includes('video')) {
        const response = getFromWorkspace('video', req.params.clWorkspaceId)
        if (response) {
            return res.send(JSON.parse(response))
        }
        let v = JSON.parse(JSON.stringify(externalVideos))
        // v.assets = v.assets.map(asset => asset.asset)
        return res.send(v)
    }
    else if (JSON.stringify(query).includes('audio')) {
        const response = getFromWorkspace('audio', req.params.clWorkspaceId)
        if (response) {
            return res.send(JSON.parse(response))
        }
        let a = JSON.parse(JSON.stringify(audios))
        // a.assets = a.assets.map(asset => asset.asset)
        return res.send(a)
    }
    else if (JSON.stringify(query).includes('broadsheet')) {
        const response = getFromWorkspace('broadsheet', req.params.clWorkspaceId)
        if (response) {
            return res.send(JSON.parse(response))
        }
        console.log(JSON.stringify(broadsheets))
        // a.assets = a.assets.map(asset => asset.asset)
        return res.send(broadsheets)
    }
    else if (JSON.stringify(query).includes('cars')) {
        const response = getFromWorkspace('cars', req.params.clWorkspaceId)
        if (response) {
            return res.send(JSON.parse(response))
        }
        console.log(JSON.stringify(cars))
        // a.assets = a.assets.map(asset => asset.asset)
        res.send(cars);
    }
    else {
        const response = getFromWorkspace('images', req.params.clWorkspaceId)
        if (response) {
            return res.send(JSON.parse(response))
        }
        let i = JSON.parse(JSON.stringify(images))
        console.log(JSON.stringify(i))
        // i.assets = i.assets.map(asset => asset.asset)
        return res.send(i)
    }
})


function getFromWorkspace(type, workspace) {
    const file = `/worksapces/${workspace}/${type}.json`
    if(fs.existsSync(file)) {
        const contents = fs.readFileSync(file)
        return JSON.parse(contents)
    }
    return null
}


app.listen(8787, () => console.log('Example app listening on port 8787!'))