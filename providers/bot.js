const { Orchestrator } = require('./orchestrator');

class AtosSiri {
    constructor(adapter){
        console.log('class initialized');
        this.age = 14
        this.name = 'sathish'
        this.adapter = adapter

        this.orchestrator = new Orchestrator(this.adapter)
    }

    getname(bodyData){
        console.log('inside class func',bodyData.query)
        return `${this.name} ${this.age}`
    }

    async recognizerResult(req) {
        return await this.orchestrator.recognize(req)
    }
}

module.exports.AtosSiri = AtosSiri;