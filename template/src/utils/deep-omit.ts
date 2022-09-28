import forOwn from 'lodash/forOwn'
import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'
import omit from 'lodash/omit'
/**
 * 递归omit掉props中的属性
 * @param input 源数据
 * @param props 需要忽略的属性
 * @author ljm
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function omitDeepLodash(input: any, props: string[]): any {
  let p = props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function omitDeepOnOwnProps(obj: any) {
    if (!isArray(obj) && !isObject(obj)) {
      return obj
    }

    if (isArray(obj)) {
      return omitDeepLodash(obj, p)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const o: any = {}
    forOwn(obj, (value, key) => {
      o[key] = omitDeepLodash(value, p)
    })

    return omit(o, p)
  }

  if (arguments.length > 2) {
    p = Array.prototype.slice.call(arguments).slice(1)
  }

  if (typeof input === 'undefined') {
    return undefined
  }

  if (isArray(input)) {
    return input.map(omitDeepOnOwnProps)
  }

  return omitDeepOnOwnProps(input)
}
