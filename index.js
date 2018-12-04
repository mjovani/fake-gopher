const express = require('express')
const app = express()
const bodyParser = require('body-parser')


const videos = {
    "count": 9,
    "messages": [],
    "entities": [
        {
            "entity": {
                "coords": {
                    "tenantId": "cengage",
                    "fileType": "media-asset",
                    "fileId": "DPVG393NQBW0RHAFY398"
                },
                "retrievalId": "z062585e2-cca3-4910-9ffb-8f681a4ad628",
                "references": [],
                "fingerprint": "13503c0b3ec7ef437086bb2b2fa964c1",
                "attributes": {
                    "subType": {
                        "type": "media-asset",
                        "subType": "video",
                        "version": "1",
                        "title": "Les copains: E&#769;pisode 1, clip 4"
                    }
                },
                "creationDate": "2018-05-31T10:37:55.002-04:00",
                "createdBy": "nkindraka",
                "id": "70720bee-4924-4872-8757-432589897cb3"
            }
        },
        {
            "entity": {
                "coords": {
                    "tenantId": "cengage",
                    "fileType": "media-asset",
                    "fileId": "GJBW5SPHADQDHYLXP052"
                },
                "retrievalId": "zb48949f8-0f97-47cd-ac00-58c652737a2c",
                "references": [],
                "fingerprint": "209b7fa084d9ccc865c31d7c6c2ba934",
                "attributes": {
                    "subType": {
                        "type": "media-asset",
                        "subType": "video",
                        "version": "1",
                        "title": ""
                    }
                },
                "creationDate": "2018-06-21T13:53:55.423-04:00",
                "createdBy": "siyer",
                "id": "4cf03c51-6e74-467f-9d52-473525acb3d1"
            }
        },
        {
            "entity": {
                "coords": {
                    "tenantId": "cengage",
                    "fileType": "media-asset",
                    "fileId": "HQNWDUXPA6N46QTS6278"
                },
                "retrievalId": "zb9225bb9-142e-4227-bdc0-ac6ba131859f",
                "references": [],
                "fingerprint": "d64637efb6598897c2eb55eeb904fdae",
                "attributes": {
                    "subType": {
                        "type": "media-asset",
                        "subType": "video",
                        "version": "1",
                        "title": "Les copains: E&#769;pisode 3"
                    }
                },
                "creationDate": "2018-05-31T09:18:38.673-04:00",
                "createdBy": "nkindraka",
                "id": "0e7ee0e6-bb65-4dca-be45-7f72a880736e"
            }
        },
        {
            "entity": {
                "coords": {
                    "tenantId": "cengage",
                    "fileType": "media-asset",
                    "fileId": "XVSSTUSGKGTYNSPFX279"
                },
                "retrievalId": "z9d9dfb7c-a529-4124-aefc-9ea81f6c2490",
                "references": [],
                "fingerprint": "e22ea5d60402dd9442948e8d1c970cc5",
                "attributes": {
                    "subType": {
                        "type": "media-asset",
                        "subType": "video",
                        "version": "1",
                        "title": "Les copains: E&#769;pisode 3"
                    }
                },
                "creationDate": "2018-05-31T09:58:18.267-04:00",
                "createdBy": "nkindraka",
                "id": "ddde545f-377b-4cea-8b0e-4cc491058019"
            }
        },
        {
            "entity": {
                "coords": {
                    "tenantId": "cengage",
                    "fileType": "media-asset",
                    "fileId": "PZGAFNTXSKN032E6J366"
                },
                "retrievalId": "z3601801e-f10b-49b5-ba78-52b40647b593",
                "references": [],
                "fingerprint": "df16f18890eadda6c9d8f6ebe08b5f31",
                "attributes": {
                    "subType": {
                        "type": "media-asset",
                        "subType": "video",
                        "version": "1",
                        "title": ""
                    }
                },
                "creationDate": "2018-06-21T13:22:40.561-04:00",
                "createdBy": "siyer",
                "id": "70b37bf3-8cf6-49c9-b54c-a921977edf47"
            }
        },
        {
            "entity": {
                "coords": {
                    "tenantId": "cengage",
                    "fileType": "media-asset",
                    "fileId": "XSQZ5N54HZQB538B0402"
                },
                "retrievalId": "zd7e13c6a-a519-413d-ac65-536e17f47759",
                "references": [],
                "fingerprint": "9d22522f7bb77d7aeb6453a5b2ef7d0e",
                "attributes": {
                    "subType": {
                        "type": "media-asset",
                        "subType": "video",
                        "version": "1",
                        "title": "Les copains: E&#769;pisode 1, clip 4"
                    }
                },
                "creationDate": "2018-05-31T09:55:26.965-04:00",
                "createdBy": "nkindraka",
                "id": "7505546f-9f34-4e47-ab51-b6fa9cacce67"
            }
        },
        {
            "entity": {
                "coords": {
                    "tenantId": "cengage",
                    "fileType": "media-asset",
                    "fileId": "XMVPPS7ECHH8CXS6C993"
                },
                "retrievalId": "z991e8268-28d3-4281-b958-9febce1e0d04",
                "references": [],
                "fingerprint": "4fc9fcaa9aaa055c4b7ced6b21600431",
                "attributes": {
                    "subType": {
                        "type": "media-asset",
                        "subType": "video",
                        "version": "1",
                        "title": "Les copains: E&#769;pisode 3"
                    }
                },
                "creationDate": "2018-05-31T11:17:10.707-04:00",
                "createdBy": "nkindraka",
                "id": "b1961201-6709-492b-babf-4f82b7cac531"
            }
        },
        {
            "entity": {
                "coords": {
                    "tenantId": "cengage",
                    "fileType": "media-asset",
                    "fileId": "TLRTMPCFX0A6TLAFU838"
                },
                "retrievalId": "z04a67ad5-ed37-4e6d-ba0f-2e32c2c412ff",
                "references": [],
                "fingerprint": "3f702f01e92bafd5fcd16baa0b714be6",
                "attributes": {
                    "subType": {
                        "type": "media-asset",
                        "subType": "video",
                        "version": "1",
                        "title": "Les copains: E&#769;pisode 1, clip 4"
                    }
                },
                "creationDate": "2018-05-31T11:21:16.124-04:00",
                "createdBy": "nkindraka",
                "id": "057ba4ae-4ff5-4707-9555-0fdf138981cb"
            }
        },
        {
            "entity": {
                "coords": {
                    "tenantId": "cengage",
                    "fileType": "media-asset",
                    "fileId": "LHXTQFREHXYXQXQCG409"
                },
                "retrievalId": "z3c69f05f-bbf3-4e21-9c04-b97ff06db5d9",
                "references": [],
                "fingerprint": "9be890dfc1d130f9371214e5bf8b309e",
                "attributes": {
                    "subType": {
                        "type": "media-asset",
                        "subType": "video",
                        "version": "1",
                        "title": ""
                    }
                },
                "creationDate": "2018-06-21T13:44:35.682-04:00",
                "createdBy": "siyer",
                "id": "999ce436-ca43-40a3-abdb-bb72239638b6"
            }
        }
    ]
}

