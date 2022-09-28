import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import type * as SchemaTypes from '../../generated/types'
const defaultOptions = {} as const
export type InsertAppExceptionMutationVariables = SchemaTypes.Exact<{
  appExceptionDTO?: SchemaTypes.InputMaybe<SchemaTypes.AppExceptionInput>
}>

export type InsertAppExceptionMutation = { insertAppException?: boolean }

export const InsertAppExceptionDocument = gql`
  mutation insertAppException($appExceptionDTO: AppExceptionInput) {
    insertAppException(appExceptionDTO: $appExceptionDTO)
  }
`
export type InsertAppExceptionMutationFn = Apollo.MutationFunction<
  InsertAppExceptionMutation,
  InsertAppExceptionMutationVariables
>

/**
 * __useInsertAppExceptionMutation__
 *
 * To run a mutation, you first call `useInsertAppExceptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertAppExceptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertAppExceptionMutation, { data, loading, error }] = useInsertAppExceptionMutation({
 *   variables: {
 *      appExceptionDTO: // value for 'appExceptionDTO'
 *   },
 * });
 */
export function useInsertAppExceptionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertAppExceptionMutation,
    InsertAppExceptionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    InsertAppExceptionMutation,
    InsertAppExceptionMutationVariables
  >(InsertAppExceptionDocument, options)
}
export type InsertAppExceptionMutationHookResult = ReturnType<
  typeof useInsertAppExceptionMutation
>
export type InsertAppExceptionMutationResult =
  Apollo.MutationResult<InsertAppExceptionMutation>
export type InsertAppExceptionMutationOptions = Apollo.BaseMutationOptions<
  InsertAppExceptionMutation,
  InsertAppExceptionMutationVariables
>
