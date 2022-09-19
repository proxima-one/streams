import fs from 'fs'
import YAML from 'yaml'

describe("it works", () => {
  it("works!", () => {
    const file = fs.readFileSync('./streams.yaml', 'utf8')
    const yamlFile = YAML.parse(file)
    console.log(yamlFile)
  });
  it("works!", () => {
    const file = fs.readFileSync('./stream-endpoints.yaml', 'utf8')
    const yamlFile = YAML.parse(file)
    console.log(yamlFile)
  });
});