const audios = {
    "count": 2,
    "messages": [],
    "entities": [
        {
            "entity": {
                "coords": {
                    "tenantId": "cengage",
                    "fileType": "media-asset",
                    "fileId": "RZDJDUP8HS84X9ASY309"
                },
                "retrievalId": "z1c2da7e2-2dcf-4a8a-926e-5a0c55c3e156",
                "references": [],
                "fingerprint": "e4bd944a2beb94f0fda0ef685f4c8407",
                "attributes": {
                    "subType": {
                        "type": "media-asset",
                        "subType": "audio",
                        "version": "1",
                        "title": "wl_atelier1e_m03_147"
                    }
                },
                "creationDate": "2018-05-31T09:58:00.039-04:00",
                "createdBy": "nkindraka",
                "id": "f71b4e47-ecbf-4b41-8f3c-d8c49da3aa50"
            }
        },
        {
            "entity": {
                "coords": {
                    "tenantId": "cengage",
                    "fileType": "media-asset",
                    "fileId": "ZHRHRMQNU6EHSHN9P996"
                },
                "retrievalId": "z18b37784-c519-4295-b091-42be4b46224a",
                "references": [],
                "fingerprint": "929fc27aeae4453e9a5ae46619a33dda",
                "attributes": {
                    "subType": {
                        "type": "media-asset",
                        "subType": "audio",
                        "version": "1",
                        "title": ""
                    }
                },
                "creationDate": "2018-05-31T10:44:31.196-04:00",
                "createdBy": "nkindraka",
                "id": "194359d8-d61f-44be-9ed8-ba624c830a04"
            }
        }
    ]
}

const images = {
    "count": 8,
    "messages": [],
    "entities": [
        {
            "entity": {
                "coords": {
                    "tenantId": "cengage",
                    "fileType": "media-asset",
                    "fileId": "VRFSZ8ETSVLN2LGJJ967"
                },
                "retrievalId": "z781f42d5-4f0a-4101-b446-9eb42a78bb1b",
                "references": [],
                "fingerprint": "ec2ebfe3c6584aa6ec08719c319b208e",
                "attributes": {
                    "subType": {
                        "type": "media-asset",
                        "subType": "image",
                        "version": "3",
                        "title": ""
                    }
                },
                "creationDate": "2018-05-31T09:47:57.319-04:00",
                "createdBy": "nkindraka",
                "id": "b66a5fdf-8e77-4767-9ebf-bdb5e4b5415a"
            }
        }
    ]
}

