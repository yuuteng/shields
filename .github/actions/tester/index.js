'use strict'

const core = require('@actions/core')

async function run() {
  const buildArgs = await core.getInputList('build-args', true)
  console.log(buildArgs)
}

run()
