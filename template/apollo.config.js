module.exports = {
  client: {
    service: {
      // localSchemaFile: './src/graphql/generated/schema.graphql',
      url: 'http://192.168.10.233:9406/graphql',
      name: 'pitaya-create',
    },
    includes: ['./src/graphql/operations/**/*.{gql,graphql}'],
  },
}