const externalVideos = {
    "count": 2,
    "messages": [],
    "entities": [
        {
            "entity": {
                "coords": {
                    "tenantId": "cengage",
                    "fileType": "media-asset",
                    "fileId": "DPVG393NQBW0RHAFY398"
                },
                "retrievalId": "z062585e2-cca3-4910-9ffb-8f681a4ad628",
                "references": [],
                "fingerprint": "13503c0b3ec7ef437086bb2b2fa964c1",
                "attributes": {
                    "subType": {
                        "type": "media-asset",
                        "subType": "external-video",
                        "version": "1",
                        "title": "Les copains: E&#769;pisode 1, clip 4"
                    },
                    "youtube": {
                        "videoId": "_oNDKHMaajU",
                        "title": "video 1"
                    }
                },
                "creationDate": "2018-05-31T10:37:55.002-04:00",
                "createdBy": "nkindraka",
                "id": "70720bee-4924-4872-8757-432589897cb3"
            }
        },
        {
            "entity": {
                "coords": {
                    "tenantId": "cengage",
                    "fileType": "media-asset",
                    "fileId": "GJBW5SPHADQDHYLXP052"
                },
                "retrievalId": "zb48949f8-0f97-47cd-ac00-58c652737a2c",
                "references": [],
                "fingerprint": "209b7fa084d9ccc865c31d7c6c2ba934",
                "attributes": {
                    "subType": {
                        "type": "media-asset",
                        "subType": "external-video",
                        "version": "1",
                        "title": ""
                    },
                    "youtube": {
                        "videoId": "JFmsrJFRxxI",
                        "title": "video 2"
                    }
                },
                "creationDate": "2018-06-21T13:53:55.423-04:00",
                "createdBy": "siyer",
                "id": "4cf03c51-6e74-467f-9d52-473525acb3d1"
            }
        }
    ]
}

const broadsheets = {
    "count": 1,
    "messages": [
        "GET time(ms): 581 for revisions for checkpoint: 38ab6ec9-d692-4d6d-bd54-9aea1654ad09",
        "GET time(ms): 573 for revisions for checkpoint: 38ab6ec9-d692-4d6d-bd54-9aea1654ad09",
        "GET time(ms): 591 for revisions for checkpoint: 38ab6ec9-d692-4d6d-bd54-9aea1654ad09"
    ],
    "entities": [
        {
            "entity": {
                "coords": {
                    "tenantId": "cengage",
                    "fileType": "adf",
                    "fileId": "QRWGW7VBS9XRQ9C1G290"
                },
                "retrievalId": "aa62d492-f49d-45a8-8dc9-d4fd25f97cee",
                "references": [
                    {
                        "tenantId": "cengage",
                        "fileType": "cars",
                        "fileId": "QAQDAJH12LM1ZS73N871"
                    }
                ],
                "fingerprint": "eeacc2e336dda3026381d89f179baad0",
                "attributes": {
                    "subType": {
                        "type": "compound-activity",
                        "subType": "broadsheet",
                        "version": "1.0",
                        "derivative": "",
                        "title": "choucroute",
                        "description": ""
                    }
                },
                "creationDate": "2018-11-19T16:17:13.430Z",
                "createdBy": "christophe_feuvre",
                "id": "74e2591a-b6fb-40f4-9b5d-94cf71e38dad"
            },
            "facets": [
                null
            ]
        }
    ]
}

const jsonParser = bodyParser.json()

app.get('/', (_req, res) => {
    res.send('ok')
})


app.post('/services/gopher/query/workspace/:clWorkspaceId/revisions', jsonParser, (req, res) => {
    console.log('got request')
    const query = req.body.queryRequest
    console.log(JSON.stringify(query))
    if (JSON.stringify(query).includes('external-video')) {
        let v = JSON.parse(JSON.stringify(externalVideos))
        // a.assets = a.assets.map(asset => asset.asset)
        return res.send(v)
    }
    else if (JSON.stringify(query).includes('video')) {
        let v = JSON.parse(JSON.stringify(videos))
        // v.assets = v.assets.map(asset => asset.asset)
        return res.send(v)
    }
    else if (JSON.stringify(query).includes('audio')) {
        let a = JSON.parse(JSON.stringify(audios))
        // a.assets = a.assets.map(asset => asset.asset)
        return res.send(a)
    }
    else if (JSON.stringify(query).includes('broadsheet')) {
        console.log(JSON.stringify(broadsheets))
        // a.assets = a.assets.map(asset => asset.asset)
        return res.send(broadsheets)
    }
    else {
        let i = JSON.parse(JSON.stringify(images))
        console.log(JSON.stringify(i))
        // i.assets = i.assets.map(asset => asset.asset)
        return res.send(i)
    }
})



app.listen(8787, () => console.log('Example app listening on port 8787!'))