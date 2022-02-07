const sanityClient = require('@sanity/client')

export const client = sanityClient({
  projectId: '1h7r3s44',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: 'skHxlutWp9HAVrab7o3gRsxrve8NTSBfmKJoRI6mWLtqQ5cBxuIvJyOTHfvElZKPf6UeGaZWQsng2HbmYv9lC9pespZKcbtPhRpAVHiL4BEwg1ywE9P15OOlleLaeIUITpbOOLTfi86bXRs8zYwyfFPskm1zGVD6Xo0vFRWLgpBTXdlh62nH', // or leave blank for unauthenticated usage
  useCdn: false, //
})


