// eslint-disable-next-line @typescript-eslint/no-require-imports
const Mock = require('mockjs')

const { Random } = Mock

module.exports = {
  port: 9400,
  endpoint: {
    url: 'http://192.168.10.186:9406/graphql',
  },
  playground: {
    headers: {
      Authorization:
        'kktJLMPhAtduLA0Jl5dXqoT74nxpPLJDoYw89mMaz6nZBzmpTd1/yEHLLKmnix7cJHbkskdp0dHY47xjFpxpUA==',
      appversioncode: '33',
      'app-version': '33',
      platform: 'ios',
    },
  },
  mock: {
    enable: true,
    mockDirectiveDefaultEnableValue: true,
    context: {
      Random,
    },
    scalarMap: {
      Int: () => Random.integer(0, 100),
      String: () => Random.ctitle(2, 4),
      ID: () => Random.id(),
      Boolean: () => Random.boolean(),
      BigDecimal: () => Random.integer(0, 1000000),
      Float: () => Random.float(0, 100),
      Date: () => Random.date(),
      DateTime: () => Random.datetime(),
      Long: () => Random.integer(0, 10000),
      NumberOrBoolOrStringOrNull: () => null,
      NumberOrString: () => null,
    },
    resolvers: {
      Query: {},
    },
  },
}
