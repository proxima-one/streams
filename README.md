# Streams

This is a repo that defines the streams that will be used in the stream registry. Streams can be updated by submitting a pull request to master branch.

### Stream Schema 

- `name`: a unique name for a stream is represented by a stream
- `description`: a text string that provides a description of the stream 
- `labels`: a key-value pairing for additional values to describe a stream


#### Example 
```yaml
  name: "v2.eth-main.erc721.streams.proxima.one"
  description: ""
  labels: 
    - encoding: "json"
```