declare module '*.png'
declare module '*.jpg'
declare module '*.gif'

declare namespace defs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export class Result<T0 = any> {
    /** 返回代码 */
    public code?: number

    /** 返回处理消息 */
    public message?: string

    /** 返回数据对象 */
    public result?: T0

    /** 成功标志 */
    public success?: boolean

    /** 时间戳 */
    public timestamp?: number
  }
  export class FileVO {
    /** 文件ID */
    public fileId: string

    /** 文件地址 */
    public fileUrl: string

    /** 文件名称 */
    public filename: string
  }
}
