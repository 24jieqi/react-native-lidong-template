import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import type * as SchemaTypes from '../../generated/types'
const defaultOptions = {} as const
export type UserInfoQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>

export type UserInfoQuery = {
  loginUserInfo?: {
    __typename?: 'UserPayload'
    userId?: number
    userName?: string
    userPhoneNum?: string
    landlineNum?: string
    createTime?: string
    organizationName?: string
    positions?: Array<{
      __typename?: 'PositionPayload'
      positionId?: number
      positionName?: string
    }>
    stores?: Array<{
      __typename?: 'UserStorePayload'
      userId?: number
      storehouseId?: string
      storehouseName?: string
    }>
  }
}

export const UserInfoDocument = gql`
  query userInfo {
    loginUserInfo {
      userId
      userName
      userPhoneNum
      landlineNum
      createTime
      organizationName
      positions {
        positionId
        positionName
      }
      stores {
        userId
        storehouseId
        storehouseName
      }
    }
  }
`

/**
 * __useUserInfoQuery__
 *
 * To run a query within a React component, call `useUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserInfoQuery(
  baseOptions?: Apollo.QueryHookOptions<UserInfoQuery, UserInfoQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UserInfoQuery, UserInfoQueryVariables>(
    UserInfoDocument,
    options,
  )
}
export function useUserInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserInfoQuery,
    UserInfoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UserInfoQuery, UserInfoQueryVariables>(
    UserInfoDocument,
    options,
  )
}
export type UserInfoQueryHookResult = ReturnType<typeof useUserInfoQuery>
export type UserInfoLazyQueryHookResult = ReturnType<
  typeof useUserInfoLazyQuery
>
export type UserInfoQueryResult = Apollo.QueryResult<
  UserInfoQuery,
  UserInfoQueryVariables
>
