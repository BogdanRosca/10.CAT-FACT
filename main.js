const axios = require('axios')
const core = require('@actions/core')
const github = require('@actions/github')

async function get_cat(){
    const url = core.getInput('url', { require: true })
    const response = await axios.get(url); 
    const fact = response.data.fact
    
    core.setOutput('fact', fact)
}

get_cat()