export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BigDecimal: number
  Date: number
  DateTime: number
  Long: number
  _FieldSet: any
}

export type AcquireItemPayload = {
  __typename?: 'AcquireItemPayload'
  /** SPU名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 副单位与基本单位关系转换 */
  conversion?: Maybe<Scalars['BigDecimal']>
  /** 赠送total数量 v2.9.0 */
  giveTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 赠送unit数量 v2.9.0 */
  giveUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 入库毛重 */
  inStockGrossUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 入库单价 */
  inStockPrice?: Maybe<Scalars['BigDecimal']>
  /** 入库total数量 */
  inStockTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 入库净重 */
  inStockUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 标记 v2.9.0 */
  markList?: Maybe<Array<Maybe<AcquireMarkEnum>>>
  /** 单价 */
  price?: Maybe<Scalars['BigDecimal']>
  /** 单价定位(10净重，20毛重) */
  pricePosition?: Maybe<Scalars['Int']>
  /** 单价单位Id */
  priceType?: Maybe<Scalars['Int']>
  /** 单价单位名称 */
  priceTypeName?: Maybe<Scalars['String']>
  /** 关联采购单号 */
  relevancyCode?: Maybe<Scalars['String']>
  /** 商品skuID */
  skuId?: Maybe<Scalars['Int']>
  /** 规格选项 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 总价 */
  totalPrice?: Maybe<Scalars['BigDecimal']>
  /** 副单位数量 */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 副单位类型 */
  totalType?: Maybe<Scalars['Int']>
  /** 副单位类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /** 小单位数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 小单位类型 */
  unitType?: Maybe<Scalars['Int']>
  /** 小单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
}

export enum AcquireMarkEnum {
  /** 补损 */
  Compensation = 'COMPENSATION',
  /** 赠送 */
  Give = 'GIVE',
  /** 包损耗 */
  PacketLoss = 'PACKET_LOSS',
}

/** 分页对象 */
export type AcquirePageResultPayload = {
  __typename?: 'AcquirePageResultPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  /** 采购订单列表 */
  records?: Maybe<Array<Maybe<AcquirePayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type AcquirePayload = BelongOrgBase & {
  __typename?: 'AcquirePayload'
  /**
   * 总价合计
   *     totalPrice:BigDecimal
   * 入库记录条数
   */
  appliedCount?: Maybe<Scalars['Int']>
  /** 采购单号 */
  applyCode?: Maybe<Scalars['String']>
  /** 入库订单Id */
  applyId?: Maybe<Scalars['ID']>
  /** 采购订单状态Id '入库订单状态，默认待提交，10：待提交、20：待入库、30：部分入库、40：已完成、50：已取消'; */
  applyStatus?: Maybe<Scalars['Int']>
  /** 入库状态 */
  applyStatusName?: Maybe<Scalars['String']>
  /** 入库类型 */
  applyType?: Maybe<Scalars['Int']>
  /** 入库类型名称（原料采购、辅料采购） */
  applyTypeName?: Maybe<Scalars['String']>
  /** 客户Id */
  belongId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  belongName?: Maybe<Scalars['String']>
  /** 所属组织 v2.9.0 */
  belongOrg?: Maybe<Org>
  /** 客户类型Id */
  belongType?: Maybe<Scalars['Int']>
  /** 客户类型名称 */
  belongTypeName?: Maybe<Scalars['String']>
  /**  费用单ID */
  billId?: Maybe<Scalars['ID']>
  /** 商品信息 */
  commodities?: Maybe<Array<Maybe<AcquireItemPayload>>>
  /** 商品类型Id */
  commodityType?: Maybe<Scalars['Int']>
  /** 商品类型名称（原料、辅料） */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 费用信息 */
  costs?: Maybe<Array<Maybe<CostItemPayload>>>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 创建人员ID */
  createUserId?: Maybe<Scalars['Int']>
  /** 创建人员 */
  createUserName?: Maybe<Scalars['String']>
  /** 驳回（取消）原因(列表+详情) */
  errorDescription?: Maybe<Scalars['String']>
  /** 已经存在的退货类型 */
  existReturnTypeList?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 采购费用单ID */
  exitCost?: Maybe<Scalars['Boolean']>
  /**  是否可退货 */
  exitReturn?: Maybe<Scalars['Boolean']>
  /** 手工单号 */
  manualCode?: Maybe<Scalars['String']>
  /** 订单备注 */
  note?: Maybe<Scalars['String']>
  /** 申请操作记录 */
  operationLog?: Maybe<Array<Maybe<FlowApplyOperationLogPayload>>>
  /**  退货记录数量 */
  returnCount?: Maybe<Scalars['Int']>
  /** 供应商Id */
  supplierId?: Maybe<Scalars['Int']>
  /** 供应商名称 */
  supplierName?: Maybe<Scalars['String']>
  /** 仓库Id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

/** 新增配送单入参 */
export type AddDeliveryOrderInput = {
  /** 客户信息集合 */
  belongInfo: Array<InputMaybe<CustomerInfo>>
  /** 所属组织ID */
  belongOrgId: Scalars['Int']
  /** 业务员名字 */
  businessUserName?: InputMaybe<Scalars['String']>
  /** 车牌号 */
  carNum: Scalars['String']
  /** 车辆类型 */
  carType: Scalars['String']
  /** 配送单费用明细 */
  deliveryOrderFee: Array<DeliveryOrderFeeInput>
  /** 配送单商品明细 */
  deliveryOrderItem: Array<DeliveryOrderItemInput>
  /** 配送方式 */
  deliveryType: DeliveryMethodEnum
  /** 司机联系方式 */
  driverContact: Scalars['String']
  /** 司机姓名 */
  driverName: Scalars['String']
  /** 配送货物销售订单日期 */
  saleOrderDate: Scalars['Long']
  /** 仓库ID */
  warehouseId: Scalars['ID']
}

export type AddOrDeleteRecords = {
  __typename?: 'AddOrDeleteRecords'
  /**  变更后的数量 */
  afterQuantity?: Maybe<Scalars['BigDecimal']>
  /**  变更前的数量 */
  beforeQuantity?: Maybe<Scalars['BigDecimal']>
  /**  变更数量 */
  changeQuantity?: Maybe<Scalars['BigDecimal']>
  /**  变更描述与备注 */
  changeRemark?: Maybe<Scalars['String']>
  /**  变更类型 10：增加 20：减少 */
  changeType?: Maybe<Scalars['Int']>
  /**  创建人 */
  createBy?: Maybe<Scalars['Int']>
  /**  创建人名称 */
  createByName?: Maybe<Scalars['String']>
  /**  创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /**  计划id */
  planId?: Maybe<Scalars['ID']>
  /**  任务id */
  taskId?: Maybe<Scalars['ID']>
  /**  任务明细变更id */
  taskItemChangeId?: Maybe<Scalars['ID']>
  /**  任务明细id */
  taskItemId?: Maybe<Scalars['ID']>
}

export type AddOrDeleteRecordsInput = {
  planId?: InputMaybe<Scalars['ID']>
  taskId?: InputMaybe<Scalars['ID']>
  taskItemId?: InputMaybe<Scalars['ID']>
}

export type AddStockQuantityInput = {
  /** 采购单id */
  applyId: Scalars['ID']
  /** sku id */
  skuId: Scalars['Int']
  /** 采购退货:申请增加量大单位数量 */
  totalQuantity?: InputMaybe<Scalars['BigDecimal']>
  /** 采购退货:申请增加量小单位数量 */
  unitQuantity: Scalars['BigDecimal']
}

export type AddressBase = {
  address?: Maybe<AddressInfo>
}

export type AddressInfo = {
  __typename?: 'AddressInfo'
  /** 地址Id */
  addressId?: Maybe<Scalars['Int']>
  /** 地址名称 */
  addressName?: Maybe<Scalars['String']>
  /** 归属类型 */
  belongType?: Maybe<Scalars['Int']>
  /** 配送地址 */
  deliveryName?: Maybe<Scalars['String']>
}

export type AddressInfoBase = {
  addressInfo?: Maybe<AddressInfo>
}

/** 所有业务类型：入库订单类型，出库订单类型，计划类型，任务类型,实时库存，借调，出入库记录，运营监管等 */
export enum AllBusinessType {
  /** 出库订单: 盘点出库: 80 */
  CheckAcquisition = 'CHECK_ACQUISITION',
  /** 入库订单：盘点入库: 90 */
  CheckInApply = 'CHECK_IN_APPLY',
  /** 商品转换 */
  CommodityConvert = 'COMMODITY_CONVERT',
  /** 生产计划: 销售生产: 20 */
  CreateAutomatically = 'CREATE_AUTOMATICALLY',
  /** 生产计划: 备货生产: 10 */
  CreateManually = 'CREATE_MANUALLY',
  /** 出库订单: 报损出库: 70 */
  DamagedAcquisition = 'DAMAGED_ACQUISITION',
  /** 出库订单: 生产报损: 180 */
  DamagedProduction = 'DAMAGED_PRODUCTION',
  /** 出库订单: 原料报损: 150 */
  DamagedRawMaterial = 'DAMAGED_RAW_MATERIAL',
  /** 出库订单: 退货品报损: 170 */
  DamagedReturnedGoods = 'DAMAGED_RETURNED_GOODS',
  /** 出库订单: 半成品报损: 160 */
  DamagedSemiFinishedProduct = 'DAMAGED_SEMI_FINISHED_PRODUCT',
  /** 默认 */
  Default = 'DEFAULT',
  /** 入库订单：次品入库: 50 */
  DefectiveInApply = 'DEFECTIVE_IN_APPLY',
  /** 出库订单: 次品销售: 90 */
  DefectiveSale = 'DEFECTIVE_SALE',
  /** 配送单/配送费用单 */
  Delivery = 'DELIVERY',
  /** 出库订单: 成品销售: 30 */
  FinishedProductAcquisition = 'FINISHED_PRODUCT_ACQUISITION',
  /** 入库记录 */
  InStockRecord = 'IN_STOCK_RECORD',
  /** 原件销售 */
  OriginalSale = 'ORIGINAL_SALE',
  /** 出库订单: 其他出库: 60 */
  OtherAcquisition = 'OTHER_ACQUISITION',
  /** 入库订单：其他入库: 100 */
  OtherInApply = 'OTHER_IN_APPLY',
  /** 出库记录 */
  OutStockRecord = 'OUT_STOCK_RECORD',
  /** 入库订单：成品入库: 10 */
  ProductionInApply = 'PRODUCTION_IN_APPLY',
  /** 出库订单: 采购退货: 100 */
  PurchaseReturn = 'PURCHASE_RETURN',
  /** 出库订单: 原料领料: 10 */
  RawMaterialAcquisition = 'RAW_MATERIAL_ACQUISITION',
  /** 入库订单：原料采购: 20 */
  RawPurchase = 'RAW_PURCHASE',
  /** 入库订单：原料退料: 30 */
  RawReturn = 'RAW_RETURN',
  /** 实时库存 */
  RealtimeStock = 'REALTIME_STOCK',
  /** 出库订单: 退货品领料: 25 */
  ReturnedGoodsOut = 'RETURNED_GOODS_OUT',
  /** 入库订单：退货品退料: 130 */
  ReturnedGoodsReturn = 'RETURNED_GOODS_RETURN',
  /** 入库订单：销售退货: 120 */
  SalesReturn = 'SALES_RETURN',
  /** 商品借调 */
  Seconded = 'SECONDED',
  /** 入库订单：半成品入库: 40 */
  SemiFinishedInApply = 'SEMI_FINISHED_IN_APPLY',
  /** 入库订单：半成品退料: 140 */
  SemiFinishedProductsReturn = 'SEMI_FINISHED_PRODUCTS_RETURN',
  /** 出库订单: 半成品领料: 50 */
  SemiFinishedProductAcquisition = 'SEMI_FINISHED_PRODUCT_ACQUISITION',
  /** 入库订单：辅料采购: 60 */
  SubPurchase = 'SUB_PURCHASE',
  /** 入库订单：辅料退料: 70 */
  SubReturn = 'SUB_RETURN',
  /** 出库订单: 辅料领料: 20 */
  SupplementaryMaterialAcquisition = 'SUPPLEMENTARY_MATERIAL_ACQUISITION',
  /** 任务监控 */
  TaskMonitor = 'TASK_MONITOR',
  /** 入库订单：调拨入库: 150 */
  TransferInApply = 'TRANSFER_IN_APPLY',
  /** 出库订单: 调拨出库: 110 */
  TransferOutApply = 'TRANSFER_OUT_APPLY',
  /** 入库订单：销售归还: 110 */
  TurnoverBasketReturn = 'TURNOVER_BASKET_RETURN',
}

export type AppExceptionInput = {
  /**  appId */
  appId?: InputMaybe<Scalars['Int']>
  /**  异常类型 */
  exceptionType?: InputMaybe<Scalars['Int']>
  /**  异常信息 */
  message?: InputMaybe<Scalars['String']>
  /**  平台类型 */
  platform?: InputMaybe<Scalars['String']>
  /**  异常版本 */
  systemVersion?: InputMaybe<Scalars['String']>
  version?: InputMaybe<Scalars['String']>
}

export type AppExceptionType = {
  __typename?: 'AppExceptionType'
  /**  appId */
  appId?: Maybe<Scalars['Int']>
  /**  异常类型 */
  exceptionType?: Maybe<Scalars['Int']>
  /**  id */
  id?: Maybe<Scalars['Int']>
  /**  异常信息 */
  message?: Maybe<Scalars['String']>
  /**  平台类型 */
  platform?: Maybe<Scalars['Int']>
  /**  异常版本 */
  systemVersion?: Maybe<Scalars['String']>
}

/** App类型 */
export enum AppType {
  /** 关务 */
  Customs = 'CUSTOMS',
  /** 星桥物流 */
  Durian = 'DURIAN',
  /** 星图 */
  Longan = 'LONGAN',
  /** 运营平台 */
  Operation = 'OPERATION',
  /** 星桥批发 */
  Peach = 'PEACH',
  /** 星桥生产 */
  Pitaya = 'PITAYA',
  /** 星桥商超 */
  Supermarket = 'SUPERMARKET',
  /** 运输 */
  Transportation = 'TRANSPORTATION',
  Unknown = 'UNKNOWN',
}

export type AppVersionPayload = {
  __typename?: 'AppVersionPayload'
  /**     @ApiModelProperty(notes = "ios 苹果商店的应用 id") */
  appleId?: Maybe<Scalars['String']>
  /**     @ApiModelProperty(notes = "创建时间") */
  createAt?: Maybe<Scalars['Long']>
  /**     @ApiModelProperty(notes = "android 包下载地址") */
  downloadUrl?: Maybe<Scalars['String']>
  nowData?: Maybe<Scalars['Long']>
  platform?: Maybe<Scalars['Int']>
  /**     @ApiModelProperty(notes = "发布时间") */
  releaseAt?: Maybe<Scalars['Long']>
  updateInfo?: Maybe<Scalars['String']>
  /**     @ApiModelProperty(notes = "0不升级，1升级，2强制升级") */
  upgradeStrategy?: Maybe<Scalars['Int']>
  version?: Maybe<Scalars['Int']>
  versionCode?: Maybe<Scalars['String']>
}

export type AuditInOrderItemPayload = SkuDetailBase & {
  __typename?: 'AuditInOrderItemPayload'
  /** 批次id */
  batchId?: Maybe<Scalars['ID']>
  /** SPUId */
  commodityId?: Maybe<Scalars['Int']>
  /** SPU名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品skuID */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 商品规格选项Id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 是否完成入库 */
  completeInStock?: Maybe<Scalars['Int']>
  /** 副单位与基本单位换算 */
  conversion?: Maybe<Scalars['BigDecimal']>
  /** 毛重数量 */
  grossUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 已入库毛重数量 */
  inBoundGrossUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 已入库总计数量 */
  inBoundTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 已入库净重数量 */
  inBoundUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** item列表Id */
  inOrderItemId?: Maybe<Scalars['ID']>
  /** 单价类型 10 净重 20 毛重 */
  pricePosition?: Maybe<Scalars['Int']>
  /** 商品信息 */
  skuDetail?: Maybe<CommoditySku>
  /** 规格选项 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 副单位数量 */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 副单位类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /** 单价 */
  unitPrice?: Maybe<Scalars['BigDecimal']>
  unitPriceType?: Maybe<Scalars['Int']>
  /** 单价类型名称 */
  unitPriceTypeName?: Maybe<Scalars['String']>
  /** 小单位数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 小计 */
  unitTotalPrice?: Maybe<Scalars['BigDecimal']>
  /** 小单位类型 */
  unitType?: Maybe<Scalars['Int']>
  /** 小单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
  /** 待入库副单位数量 */
  waitTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 待入库小单位数量 */
  waitUnitQuantity?: Maybe<Scalars['BigDecimal']>
}

export type AuditInOrderPayload = BelongOrgBase & {
  __typename?: 'AuditInOrderPayload'
  /** 所属组织 */
  belongOrg?: Maybe<Org>
  /** 商品信息 */
  commodities?: Maybe<Array<Maybe<AuditInOrderItemPayload>>>
  /** 商品类型Id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 创建人员 */
  createUserName?: Maybe<Scalars['String']>
  /** 联系电话 */
  createUserPhone?: Maybe<Scalars['String']>
  /** 客户配送地址 */
  customerDistributionName?: Maybe<Scalars['String']>
  /** 客户Id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户类型Id */
  customerTypeId?: Maybe<Scalars['Int']>
  /** 客户类型名称 */
  customerTypeName?: Maybe<Scalars['String']>
  /** 预估运费 */
  deliveryFee?: Maybe<Scalars['BigDecimal']>
  /** 入库单号 */
  inOrderCode?: Maybe<Scalars['String']>
  /** 订单备注 */
  inOrderDescription?: Maybe<Scalars['String']>
  /** 入库订单Id */
  inOrderId?: Maybe<Scalars['ID']>
  /** 入库状态Id */
  inOrderStatus?: Maybe<Scalars['Int']>
  /** 入库状态 */
  inOrderStatusName?: Maybe<Scalars['String']>
  /** 入库类型 */
  inOrderTypeId?: Maybe<Scalars['Int']>
  /** 入库类型名称 */
  inOrderTypeName?: Maybe<Scalars['String']>
  /** 源AppId */
  sourceAppId?: Maybe<Scalars['Int']>
  /** 供应商Id */
  supplierId?: Maybe<Scalars['Int']>
  /** 供应商名称 */
  supplierName?: Maybe<Scalars['String']>
  /** 目标AppId */
  targetAppId?: Maybe<Scalars['Int']>
  /** 任务单号 */
  taskCode?: Maybe<Scalars['String']>
  /** 任务Id */
  taskId?: Maybe<Scalars['ID']>
  /** 总计 */
  totalPrice?: Maybe<Scalars['BigDecimal']>
  /** 调拨id */
  transferId?: Maybe<Scalars['ID']>
  /** 调出组织id */
  transferOrganizationId?: Maybe<Scalars['Int']>
  /** 调出组织名称 */
  transferOrganizationName?: Maybe<Scalars['String']>
  /** 调拨类型 10:分拣仓-分拣仓 20:分拣仓-批发 */
  transferType?: Maybe<Scalars['Int']>
  /** 仓库Id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

export type AuditOrderItem = {
  __typename?: 'AuditOrderItem'
  /** SPUId */
  commodityId?: Maybe<Scalars['Int']>
  /** SPU名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品skuID */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 商品规格选项Id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 规格选项 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 副单位数量 */
  totalQuantity?: Maybe<Scalars['String']>
  /** 副单位类型 */
  totalType?: Maybe<Scalars['Int']>
  /** 副单位类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /** 单价 */
  unitPrice?: Maybe<Scalars['String']>
  /** 单价单位名称 */
  unitPriceTypeName?: Maybe<Scalars['String']>
  /** 小单位数量 */
  unitQuantity?: Maybe<Scalars['String']>
  /** 小计 */
  unitTotalPrice?: Maybe<Scalars['String']>
  /** 小单位类型 */
  unitType?: Maybe<Scalars['Int']>
  /** 小单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
}

export type AuditOutOrder = {
  __typename?: 'AuditOutOrder'
  /** 商品信息 */
  commodities?: Maybe<Array<Maybe<AuditOrderItem>>>
  /** 商品类型Id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['String']>
  /** 创建人员 */
  createUserName?: Maybe<Scalars['String']>
  /** 客户分组Id */
  customerGroupId?: Maybe<Scalars['Int']>
  /** 客户分组名称 */
  customerGroupName?: Maybe<Scalars['String']>
  /** 客户Id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户类型Id */
  customerTypeId?: Maybe<Scalars['Int']>
  /** 客户类型名称 */
  customerTypeName?: Maybe<Scalars['String']>
  /** 出库单号 */
  outOrderCode?: Maybe<Scalars['String']>
  /** 订单备注 */
  outOrderDescription?: Maybe<Scalars['String']>
  /** 出库订单Id */
  outOrderId?: Maybe<Scalars['ID']>
  /** 出库状态 */
  outOrderStatus?: Maybe<Scalars['String']>
  /** 出库状态Id */
  outOrderStatusId?: Maybe<Scalars['Int']>
  /** 出库类型 */
  outOrderTypeId?: Maybe<Scalars['Int']>
  /** 出库类型名称 */
  outOrderTypeName?: Maybe<Scalars['String']>
  /** 任务单号 */
  taskCode?: Maybe<Scalars['String']>
  /** 任务Id */
  taskId?: Maybe<Scalars['ID']>
  /** 总计 */
  totalPrice?: Maybe<Scalars['String']>
  /** 仓库Id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

export type AuditSaleIncomeOrderInput = {
  incomeId: Scalars['ID']
  saleCostOrderItems?: InputMaybe<Array<InputMaybe<SaleCostOrderItemInput>>>
  saleIncomeOrderItems?: InputMaybe<Array<InputMaybe<SaleIncomeOrderInput>>>
}

export type AuditUserBase = {
  /** 审核人 */
  auditUser?: Maybe<User>
}

export type AuditUserIdBase = {
  /** 审核人 */
  auditUserId?: Maybe<User>
}

export type BatchItemPayload = {
  __typename?: 'BatchItemPayload'
  /** 批次号 */
  batchCode?: Maybe<Scalars['String']>
  /** 副单位数量 */
  totalQuantity?: Maybe<Scalars['String']>
  /** 小单位数量 */
  unitQuantity?: Maybe<Scalars['String']>
}

export type BatchStockItem = {
  /** 批次Id */
  batchStockId: Scalars['ID']
  /** 副单位数量 */
  totalQuantity: Scalars['BigDecimal']
  /** 小单位数量 */
  unitQuantity: Scalars['BigDecimal']
}

/** 开始任务请求参数 */
export type BeginTask = {
  /** 正式工人数 */
  numberActual: Scalars['Int']
  /** 任务id */
  taskId: Scalars['ID']
  /** 零时工人数 */
  tempWorkerQuantity: Scalars['Int']
}

export type BelongInfo = {
  __typename?: 'BelongInfo'
  /** 客户Id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户类型 */
  customerType?: Maybe<Scalars['Int']>
}

export type BelongInfoBase = {
  belongInfo?: Maybe<AddressInfo>
}

export type BelongOrgBase = {
  /** 所属组织 */
  belongOrg?: Maybe<Org>
}

export type BelongOrgPayload = {
  __typename?: 'BelongOrgPayload'
  /** 组织id */
  orgId?: Maybe<Scalars['Int']>
  /** 组织名称 */
  orgName?: Maybe<Scalars['String']>
}

export type BelongOrganizationBase = {
  /** 所属组织 */
  belongOrganization?: Maybe<Org>
}

/** 归属类型 */
export enum BelongType {
  /** 地址: 40 */
  Address = 'ADDRESS',
  /** 渠道: 30 */
  Channel = 'CHANNEL',
  /** 公司: 10 */
  Company = 'COMPANY',
  /** 客户: 20 */
  Customer = 'CUSTOMER',
}

/** 费用单审核信息 */
export type BillAuditDetailPayload = UserBase & {
  __typename?: 'BillAuditDetailPayload'
  /** 操作时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 状态 */
  status?: Maybe<BillStatusEnum>
  /** 状态 */
  statusName?: Maybe<Scalars['String']>
  /** 操作人 */
  user?: Maybe<User>
}

export type BillDictItemPayload = {
  __typename?: 'BillDictItemPayload'
  description?: Maybe<Scalars['String']>
  dictCode?: Maybe<Scalars['String']>
  dictItemId?: Maybe<Scalars['ID']>
  itemText?: Maybe<Scalars['String']>
  itemValue?: Maybe<Scalars['String']>
  sort?: Maybe<Scalars['Int']>
}

export enum BillMainTypeEnum {
  /** 调拨费 */
  AllotFee = 'ALLOT_FEE',
  /** 采购 */
  CgBillFee = 'CG_BILL_FEE',
  /** 采购退货 */
  CtBillFee = 'CT_BILL_FEE',
  /** 计调调整确认费用 */
  DollarsAdjustAffirmFee = 'DOLLARS_ADJUST_AFFIRM_FEE',
  /** 计调调整费用 */
  DollarsForFee = 'DOLLARS_FOR_FEE',
  /** 空柜调整确认费用 */
  EmptyCabinetAdjustAffirmBill = 'EMPTY_CABINET_ADJUST_AFFIRM_BILL',
  /** 空柜费用调整 */
  EmptyCabinetAdjustBill = 'EMPTY_CABINET_ADJUST_BILL',
  /** 空柜区域费用 */
  EmptyCabinetAreaBill = 'EMPTY_CABINET_AREA_BILL',
  /** 空柜费 */
  EmptyCabinetFee = 'EMPTY_CABINET_FEE',
  /** 无 */
  ErrorMainType = 'ERROR_MAIN_TYPE',
  /** 产地费用 */
  OriginFee = 'ORIGIN_FEE',
  /** 回款费用 */
  PaymentFee = 'PAYMENT_FEE',
  /** 还箱调整确认费用 */
  ReturnBoxAdjustAffirmFee = 'RETURN_BOX_ADJUST_AFFIRM_FEE',
  /** 还箱调整费用 */
  ReturnBoxAdjustFee = 'RETURN_BOX_ADJUST_FEE',
  /** 还箱费 */
  ReturnBoxFee = 'RETURN_BOX_FEE',
  /** 销售 */
  SaleBillFee = 'SALE_BILL_FEE',
  /** 销售退货费用 */
  SaleReturnBillFee = 'SALE_RETURN_BILL_FEE',
  Unrecognized = 'UNRECOGNIZED',
}

/** 费用单状态 */
export enum BillStatusEnum {
  /** 待业务审核 */
  BillBizUnReviewed = 'BILL_BIZ_UN_REVIEWED',
  /** 已取消 */
  BillCancel = 'BILL_CANCEL',
  /** 已完成 */
  BillComplete = 'BILL_COMPLETE',
  /** 财务已确认 */
  BillFdConfirmed = 'BILL_FD_CONFIRMED',
  /** 待财务审核 */
  BillFdUnReviewed = 'BILL_FD_UN_REVIEWED',
  /** 待确认 */
  BillUnConfirmed = 'BILL_UN_CONFIRMED',
  /** 待提交 */
  BillUnSubmitted = 'BILL_UN_SUBMITTED',
  /** 错误状态 */
  ErrorBillStatus = 'ERROR_BILL_STATUS',
  Unrecognized = 'UNRECOGNIZED',
}

export type BindOrgInput = {
  bindToken?: InputMaybe<Scalars['String']>
  orgId?: InputMaybe<Scalars['Int']>
}

export type BindOrgPayload = {
  __typename?: 'BindOrgPayload'
  token?: Maybe<Scalars['String']>
}

export type BusinessPayload = {
  __typename?: 'BusinessPayload'
  /** 渠道id */
  channelId?: Maybe<Scalars['Int']>
  /** 渠道名称 */
  channelName?: Maybe<Scalars['String']>
  /** 已经生产 */
  completedNum?: Maybe<Scalars['BigDecimal']>
  /** 预估销量 */
  expectNum?: Maybe<Scalars['BigDecimal']>
  /** 已经配送 */
  finishDelivery?: Maybe<Scalars['BigDecimal']>
  /** 平台数量 */
  platformNum?: Maybe<Scalars['Int']>
  /** 实际销量 */
  realQuantity?: Maybe<Scalars['BigDecimal']>
  /** 销售金额 */
  saleAmount?: Maybe<Scalars['BigDecimal']>
}

/**  业务类型枚举 */
export enum BusinessType {
  /**  盘点 */
  BizInventory = 'BIZ_INVENTORY',
  /**  其他入库 */
  BizInStock = 'BIZ_IN_STOCK',
  /**  其他出库 */
  BizOutStock = 'BIZ_OUT_STOCK',
  /**  生产任务 */
  BizProductionTask = 'BIZ_PRODUCTION_TASK',
  /**  采购 */
  BizPurchase = 'BIZ_PURCHASE',
  /**  采购退货 */
  BizPurchaseReturn = 'BIZ_PURCHASE_RETURN',
  /**  销售 */
  BizSales = 'BIZ_SALES',
  /**  销售退货 */
  BizSalesReturn = 'BIZ_SALES_RETURN',
  /**  调拨 */
  BizTransfer = 'BIZ_TRANSFER',
}

export type CancelAcquireInput = {
  applyId?: InputMaybe<Scalars['ID']>
  note?: InputMaybe<Scalars['String']>
}

export type CancelDeliveryOrderInput = {
  /** 配送单订单ID */
  orderId: Scalars['ID']
}

export type CancelInOrderInput = {
  inOrderDescription?: InputMaybe<Scalars['String']>
  inOrderId: Scalars['ID']
}

export type CancelOtherInOrderInput = {
  inOrderDescription: Scalars['String']
  inOrderId: Scalars['ID']
}

export type CancelOutOrderInput = {
  outOrderDescription: Scalars['String']
  outOrderId: Scalars['ID']
}

/** 取消生产计划入参 */
export type CancelPlanInput = {
  /** 计划id */
  planId: Scalars['ID']
  /** 计划文字描述 */
  planLogDescription?: InputMaybe<Scalars['String']>
}

export type CancelPurchaseReturnOrderInput = {
  note: Scalars['String']
  returnId: Scalars['ID']
}

export type CancelSaleProductionInput = {
  /** 出库明细id */
  outOrderItemId: Scalars['ID']
}

export type CancelSaleProductionPayload = {
  __typename?: 'CancelSaleProductionPayload'
  result?: Maybe<Scalars['Boolean']>
}

export type CancelTaskInput = {
  /** 任务id */
  taskId: Scalars['ID']
}

export type CancelTaskPayload = {
  __typename?: 'CancelTaskPayload'
  result?: Maybe<Scalars['Boolean']>
}

export type CancelWasteSaleOrderInput = {
  cancelReason: Scalars['String']
  saleOrderId: Scalars['ID']
}

export type ChangePwdInput = {
  newPwd?: InputMaybe<Scalars['String']>
  oldPwd?: InputMaybe<Scalars['String']>
}

export type ChangePwdPayload = {
  __typename?: 'ChangePwdPayload'
  success?: Maybe<Scalars['Boolean']>
}

/** 渠道统计任务 */
export type ChannelStatisticsPayload = {
  __typename?: 'ChannelStatisticsPayload'
  /** 渠道名称 */
  channelName?: Maybe<Scalars['String']>
  /** 完成/已生产 */
  completed?: Maybe<Scalars['BigDecimal']>
  /** 计划生产 */
  expectNum?: Maybe<Scalars['BigDecimal']>
  /** 未完成/未生产 */
  undone?: Maybe<Scalars['BigDecimal']>
}

export type CheckConditionInput = {
  /** 商品分类 */
  commodityTypeIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** 仓库id */
  warehouseId: Scalars['ID']
}

export type CheckDetailInput = {
  batchCode?: InputMaybe<Scalars['String']>
  batchId?: InputMaybe<Scalars['ID']>
  /** 归属名称 */
  belongId?: InputMaybe<Scalars['Int']>
  belongName?: InputMaybe<Scalars['String']>
  /** 归属类型 */
  belongType?: InputMaybe<Scalars['Int']>
  checkTotalQuantity?: InputMaybe<Scalars['Float']>
  checkUnitQuantity?: InputMaybe<Scalars['Float']>
  /** 商品分类 */
  commodityTypeId?: InputMaybe<Scalars['Int']>
  commodityTypeName?: InputMaybe<Scalars['String']>
  remark?: InputMaybe<Scalars['String']>
  skuId?: InputMaybe<Scalars['Int']>
  totalQuantity?: InputMaybe<Scalars['Float']>
  unitQuantity?: InputMaybe<Scalars['Float']>
}

export type CheckDetailPayload = {
  __typename?: 'CheckDetailPayload'
  abnormalQuantity?: Maybe<Scalars['Int']>
  /** 归属名称 */
  belongId?: Maybe<Scalars['Int']>
  belongIdList?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 归属name */
  belongName?: Maybe<Scalars['String']>
  belongNameList?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 归属类型 */
  belongType?: Maybe<Scalars['Int']>
  belongTypeList?: Maybe<Array<Maybe<Scalars['Int']>>>
  checkCode?: Maybe<Scalars['String']>
  /** 盘点日期 */
  checkDate?: Maybe<Scalars['Long']>
  /** 异常数量 */
  checkErrorNum?: Maybe<Scalars['Int']>
  checkId?: Maybe<Scalars['ID']>
  /** 盘点数量 */
  checkNum?: Maybe<Scalars['Int']>
  checkStatus?: Maybe<Scalars['Int']>
  commodityTypeId?: Maybe<Scalars['Int']>
  commodityTypeIdList?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 商品分类名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  commodityTypeNameList?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 操作时间 */
  operateDate?: Maybe<Scalars['Long']>
  /** 备注 */
  remark?: Maybe<Scalars['String']>
  /** 提交人员 */
  username?: Maybe<Scalars['String']>
  /** 盘点仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

export type CheckIfPickingInput = {
  outOrderItemId: Scalars['ID']
}

export type CheckIfPickingPayload = {
  __typename?: 'CheckIfPickingPayload'
  result?: Maybe<Scalars['Boolean']>
}

export type CheckInfoInput = {
  /** 盘点日期 */
  checkDate?: InputMaybe<Scalars['Long']>
  /** 具体库存盘点详情 */
  checkDetailList?: InputMaybe<Array<InputMaybe<CheckDetailInput>>>
  remark?: InputMaybe<Scalars['String']>
  /** 仓库id */
  warehouseId?: InputMaybe<Scalars['ID']>
  warehouseName?: InputMaybe<Scalars['String']>
}

export type CheckInfoPayload = {
  __typename?: 'CheckInfoPayload'
  checkOrderList?: Maybe<Array<Maybe<CheckOrderPayload>>>
  stockCheck?: Maybe<CheckDetailPayload>
  stockCheckItemList?: Maybe<Array<Maybe<CheckItemPayload>>>
}

export type CheckItemPayload = {
  __typename?: 'CheckItemPayload'
  batchCode?: Maybe<Scalars['String']>
  batchId?: Maybe<Scalars['ID']>
  /** 归属名称 */
  belongId?: Maybe<Scalars['Int']>
  /** 归属name */
  belongName?: Maybe<Scalars['String']>
  /** 归属类型 */
  belongType?: Maybe<Scalars['Int']>
  checkId?: Maybe<Scalars['ID']>
  checkItemId?: Maybe<Scalars['Int']>
  checkOrderId?: Maybe<Scalars['Int']>
  checkTotalQuantity?: Maybe<Scalars['BigDecimal']>
  checkUnitQuantity?: Maybe<Scalars['BigDecimal']>
  commodityName?: Maybe<Scalars['String']>
  /** 盘点商品类型 */
  commodityTypeId?: Maybe<Scalars['Int']>
  createTime?: Maybe<Scalars['Long']>
  orderId?: Maybe<Scalars['Int']>
  orderType?: Maybe<Scalars['Int']>
  remark?: Maybe<Scalars['String']>
  skuId?: Maybe<Scalars['Int']>
  skuTextDescriptionList?: Maybe<Array<Maybe<Scalars['String']>>>
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  totalType?: Maybe<Scalars['Int']>
  totalTypeName?: Maybe<Scalars['String']>
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  unitType?: Maybe<Scalars['Int']>
  unitTypeName?: Maybe<Scalars['String']>
}

export type CheckOrderPayload = {
  __typename?: 'CheckOrderPayload'
  /** 归属名称 */
  belongId?: Maybe<Scalars['Int']>
  /** 归属name */
  belongName?: Maybe<Scalars['String']>
  /** 归属类型 */
  belongType?: Maybe<Scalars['Int']>
  /** 订单id */
  checkOrderId?: Maybe<Scalars['Int']>
  /** 盘点类型 */
  checkType?: Maybe<Scalars['Int']>
  /** 商品分类 */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品分类名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 操作时间 */
  operateDate?: Maybe<Scalars['Long']>
  stockOrderId?: Maybe<Scalars['ID']>
  /** 订单号 */
  stockOrderNumber?: Maybe<Scalars['String']>
  /** 入库人员 */
  username?: Maybe<Scalars['String']>
  /** 盘点仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

export type CheckRecordConfitionInput = {
  /** 商品分类 */
  commodityTypeId?: InputMaybe<Scalars['Int']>
  /** 盘点结束日期 */
  expireDate?: InputMaybe<Scalars['Long']>
  /** 盘点开始日期 */
  startDate?: InputMaybe<Scalars['Long']>
  /** 仓库id */
  warehouseId?: InputMaybe<Scalars['ID']>
}

export type CheckRecordPageInput = {
  checkRecordConfitionInput?: InputMaybe<CheckRecordConfitionInput>
  page?: InputMaybe<Page>
}

export type CheckRecordPageResultPayload = {
  __typename?: 'CheckRecordPageResultPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<CheckRecordPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type CheckRecordPayload = {
  __typename?: 'CheckRecordPayload'
  abnormalQuantity?: Maybe<Scalars['Int']>
  /** 归属名称 */
  belongIdList?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 归属name */
  belongNameList?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 归属类型 */
  belongTypeList?: Maybe<Array<Maybe<Scalars['Int']>>>
  checkCode?: Maybe<Scalars['String']>
  /** 盘点日期 */
  checkDate?: Maybe<Scalars['Long']>
  checkId?: Maybe<Scalars['ID']>
  /** 盘点数量 */
  checkNum?: Maybe<Scalars['Int']>
  /** 库存状态 */
  checkStatus?: Maybe<Scalars['Int']>
  /** 2.3 新增最近盘点时间 */
  checkTime?: Maybe<Scalars['Long']>
  /** 盘点商品类型 */
  commodityTypeIdList?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 盘点商品类型 */
  commodityTypeNameList?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 操作时间 */
  operateDate?: Maybe<Scalars['Long']>
  /** 盘点人员 */
  username?: Maybe<Scalars['String']>
  warehouseName?: Maybe<Scalars['String']>
}

export type CheckStockPayload = {
  __typename?: 'CheckStockPayload'
  abnormalQuantity?: Maybe<Scalars['Int']>
  batchCode?: Maybe<Scalars['String']>
  /** 批次号 */
  batchId?: Maybe<Scalars['ID']>
  /** 归属名称 */
  belongId?: Maybe<Scalars['Int']>
  belongName?: Maybe<Scalars['String']>
  /** 归属类型 */
  belongType?: Maybe<Scalars['Int']>
  /** 2.3新增 最近一次盘点时间 */
  checkTime?: Maybe<Scalars['Long']>
  commodityId?: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  createTime?: Maybe<Scalars['Long']>
  /** displayBelongName */
  displayBelongName?: Maybe<Scalars['String']>
  priceType?: Maybe<Scalars['Int']>
  priceTypeName?: Maybe<Scalars['String']>
  skuId?: Maybe<Scalars['Int']>
  /** 规格字符串，由后端组装 */
  skuTextDescriptionList?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 库存总计数量 */
  totalQuantity?: Maybe<Scalars['Float']>
  /** 总计数量单位 */
  totalType?: Maybe<Scalars['Int']>
  totalTypeName?: Maybe<Scalars['String']>
  unitPrice?: Maybe<Scalars['Float']>
  /** 库存数量 */
  unitQuantity?: Maybe<Scalars['Float']>
  /** 库存单位 */
  unitType?: Maybe<Scalars['Int']>
  unitTypeName?: Maybe<Scalars['String']>
}

export type CheckStockResultPayload = {
  __typename?: 'CheckStockResultPayload'
  checkId?: Maybe<Scalars['ID']>
  /** 入库数量 */
  checkInNum?: Maybe<Scalars['Int']>
  /** 出库数量 */
  checkOutNum?: Maybe<Scalars['Int']>
  /** checkRecordId */
  checkRecordId?: Maybe<Scalars['Int']>
  inStockCode?: Maybe<Scalars['String']>
  inStockRecordId?: Maybe<Scalars['ID']>
  outStockCode?: Maybe<Scalars['String']>
  outStockRecordId?: Maybe<Scalars['ID']>
}

export type CityBase = {
  /** 市 */
  city?: Maybe<LocationPayload>
}

export type CmmodityQueryInput = {
  /** 分类id */
  categoryId?: InputMaybe<Scalars['Int']>
  /** 商品名称模糊查询 */
  commodityName?: InputMaybe<Scalars['String']>
  /** 商品类型 果品辅料周转筐 */
  commodityTypeId?: InputMaybe<Scalars['Int']>
  /** 产地id */
  placeOriginId?: InputMaybe<Scalars['Int']>
  /** sku的类型 原料 成品 半成品 次品 */
  skuType?: InputMaybe<Scalars['Int']>
  /** 品种id */
  varietyId?: InputMaybe<Scalars['Int']>
}

export type CommandOrderResp = {
  __typename?: 'CommandOrderResp'
  /** 订单id */
  orderId: Scalars['ID']
}

/** 商品分析 */
export type CommodityAnalysisPaylaod = {
  __typename?: 'CommodityAnalysisPaylaod'
  /** 按渠道统计商品 */
  channelStatistics?: Maybe<Array<Maybe<ChannelStatisticsPayload>>>
  /** 商品sku数量总数 */
  commoditySkuTotal?: Maybe<Scalars['Int']>
  /** 已生产 */
  completed?: Maybe<Scalars['BigDecimal']>
  /** 未生产 */
  undone?: Maybe<Scalars['BigDecimal']>
}

export type CommodityBase = {
  /** sku信息 */
  commodity?: Maybe<CommoditySku>
}

/** 商品品类实体 */
export type CommodityCategoryPayload = {
  __typename?: 'CommodityCategoryPayload'
  /** 品类id */
  categoryId?: Maybe<Scalars['Int']>
  /** 品类名称 */
  categoryName?: Maybe<Scalars['String']>
}

export type CommodityConvertItemPayload = CommodityDetailBase &
  ConvertToSkuBase &
  PriceTypeBase &
  TotalTypeBase &
  UnitTypeBase & {
    __typename?: 'CommodityConvertItemPayload'
    /** 批次code */
    batchCode: Scalars['String']
    /** 批次id */
    batchId: Scalars['ID']
    /** 商品信息 */
    commodityDetail?: Maybe<CommoditySku>
    /** 转换后sku信息 */
    convertToSku?: Maybe<CommoditySku>
    /** item id */
    itemId: Scalars['ID']
    /** 照片 */
    photos?: Maybe<Array<Maybe<Scalars['String']>>>
    /** 单价单位信息 */
    priceType?: Maybe<Unit>
    /** 库存total数量 */
    stockTotalQuantity?: Maybe<Scalars['BigDecimal']>
    /** 库存unit数量 */
    stockUnitQuantity?: Maybe<Scalars['BigDecimal']>
    /** total 数量 */
    totalQuantity?: Maybe<Scalars['BigDecimal']>
    /** 副单位信息 */
    totalType?: Maybe<Unit>
    /** unit 数量 */
    unitQuantity?: Maybe<Scalars['BigDecimal']>
    /** 小单位信息 */
    unitType?: Maybe<Unit>
  }

export type CommodityConvertPayload = CreateByBase &
  OrgBase &
  WarehouseBase & {
    __typename?: 'CommodityConvertPayload'
    /** 客户id */
    belongId?: Maybe<Scalars['Int']>
    /** 客户名称 */
    belongName?: Maybe<Scalars['String']>
    /** 客户类型 */
    belongType?: Maybe<Scalars['Int']>
    /** 商品 */
    commodities?: Maybe<Array<Maybe<CommodityConvertItemPayload>>>
    /** 日志 */
    convertLogs?: Maybe<Array<Maybe<ConvertOrderLogPadload>>>
    /** 订单code */
    convertOrderCode?: Maybe<Scalars['ID']>
    /** 订单id */
    convertOrderId?: Maybe<Scalars['ID']>
    /** 订单类型 */
    convertType?: Maybe<ConvertType>
    /** 订单类型 */
    convertTypeName?: Maybe<Scalars['String']>
    /** 创建人信息 */
    createBy?: Maybe<User>
    /** 创建时间 */
    createTime?: Maybe<Scalars['Long']>
    /** 组织信息 */
    org?: Maybe<Org>
    /** 备注 */
    remark?: Maybe<Scalars['String']>
    /** 状态 */
    status?: Maybe<OrderStatus>
    /** 状态名称 */
    statusName?: Maybe<Scalars['String']>
    /** 状态描述 */
    statusRemark?: Maybe<Scalars['String']>
    /** 仓库信息 */
    warehouse?: Maybe<Warehouse>
  }

export type CommodityDetailBase = {
  /** sku信息 */
  commodityDetail?: Maybe<CommoditySku>
}

/** 商品详情实体 */
export type CommodityDetailPayload = {
  __typename?: 'CommodityDetailPayload'
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品规格选项 */
  commoditySpecOption?: Maybe<Array<Maybe<CommoditySpecOptionPayload>>>
  /** 期望数量 */
  expectNum?: Maybe<Scalars['BigDecimal']>
}

/** 商品入参 */
export type CommodityInput = {
  /** 商品sku id */
  commoditySkuId: Scalars['Int']
  /** 期望数量 */
  expectNum: Scalars['BigDecimal']
  /**
   * 2.2新增 包装要求的商品id列表
   * 2.2新增 包装要求列表
   */
  packageIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** 包装要求 */
  packageLabel?: InputMaybe<Scalars['String']>
  packageRequireInfos?: InputMaybe<Array<InputMaybe<OutOrderItemRequestInput>>>
  /** 品质要求 */
  quantityLabel?: InputMaybe<Scalars['String']>
  /** 规格要求 */
  specificationLabel?: InputMaybe<Scalars['String']>
  /** 任务明细id */
  taskItemId?: InputMaybe<Scalars['ID']>
}

export type CommodityModifyInput = {
  commodityId?: InputMaybe<Scalars['Int']>
  commoditySpecList?: InputMaybe<Array<InputMaybe<CommoditySpecInput>>>
}

/** 商品操作 */
export type CommodityOperatePayload = {
  __typename?: 'CommodityOperatePayload'
  /** 辅料 */
  assist?: Maybe<Scalars['Int']>
  /** 周转筐 */
  box?: Maybe<Scalars['Int']>
  /** 次品 */
  defective?: Maybe<Scalars['Int']>
  /** 半成品 */
  halfProduct?: Maybe<Scalars['Int']>
  /** 成品 */
  product?: Maybe<Scalars['Int']>
  /** 原料 */
  rawMaterial?: Maybe<Scalars['Int']>
  /** 退货品 */
  return?: Maybe<Scalars['Int']>
}

export type CommodityPayload = {
  __typename?: 'CommodityPayload'
  commodityCategoryId?: Maybe<Scalars['Int']>
  commodityCategoryName?: Maybe<Scalars['String']>
  commodityId?: Maybe<Scalars['Int']>
  commodityName?: Maybe<Scalars['String']>
  commodityPlaceOriginId?: Maybe<Scalars['Int']>
  commodityPlaceOriginName?: Maybe<Scalars['String']>
  commodityTypeId?: Maybe<Scalars['Int']>
  commodityTypeName?: Maybe<Scalars['String']>
  commodityVarietyId?: Maybe<Scalars['Int']>
  commodityVarietyName?: Maybe<Scalars['String']>
}

export type CommoditySku = TotalTypeBase &
  UnitTypeBase & {
    __typename?: 'CommoditySku'
    /** 商品id */
    commodityId?: Maybe<Scalars['Int']>
    /** 商品名称 */
    commodityName?: Maybe<Scalars['String']>
    /** sku */
    commoditySkuId?: Maybe<Scalars['Int']>
    /** sku名称 */
    commoditySkuName?: Maybe<Scalars['String']>
    /** 规格选项id */
    commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
    /** 规格选项名称 */
    commoditySpecOptionName?: Maybe<Array<Maybe<Scalars['String']>>>
    /** 商品换算关系 */
    conversion?: Maybe<Scalars['BigDecimal']>
    /** 总计单位类型 */
    totalType?: Maybe<Unit>
    /** 基本单位类型 */
    unitType?: Maybe<Unit>
  }

export type CommoditySkuAndUnitInput = {
  commoditySkuId: Scalars['Int']
  commoditySpecOptionIds: Array<InputMaybe<Scalars['Int']>>
}

export type CommoditySkuAndUnitPayload = {
  __typename?: 'CommoditySkuAndUnitPayload'
  commodityBomId?: Maybe<Scalars['Int']>
  commodityName?: Maybe<Scalars['String']>
  commoditySkuId?: Maybe<Scalars['Int']>
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  totalType?: Maybe<Scalars['Int']>
  totalTypeName?: Maybe<Scalars['String']>
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  unitType?: Maybe<Scalars['Int']>
  unitTypeName?: Maybe<Scalars['String']>
}

export type CommoditySkuBase = {
  /** sku信息 */
  commoditySku?: Maybe<CommoditySku>
}

export type CommoditySkuPayload = {
  __typename?: 'CommoditySkuPayload'
  Deleted?: Maybe<Scalars['Int']>
  bomId?: Maybe<Scalars['Int']>
  commodityId?: Maybe<Scalars['Int']>
  commodityName?: Maybe<Scalars['String']>
  commodityPayload?: Maybe<CommodityPayload>
  commoditySkuId?: Maybe<Scalars['Int']>
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 商品换算关系 */
  conversion?: Maybe<Scalars['BigDecimal']>
  createBy?: Maybe<Scalars['Int']>
  createTime?: Maybe<Scalars['Int']>
  property?: Maybe<Array<Maybe<Scalars['Int']>>>
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  status?: Maybe<Scalars['Int']>
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  totalType?: Maybe<Scalars['Int']>
  totalTypeName?: Maybe<Scalars['String']>
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  unitType?: Maybe<Scalars['Int']>
  unitTypeName?: Maybe<Scalars['String']>
  updateBy?: Maybe<Scalars['Int']>
  updateTime?: Maybe<Scalars['Int']>
}

export type CommoditySkuStock = CommoditySkuBase &
  TotalTypeBase &
  UnitTypeBase & {
    __typename?: 'CommoditySkuStock'
    /** v2.9 采购退货:单品小计 */
    amount?: Maybe<Scalars['BigDecimal']>
    /** v2.9 采购退货:最后一个批次 */
    batchId?: Maybe<Scalars['ID']>
    /** v2.9 采购退货:是否可以进行库存调整申请 */
    canApply?: Maybe<Scalars['Boolean']>
    /** 商品sku */
    commoditySku?: Maybe<CommoditySku>
    /** v2.9 采购退货:入库净总量 */
    inBoundQuantity?: Maybe<Quantity>
    /** v2.9 采购退货:可退货量 */
    returnableQuantity?: Maybe<Quantity>
    /** v2.9 采购退货:库存量 */
    stockQuantity?: Maybe<Quantity>
    /** 总计单位类型 */
    totalType?: Maybe<Unit>
    /** v2.9 采购退货:单品单价 */
    unitPrice?: Maybe<UnitQuantity>
    /** 基本单位类型 */
    unitType?: Maybe<Unit>
  }

export type CommoditySkuStockInput = {
  belongId: Scalars['Int']
  belongType: Scalars['Int']
  commoditySkuId: Array<InputMaybe<Scalars['Int']>>
  commodityTypeId: Scalars['Int']
  customerDistributionId: Scalars['Int']
  warehouseId: Scalars['ID']
}

export type CommoditySkuStockPayload = {
  __typename?: 'CommoditySkuStockPayload'
  commoditySkuId?: Maybe<Scalars['Int']>
  stockTotalQuantity?: Maybe<Scalars['BigDecimal']>
  stockUnitQuantity?: Maybe<Scalars['BigDecimal']>
}

export type CommoditySpecInput = {
  commoditySpecId?: InputMaybe<Scalars['Int']>
  commoditySpecName?: InputMaybe<Scalars['String']>
  commoditySpecOptionList?: InputMaybe<
    Array<InputMaybe<CommoditySpecOptionInput>>
  >
  commoditySpecSort?: InputMaybe<Scalars['Int']>
}

export type CommoditySpecOptionInput = {
  commoditySpecOptionId?: InputMaybe<Scalars['Int']>
  commoditySpecOptionName?: InputMaybe<Scalars['String']>
}

export type CommoditySpecOptionPayload = {
  __typename?: 'CommoditySpecOptionPayload'
  commoditySpecOptionId?: Maybe<Scalars['Int']>
  commoditySpecOptionName?: Maybe<Scalars['String']>
}

export type CommoditySpecPayload = {
  __typename?: 'CommoditySpecPayload'
  commodityId?: Maybe<Scalars['Int']>
  commoditySpecId?: Maybe<Scalars['Int']>
  commoditySpecName?: Maybe<Scalars['String']>
  commoditySpecOption?: Maybe<Array<Maybe<CommoditySpecOptionPayload>>>
  commoditySpecSort?: Maybe<Scalars['Int']>
}

export enum CommodityStatus {
  /** 取消中 */
  Canceling = 'CANCELING',
  /** 已取消 */
  Cancelled = 'CANCELLED',
  /** 正常 */
  Normal = 'NORMAL',
  /** 已拒绝 */
  Rejected = 'REJECTED',
  Unrecognized = 'UNRECOGNIZED',
}

export type CommodityStockBatchPayload = {
  __typename?: 'CommodityStockBatchPayload'
  batchCode?: Maybe<Scalars['String']>
  batchId?: Maybe<Scalars['ID']>
  commodityId?: Maybe<Scalars['Int']>
  commodityName?: Maybe<Scalars['String']>
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 商品规格选项id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 换算单位 */
  conversion?: Maybe<Scalars['BigDecimal']>
  customerId?: Maybe<Scalars['Int']>
  customerName?: Maybe<Scalars['String']>
  customerType?: Maybe<Scalars['Int']>
  customerTypeName?: Maybe<Scalars['String']>
  pickingTotalQuantity?: Maybe<Scalars['BigDecimal']>
  pickingUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** sku文字描述，规格选项文字数组 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  stockTotalQuantity?: Maybe<Scalars['BigDecimal']>
  stockTotalType?: Maybe<Scalars['Int']>
  stockTotalTypeName?: Maybe<Scalars['String']>
  /** 库存单价 */
  stockUnitPrice?: Maybe<Scalars['BigDecimal']>
  /** 库存单价的单位 */
  stockUnitPriceType?: Maybe<Scalars['Int']>
  /** 库存单价名称 */
  stockUnitPriceTypeName?: Maybe<Scalars['String']>
  stockUnitQuantity?: Maybe<Scalars['BigDecimal']>
  stockUnitType?: Maybe<Scalars['Int']>
  stockUnitTypeName?: Maybe<Scalars['String']>
}

/** 商品类型 */
export enum CommodityTypeEnum {
  /** 辅料 */
  Assist = 'ASSIST',
  /** 周转筐 */
  Box = 'BOX',
  /** 次品 */
  Defective = 'DEFECTIVE',
  /** 食品 */
  Food = 'FOOD',
  /** 水果 */
  Fruit = 'FRUIT',
  /** 半成品 */
  HalfProduct = 'HALF_PRODUCT',
  /** 成品 */
  Product = 'PRODUCT',
  /** 原料 */
  RawMaterial = 'RAW_MATERIAL',
  /** 退货品 */
  Return = 'RETURN',
}

export type CommondConvertItemInput = {
  /** 批次id */
  batchId: Scalars['ID']
  /** 转换后skuId */
  convertToSkuId?: InputMaybe<Scalars['Int']>
  /** 照片 */
  photos?: InputMaybe<Array<Scalars['String']>>
  /** sku_id */
  skuId: Scalars['Int']
  /** total数量 */
  totalQuantity: Scalars['BigDecimal']
  /** unit数量 */
  unitQuantity: Scalars['BigDecimal']
}

export type CommondOrderStatusInput = {
  /** 订单id */
  orderId: Scalars['ID']
  /** 状态原因 */
  statusRemark?: InputMaybe<Scalars['String']>
}

export type ConfigValuePayload = ProductionSwitchPayload | WorkerSalaryPayload

export type ConfirmCancelProductionInput = {
  /** 出库明细id */
  outOrderItemId: Scalars['ID']
  /** 任务id */
  taskId: Scalars['ID']
}

export type ConfirmCancelProductionPayload = {
  __typename?: 'ConfirmCancelProductionPayload'
  result?: Maybe<Scalars['Boolean']>
}

/** 确认入库 */
export type ConfirmInput = {
  belongId?: InputMaybe<Scalars['Int']>
  belongType?: InputMaybe<Scalars['Int']>
  /** 预估运费 */
  deliveryFee?: InputMaybe<Scalars['BigDecimal']>
  /** 入库订单Id */
  inOrderId: Scalars['ID']
  /** 入库商品信息 */
  items: Array<InputMaybe<ConfirmItemInput>>
  /** 本次入库操作备注信息 */
  remark?: InputMaybe<Scalars['String']>
  warehouseId?: InputMaybe<Scalars['ID']>
}

export type ConfirmItemInput = {
  /** 批次id */
  batchId?: InputMaybe<Scalars['ID']>
  /** SPUId */
  commodityId: Scalars['Int']
  /** 商品skuID */
  commoditySkuId: Scalars['Int']
  /** item列表Id */
  inOrderItemId?: InputMaybe<Scalars['ID']>
  /** 总价 */
  totalPrice?: InputMaybe<Scalars['BigDecimal']>
  /** 副单位数量 */
  totalQuantity?: InputMaybe<Scalars['BigDecimal']>
  /** 小单位数量 */
  unitQuantity: Scalars['BigDecimal']
  /** 小单位类型 */
  unitType?: InputMaybe<Scalars['Int']>
}

/** 确认出库 */
export type ConfirmOutOrderInput = {
  deliveryFee?: InputMaybe<Scalars['Float']>
  /** 商品信息 */
  items: Array<InputMaybe<ConfirmOutOrderItem>>
  /** 出库订单Id */
  outOrderId: Scalars['ID']
  /** 出库备注 */
  remark?: InputMaybe<Scalars['String']>
}

export type ConfirmOutOrderItem = {
  /** 周转筐归属 */
  basketCustomerId?: InputMaybe<Scalars['Int']>
  /** 周转筐数量 */
  basketQuantity?: InputMaybe<Scalars['Int']>
  /** 批次及数量 */
  batchStockItems: Array<InputMaybe<BatchStockItem>>
  outOrderItemId: Scalars['ID']
  /**  v2.3.1中台对接新增 */
  skuId: Scalars['Int']
}

export type ConfirmOutOrderStatisticsPayload = {
  __typename?: 'ConfirmOutOrderStatisticsPayload'
  commodityCount?: Maybe<Scalars['Int']>
  outOrderFinishCount?: Maybe<Scalars['Int']>
  outOrderUnFinishCount?: Maybe<Scalars['Int']>
}

export type ConfirmTaskFinishPayload = {
  __typename?: 'ConfirmTaskFinishPayload'
  damagedOrder?: Maybe<DamagedOrder>
  picking?: Maybe<Picking>
  returnMaterial?: Maybe<ReturnMaterial>
  warehousing?: Maybe<Warehousing>
}

export type ConvertOrderLogPadload = CreateByBase & {
  __typename?: 'ConvertOrderLogPadload'
  /** 日志id */
  convertLogId?: Maybe<Scalars['ID']>
  /** 订单id */
  convertOrderId?: Maybe<Scalars['ID']>
  /** 操作人 */
  createBy?: Maybe<User>
  /** 操作时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 操作说明 */
  description?: Maybe<Scalars['String']>
  /** 操作类型 */
  typeText?: Maybe<Scalars['String']>
}

export type ConvertToSkuBase = {
  /** 转换后sku信息 */
  convertToSku?: Maybe<CommoditySku>
}

export enum ConvertType {
  /** 半成品转次品 */
  HalfProductToDefective = 'HALF_PRODUCT_TO_DEFECTIVE',
  /** 成品转次品 */
  ProductToDefective = 'PRODUCT_TO_DEFECTIVE',
  /** 成品转半成品 */
  ProductToHalf = 'PRODUCT_TO_HALF',
  /** 原料转次品 */
  RawMaterialToDefective = 'RAW_MATERIAL_TO_DEFECTIVE',
  /** 退货品转次品 */
  ReturnToDefective = 'RETURN_TO_DEFECTIVE',
}

export type CostCommodityPayload = {
  __typename?: 'CostCommodityPayload'
  /** 采购数量 */
  applyTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 采购净重/采购毛重 */
  applyUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 商品id */
  commodityId?: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品规格选项id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 商品规格名称 */
  commoditySpecOptionName?: Maybe<Scalars['String']>
  /** 赠送total数量 */
  giveTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 赠送unit数量 */
  giveUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 入库毛重量（基本单位:kg） */
  grossUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 入库单价 */
  inStockUnitPrice?: Maybe<Scalars['BigDecimal']>
  /** 货款明细ID */
  itemId?: Maybe<Scalars['ID']>
  /** 采购标识 */
  markList?: Maybe<Array<Maybe<AcquireMarkEnum>>>
  /** 果品单价定位（0其他 10净重 20毛重） */
  pricePosition?: Maybe<Scalars['Int']>
  /** 单价类型 */
  priceType?: Maybe<Scalars['Int']>
  /** 单价类型名称 */
  priceTypeName?: Maybe<Scalars['String']>
  /** 关联采购单号 */
  relevancyCode?: Maybe<Scalars['String']>
  /** 商品sku */
  skuId?: Maybe<Scalars['Int']>
  /** 小计 */
  totalAmount?: Maybe<Scalars['BigDecimal']>
  /** 入库净重量（副单位:件）/ 入库毛重量（副单位:件） */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 副单位类型 */
  totalType?: Maybe<Scalars['Int']>
  /** 副单位名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /** 净重单价/毛重单价 */
  unitPrice?: Maybe<Scalars['BigDecimal']>
  /** 入库净重量（基本单位:kg） */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 小单位类型 */
  unitType?: Maybe<Scalars['Int']>
  /** 小单位名称 */
  unitTypeName?: Maybe<Scalars['String']>
}

/** 费用单 */
export type CostInput = {
  /**  金额 */
  amount?: InputMaybe<Scalars['BigDecimal']>
  /**  费用项id */
  costId?: InputMaybe<Scalars['ID']>
  /**  具体字段值 */
  data?: InputMaybe<Scalars['String']>
  /**  业务规则扩展id (客户id或者供应商id) */
  extendId?: InputMaybe<Scalars['Int']>
  /**  备注 */
  note?: InputMaybe<Scalars['String']>
  /**  规则id */
  ruleId?: InputMaybe<Scalars['ID']>
}

export type CostItemPayload = SupplierBase & {
  __typename?: 'CostItemPayload'
  /**  金额 */
  amount?: Maybe<Scalars['BigDecimal']>
  /**  费用项id */
  costId?: Maybe<Scalars['ID']>
  /**  具体字段值 */
  data?: Maybe<Scalars['String']>
  /**  备注 */
  note?: Maybe<Scalars['String']>
  /**  规则id */
  ruleId?: Maybe<Scalars['ID']>
  /**  业务规则扩展 (客户id或者供应商id) */
  supplier?: Maybe<Supplier>
}

export type CostOrderPayload = BelongOrgBase & {
  __typename?: 'CostOrderPayload'
  /** 申请编号（采购单号） */
  applyCode?: Maybe<Scalars['String']>
  /** 入库时间 */
  auditTime?: Maybe<Scalars['Long']>
  /** 入库审核人id */
  auditUser?: Maybe<Scalars['Int']>
  /** 入库审核人姓名 */
  auditUserName?: Maybe<Scalars['String']>
  belongId?: Maybe<Scalars['Int']>
  belongName?: Maybe<Scalars['String']>
  /** 所属组织 */
  belongOrg?: Maybe<Org>
  belongType?: Maybe<Scalars['Int']>
  /** 运费流转记录 */
  billAuditDetailList?: Maybe<Array<Maybe<BillAuditDetailPayload>>>
  /** 费用id */
  billId?: Maybe<Scalars['ID']>
  /** 驳回原因 */
  cancelDescription?: Maybe<Scalars['String']>
  /** 商品明细 */
  commodityItems?: Maybe<Array<Maybe<CostCommodityPayload>>>
  /** 货款备注 */
  commodityRemark?: Maybe<Scalars['String']>
  /** 入库类型 */
  commodityType?: Maybe<Scalars['Int']>
  /** 采购人id */
  createBy?: Maybe<Scalars['Int']>
  /** 采购人名称 */
  createName?: Maybe<Scalars['String']>
  /** 采购时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 运杂款单号 */
  freightCode?: Maybe<Scalars['String']>
  /** 运杂款明细 */
  freightCostItem?: Maybe<Array<Maybe<FreightCostPayload>>>
  /** 运杂款总金额 */
  freightTotalAmount?: Maybe<Scalars['BigDecimal']>
  /** 入库类型中文名称 */
  inOrderTypeName?: Maybe<Scalars['String']>
  /** 手工单号 */
  manualCode?: Maybe<Scalars['String']>
  /** 货款总金额 */
  paymentActualAmount?: Maybe<Scalars['BigDecimal']>
  /** 货款单号 */
  paymentCode?: Maybe<Scalars['String']>
  /** 采购人电话号码 */
  phoneNum?: Maybe<Scalars['String']>
  /** 费用单状态 */
  status?: Maybe<Scalars['Int']>
  /** 状态名称 */
  statusName?: Maybe<Scalars['String']>
  /** 审核人id */
  submitBy?: Maybe<Scalars['Int']>
  /** 审核人姓名 */
  submitName?: Maybe<Scalars['String']>
  /** 供应商id */
  supplierId?: Maybe<Scalars['Int']>
  /** 供应商名称 */
  supplierName?: Maybe<Scalars['String']>
  /** 仓库id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

export type CostOrderStatusStatisticPayload = {
  __typename?: 'CostOrderStatusStatisticPayload'
  all?: Maybe<Scalars['Int']>
  assist?: Maybe<Scalars['Int']>
  rawMaterial?: Maybe<Scalars['Int']>
}

export type CostRulePayload = {
  __typename?: 'CostRulePayload'
  calculateRule?: Maybe<Scalars['String']>
  calculateType?: Maybe<Scalars['String']>
  costId?: Maybe<Scalars['ID']>
  costName?: Maybe<Scalars['String']>
  fieldList?: Maybe<Array<Maybe<FieldPayload>>>
  note?: Maybe<Scalars['String']>
  ruleCode?: Maybe<Scalars['String']>
  ruleId?: Maybe<Scalars['ID']>
  ruleName?: Maybe<Scalars['String']>
  showField?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  tenantId?: Maybe<Scalars['ID']>
  version?: Maybe<Scalars['Int']>
}

/** 采购记录条数 */
export type CountAcquireFilter = {
  /** 商品类型 */
  commodityType: Scalars['Int']
  /** 订单结束时间 */
  endTime: Scalars['Long']
  /** 订单起始时间 */
  startTime: Scalars['Long']
}

/** 记录条数 */
export type CountAcquirePayload = {
  __typename?: 'CountAcquirePayload'
  /** 已取消记录条数 */
  canceled?: Maybe<Scalars['Long']>
  /** 已完成记录条数 */
  finished?: Maybe<Scalars['Long']>
  /** 已驳回 */
  refused?: Maybe<Scalars['Long']>
  /** 待入库记录条数 */
  toInbound?: Maybe<Scalars['Long']>
  /** 待提交记录条数 */
  toSubmit?: Maybe<Scalars['Long']>
}

export type CountCostOrderPayload = {
  __typename?: 'CountCostOrderPayload'
  /** 待审核条数 */
  countNotAudit?: Maybe<Scalars['Int']>
  /** 待提交条数 */
  countNotSubmit?: Maybe<Scalars['Int']>
}

/** 入库条数 */
export type CountInOrderPayload = {
  __typename?: 'CountInOrderPayload'
  /** 次品入库记录条数 */
  defectiveProduct?: Maybe<Scalars['Long']>
  /** 成品入库记录条数 */
  finishedProduct?: Maybe<Scalars['Long']>
  /** 原料入库记录条数 */
  rawMaterial?: Maybe<Scalars['Long']>
  /** 退货品入库记录条数 */
  returnProduct?: Maybe<Scalars['Long']>
  /** 半成品入库记录条数 */
  semiFinishedProduct?: Maybe<Scalars['Long']>
  /** 辅料入库记录条数 */
  subMaterial?: Maybe<Scalars['Long']>
  /** 周转筐入库记录条数 */
  turnoverBasket?: Maybe<Scalars['Long']>
}

/** 出库条数 */
export type CountOutOrder = {
  __typename?: 'CountOutOrder'
  /** 成品销售记录条数 */
  finishedProduct?: Maybe<Scalars['Long']>
  /** 原料领料记录条数 */
  rawMaterial?: Maybe<Scalars['Long']>
  /** 辅料领料记录条数 */
  subMaterial?: Maybe<Scalars['Long']>
}

export type CountOutOrderStatusInput = {
  /**  商品类型 */
  commodityTypeId?: InputMaybe<Scalars['Int']>
  /** 创建时间 */
  createTime?: InputMaybe<Scalars['Long']>
  endTime?: InputMaybe<Scalars['Long']>
  /** 出库订单状态，默认待提交，10：待提交、15 待审核 20：待出库、30：部分出库、40：已完成、50：已取消 */
  orderStatus?: InputMaybe<Scalars['Int']>
  /**     出库订单类型，10：原料领料、20辅料领料 30 成品销售 40 次品 50 半成品 */
  outOrderType?: InputMaybe<Scalars['Int']>
  /** 销售时间 */
  saleTime?: InputMaybe<Scalars['Long']>
  startTime?: InputMaybe<Scalars['Long']>
  /**  任务id */
  taskId?: InputMaybe<Scalars['ID']>
}

export type CountOutOrderStatusPayload = {
  __typename?: 'CountOutOrderStatusPayload'
  /** 已取消 */
  canceled?: Maybe<Scalars['Int']>
  /** 已完成 */
  finished?: Maybe<Scalars['Int']>
  /** 待审核 */
  toAudit?: Maybe<Scalars['Int']>
  /** 待出库 */
  toOutbound?: Maybe<Scalars['Int']>
  /** 待提交 */
  toSubmit?: Maybe<Scalars['Int']>
}

export type CountOutOrderTypeInput = {
  /**     商品类型 */
  commodityTypeId?: InputMaybe<Scalars['Int']>
  /** 创建时间 */
  createTime?: InputMaybe<Scalars['Long']>
  /** 出库订单状态，默认待提交，10：待提交、15 待审核 20：待出库、30：部分出库、40：已完成、50：已取消 */
  orderStatus?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** 销售时间 */
  saleTime?: InputMaybe<Scalars['Long']>
}

export type CountOutStockRecordInput = {
  outOrderId: Scalars['ID']
}

/** 采购记录条数 */
export type CountPurchaseFilter = {
  /** 商品类型 */
  commodityTypeId?: InputMaybe<Scalars['Int']>
  /** 订单结束时间 */
  endTime: Scalars['Long']
  /** 入库类型 */
  inOrderTypeId: Scalars['Int']
  /** 订单起始时间 */
  startTime: Scalars['Long']
}

/** 记录条数 */
export type CountPurchasePayload = {
  __typename?: 'CountPurchasePayload'
  /** 已取消记录条数 */
  canceled?: Maybe<Scalars['Long']>
  /** 已完成记录条数 */
  finished?: Maybe<Scalars['Long']>
  /** 待入库记录条数 */
  toInbound?: Maybe<Scalars['Long']>
  /** 待提交记录条数 */
  toSubmit?: Maybe<Scalars['Long']>
}

export type CountSaleOrderStatusInput = {
  saleTime: Scalars['Long']
}

export type CountSaleReturnInput = {
  /** 入库状态类型 */
  inOrderType: InOrderType
  /** 退货时间 */
  returnTime: TimeRange
}

/** 记录条数 */
export type CountSaleReturnPayload = {
  __typename?: 'CountSaleReturnPayload'
  /** 待入库记录条数 */
  toInbound?: Maybe<Scalars['Long']>
  /** 待提交记录条数 */
  toSubmit?: Maybe<Scalars['Long']>
}

/** 新增采购信息 */
export type CreateAcquireInput = {
  /** 客户Id */
  belongId: Scalars['Int']
  /** 所属组织 v2.9.0 */
  belongOrgId: Scalars['Int']
  /** 客户类型Id */
  belongType: Scalars['Int']
  /** 商品信息 */
  commodities: Array<CreateAcquireItemInput>
  /** 商品类型Id */
  commodityType: Scalars['Int']
  /** 费用信息 */
  costs?: InputMaybe<Array<InputMaybe<CreateCostInput>>>
  /** 订单备注 */
  note?: InputMaybe<Scalars['String']>
  /** 供应商Id */
  supplierId: Scalars['Int']
  /** 模板Id */
  templateId?: InputMaybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseId: Scalars['ID']
}

export type CreateAcquireItemInput = {
  /** 赠送total数量 v2.9.0 */
  giveTotalQuantity?: InputMaybe<Scalars['BigDecimal']>
  /** 赠送unit数量 v2.9.0 */
  giveUnitQuantity?: InputMaybe<Scalars['BigDecimal']>
  /** 标记 v2.9.0 */
  markList?: InputMaybe<Array<InputMaybe<AcquireMarkEnum>>>
  /** 单价 */
  price: Scalars['BigDecimal']
  pricePosition?: InputMaybe<Scalars['Int']>
  /** 单价单位类型 */
  priceType: Scalars['Int']
  /** 关联采购单号 */
  relevancyCode?: InputMaybe<Scalars['String']>
  /** 商品skuID */
  skuId: Scalars['Int']
  /** 商品总计金额 */
  totalAmount?: InputMaybe<Scalars['BigDecimal']>
  /** 总计数量 */
  totalQuantity?: InputMaybe<Scalars['BigDecimal']>
  totalType?: InputMaybe<Scalars['Int']>
  /** 单位数量 */
  unitQuantity: Scalars['BigDecimal']
  unitType?: InputMaybe<Scalars['Int']>
}

export type CreateByBase = {
  /** 创建人 */
  createBy?: Maybe<User>
}

/**
 * 未添加商品列表
 * 添加商品
 */
export type CreateCommodityInput = {
  /** 商品id */
  commodityId?: InputMaybe<Scalars['Int']>
  /** 商品类型id */
  commodityTypeId?: InputMaybe<Scalars['Int']>
}

export type CreateConvertInput = {
  /** 客户id */
  belongId: Scalars['Int']
  /** 客户类型 */
  belongType: Scalars['Int']
  /** 商品明细 */
  convertItems?: InputMaybe<Array<InputMaybe<CommondConvertItemInput>>>
  /** 转换类型 */
  convertType: ConvertType
  /** 备注 */
  remark?: InputMaybe<Scalars['String']>
  /** 仓库id */
  warehouseId: Scalars['ID']
}

export type CreateCostInput = {
  /**  金额 */
  amount?: InputMaybe<Scalars['BigDecimal']>
  /**  费用项id */
  costId?: InputMaybe<Scalars['ID']>
  /**  具体字段值 */
  data?: InputMaybe<Scalars['String']>
  /**  业务规则扩展id (客户id或者供应商id) */
  extendId?: InputMaybe<Scalars['Int']>
  /**  备注 */
  note?: InputMaybe<Scalars['String']>
  /**  规则id */
  ruleId?: InputMaybe<Scalars['ID']>
}

/** 新增其他出库单 */
export type CreateDamageOutOrderInput = {
  /** 商品信息 */
  commodityList: Array<InputMaybe<CreateDamageOutOrderItemInput>>
  /** 商品类型 */
  commodityTypeId: Scalars['Int']
  /** 订单备注 */
  outOrderDescription?: InputMaybe<Scalars['String']>
  /** 仓库id */
  warehouseId: Scalars['ID']
}

export type CreateDamageOutOrderItemInput = {
  batchId: Scalars['ID']
  /** 商品skuID */
  commoditySkuId: Scalars['Int']
  /** 报损原因 */
  damageReason: Scalars['String']
  /** 拍照记录 */
  photos: Array<Scalars['String']>
  /** 成本总价 */
  stockTotalPrice: Scalars['BigDecimal']
  /** 成本单价 */
  stockUnitPrice: Scalars['BigDecimal']
  /** 单价单位 */
  stockUnitPriceType: Scalars['Int']
  /** 大单位数量 */
  totalQuantity?: InputMaybe<Scalars['BigDecimal']>
  /** 小单位数量 */
  unitQuantity?: InputMaybe<Scalars['BigDecimal']>
}

export type CreateDamagedOrderInput = {
  /** 商品信息 */
  commodityList: Array<InputMaybe<CreateDamagedOrderItemInput>>
  /** 商品类型 */
  commodityTypeId: Scalars['Int']
  /** 订单备注 */
  outOrderDescription?: InputMaybe<Scalars['String']>
  /** 出库类型 */
  outOrderType: Scalars['Int']
  /** 任务id */
  taskId: Scalars['ID']
  /** 仓库id */
  warehouseId: Scalars['ID']
}

export type CreateDamagedOrderItemInput = {
  batchId: Scalars['ID']
  /** 商品skuID */
  commoditySkuId: Scalars['Int']
  /** 报损原因 */
  damageReason: Scalars['String']
  /** 拍照记录 */
  photos: Array<InputMaybe<Scalars['String']>>
  /**  报损成本单价  */
  salePrice: Scalars['BigDecimal']
  /**  报损成本单价类型  */
  salePriceType: Scalars['Int']
  /** 大单位数量 */
  totalQuantity?: InputMaybe<Scalars['BigDecimal']>
  /** 小单位数量 */
  unitQuantity?: InputMaybe<Scalars['BigDecimal']>
  /**  报损成本总价  */
  unitTotalPrice: Scalars['BigDecimal']
}

export type CreateDefectiveItemInput = {
  commoditySkuId?: InputMaybe<Scalars['Int']>
  photos: Array<Scalars['String']>
  /** v2.8 次品销售:新增销售单价 */
  salePrice?: InputMaybe<Scalars['BigDecimal']>
  saleQuantity?: InputMaybe<Scalars['BigDecimal']>
  saleTotalPrice?: InputMaybe<Scalars['BigDecimal']>
}

export type CreateDefectiveSaleOrderInput = {
  /** v2.9 次品销售:新增所属组织 */
  belongOrgId: Scalars['Int']
  defectiveItems: Array<InputMaybe<CreateDefectiveItemInput>>
  /** v2.8 次品销售:新增付款方式 */
  payMethod: PayMethodEnum
  remark?: InputMaybe<Scalars['String']>
  saleTime?: InputMaybe<Scalars['Long']>
  warehouseId?: InputMaybe<Scalars['ID']>
}

/** 新增其他入库信息 */
export type CreateOtherInOrderInput = {
  /** 商品信息 */
  commodities: Array<InputMaybe<CreateOtherOrderItemInput>>
  /** 商品类型Id */
  commodityTypeId: Scalars['Int']
  /** 客户Id */
  customerId?: InputMaybe<Scalars['Int']>
  /** 客户类型Id */
  customerTypeId?: InputMaybe<Scalars['Int']>
  /** 订单备注 */
  inOrderDescription?: InputMaybe<Scalars['String']>
  /** 入库类型 */
  inOrderTypeId: Scalars['Int']
  /** 供应商Id */
  supplierId?: InputMaybe<Scalars['Int']>
  /** 仓库名称 */
  warehouseId: Scalars['ID']
}

export type CreateOtherOrderItemInput = {
  /** 商品skuID */
  commoditySkuId: Scalars['Int']
  /** 总价 */
  totalPrice?: InputMaybe<Scalars['BigDecimal']>
  /** 副单位数量 */
  totalQuantity?: InputMaybe<Scalars['BigDecimal']>
  /** 单价 */
  unitPrice?: InputMaybe<Scalars['BigDecimal']>
  /** 单价单位类型 */
  unitPriceType?: InputMaybe<Scalars['Int']>
  /** 小单位数量 */
  unitQuantity: Scalars['BigDecimal']
}

/** 新增其他出库单 */
export type CreateOtherOutOrderInput = {
  /** 商品信息 */
  commodityList: Array<InputMaybe<CreateOtherOutOrderItemInput>>
  /** 商品类型 */
  commodityTypeId: Scalars['Int']
  /** 客户Id */
  customerId?: InputMaybe<Scalars['Int']>
  customerType: Scalars['Int']
  /** 订单备注 */
  outOrderDescription?: InputMaybe<Scalars['String']>
  /** 仓库id */
  warehouseId: Scalars['ID']
}

export type CreateOtherOutOrderItemInput = {
  batchId: Scalars['ID']
  /** 商品skuID */
  commoditySkuId: Scalars['Int']
  /** 大单位数量 */
  totalQuantity?: InputMaybe<Scalars['BigDecimal']>
  /** 小单位数量 */
  unitQuantity?: InputMaybe<Scalars['BigDecimal']>
}

export type CreateQuickLabelInput = {
  /** 品类Id */
  categoryId: Scalars['Int']
  /** 品质要求 */
  quantityLabel?: InputMaybe<Scalars['String']>
  /** 规格要求 */
  specificationLabel?: InputMaybe<Scalars['String']>
}

/** 新增销售信息 */
export type CreateSaleOrderInput = {
  /**  所属组织  */
  belongOrgId?: InputMaybe<Scalars['Int']>
  /**  商品信息  */
  commodityList: Array<InputMaybe<CreateSaleOrderItemInput>>
  /**  客户地址  */
  customerDistributionId: Scalars['Int']
  /**  客户Id  */
  customerId: Scalars['Int']
  /**  订单备注  */
  outOrderDescription?: InputMaybe<Scalars['String']>
  /**  销售时间  */
  saleTime: Scalars['Long']
  /**  仓库名称  */
  warehouseId: Scalars['ID']
}

export type CreateSaleOrderItemInput = {
  /** 商品skuID */
  commoditySkuId?: InputMaybe<Scalars['Int']>
  /** 最大销量 */
  maxQuantity?: InputMaybe<Scalars['Int']>
  /**
   * 2.2新增 包装要求的商品id列表
   * 2.2新增 包装要求列表
   */
  packageIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** 包装要求 */
  packageLabel?: InputMaybe<Scalars['String']>
  packageRequireInfos: Array<InputMaybe<OutOrderItemRequestInput>>
  /** 计划生产 */
  planQuantity?: InputMaybe<Scalars['Int']>
  /** 品质要求 */
  quantityLabel: Scalars['String']
  /** 销售单价 */
  salePrice?: InputMaybe<Scalars['BigDecimal']>
  /** 规格要求 */
  specificationLabel: Scalars['String']
}

export type CreateTransferOrderInput = {
  /**  所属组织  */
  belongOrgId: Scalars['Int']
  /**  商品类型 */
  commodityType?: InputMaybe<Scalars['Int']>
  /**  调拨商品 */
  flowTransferCommodityInput?: InputMaybe<
    Array<InputMaybe<FlowTransferCommodityInput>>
  >
  /**  运杂费用 */
  flowTransferOtherBillInput?: InputMaybe<
    Array<InputMaybe<FlowTransferOtherBillInput>>
  >
  /**  备注信息 */
  remark?: InputMaybe<Scalars['String']>
  /**  调出归属id */
  sourceBelongId?: InputMaybe<Scalars['Int']>
  /**  调出仓库id */
  sourceWarehouseId?: InputMaybe<Scalars['ID']>
  /**  调入系统id */
  targetAppId?: InputMaybe<Scalars['Int']>
  /**  调入归属id */
  targetBelongId?: InputMaybe<Scalars['Int']>
  /**  调入组织  */
  targetBelongOrgId: Scalars['Int']
  /**  调入仓库id */
  targetWarehouseId?: InputMaybe<Scalars['ID']>
  /**  调拨类型 */
  transferType?: InputMaybe<Scalars['Int']>
}

export type CreateUserBase = {
  /** 创建人 */
  createUser?: Maybe<User>
}

export type CreateWasteSaleOrderInput = {
  /**  所属组织  */
  belongOrgId?: InputMaybe<Scalars['Int']>
  payMode: OutOrderPayModeEnum
  remark?: InputMaybe<Scalars['String']>
  saleTime: Scalars['Long']
  warehouseId: Scalars['ID']
  wasteSaleOrderItemList: Array<InputMaybe<CreateWasteSaleOrderItemInput>>
}

export type CreateWasteSaleOrderItemInput = {
  commodityName: Scalars['String']
  photos: Array<InputMaybe<Scalars['String']>>
  saleAmount: Scalars['BigDecimal']
  totalSaleAmount: Scalars['BigDecimal']
  unitQuantity: Scalars['BigDecimal']
  unitType: Scalars['Int']
}

export type Customer = {
  __typename?: 'Customer'
  /** 客户Id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户类型 */
  customerType?: Maybe<Scalars['Int']>
}

export type CustomerAddressBase = {
  /** 地址信息 */
  customer?: Maybe<AddressInfo>
}

export type CustomerAddressInfo = {
  __typename?: 'CustomerAddressInfo'
  /** 客户Id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户类型 */
  customerType?: Maybe<Scalars['Int']>
  /** 配送地址 */
  deliveryName?: Maybe<Scalars['String']>
}

export type CustomerAddressInfoBase = {
  customerAddressInfo?: Maybe<CustomerAddressInfo>
}

/** 客户属性 */
export enum CustomerAttribute {
  /** 外部 */
  External = 'EXTERNAL',
  /** 内部 */
  Internal = 'INTERNAL',
}

export type CustomerBase = {
  customer?: Maybe<Customer>
}

/** 客户基本信息 */
export type CustomerBasePayload = {
  __typename?: 'CustomerBasePayload'
  /** 客户属性 */
  attribute?: Maybe<CustomerAttribute>
  /** 法人 */
  corporation?: Maybe<Scalars['String']>
  /** 客户关联用户id */
  customerUserId?: Maybe<Scalars['Int']>
  /** 客户id */
  id?: Maybe<Scalars['Int']>
  /** 客户身份证号码 */
  idNumber?: Maybe<Scalars['String']>
  /** 客户姓名 */
  name?: Maybe<Scalars['String']>
  /** 纳税人识别号 */
  tfn?: Maybe<Scalars['String']>
  /** 客户类型 */
  type?: Maybe<CustomerType>
}

export type CustomerBelongInfoBase = {
  customerBelongInfo?: Maybe<BelongInfo>
}

export type CustomerChannelByOrgPayload = {
  __typename?: 'CustomerChannelByOrgPayload'
  channelId?: Maybe<Scalars['Int']>
  channelName?: Maybe<Scalars['String']>
}

export type CustomerDistributionInput = {
  /** 市 */
  cityId: Scalars['ID']
  /** 联系人Id */
  contactId?: InputMaybe<Scalars['Int']>
  /**  联系人 */
  contacts?: InputMaybe<Scalars['String']>
  /** 经纬度 */
  coordinate?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /**  客户ID */
  customerId?: InputMaybe<Scalars['Int']>
  /** 详细地址 */
  detailedAddress: Scalars['String']
  /**  配送ID */
  distributionId?: InputMaybe<Scalars['Int']>
  /**  配送名称 */
  distributionName?: InputMaybe<Scalars['String']>
  /** 区 可能不存在区级别（广东东莞） */
  districtId?: InputMaybe<Scalars['ID']>
  /**  联系电话 */
  phoneNum?: InputMaybe<Scalars['String']>
  /** 省 */
  provinceId: Scalars['ID']
}

export type CustomerDistributionPayload = CityBase &
  DistrictBase &
  ProvinceBase & {
    __typename?: 'CustomerDistributionPayload'
    /** 市 */
    city?: Maybe<LocationPayload>
    /** 联系人Id */
    contactId?: Maybe<Scalars['Int']>
    /**  联系人 */
    contacts?: Maybe<Scalars['String']>
    /** 经纬度 */
    coordinate?: Maybe<Array<Maybe<Scalars['Float']>>>
    /**  客户ID */
    customerId?: Maybe<Scalars['Int']>
    /** 详细地址 */
    detailedAddress?: Maybe<Scalars['String']>
    /**
     * 配送地址
     * @deprecated v2.4版本移除
     */
    distributionAddr?: Maybe<Scalars['String']>
    /**  配送ID */
    distributionId?: Maybe<Scalars['Int']>
    /**  配送名称 */
    distributionName?: Maybe<Scalars['String']>
    /** 区 */
    district?: Maybe<LocationPayload>
    /**  联系电话 */
    phoneNum?: Maybe<Scalars['String']>
    /** 省 */
    province?: Maybe<LocationPayload>
  }

/** 客户分组实体 */
export type CustomerGroupPayload = {
  __typename?: 'CustomerGroupPayload'
  customerGroupId?: Maybe<Scalars['Int']>
  customerGroupName?: Maybe<Scalars['String']>
  customerPayloadList?: Maybe<Array<Maybe<CustomerPayload>>>
}

export type CustomerInfo = {
  /** 客户Id */
  customerId?: InputMaybe<Scalars['Int']>
  /** 客户类型 */
  customerType?: InputMaybe<Scalars['Int']>
}

export type CustomerInput = {
  /** 客户属性 */
  attribute: CustomerAttribute
  /** 客户所属组织 内部公司和个人必传 */
  belongOrgId?: InputMaybe<Scalars['Int']>
  customerDistributions: Array<CustomerDistributionInput>
  /**  客户分组ID */
  customerGroupId?: InputMaybe<Scalars['Int']>
  /**  客户分组名称 */
  customerGroupName?: InputMaybe<Scalars['String']>
  /**  客户ID */
  customerId?: InputMaybe<Scalars['Int']>
  /**  客户名称 */
  customerName: Scalars['String']
  /**  客户简称 */
  customerShortName?: InputMaybe<Scalars['String']>
  /** 客户关联用户 内部个人必传 */
  customerUserId?: InputMaybe<Scalars['Int']>
  /** 客户身份证号 */
  idNumber?: InputMaybe<Scalars['String']>
  /** 客户手机号 */
  phone?: InputMaybe<Scalars['String']>
  /**  备注信息 */
  remark?: InputMaybe<Scalars['String']>
  /** 客户类型 */
  type: CustomerType
}

export type CustomerListInput = {
  /**  客户分组ID */
  customerGroupId?: InputMaybe<Scalars['Int']>
}

/** 客户分页实体 */
export type CustomerPagePayload = {
  __typename?: 'CustomerPagePayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<CustomerPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

/** 客户返回实体 */
export type CustomerPayload = BelongOrganizationBase & {
  __typename?: 'CustomerPayload'
  /** 客户属性 */
  attribute?: Maybe<CustomerAttribute>
  /** 所属组织 */
  belongOrganization?: Maybe<Org>
  /**  创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /**  配送信息 */
  customerDistribution?: Maybe<Array<Maybe<CustomerDistributionPayload>>>
  /**  客户分组ID */
  customerGroupId?: Maybe<Scalars['Int']>
  /**  客户分组名称 */
  customerGroupName?: Maybe<Scalars['String']>
  /**  客户ID */
  customerId?: Maybe<Scalars['Int']>
  /**  客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户简称/别名 */
  customerShortName?: Maybe<Scalars['String']>
  /** 客户相关员工信息 */
  customerUserId?: Maybe<Scalars['Int']>
  /** 客户身份证号 */
  idNumber?: Maybe<Scalars['String']>
  /** 手机号 */
  phone?: Maybe<Scalars['String']>
  /**  备注信息 */
  remark?: Maybe<Scalars['String']>
  /** 客户类型 */
  type?: Maybe<CustomerType>
  /** 员工状态（离职/停职） */
  userStatus?: Maybe<UserStatus>
}

/** 客户树请求(为空表示全量返回) */
export type CustomerTreeInput = {
  /** 所属组织 for2.9所属组织 */
  belongOrgId?: InputMaybe<Scalars['Int']>
  /** 业务类型 */
  businessType?: InputMaybe<AllBusinessType>
  /** 商品类型 */
  commodityType?: InputMaybe<Scalars['Int']>
  /** 模糊搜索关键词 */
  keyword?: InputMaybe<Scalars['String']>
}

/** 客户树返回 */
export type CustomerTreePayload = {
  __typename?: 'CustomerTreePayload'
  /** 客户ID */
  belongId: Scalars['Int']
  /** 客户名称 */
  belongName?: Maybe<Scalars['String']>
  /** 客户类型 */
  belongType: Scalars['Int']
  /** 子节点集合 */
  children?: Maybe<Array<Maybe<CustomerTreePayload>>>
  /** 是否可选择 */
  optional?: Maybe<Scalars['Boolean']>
  /** 父节点 */
  parent?: Maybe<CustomerTreePayload>
  /** 是否可见 */
  visible?: Maybe<Scalars['Boolean']>
}

/** 客户类型 */
export enum CustomerType {
  /** 公司 */
  Company = 'COMPANY',
  /** 个人 */
  Personal = 'PERSONAL',
  /** 零售 */
  Retail = 'RETAIL',
  UnUsedField = 'UN_USED_FIELD',
}

export type CustomersInput = {
  /** 客户属性 */
  attribute?: InputMaybe<CustomerAttribute>
  /**  所属组织  */
  belongOrgId?: InputMaybe<Scalars['Int']>
  keyword?: InputMaybe<Scalars['String']>
}

export type DamagedCommoditiesInput = {
  outOrderType: Scalars['Int']
  taskId: Scalars['ID']
}

export type DamagedCommoditiesPayload = {
  __typename?: 'DamagedCommoditiesPayload'
  Deleted?: Maybe<Scalars['Int']>
  bomId?: Maybe<Scalars['Int']>
  commodityCategoryId?: Maybe<Scalars['Int']>
  commodityCategoryName?: Maybe<Scalars['String']>
  commodityId?: Maybe<Scalars['Int']>
  commodityName?: Maybe<Scalars['String']>
  commodityPlaceOriginId?: Maybe<Scalars['Int']>
  commodityPlaceOriginName?: Maybe<Scalars['String']>
  commoditySkuId?: Maybe<Scalars['Int']>
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  commodityTypeId?: Maybe<Scalars['Int']>
  commodityTypeName?: Maybe<Scalars['String']>
  commodityVarietyId?: Maybe<Scalars['Int']>
  commodityVarietyName?: Maybe<Scalars['String']>
  conversion?: Maybe<Scalars['BigDecimal']>
  createBy?: Maybe<Scalars['Int']>
  createTime?: Maybe<Scalars['Int']>
  customerId?: Maybe<Scalars['Int']>
  customerName?: Maybe<Scalars['String']>
  outStockRecordId?: Maybe<Scalars['ID']>
  outStockRecordItemId?: Maybe<Scalars['Long']>
  pickingTotalQuantity?: Maybe<Scalars['BigDecimal']>
  pickingUnitQuantity?: Maybe<Scalars['BigDecimal']>
  property?: Maybe<Array<Maybe<Scalars['Int']>>>
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  status?: Maybe<Scalars['Int']>
  stockBatchCode?: Maybe<Scalars['String']>
  stockBatchId?: Maybe<Scalars['ID']>
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  totalType?: Maybe<Scalars['Int']>
  totalTypeName?: Maybe<Scalars['String']>
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  unitType?: Maybe<Scalars['Int']>
  unitTypeName?: Maybe<Scalars['String']>
  updateBy?: Maybe<Scalars['Int']>
  updateTime?: Maybe<Scalars['Int']>
}

export type DamagedOrder = {
  __typename?: 'DamagedOrder'
  noDamage?: Maybe<Scalars['Boolean']>
  rawMaterial?: Maybe<Scalars['Int']>
  rawMaterialUnFinish?: Maybe<Scalars['Int']>
  returnedGoods?: Maybe<Scalars['Int']>
  returnedGoodsUnFinish?: Maybe<Scalars['Int']>
  semiFinishedProducts?: Maybe<Scalars['Int']>
  semiFinishedProductsUnFinish?: Maybe<Scalars['Int']>
  undone?: Maybe<Scalars['Int']>
}

/** 分页对象 */
export type DamagedOrderPagePayload = {
  __typename?: 'DamagedOrderPagePayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  /** 销售订单列表 */
  records?: Maybe<Array<Maybe<DamagedOrderPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type DamagedOrderPayload = {
  __typename?: 'DamagedOrderPayload'
  /** 商品信息 */
  commodityList?: Maybe<Array<Maybe<OutOrderItemPayload>>>
  /** 商品类型Id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 创建人员 */
  createUserName?: Maybe<Scalars['String']>
  /** 客户配送地址 */
  customerDistributionName?: Maybe<Scalars['String']>
  /** 客户Id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户类型 10 无客户 20 客户分组 30 指定客户 */
  customerType?: Maybe<Scalars['Int']>
  /**  客户类型翻译 */
  customerTypeName?: Maybe<Scalars['String']>
  /** 驳回（取消）原因(列表+详情) */
  errorDescription?: Maybe<Scalars['String']>
  /** 入库订单编号 */
  inOrderCode?: Maybe<Scalars['String']>
  /** 入库订单Id */
  inOrderId?: Maybe<Scalars['ID']>
  /** 出库单号 */
  outOrderCode?: Maybe<Scalars['String']>
  /** 订单备注 */
  outOrderDescription?: Maybe<Scalars['String']>
  /** 出库订单Id */
  outOrderId?: Maybe<Scalars['ID']>
  /** 出库状态Id 出库订单状态，默认待提交，10：待提交、20：待出库、30：部分出库、40：已完成、50：已取消 */
  outOrderStatus?: Maybe<Scalars['Int']>
  /** 订单状态翻译 */
  outOrderStatusName?: Maybe<Scalars['String']>
  /** 出库类型出库订单类型，150：原料报损、160 半成品报损、170 退货品报损 */
  outOrderType?: Maybe<Scalars['Int']>
  /** 出库类型名称 */
  outOrderTypeName?: Maybe<Scalars['String']>
  /** 销售时间 */
  saleTime?: Maybe<Scalars['Long']>
  /** 供应商Id */
  supplierId?: Maybe<Scalars['Int']>
  /** 供应商名字 */
  supplierName?: Maybe<Scalars['String']>
  /** 任务单号 */
  taskCode?: Maybe<Scalars['String']>
  /** 商品信息总价 */
  totalPrice?: Maybe<Scalars['BigDecimal']>
  /** 仓库Id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

export type DamagedOrderStatisticsInput = {
  outOrderStatus?: InputMaybe<Scalars['Int']>
  outOrderType: Array<InputMaybe<Scalars['Int']>>
  taskId: Scalars['ID']
}

export type DamagedOrderStatisticsPayload = {
  __typename?: 'DamagedOrderStatisticsPayload'
  /** 已取消 */
  canceled?: Maybe<Scalars['Int']>
  /** 已完成 */
  finished?: Maybe<Scalars['Int']>
  /** 生产中 */
  producing?: Maybe<Scalars['Int']>
  /** 待审核 */
  toAudit?: Maybe<Scalars['Int']>
  /** 待出库 */
  toOutbound?: Maybe<Scalars['Int']>
  /** 待提交 */
  toSubmit?: Maybe<Scalars['Int']>
}

export type DefectiveSaleAmountItemInput = {
  /** 销售单item id */
  outOrderItemId: Scalars['ID']
  /** 销售单价 */
  salePrice: Scalars['BigDecimal']
  /** 销售总价 */
  saleTotalPrice: Scalars['BigDecimal']
}

export type DefectiveSkuOptionInput = {
  /** 商品Id commodityId */
  commodityId?: InputMaybe<Scalars['Int']>
}

export type DeliveryBillCommodityItemPayload = SkuBase & {
  __typename?: 'DeliveryBillCommodityItemPayload'
  /** 配送费用单商品明细ID as key */
  itemId?: Maybe<Scalars['ID']>
  /** 货品数量 */
  quantity?: Maybe<Scalars['BigDecimal']>
  /** 商品skiId */
  sku?: Maybe<CommoditySku>
}

export type DeliveryBillFeeItemPayload = SupplierBase & {
  __typename?: 'DeliveryBillFeeItemPayload'
  /** 费用金额 */
  amount?: Maybe<Scalars['BigDecimal']>
  /** 配送费用单号 */
  billId?: Maybe<Scalars['ID']>
  /** 费用项Id */
  feeItemId?: Maybe<Scalars['ID']>
  /** 费用类型 */
  feeType?: Maybe<DeliveryFeeTypeEnum>
  /** 费用类型描述 */
  feeTypeDesc?: Maybe<Scalars['String']>
  /** 结算方式 */
  payMode?: Maybe<DeliveryFeePayModeEnum>
  /** 结算方式描述 */
  payModeDesc?: Maybe<Scalars['String']>
  /** 备注信息 */
  remark?: Maybe<Scalars['String']>
  /** 供应商Id */
  supplier?: Maybe<Supplier>
}

export type DeliveryBillItemPayload = CustomerAddressInfoBase & {
  __typename?: 'DeliveryBillItemPayload'
  /** 配送费用单ID */
  billId?: Maybe<Scalars['ID']>
  /** 商品信息 */
  commodities?: Maybe<Array<Maybe<DeliveryBillCommodityItemPayload>>>
  /** 客户信息 */
  customerAddressInfo?: Maybe<CustomerAddressInfo>
  /** 关联销售单号 */
  saleOrderCode?: Maybe<Scalars['String']>
  /** 关联销售单 as key */
  saleOrderId?: Maybe<Scalars['ID']>
}

export type DeliveryBillLogPayload = CreateByBase & {
  __typename?: 'DeliveryBillLogPayload'
  /** 配送费用单Id */
  billId?: Maybe<Scalars['ID']>
  /** 创建人 */
  createBy?: Maybe<User>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 配送费用单日志ID */
  logId?: Maybe<Scalars['ID']>
  /** 订单日志类型 */
  logType?: Maybe<Scalars['String']>
  /** 日志类型描述 */
  logTypeDesc?: Maybe<Scalars['String']>
  /** 备注信息 */
  remark?: Maybe<Scalars['String']>
}

export type DeliveryBillPayload = BelongOrgBase &
  CreateByBase &
  OrgBase &
  WarehouseBase & {
    __typename?: 'DeliveryBillPayload'
    /** 客户信息集合：地址数据集合 */
    belongInfo?: Maybe<Array<Maybe<SummaryCustomerAddressInfo>>>
    /** 所属组织 */
    belongOrg?: Maybe<Org>
    /** 配送费用单号 */
    billCode?: Maybe<Scalars['String']>
    /** 配送费用单ID */
    billId?: Maybe<Scalars['ID']>
    /** 配送费用单状态 */
    billStatus?: Maybe<DeliveryBillStatusEnum>
    /** 配送费用单状态 */
    billStatusDesc?: Maybe<Scalars['String']>
    /** 业务员名字 */
    businessUserName?: Maybe<Scalars['String']>
    /** 车牌号 */
    carNum?: Maybe<Scalars['String']>
    /** 车辆类型 */
    carType?: Maybe<Scalars['String']>
    /** 创建人 */
    createBy?: Maybe<User>
    /** 创建时间 */
    createTime?: Maybe<Scalars['Long']>
    /** 配送方式 */
    deliveryType?: Maybe<DeliveryMethodEnum>
    /** 配送方式 */
    deliveryTypeDesc?: Maybe<Scalars['String']>
    /** 联系方式 */
    driverContact?: Maybe<Scalars['String']>
    /** 司机姓名 */
    driverName?: Maybe<Scalars['String']>
    /** 费用信息 */
    feeItems?: Maybe<Array<Maybe<DeliveryBillFeeItemPayload>>>
    /** 配送信息 */
    items?: Maybe<Array<Maybe<DeliveryBillItemPayload>>>
    /** 操作日志信息 */
    logs?: Maybe<Array<Maybe<DeliveryBillLogPayload>>>
    /** 配送单ID */
    orderId?: Maybe<Scalars['ID']>
    /** 组织ID */
    org?: Maybe<Org>
    /** 状态备注信息 */
    statusNote?: Maybe<Scalars['String']>
    /** 仓库ID */
    warehouse?: Maybe<Warehouse>
  }

export type DeliveryBillStatusCountPayload = {
  __typename?: 'DeliveryBillStatusCountPayload'
  /** 待审核 */
  unAudit?: Maybe<Scalars['Int']>
  /** 待提交 */
  unSubmit?: Maybe<Scalars['Int']>
}

export enum DeliveryBillStatusEnum {
  /** 已完成 */
  Complete = 'COMPLETE',
  /** 待业务人员审核 */
  UnBizAudit = 'UN_BIZ_AUDIT',
  /** 待财务人员审核 */
  UnFdAudit = 'UN_FD_AUDIT',
  /** 待提交 */
  UnSubmit = 'UN_SUBMIT',
}

export enum DeliveryFeePayModeEnum {
  /** 日结 */
  DailyPay = 'DAILY_PAY',
  /** 半月结 */
  HalfMoonPay = 'HALF_MOON_PAY',
  /** 月结 */
  MonthlyPay = 'MONTHLY_PAY',
  /** 次结 */
  PerPay = 'PER_PAY',
}

export enum DeliveryFeeTypeEnum {
  /** 冷藏费 */
  ColdStorageFee = 'COLD_STORAGE_FEE',
  /** 运费 */
  Freight = 'FREIGHT',
  /** 装车费 */
  LoadingFee = 'LOADING_FEE',
  /** 其他费用 */
  OtherFee = 'OTHER_FEE',
  /** 卸车费 */
  UnloadingFee = 'UNLOADING_FEE',
}

export enum DeliveryMethodEnum {
  /** 常温 */
  Ambient = 'AMBIENT',
  /** 冷链 */
  ColdChain = 'COLD_CHAIN',
}

export type DeliveryOrderCommodityItemPayload = SkuBase & {
  __typename?: 'DeliveryOrderCommodityItemPayload'
  /** 配送费用单商品明细ID as key */
  itemId?: Maybe<Scalars['ID']>
  /** 已配送数量 */
  quantity?: Maybe<Scalars['BigDecimal']>
  /** 销售单商品ID */
  saleOrderItemId?: Maybe<Scalars['ID']>
  /** 商品sku */
  sku?: Maybe<CommoditySku>
}

/**  配送单信息 */
export type DeliveryOrderDetailPayload = BelongOrgBase &
  CreateByBase &
  OrgBase &
  WarehouseBase & {
    __typename?: 'DeliveryOrderDetailPayload'
    /** 客户信息集合 */
    belongInfo?: Maybe<Array<Maybe<SummaryCustomerAddressInfo>>>
    /** 所属组织 */
    belongOrg?: Maybe<Org>
    /** 业务员名字 */
    businessUserName?: Maybe<Scalars['String']>
    /** 车牌号 */
    carNum?: Maybe<Scalars['String']>
    /** 车辆类型 */
    carType?: Maybe<Scalars['String']>
    /** 创建人 */
    createBy?: Maybe<User>
    /** 创建时间 */
    createTime?: Maybe<Scalars['Long']>
    /** 配送单费用明细 */
    deliveryOrderFee?: Maybe<Array<Maybe<DeliveryOrderFeePayload>>>
    /** 配送单商品明细 */
    deliveryOrderItem?: Maybe<Array<Maybe<DeliveryOrderItemPayload>>>
    /** 配送方式 */
    deliveryType?: Maybe<DeliveryMethodEnum>
    /** 配送方式描述 */
    deliveryTypeDesc?: Maybe<Scalars['String']>
    /** 司机联系方式 */
    driverContact?: Maybe<Scalars['String']>
    /** 司机姓名 */
    driverName?: Maybe<Scalars['String']>
    /** 配送单号 */
    orderCode?: Maybe<Scalars['String']>
    /** 配送单ID */
    orderId?: Maybe<Scalars['ID']>
    /** 配送单状态 */
    orderStatus?: Maybe<DeliveryOrderStatusEnum>
    /** 配送单状态描述 */
    orderStatusDesc?: Maybe<Scalars['String']>
    /** 组织ID */
    org?: Maybe<Org>
    /** 配送货物销售订单日期 */
    saleOrderDate?: Maybe<Scalars['Long']>
    /** 仓库ID */
    warehouse?: Maybe<Warehouse>
  }

/** 获取配送单详情查询入参 */
export type DeliveryOrderDetailQueryInput = {
  /** 配送单ID */
  orderId: Scalars['ID']
}

/**  配送单费用明细 */
export type DeliveryOrderFeeInput = {
  /** 配送费用 */
  amount: Scalars['BigDecimal']
  /** 配送费用类型 */
  feeType: DeliveryFeeTypeEnum
  /** 支付模式 */
  payMode: DeliveryFeePayModeEnum
  /** 备注 */
  remark?: InputMaybe<Scalars['String']>
  /** 供应商ID */
  supplierId: Scalars['Int']
}

/**  配送单费用明细 */
export type DeliveryOrderFeePayload = SupplierBase & {
  __typename?: 'DeliveryOrderFeePayload'
  /** 配送费用 */
  amount?: Maybe<Scalars['BigDecimal']>
  /** 配送费用单号 */
  billId?: Maybe<Scalars['ID']>
  /** 费用项Id */
  feeItemId?: Maybe<Scalars['ID']>
  /** 配送费用类型 */
  feeType?: Maybe<DeliveryFeeTypeEnum>
  /** 配送费用类型描述 */
  feeTypeDesc?: Maybe<Scalars['String']>
  /** 支付方式 */
  payMode?: Maybe<DeliveryFeePayModeEnum>
  /** 支付方式描述 */
  payModeDesc?: Maybe<Scalars['String']>
  /** 备注 */
  remark?: Maybe<Scalars['String']>
  /** 供应商 */
  supplier?: Maybe<Supplier>
}

/**  配送单商品明细 */
export type DeliveryOrderItemInput = {
  /** 商品类型id */
  commodityTypeId: Scalars['Int']
  /** 商品类型名称 */
  commodityTypeName: Scalars['String']
  /** 配送客户ID */
  customerId: Scalars['Int']
  /** 配送客户类型 */
  customerType: Scalars['Int']
  /** 配送单配送的商品项明细 */
  deliveryOrderItemList: Array<DeliveryOrderItemListInput>
  /** 销售单订单类型,200成品销售，210原件销售 */
  orderType: Scalars['Int']
  /** 关联销售单号Code */
  saleOrderCode: Scalars['String']
  /** 销售单号ID */
  saleOrderId: Scalars['ID']
}

/**  配送单配送的商品项明细 */
export type DeliveryOrderItemListInput = {
  /** 配送数量 */
  quantity: Scalars['BigDecimal']
  /** 销售单商品ID */
  saleOrderItemId: Scalars['ID']
  /** 商品sku */
  skuId: Scalars['Int']
}

/**  配送单商品明细 */
export type DeliveryOrderItemPayload = CustomerAddressInfoBase & {
  __typename?: 'DeliveryOrderItemPayload'
  /** 商品信息 */
  commodityDetail?: Maybe<Array<Maybe<DeliveryOrderCommodityItemPayload>>>
  /** 商品类型id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 客户信息 */
  customerAddressInfo?: Maybe<CustomerAddressInfo>
  /** 配送单商品明细ID */
  itemId?: Maybe<Scalars['ID']>
  /** 配送单号 */
  orderId?: Maybe<Scalars['ID']>
  /** 销售单订单类型，200成品销售，210原件销售 */
  orderType?: Maybe<Scalars['Int']>
  /** 出库单ID */
  outOrderId?: Maybe<Scalars['ID']>
  /** 出库记录数量 */
  outOrderQuantity?: Maybe<Scalars['BigDecimal']>
  /** 关联销售单号 */
  saleOrderCode?: Maybe<Scalars['String']>
  /** 关联销售单ID */
  saleOrderId?: Maybe<Scalars['ID']>
}

/** 获取配送单列表查询入参 */
export type DeliveryOrderQueryInput = {
  /** 配送客户ID */
  customerId?: InputMaybe<Scalars['Int']>
  /** 配送客户类型 */
  customerType?: InputMaybe<Scalars['Int']>
  /** 结束时间 */
  endDate?: InputMaybe<Scalars['Long']>
  /** 配送单状态 */
  orderStatus: DeliveryOrderStatusEnum
  /** 开始时间 */
  startDate?: InputMaybe<Scalars['Long']>
}

export type DeliveryOrderStatusCountPayload = {
  __typename?: 'DeliveryOrderStatusCountPayload'
  /** 待提交 */
  unSubmit?: Maybe<Scalars['Int']>
}

/**  配送单状态枚举 */
export enum DeliveryOrderStatusEnum {
  /** 已取消 */
  Canceled = 'CANCELED',
  /** 已完成 */
  Completed = 'COMPLETED',
  /** 待出库 */
  UnOutStock = 'UN_OUT_STOCK',
  /** 待提交 */
  UnSubmit = 'UN_SUBMIT',
}

export type DevicePlatformInput = {
  /**
   *  WEB 0
   *  ANDROID 1
   *  IOS 2
   */
  device: Scalars['Int']
}

export type DistrictBase = {
  /** 区 */
  district?: Maybe<LocationPayload>
}

export enum ErrorDetail {
  /**
   * The deadline expired before the operation could complete.
   *
   * For operations that change the state of the system, this error
   * may be returned even if the operation has completed successfully.
   * For example, a successful response from a server could have been
   * delayed long enough for the deadline to expire.
   *
   * HTTP Mapping: 504 Gateway Timeout
   * Error Type: UNAVAILABLE
   */
  DeadlineExceeded = 'DEADLINE_EXCEEDED',
  /**
   * The server detected that the client is exhibiting a behavior that
   * might be generating excessive load.
   *
   * HTTP Mapping: 429 Too Many Requests or 420 Enhance Your Calm
   * Error Type: UNAVAILABLE
   */
  EnhanceYourCalm = 'ENHANCE_YOUR_CALM',
  /**
   * The requested field is not found in the schema.
   *
   * This differs from `NOT_FOUND` in that `NOT_FOUND` should be used when a
   * query is valid, but is unable to return a result (if, for example, a
   * specific video id doesn't exist). `FIELD_NOT_FOUND` is intended to be
   * returned by the server to signify that the requested field is not known to exist.
   * This may be returned in lieu of failing the entire query.
   * See also `PERMISSION_DENIED` for cases where the
   * requested field is invalid only for the given user or class of users.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: BAD_REQUEST
   */
  FieldNotFound = 'FIELD_NOT_FOUND',
  /**
   * The client specified an invalid argument.
   *
   * Note that this differs from `FAILED_PRECONDITION`.
   * `INVALID_ARGUMENT` indicates arguments that are problematic
   * regardless of the state of the system (e.g., a malformed file name).
   *
   * HTTP Mapping: 400 Bad Request
   * Error Type: BAD_REQUEST
   */
  InvalidArgument = 'INVALID_ARGUMENT',
  /**
   * The provided cursor is not valid.
   *
   * The most common usage for this error is when a client is paginating
   * through a list that uses stateful cursors. In that case, the provided
   * cursor may be expired.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: NOT_FOUND
   */
  InvalidCursor = 'INVALID_CURSOR',
  /**
   * Unable to perform operation because a required resource is missing.
   *
   * Example: Client is attempting to refresh a list, but the specified
   * list is expired. This requires an action by the client to get a new list.
   *
   * If the user is simply trying GET a resource that is not found,
   * use the NOT_FOUND error type. FAILED_PRECONDITION.MISSING_RESOURCE
   * is to be used particularly when the user is performing an operation
   * that requires a particular resource to exist.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   * Error Type: FAILED_PRECONDITION
   */
  MissingResource = 'MISSING_RESOURCE',
  /**
   * Service Error.
   *
   * There is a problem with an upstream service.
   *
   * This may be returned if a gateway receives an unknown error from a service
   * or if a service is unreachable.
   * If a request times out which waiting on a response from a service,
   * `DEADLINE_EXCEEDED` may be returned instead.
   * If a service returns a more specific error Type, the specific error Type may
   * be returned instead.
   *
   * HTTP Mapping: 502 Bad Gateway
   * Error Type: UNAVAILABLE
   */
  ServiceError = 'SERVICE_ERROR',
  /**
   * Request failed due to network errors.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  TcpFailure = 'TCP_FAILURE',
  /**
   * Request throttled based on server concurrency limits.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  ThrottledConcurrency = 'THROTTLED_CONCURRENCY',
  /**
   * Request throttled based on server CPU limits
   *
   * HTTP Mapping: 503 Unavailable.
   * Error Type: UNAVAILABLE
   */
  ThrottledCpu = 'THROTTLED_CPU',
  /**
   * The operation is not implemented or is not currently supported/enabled.
   *
   * HTTP Mapping: 501 Not Implemented
   * Error Type: BAD_REQUEST
   */
  Unimplemented = 'UNIMPLEMENTED',
  /**
   * Unknown error.
   *
   * This error should only be returned when no other error detail applies.
   * If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Unknown = 'UNKNOWN',
}

export enum ErrorType {
  /**
   * Bad Request.
   *
   * There is a problem with the request.
   * Retrying the same request is not likely to succeed.
   * An example would be a query or argument that cannot be deserialized.
   *
   * HTTP Mapping: 400 Bad Request
   */
  BadRequest = 'BAD_REQUEST',
  /**
   * The operation was rejected because the system is not in a state
   * required for the operation's execution.  For example, the directory
   * to be deleted is non-empty, an rmdir operation is applied to
   * a non-directory, etc.
   *
   * Service implementers can use the following guidelines to decide
   * between `FAILED_PRECONDITION` and `UNAVAILABLE`:
   *
   * - Use `UNAVAILABLE` if the client can retry just the failing call.
   * - Use `FAILED_PRECONDITION` if the client should not retry until
   * the system state has been explicitly fixed.  E.g., if an "rmdir"
   *      fails because the directory is non-empty, `FAILED_PRECONDITION`
   * should be returned since the client should not retry unless
   * the files are deleted from the directory.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   */
  FailedPrecondition = 'FAILED_PRECONDITION',
  /**
   * Internal error.
   *
   * An unexpected internal error was encountered. This means that some
   * invariants expected by the underlying system have been broken.
   * This error code is reserved for serious errors.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Internal = 'INTERNAL',
  /**
   * The requested entity was not found.
   *
   * This could apply to a resource that has never existed (e.g. bad resource id),
   * or a resource that no longer exists (e.g. cache expired.)
   *
   * Note to server developers: if a request is denied for an entire class
   * of users, such as gradual feature rollout or undocumented allowlist,
   * `NOT_FOUND` may be used. If a request is denied for some users within
   * a class of users, such as user-based access control, `PERMISSION_DENIED`
   * must be used.
   *
   * HTTP Mapping: 404 Not Found
   */
  NotFound = 'NOT_FOUND',
  /**
   * The caller does not have permission to execute the specified
   * operation.
   *
   * `PERMISSION_DENIED` must not be used for rejections
   * caused by exhausting some resource or quota.
   * `PERMISSION_DENIED` must not be used if the caller
   * cannot be identified (use `UNAUTHENTICATED`
   * instead for those errors).
   *
   * This error Type does not imply the
   * request is valid or the requested entity exists or satisfies
   * other pre-conditions.
   *
   * HTTP Mapping: 403 Forbidden
   */
  PermissionDenied = 'PERMISSION_DENIED',
  /**
   * The request does not have valid authentication credentials.
   *
   * This is intended to be returned only for routes that require
   * authentication.
   *
   * HTTP Mapping: 401 Unauthorized
   */
  Unauthenticated = 'UNAUTHENTICATED',
  /**
   * Currently Unavailable.
   *
   * The service is currently unavailable.  This is most likely a
   * transient condition, which can be corrected by retrying with
   * a backoff.
   *
   * HTTP Mapping: 503 Unavailable
   */
  Unavailable = 'UNAVAILABLE',
  /**
   * Unknown error.
   *
   * For example, this error may be returned when
   * an error code received from another address space belongs to
   * an error space that is not known in this address space.  Also
   * errors raised by APIs that do not return enough error information
   * may be converted to this error.
   *
   * If a client sees an unknown errorType, it will be interpreted as UNKNOWN.
   * Unknown errors MUST NOT trigger any special behavior. These MAY be treated
   * by an implementation as being equivalent to INTERNAL.
   *
   * When possible, a more specific error should be provided.
   *
   * HTTP Mapping: 520 Unknown Error
   */
  Unknown = 'UNKNOWN',
}

export type FabricationStatistics = {
  __typename?: 'FabricationStatistics'
  /** 报损出库记录 */
  damagedOutOrder?: Maybe<Scalars['Int']>
  damagedOutOrderUndone?: Maybe<Scalars['Boolean']>
  /** 生产领料记录 */
  pickingRecord?: Maybe<Scalars['Int']>
  pickingRecordFinishUndone?: Maybe<Scalars['Boolean']>
  /** 生产退料记录 */
  returnMaterial?: Maybe<Scalars['Int']>
  returnMaterialUndone?: Maybe<Scalars['Boolean']>
  /** 生产入库记录 */
  warehousingRecord?: Maybe<Scalars['Int']>
  warehousingRecordUndone?: Maybe<Scalars['Boolean']>
}

export type FieldPayload = {
  __typename?: 'FieldPayload'
  /** 字典表 仅在某些详情下维护 */
  billDictItemList?: Maybe<Array<Maybe<BillDictItemPayload>>>
  data?: Maybe<Scalars['String']>
  dataSourceList?: Maybe<Array<Maybe<Scalars['String']>>>
  dataType?: Maybe<Scalars['String']>
  decimalPlaces?: Maybe<Scalars['Int']>
  fieldId?: Maybe<Scalars['ID']>
  fieldKey?: Maybe<Scalars['String']>
  fieldName?: Maybe<Scalars['String']>
  fieldType?: Maybe<Scalars['String']>
  isInteger?: Maybe<Scalars['Int']>
  note?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Int']>
}

export type FinishOutOrderInput = {
  outOrderId: Scalars['ID']
}

export type FlowApplyOperationLogPayload = {
  __typename?: 'FlowApplyOperationLogPayload'
  /**  操作人 */
  operationUserId?: Maybe<Scalars['Int']>
  /**  操作人信息 */
  operationUserName?: Maybe<Scalars['String']>
  /**  状态 */
  status?: Maybe<Scalars['Int']>
  /**  状态名字 */
  statusName?: Maybe<Scalars['String']>
  /**  状态时间 */
  statusTime?: Maybe<Scalars['Long']>
}

export type FlowLog = {
  __typename?: 'FlowLog'
  createBy?: Maybe<Scalars['Int']>
  createTime?: Maybe<Scalars['Long']>
  createUserName?: Maybe<Scalars['String']>
  flowId?: Maybe<Scalars['ID']>
  note?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['Int']>
  typeName?: Maybe<Scalars['String']>
}

export type FlowTransferCommodityInput = {
  /**  金额 */
  amount?: InputMaybe<Scalars['BigDecimal']>
  /**  批次id */
  batchId?: InputMaybe<Scalars['ID']>
  /**  单价类型 */
  priceType?: InputMaybe<Scalars['Int']>
  /**  sku id */
  skuId?: InputMaybe<Scalars['Int']>
  /**  总计数量 */
  totalQuantity?: InputMaybe<Scalars['BigDecimal']>
  /**  总计类型 */
  totalType?: InputMaybe<Scalars['Int']>
  /**  单价 */
  unitPrice?: InputMaybe<Scalars['BigDecimal']>
  /**  单位数量 */
  unitQuantity?: InputMaybe<Scalars['BigDecimal']>
  /**  单位类型 */
  unitType?: InputMaybe<Scalars['Int']>
}

export type FlowTransferOtherBillInput = {
  /**  费用金额 */
  amount?: InputMaybe<Scalars['BigDecimal']>
  /**  费用类型 */
  billType?: InputMaybe<Scalars['Int']>
  /**  车牌 */
  brand?: InputMaybe<Scalars['String']>
  /**  付款方式 */
  payMode?: InputMaybe<Scalars['Int']>
  /**  联系电话 */
  phone?: InputMaybe<Scalars['String']>
  /**  备注 */
  remark?: InputMaybe<Scalars['String']>
  /**  供应商id */
  supplierId?: InputMaybe<Scalars['Int']>
}

export type FreightCostPayload = SupplierBase & {
  __typename?: 'FreightCostPayload'
  /**  金额 */
  amount?: Maybe<Scalars['BigDecimal']>
  /**  费用项id */
  costId?: Maybe<Scalars['ID']>
  /** 费用名称 */
  costName?: Maybe<Scalars['String']>
  /**  具体字段值 */
  data?: Maybe<Scalars['String']>
  /**  备注 */
  note?: Maybe<Scalars['String']>
  /** 规则列表 */
  ruleFieldList?: Maybe<Array<Maybe<FieldPayload>>>
  /**  规则id */
  ruleId?: Maybe<Scalars['ID']>
  /** 供应商 */
  supplier?: Maybe<Supplier>
}

/** 基础公用接口 */
export type FreightType = {
  __typename?: 'FreightType'
  /** 费用类型id */
  freightId?: Maybe<Scalars['Int']>
  /** 费用类型名称 */
  freightName?: Maybe<Scalars['String']>
}

export type FunctionalField = {
  __typename?: 'FunctionalField'
  saleTotalCost?: Maybe<Scalars['BigDecimal']>
  saleTotalIncome?: Maybe<Scalars['BigDecimal']>
  saleTotalPrice?: Maybe<Scalars['BigDecimal']>
}

export type GetAcquireInput = {
  applyId: Scalars['ID']
}

export type GetBillDictItemInput = {
  /** 应用id */
  appId?: InputMaybe<Scalars['Int']>
  /** 字典编码 必填 */
  dictCode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type GetCommoditySkuInput = {
  commoditySkuId: Scalars['Int']
}

export type GetCustomerBaseInput = {
  /** 客户名字 */
  name?: InputMaybe<Scalars['String']>
  /** 联系电话 */
  phone?: InputMaybe<Scalars['String']>
  /** 客户类型 */
  type: CustomerType
}

export type GetDeliveryBillInput = {
  /** 配送费用单Id */
  deliveryBillId: Scalars['ID']
}

export type GetOutStockRecordLogInput = {
  outStockRecordId?: InputMaybe<Scalars['ID']>
}

export type GetProductionInput = {
  /** 日期 */
  date: Scalars['Long']
}

export type GetPurchaseReturnInput = {
  returnId: Scalars['ID']
}

/** 获取退货费用单详情req */
export type GetReturnsBillDetailInput = {
  /** 退货单id */
  returnId: Scalars['ID']
}

/** 查询销售收入详情入参 */
export type GetSaleIncomeInput = {
  incomeId: Scalars['ID']
}

export type GetSaleReturnInput = {
  /** 退货单ID */
  inOrderId: Scalars['ID']
}

export type GetStatusCountInput = {
  /** 结束时间 */
  endDate?: InputMaybe<Scalars['Long']>
  /** 开始时间 */
  startDate?: InputMaybe<Scalars['Long']>
  /** 状态 */
  status: OrderStatus
}

export type GetSupplierBaseInput = {
  /** 供应商名字 */
  supplierName: Scalars['String']
}

export type GetSupplierInput = {
  /** 供应商Id */
  supplierId: Scalars['Int']
  /** 供应商类型 */
  supplierTypeId: Scalars['Int']
}

export type GetTemplateInput = {
  /**  模板类型 */
  templateType?: InputMaybe<BillMainTypeEnum>
  /**  触发条件 必填 类型为 [{"triggerCondition":"k1","value":"v1"},{...}] */
  triggerCondition?: InputMaybe<Scalars['String']>
}

export type GetTransferBillStatusInput = {
  /** 商品类型 */
  commodityType?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** 订单结束时间 */
  endTime?: InputMaybe<Scalars['Long']>
  /** 调拨类型 */
  flowType?: InputMaybe<Scalars['Int']>
  /** 订单起始时间 */
  startTime?: InputMaybe<Scalars['Long']>
  /** 调拨类型（10 仓库间调拨，20 跨组织调拨，30库存退货，40库存借调） */
  transferType?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type GetTransferInOrderStatusInput = {
  /** 商品类型 */
  commodityType?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** 调拨去向筛选 10 分拣仓-分拣仓 20批发-分拣仓 30分拣仓-批发 */
  direction?: InputMaybe<Scalars['Int']>
  /** 订单结束时间 */
  endTime?: InputMaybe<Scalars['Long']>
  /** 关键字查询 */
  keyword?: InputMaybe<Scalars['String']>
  /** 订单起始时间 */
  startTime?: InputMaybe<Scalars['Long']>
  /** 调拨类型（10 仓库间调拨，20 跨组织调拨，30库存退货，40库存借调） */
  transferType?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type GetTransferInOrderStatusPayload = {
  __typename?: 'GetTransferInOrderStatusPayload'
  /** 待处理 */
  toProcess?: Maybe<Scalars['Long']>
  /** 待提交 */
  toSubmit?: Maybe<Scalars['Long']>
}

export type GetTransferOrderFeeStatusInput = {
  /** 商品类型 */
  commodityType?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** 订单结束时间 */
  endTime?: InputMaybe<Scalars['Long']>
  /** 订单起始时间 */
  startTime?: InputMaybe<Scalars['Long']>
  /** 调拨类型（10 仓库间调拨，20 跨组织调拨，30库存退货，40库存借调） */
  transferType?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type GetTransferOrderFeeStatusPayload = {
  __typename?: 'GetTransferOrderFeeStatusPayload'
  toAudit?: Maybe<Scalars['Long']>
  toSubmit?: Maybe<Scalars['Long']>
}

export type GetTransferOutOrderStatusInput = {
  /** 商品类型 */
  commodityType?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** 调拨去向筛选 10 分拣仓-分拣仓 20批发-分拣仓 30分拣仓-批发 */
  direction?: InputMaybe<Scalars['Int']>
  /** 订单结束时间 */
  endTime?: InputMaybe<Scalars['Long']>
  /** 关键字查询 */
  keyword?: InputMaybe<Scalars['String']>
  /** 订单起始时间 */
  startTime?: InputMaybe<Scalars['Long']>
  /** 10跨区域 20跨系统 */
  transferType?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type GetTransferOutOrderStatusPayload = {
  __typename?: 'GetTransferOutOrderStatusPayload'
  /** 待处理 */
  toProcess?: Maybe<Scalars['Long']>
  /** 待提交 */
  toSubmit?: Maybe<Scalars['Long']>
}

export type GetWasteSaleOrderInput = {
  saleOrderId: Scalars['ID']
}

export type IgnoreTaskSaleChangeInput = {
  changeId?: InputMaybe<Scalars['ID']>
  taskItemId?: InputMaybe<Scalars['ID']>
}

export type InOrder = {
  /** 商品类型id */
  commodityTypeId: Scalars['Int']
  /** 备注信息 */
  inOrderDescription?: InputMaybe<Scalars['String']>
  inOrderItem: Array<InputMaybe<InOrderItem>>
  /** 出库订单类型 */
  inOrderType: Scalars['Int']
  /** 生产任务id */
  taskId: Scalars['ID']
}

export type InOrderDetailInput = {
  /** 生产数据 10 黄龙数据 20 */
  dataType: Scalars['Int']
  inOrderId: Scalars['ID']
}

/** 入库明细 */
export type InOrderItem = {
  /** 批次id */
  batchId?: InputMaybe<Scalars['ID']>
  /** 商品sku id */
  commoditySkuId: Scalars['Int']
  /** 出库库存记录明细id */
  outStockRecordItemId?: InputMaybe<Scalars['ID']>
  /** 总计类型数量（例：件） */
  totalQuantity: Scalars['BigDecimal']
  /** 单位类型数量（例：kg，个） */
  unitQuantity: Scalars['BigDecimal']
}

/** 入库明细 */
export type InOrderItemUpdate = {
  /** 批次id */
  batchId?: InputMaybe<Scalars['ID']>
  /** 商品sku id */
  commoditySkuId: Scalars['Int']
  /** 入库明细id */
  inOrderItemId?: InputMaybe<Scalars['ID']>
  /** 总计类型数量（例：件） */
  totalQuantity?: InputMaybe<Scalars['BigDecimal']>
  /** 单位类型数量（例：kg，个） */
  unitQuantity: Scalars['BigDecimal']
}

export type InOrderRecordDetailPayload = {
  __typename?: 'InOrderRecordDetailPayload'
  /** 商品信息 */
  commodities?: Maybe<Array<Maybe<InOrderRecordItemDetailPayload>>>
  /** 商品类型Id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 客户Id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户类型Id */
  customerTypeId?: Maybe<Scalars['Int']>
  /** 客户类型名称 */
  customerTypeName?: Maybe<Scalars['String']>
  /** 实际运费 */
  deliveryFee?: Maybe<Scalars['BigDecimal']>
  /** 入库单号 */
  inOrderCode?: Maybe<Scalars['String']>
  /** 订单备注 */
  inOrderDescription?: Maybe<Scalars['String']>
  /** 入库状态 */
  inOrderStatus?: Maybe<Scalars['String']>
  /** 入库状态Id */
  inOrderStatusId?: Maybe<Scalars['Int']>
  /** 入库类型 */
  inOrderTypeId?: Maybe<Scalars['Int']>
  /** 入库类型名称 */
  inOrderTypeName?: Maybe<Scalars['String']>
  /** 入库订单Id */
  inStockRecordId?: Maybe<Scalars['ID']>
  /** 入库时间 */
  putInTime?: Maybe<Scalars['Long']>
  /** 入库人员 */
  putInUserName?: Maybe<Scalars['String']>
  /** 提交时间 */
  submitTime?: Maybe<Scalars['Long']>
  /** 提交人员 */
  submitUserName?: Maybe<Scalars['String']>
  /** 供应商Id */
  supplierId?: Maybe<Scalars['Int']>
  /** 供应商名称 */
  supplierName?: Maybe<Scalars['String']>
  /** 任务单号 */
  taskCode?: Maybe<Scalars['String']>
  /** 任务Id */
  taskId?: Maybe<Scalars['ID']>
  /** 总计 */
  totalPrice?: Maybe<Scalars['BigDecimal']>
  /** 仓库Id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

/** 入库记录列表条件（入库记录） */
export type InOrderRecordFilter = {
  /** 客户Id */
  customerId?: InputMaybe<Scalars['Int']>
  /** 客户类型（空为全部） */
  customerType?: InputMaybe<Scalars['Int']>
  /** 入库时间 */
  inOrderTime?: InputMaybe<Scalars['Long']>
  /** 入库类型Id（可空） */
  inOrderTypeId?: InputMaybe<Scalars['Int']>
  /** 订单号/商品名称（模糊查询） */
  keyword?: InputMaybe<Scalars['String']>
}

export type InOrderRecordItemDetailPayload = {
  __typename?: 'InOrderRecordItemDetailPayload'
  /** 批次号 */
  batchCode?: Maybe<Scalars['String']>
  /** SPUId */
  commodityId?: Maybe<Scalars['Int']>
  /** SPU名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品skuID */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 商品规格选项Id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 副单位与基本单位换算 */
  conversion?: Maybe<Scalars['BigDecimal']>
  /** 毛重 */
  grossUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 规格选项 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 副单位数量 */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 副单位类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /** 单价 */
  unitPrice?: Maybe<Scalars['BigDecimal']>
  /** 单价单位类型名称 */
  unitPriceTypeName?: Maybe<Scalars['String']>
  /** 小单位数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 小计 */
  unitTotalPrice?: Maybe<Scalars['BigDecimal']>
  /** 小单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
}

export type InOrderRecordListPayload = {
  __typename?: 'InOrderRecordListPayload'
  /** 商品信息 */
  commodities?: Maybe<Array<Maybe<InOrderRecordItemDetailPayload>>>
  /** 商品类型Id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称（原料、辅料） */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 入库时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 入库人员 */
  createUserName?: Maybe<Scalars['String']>
  /** 客户Id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户类型Id */
  customerTypeId?: Maybe<Scalars['Int']>
  /** 客户类型名称 */
  customerTypeName?: Maybe<Scalars['String']>
  /** 入库单号 */
  inOrderCode?: Maybe<Scalars['String']>
  /** 入库类型 */
  inOrderTypeId?: Maybe<Scalars['Int']>
  /** 入库类型名称（原料采购、辅料采购） */
  inOrderTypeName?: Maybe<Scalars['String']>
  /** 入库订单Id */
  inStockRecordId?: Maybe<Scalars['ID']>
  /** 仓库Id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

export enum InOrderStatus {
  /** 50 已取消 */
  Canceled = 'CANCELED',
  /** 30 部分入库 */
  Entering = 'ENTERING',
  /** 40 已完成 */
  Finished = 'FINISHED',
  /** 20 待入库 */
  ToBeEnter = 'TO_BE_ENTER',
  /** 10 待提交 */
  ToBeSubmit = 'TO_BE_SUBMIT',
}

/** 入库类型 */
export enum InOrderType {
  /** 盘点入库 */
  CheckInApply = 'CHECK_IN_APPLY',
  /** 未指定 */
  Default = 'DEFAULT',
  /** 次品入库 */
  DefectiveInApply = 'DEFECTIVE_IN_APPLY',
  /** 其他入库 */
  OtherInApply = 'OTHER_IN_APPLY',
  /** 成品入库 */
  ProductionInApply = 'PRODUCTION_IN_APPLY',
  /** 原料采购 */
  RawPurchase = 'RAW_PURCHASE',
  /** 原料退料 */
  RawReturn = 'RAW_RETURN',
  /** 退货品退料 */
  ReturnedGoodsReturn = 'RETURNED_GOODS_RETURN',
  /** 销售退货 */
  SalesReturn = 'SALES_RETURN',
  /** 半成品入库 */
  SemiFinishedInApply = 'SEMI_FINISHED_IN_APPLY',
  /** 半成品退料 */
  SemiFinishedProductsReturn = 'SEMI_FINISHED_PRODUCTS_RETURN',
  /** 辅料采购 */
  SubPurchase = 'SUB_PURCHASE',
  /** 辅料退料 */
  SubReturn = 'SUB_RETURN',
  /** 调拨入库 */
  TransferInApply = 'TRANSFER_IN_APPLY',
  /** 销售归还 */
  TurnoverBasketReturn = 'TURNOVER_BASKET_RETURN',
}

export type InOrderUpdate = {
  /** 商品类型id */
  commodityTypeId: Scalars['Int']
  /** 备注信息 */
  inOrderDescription?: InputMaybe<Scalars['String']>
  /** 生产订单id */
  inOrderId: Scalars['ID']
  /** 商品item信息 */
  inOrderItem: Array<InputMaybe<InOrderItemUpdate>>
  /** 入库类型 */
  inOrderType: Scalars['Int']
}

export type InStockFinishedQuantity = QuantityInterface & {
  __typename?: 'InStockFinishedQuantity'
  /** 实际入库总计类型数量 */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 实际入库单位类型数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
}

export type InStockOrderDetailInput = {
  /**  系统ID */
  appId?: InputMaybe<Scalars['Int']>
  /**  入库单ID */
  inOrderId: Scalars['ID']
  /**  组织ID */
  orgId?: InputMaybe<Scalars['Int']>
  /**  操作人可用仓库集合 */
  userWarehouseIdList?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

/**  入库类型 */
export enum InStockOrderType {
  /**  盘点入库 */
  CheckInApply = 'CHECK_IN_APPLY',
  /**  次品入库 */
  DefectiveInApply = 'DEFECTIVE_IN_APPLY',
  /**  其他入库 */
  OtherInApply = 'OTHER_IN_APPLY',
  /**  成品入库 */
  ProductionInApply = 'PRODUCTION_IN_APPLY',
  /**  原料采购 */
  RawPurchase = 'RAW_PURCHASE',
  /**  原料退料 */
  RawReturn = 'RAW_RETURN',
  /**  退货品退料 */
  ReturnedGoodsReturn = 'RETURNED_GOODS_RETURN',
  /**  销售退货 */
  SalesReturn = 'SALES_RETURN',
  /**  半成品入库 */
  SemiFinishedInApply = 'SEMI_FINISHED_IN_APPLY',
  /**  半成品退料 */
  SemiFinishedProductsReturn = 'SEMI_FINISHED_PRODUCTS_RETURN',
  /**  辅料采购 */
  SubPurchase = 'SUB_PURCHASE',
  /**  辅料退料 */
  SubReturn = 'SUB_RETURN',
  /**  调拨入库 */
  TransferInApply = 'TRANSFER_IN_APPLY',
  /**  销售归还 */
  TurnoverBasketReturn = 'TURNOVER_BASKET_RETURN',
}

/**  列表获取审核单入库记录 */
export type InStockRecordListPayload = {
  __typename?: 'InStockRecordListPayload'
  inStockRecordRespList?: Maybe<Array<Maybe<InStockRecordPayload>>>
  /**  待入库商品信息 */
  waitCommoditiesList?: Maybe<Array<Maybe<StockOrderWaitCommodityPayload>>>
}

/**  入库记录信息 */
export type InStockRecordPayload = {
  __typename?: 'InStockRecordPayload'
  /**  所属客户 */
  belongId?: Maybe<Scalars['Int']>
  /**  所属客户名称 */
  belongName?: Maybe<Scalars['String']>
  /**  客户类型 */
  belongType?: Maybe<Scalars['Int']>
  /**  入库商品信息 */
  commoditiesList?: Maybe<Array<Maybe<StockRecordCommodityPayload>>>
  /**  商品类型 */
  commodityType?: Maybe<Scalars['Int']>
  /**  商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /**  备注 */
  note?: Maybe<Scalars['String']>
  /**  入库记录编码 */
  recordCode?: Maybe<Scalars['String']>
  /**  入库记录ID */
  recordId?: Maybe<Scalars['Long']>
  /**  供应商 */
  supplierId?: Maybe<Scalars['Int']>
  /**  供应商名称 */
  supplierName?: Maybe<Scalars['String']>
  /**  总计金额 */
  totalAmount?: Maybe<Scalars['BigDecimal']>
  /**  操作人 */
  userId?: Maybe<Scalars['Int']>
  /**  所属仓库 */
  warehouseId?: Maybe<Scalars['ID']>
  /**  所属仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

export type InboundListPayload = {
  __typename?: 'InboundListPayload'
  /** 商品类型Id */
  commodityTypeId?: Maybe<Scalars['Int']>
  inApplyCode?: Maybe<Scalars['String']>
  inboundRecordList?: Maybe<Array<Maybe<InboundRecordPayload>>>
  toBeInBoundList?: Maybe<Array<Maybe<ToBeInboundPayload>>>
}

export type InboundRecordItemPayload = {
  __typename?: 'InboundRecordItemPayload'
  /** 批次号 */
  batchCode?: Maybe<Scalars['String']>
  /** 批次id */
  batchId?: Maybe<Scalars['ID']>
  /** SPU名称 */
  commodityName?: Maybe<Scalars['String']>
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 副单位与基本单位换算 */
  conversion?: Maybe<Scalars['BigDecimal']>
  /** 毛重 */
  grossUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 规格选项 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 总价 */
  totalPrice?: Maybe<Scalars['BigDecimal']>
  /** 副单位数量 */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  totalType?: Maybe<Scalars['Int']>
  /** 副单位类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /** 单价 */
  unitPrice?: Maybe<Scalars['BigDecimal']>
  unitPriceType?: Maybe<Scalars['Int']>
  /** 单价单位名称 */
  unitPriceTypeName?: Maybe<Scalars['String']>
  /** 小单位数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  unitType?: Maybe<Scalars['Int']>
  /** 小单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
}

/** 已入库商品信息 */
export type InboundRecordPayload = {
  __typename?: 'InboundRecordPayload'
  /** 入库人员 */
  createUserName?: Maybe<Scalars['String']>
  /** 预估运费 */
  deliveryFee?: Maybe<Scalars['BigDecimal']>
  /** 入库单号 */
  inOrderCode?: Maybe<Scalars['String']>
  /** 已入库商品信息 */
  inboundRecordItems?: Maybe<Array<Maybe<InboundRecordItemPayload>>>
  /** 入库时间 */
  inboundTime?: Maybe<Scalars['Long']>
  /** 入库备注 */
  remark?: Maybe<Scalars['String']>
  /** 总价 */
  totalPrice?: Maybe<Scalars['BigDecimal']>
  userId?: Maybe<Scalars['Int']>
}

export enum IncomeOperation {
  Audit = 'AUDIT',
  Order = 'ORDER',
}

/** 销售收入状态(10:待提交 15:财务已驳回 20:待业务人员审核 30:待财务人员审核 40:已完成) */
export enum IncomeStatus {
  /**  业务人员驳回  */
  BusinessReject = 'BUSINESS_REJECT',
  /**  已取消  */
  Canceled = 'CANCELED',
  /**  财务已驳回  */
  FinancialReject = 'FINANCIAL_REJECT',
  /**  已完成  */
  Finished = 'FINISHED',
  /**  未指定的  */
  IncomeStatusUnspecified = 'IncomeStatus_UNSPECIFIED',
  /**  待内勤人员审核  */
  UnBackOfficeAudit = 'UN_BACK_OFFICE_AUDIT',
  /**  待业务人员审核  */
  UnBusinessAudit = 'UN_BUSINESS_AUDIT',
  /**  待财务人员审核  */
  UnFinancialAudit = 'UN_FINANCIAL_AUDIT',
  /**  待提交  */
  UnSubmit = 'UN_SUBMIT',
}

export type InsertMaterialReturnsInput = {
  commodityType: Scalars['Int']
  inOrderDescription?: InputMaybe<Scalars['String']>
  materialReturnsCommodityInput: Array<
    InputMaybe<MaterialReturnsCommodityInput>
  >
  taskId: Scalars['ID']
}

/** 生产计划中任务入参 */
export type InsertPlanTaskInput = {
  /** 商品信息 */
  commodities: Array<InputMaybe<CommodityInput>>
}

/** 库管情况 */
export type KeeperAnalysisPayload = {
  __typename?: 'KeeperAnalysisPayload'
  /** 入库操作总数 */
  inStockTotal?: Maybe<Scalars['Int']>
  /** 库管数量 */
  keeperQuantity?: Maybe<Scalars['Int']>
  /** 出库操作总数 */
  outStockTotal?: Maybe<Scalars['Int']>
}

/** 库管情况 */
export type KeeperConditionPayload = {
  __typename?: 'KeeperConditionPayload'
  /** 入库操作 */
  inStockOperate?: Maybe<CommodityOperatePayload>
  /** 入库操作总数 */
  inStockTotal?: Maybe<Scalars['Int']>
  /** 库管名称 */
  keeperName?: Maybe<Scalars['String']>
  /** 出库操作 */
  outStockOperate?: Maybe<CommodityOperatePayload>
  /** 出库操作总数 */
  outStockTotal?: Maybe<Scalars['Int']>
}

/** 组长情况 */
export type LeaderAnalysisPayload = {
  __typename?: 'LeaderAnalysisPayload'
  /** 已完成数量 */
  completedOrder?: Maybe<Scalars['BigDecimal']>
  /** 已完成任务 */
  completedTask?: Maybe<Scalars['Int']>
  /** 组长数量 */
  leaderQuantity?: Maybe<Scalars['Int']>
  /** 单量总数（已分配任务预估销量+备货生产数量） */
  orderQuantity?: Maybe<Scalars['BigDecimal']>
  /** 任务总数 */
  totalTask?: Maybe<Scalars['Int']>
  /** 未完成数量 */
  undoneOrder?: Maybe<Scalars['BigDecimal']>
  /** 未完成任务 */
  undoneTask?: Maybe<Scalars['Int']>
}

/** 组长情况 */
export type LeaderConditionPayload = {
  __typename?: 'LeaderConditionPayload'
  /** 已完成单量 */
  completedOrder?: Maybe<Scalars['BigDecimal']>
  /** 已完成任务 */
  completedTask?: Maybe<Scalars['Int']>
  /** 组长名称 */
  leaderName?: Maybe<Scalars['String']>
  /** 单量总数 */
  orderQuantity?: Maybe<Scalars['BigDecimal']>
  /** 任务总数 */
  totalTask?: Maybe<Scalars['Int']>
  /** 未完成单量 */
  undoneOrder?: Maybe<Scalars['BigDecimal']>
  /** 未完成任务 */
  undoneTask?: Maybe<Scalars['Int']>
}

/** 采购列表条件 */
export type ListAcquireFilter = {
  /** 订单状态（全部，10待提交，20待入库 ，30已完成，40已取消） */
  applyStatus?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** 商品类型 */
  commodityType?: InputMaybe<Scalars['Int']>
  /** 订单结束时间 */
  endTime?: InputMaybe<Scalars['Long']>
  /** 查询关键字（订单号/客户，模糊查询） */
  keyword?: InputMaybe<Scalars['String']>
  /** 订单起始时间 */
  startTime?: InputMaybe<Scalars['Long']>
  /** 供应商Id集合 */
  supplierIdList?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type ListAcquireLogInput = {
  applyId: Scalars['ID']
}

export type ListAcquireLogPayload = {
  __typename?: 'ListAcquireLogPayload'
  /** 创建时间 */
  CreateTime?: Maybe<Scalars['Long']>
  /** 创建人 */
  createUserName?: Maybe<Scalars['String']>
  /** 备注 */
  note?: Maybe<Scalars['String']>
  /** 操作类型 */
  type?: Maybe<Scalars['Int']>
}

export type ListBelongOrgInput = {
  /** 是否包含本组织 */
  containsSelfOrg: Scalars['Boolean']
  /**  标签id  */
  labelId?: InputMaybe<Scalars['Int']>
  /**  组织id  */
  orgId?: InputMaybe<Scalars['Int']>
}

export type ListBusinessInput = {
  /** 日期 */
  date: Scalars['Long']
}

export type ListCommodityCategoryInput = {
  /**
   *   FRUIT(1, "水果"),
   * FOOD(2, "食品"),
   * ASSIST(3, "辅料"),
   * BOX(4, "周转筐"),
   * RAW_MATERIAL(5, "原料"),
   * PRODUCT(6, "成品"),
   * HALF_PRODUCT(7, "半成品"),
   * DEFECTIVE(8, "次品");
   */
  commodityTypeId?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type ListCommodityInput = {
  /**  分类id */
  categoryId?: InputMaybe<Scalars['Int']>
  /**  商品名称模糊查询 */
  commodityName?: InputMaybe<Scalars['String']>
  /**  商品类型 果品 辅料 周转筐 食品 */
  commodityTypeId?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** 是否需要有bom */
  hasBom?: InputMaybe<Scalars['Boolean']>
  /** spu下sku的属性 v2.4.0 */
  skuProperties?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type ListCommodityPayLoad = {
  __typename?: 'ListCommodityPayLoad'
  /** 品类id */
  categoryId?: Maybe<Scalars['Int']>
  /** 品类名称 */
  categoryName?: Maybe<Scalars['String']>
  /** 商品id */
  commodityId?: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品类型 */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 产地id */
  originId?: Maybe<Scalars['Int']>
  /** 产地名称 */
  originName?: Maybe<Scalars['String']>
  /** sku数量 */
  skuQuantity?: Maybe<Scalars['Int']>
  /** 状态 */
  status?: Maybe<Scalars['Int']>
  /** 品种id */
  varietyId?: Maybe<Scalars['Int']>
  /** 品种名称 */
  varietyName?: Maybe<Scalars['String']>
}

export type ListCommoditySkuInput = {
  commodityId?: InputMaybe<Scalars['Int']>
  /**
   *   FRUIT(1, "水果"),
   * FOOD(2, "食品"),
   * ASSIST(3, "辅料"),
   * BOX(4, "周转筐"),
   * RAW_MATERIAL(5, "原料"),
   * PRODUCT(6, "成品"),
   * HALF_PRODUCT(7, "半成品"),
   * DEFECTIVE(8, "次品");
   */
  commodityTypeId?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  hasBom?: InputMaybe<Scalars['Boolean']>
}

export type ListCommoditySpecInput = {
  commodityId?: InputMaybe<Scalars['Int']>
}

export type ListCommodityStockBatchInput = {
  commodityTypeId?: InputMaybe<Scalars['Int']>
  /** 所属客户 */
  customerId?: InputMaybe<Scalars['Int']>
  /** 所属客户类型 */
  customerType?: InputMaybe<Scalars['Int']>
  /** 关键字查询 */
  keyword?: InputMaybe<Scalars['String']>
  /** 仓库id */
  warehouseId?: InputMaybe<Scalars['ID']>
}

export type ListCommodityUnitOptionInput = {
  commodityTypeId: Scalars['Int']
}

export type ListCustomerChannelByOrgInput = {
  belongOrgId: Scalars['Int']
}

export type ListCustomerChannelByOrgPayload = {
  __typename?: 'ListCustomerChannelByOrgPayload'
  customerChannelByOrgPayload?: Maybe<Array<Maybe<CustomerChannelByOrgPayload>>>
}

export type ListLocationPayload = {
  __typename?: 'ListLocationPayload'
  records?: Maybe<Array<LocationPayload>>
}

export type ListLogsInput = {
  flowId: Array<InputMaybe<Scalars['ID']>>
}

export type ListLogsPayload = {
  __typename?: 'ListLogsPayload'
  flowLog?: Maybe<Array<Maybe<FlowLog>>>
}

export type ListOriginalSaleCommodityBatchInput = {
  /** 商品spu id */
  commodityId: Scalars['Int']
  /** 商品类型 */
  commodityType: CommodityTypeEnum
  /** 所属仓库 */
  warehouseId: Scalars['ID']
}

export type ListOriginalSaleCommodityBatchPayload = CommoditySkuBase &
  CustomerBase &
  TotalTypeBase &
  UnitTypeBase & {
    __typename?: 'ListOriginalSaleCommodityBatchPayload'
    /** 批次号 */
    batchCode?: Maybe<Scalars['String']>
    /** 批次id */
    batchId?: Maybe<Scalars['ID']>
    /** 品类id */
    categoryId?: Maybe<Scalars['Int']>
    /** 品类名称 */
    categoryName?: Maybe<Scalars['String']>
    /** 商品spu id */
    commodityId?: Maybe<Scalars['Int']>
    /** 商品名称 */
    commodityName?: Maybe<Scalars['String']>
    /** commodity sku */
    commoditySku?: Maybe<CommoditySku>
    /** 商品类型 */
    commodityType?: Maybe<CommodityTypeEnum>
    /** 商品类型描述 */
    commodityTypeDesc?: Maybe<Scalars['String']>
    /** 批次数量 */
    countBatch?: Maybe<Scalars['Int']>
    /** 所属客户 */
    customer?: Maybe<Customer>
    /** 库存量 */
    stockQuantity?: Maybe<StockQuantity>
    /** 库存量大单位 */
    totalType?: Maybe<Unit>
    /** 库存量小单位 */
    unitType?: Maybe<Unit>
  }

export type ListOriginalSaleCommodityCategoryInput = {
  /** 商品类型 */
  commodityType: CommodityTypeEnum
  /** 所属仓库 */
  warehouseId: Scalars['ID']
}

export type ListOriginalSaleCommodityCategoryPayload = {
  __typename?: 'ListOriginalSaleCommodityCategoryPayload'
  /** 品类id */
  categoryId?: Maybe<Scalars['Int']>
  /** 品类名称 */
  categoryName?: Maybe<Scalars['String']>
}

export type ListOriginalSaleCommoditySpuInput = {
  /** 品类id */
  categoryId: Scalars['Int']
  /** 商品类型 */
  commodityType: CommodityTypeEnum
  /** 所属仓库 */
  warehouseId: Scalars['ID']
}

export type ListOriginalSaleCommoditySpuPayload = {
  __typename?: 'ListOriginalSaleCommoditySPUPayload'
  /** 商品spu id */
  commodityId?: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
}

export type ListPlanCommoditySkuInput = {
  planId: Scalars['ID']
}

export type ListQuickLabelInput = {
  /** 规格Id */
  categoryId: Scalars['Int']
  /**  10规格要求 30品质要求 */
  labelType: Scalars['Int']
}

export type ListQuickLabelPayload = {
  __typename?: 'ListQuickLabelPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<QuickLabelPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type ListRecommendLabelInput = {
  /** 规格Id */
  categoryId: Scalars['Int']
  /**  10规格要求 30品质要求 */
  labelType: Scalars['Int']
}

export type ListRecommendLabelPayload = {
  __typename?: 'ListRecommendLabelPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<RecommendLabelPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type ListSpuByCommodityNameInput = {
  /** 商品类型 */
  commodityType: CommodityTypeEnum
  /** 商品名称关键字查询 */
  keyword: Scalars['String']
  /** 所属仓库 */
  warehouseId: Scalars['ID']
}

/** 销售退货:选择商品Input */
export type ListSaleReturnCommoditiesInput = {
  /** 客户地址Id */
  customerDistributionId: Scalars['ID']
  /** 修改时需要传入入库订单单号 */
  inOrderId?: InputMaybe<Scalars['ID']>
  /** v2.8 从成品销售计划退货仅展示该销售计划单 */
  outOrderId?: InputMaybe<Scalars['ID']>
  /** 销售日期 */
  saleTime: Scalars['Long']
  /** 所属仓库Id */
  warehouseId: Scalars['ID']
}

export type ListSaleReturnCommoditiesItemPayload = CommoditySkuBase &
  TotalTypeBase &
  UnitTypeBase & {
    __typename?: 'ListSaleReturnCommoditiesItemPayload'
    /** 商品sku */
    commoditySku?: Maybe<CommoditySku>
    /** 出库总量 */
    outBoundTotalQuantity?: Maybe<Scalars['BigDecimal']>
    /** 已退货量 */
    saleReturnFinishedTotalQuantity?: Maybe<Scalars['BigDecimal']>
    /** 可退货量 */
    saleReturnableQuantity?: Maybe<Scalars['BigDecimal']>
    /** 大单位 */
    totalType?: Maybe<Unit>
    /** 小单位 */
    unitType?: Maybe<Unit>
  }

/** 成品销售退货:选择商品payload */
export type ListSaleReturnCommoditiesPayload = CustomerBase & {
  __typename?: 'ListSaleReturnCommoditiesPayload'
  /** 商品信息 */
  commodities?: Maybe<Array<Maybe<ListSaleReturnCommoditiesItemPayload>>>
  /** 销售客户地址 */
  customer?: Maybe<Customer>
  /** 退货单id（冗余此字段for data fetch，修改时才会有值） */
  inOrderId?: Maybe<Scalars['ID']>
  /** 销售单号 */
  outOrderCode?: Maybe<Scalars['String']>
  /** 销售单Id */
  outOrderId?: Maybe<Scalars['ID']>
  /** 销售时间 */
  saleTime?: Maybe<Scalars['Long']>
}

export type ListSearchedLocationPayload = {
  __typename?: 'ListSearchedLocationPayload'
  records?: Maybe<Array<SearchedLocationPayload>>
}

export type ListSkuStockInput = {
  commodityTypeId?: InputMaybe<Scalars['Int']>
  /** 所属客户 */
  customerId?: InputMaybe<Scalars['Int']>
  /** 所属客户类型 */
  customerType?: InputMaybe<Scalars['Int']>
  /** 关键字查询 */
  keyword?: InputMaybe<Scalars['String']>
  /** 仓库id */
  warehouseId?: InputMaybe<Scalars['ID']>
}

export type ListTaskAcquireMaterialCommodityInput = {
  outOrderType: Scalars['Int']
  taskId: Scalars['ID']
}

export type ListTaskInCommodityInput = {
  commodityType: Scalars['Int']
  inOrderType: Scalars['Int']
  taskId: Scalars['ID']
}

export type ListTransferBillInput = {
  /**  状态 */
  billStatus?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /**  商品类型 */
  commodityType?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /**  结束日期 */
  endTime?: InputMaybe<Scalars['Long']>
  /**  10 调拨出库 20 调拨入库 */
  flowType?: InputMaybe<Scalars['Int']>
  /**  开始日期 */
  startTime?: InputMaybe<Scalars['Long']>
}

export type ListTransferBillPayload = {
  __typename?: 'ListTransferBillPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  /** 采购订单列表 */
  records?: Maybe<Array<Maybe<TransferBillPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type ListTransferOrderInput = {
  /** 商品类型 */
  commodityType?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /**  调拨方向 10 分拣仓-分拣仓 20 批发到分拣仓 30 分拣仓到批发 */
  direction?: InputMaybe<Scalars['Int']>
  /** 订单结束时间 */
  endTime?: InputMaybe<Scalars['Long']>
  /** 调拨订单状态 */
  flowStatus?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** 查询关键字（调拨组织/商品名称，模糊查询） */
  keyword?: InputMaybe<Scalars['String']>
  /** 订单起始时间 */
  startTime?: InputMaybe<Scalars['Long']>
  /** 调拨类型（10 仓库间调拨，20 跨组织调拨，30库存退货，40库存借调） */
  transferType?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

/** 分页对象 */
export type ListTransferOrderPayload = {
  __typename?: 'ListTransferOrderPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<TransferOrderPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type ListTransferOrgListInput = {
  labelId: Scalars['Int']
  orgName?: InputMaybe<Scalars['String']>
}

export type ListTransferOrgListPayload = {
  __typename?: 'ListTransferOrgListPayload'
  /** 国家 1 中国 3 泰国 2 越南 */
  country?: Maybe<Scalars['Int']>
  /** 主键ID */
  id?: Maybe<Scalars['Int']>
  /** 负责人 */
  leadingId?: Maybe<Scalars['Int']>
  /**  操作人（必填） */
  operatorId?: Maybe<Scalars['Int']>
  /** 组织名称（必填） */
  orgName?: Maybe<Scalars['String']>
  /** 父级ID（必填） */
  parentId?: Maybe<Scalars['Int']>
  /** 父级名称（必填） */
  parentName?: Maybe<Scalars['String']>
  /** 备注 */
  remark?: Maybe<Scalars['String']>
  /** 租户id（必填） */
  tenantId?: Maybe<Scalars['Long']>
}

export type ListUserOrgInput = {
  /**  非必填 二次登录之后，可以不传 */
  tempToken?: InputMaybe<Scalars['String']>
}

export type LocationInput = {
  /** 父节点Id(根节点不用传) */
  id?: InputMaybe<Scalars['ID']>
  /** 类型 */
  locationType: LocationType
}

export type LocationPayload = {
  __typename?: 'LocationPayload'
  /** 首字母 */
  firstChar?: Maybe<Scalars['String']>
  /** 是否存在子节点 */
  hasChildren?: Maybe<Scalars['Boolean']>
  /** id */
  id?: Maybe<Scalars['ID']>
  /** 类型 */
  locationType?: Maybe<LocationType>
  /** 名称 */
  name?: Maybe<Scalars['String']>
}

export type LocationSearchInput = {
  /** 父节点ID */
  id?: InputMaybe<Scalars['ID']>
  /** 简称（关键字） */
  name?: InputMaybe<Scalars['String']>
}

export enum LocationType {
  /** 市 */
  City = 'CITY',
  /** 县 */
  County = 'COUNTY',
  /** 省 */
  Province = 'PROVINCE',
  /** 仅用于返回值。表示此版本中未知的值 */
  Unknown = 'UNKNOWN',
  /** 无法识别的值 */
  Unrecognized = 'UNRECOGNIZED',
  /** 未指定 */
  Unspecified = 'UNSPECIFIED',
}

export type LoginInput = {
  /**     password:String or sms code */
  checkCode: Scalars['String']
  username: Scalars['String']
}

export type LoginPayload = {
  __typename?: 'LoginPayload'
  token?: Maybe<Scalars['String']>
}

export type LoginPwdInput = {
  /**     password:String */
  pwd: Scalars['String']
  username: Scalars['String']
}

export type LoginPwdPayload = {
  __typename?: 'LoginPwdPayload'
  /** 是否需要修改密码 */
  needUpdatePassword?: Maybe<Scalars['Boolean']>
  token?: Maybe<Scalars['String']>
}

export type MaterialReturnsCommodityInput = {
  batchCode: Scalars['Int']
  commoditySkuId: Scalars['Int']
  totalQuantity: Scalars['Int']
  unitQuantity: Scalars['BigDecimal']
}

export type MobileRepeatPayload = {
  /** 用户名称 */
  mobile?: InputMaybe<Scalars['String']>
  /** 用户id */
  userId?: InputMaybe<Scalars['Int']>
}

export type ModifyOtherInOrderInput = {
  /** 商品信息 */
  commodities: Array<InputMaybe<CreateOtherOrderItemInput>>
  /** 客户Id */
  customerId?: InputMaybe<Scalars['Int']>
  /** 客户类型Id */
  customerTypeId?: InputMaybe<Scalars['Int']>
  /** 订单备注 */
  inOrderDescription?: InputMaybe<Scalars['String']>
  /** 入库订单Id */
  inOrderId: Scalars['ID']
  /** 供应商Id */
  supplierId?: InputMaybe<Scalars['Int']>
  /** 仓库名称 */
  warehouseId: Scalars['ID']
}

export type MonitorDetailInput = {
  taskId?: InputMaybe<Scalars['ID']>
}

export type MonitorPayload = {
  __typename?: 'MonitorPayload'
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品数量 */
  commodityNum?: Maybe<Scalars['Int']>
  /** 已生产数控 */
  completedNum?: Maybe<Scalars['BigDecimal']>
  /** 生产类型 */
  createType?: Maybe<Scalars['Int']>
  /** 生产类型名称 */
  createTypeName?: Maybe<Scalars['String']>
  /** 负责人 */
  createUserName?: Maybe<Scalars['String']>
  /** 仓库 */
  customerDistributionName?: Maybe<Scalars['String']>
  /** 配送地址名称 */
  customerName?: Maybe<Scalars['String']>
  /** 报损情况 */
  damageDetail?: Maybe<Array<Maybe<ProductionProcessPayload>>>
  /** 计划生产数量 */
  expectNum?: Maybe<Scalars['BigDecimal']>
  /** 入库情况 */
  inStockDetail?: Maybe<Array<Maybe<ProductionProcessPayload>>>
  /** 组长 */
  leaderName?: Maybe<Scalars['String']>
  /** 生产线 */
  line?: Maybe<Scalars['Int']>
  /** 正式工人数 */
  numberActual?: Maybe<Scalars['Int']>
  /** 领料情况 */
  pickDetail?: Maybe<Array<Maybe<ProductionProcessPayload>>>
  productionCommodity?: Maybe<Scalars['String']>
  productionCommodityPayload?: Maybe<Array<Maybe<ProductionCommodityPayload>>>
  /** 退料情况 */
  returnDetail?: Maybe<Array<Maybe<ProductionProcessPayload>>>
  /** 任务id */
  taskId?: Maybe<Scalars['ID']>
  /** 状态 */
  taskStatus?: Maybe<Scalars['Int']>
  /** 状态名称 */
  taskStatusName?: Maybe<Scalars['String']>
  /** 临时工人数 */
  tempWorkerQuantity?: Maybe<Scalars['Int']>
  /** 用时 */
  workTime?: Maybe<Scalars['Long']>
}

export type MonitorStatusInput = {
  /** 生产类型 */
  createType?: InputMaybe<Scalars['Int']>
  /** 客户Id */
  customerId?: InputMaybe<Scalars['Int']>
  /** 客户类型 */
  customerType?: InputMaybe<Scalars['Int']>
  /** 生产时间 */
  productionDate: Scalars['Long']
}

export type MonitorStatusPayload = {
  __typename?: 'MonitorStatusPayload'
  /** 已完成数量 */
  completed?: Maybe<Scalars['Int']>
  /** 生产中数量 */
  inProduction?: Maybe<Scalars['Int']>
  /** 待生产数量 */
  toBeProduced?: Maybe<Scalars['Int']>
}

export type MoreCommoditiesPageResult = {
  __typename?: 'MoreCommoditiesPageResult'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<TaskAcquireMaterialCommodityPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** 采购退货费用单: 审核通过 */
  acceptReturnsBill?: Maybe<Scalars['Boolean']>
  /** 配送单: 保存 */
  addDeliveryOrder?: Maybe<Scalars['ID']>
  /**     生产入库保存，返回新增id */
  addInOrder?: Maybe<Scalars['ID']>
  /**     领料申请保存，返回新增id */
  addOutOrder?: Maybe<Scalars['ID']>
  /** 采购退货单: 申请增加数量 */
  addStockQuantity?: Maybe<Scalars['Boolean']>
  /** 配送费用单: 审核配送费用 */
  auditDeliveryBillFee?: Maybe<Scalars['Boolean']>
  /** 商品转换: 审核订单 */
  auditOrder?: Maybe<Scalars['Boolean']>
  /** 销售收入单: 业务/内勤审核 */
  auditSaleIncomeOrder?: Maybe<Scalars['Boolean']>
  /** 开始任务 */
  beginTask?: Maybe<Scalars['Boolean']>
  /** 1.9 新增 登录用户绑定分拣仓接口 */
  bindOrg?: Maybe<BindOrgPayload>
  /** 采购: 取消采购订单 */
  cancelAcquire?: Maybe<Scalars['Boolean']>
  /** 配送单: 取消 */
  cancelDeliveryOrder?: Maybe<Scalars['Boolean']>
  /** 取消入库订单 */
  cancelInOrder?: Maybe<Scalars['ID']>
  /** 商品转换: 取消订单 */
  cancelOrder?: Maybe<Scalars['Boolean']>
  /** 原件销售:取消原件销售 */
  cancelOriginalSale?: Maybe<Scalars['Boolean']>
  /** 取消其他入库订单 */
  cancelOtherInOrder?: Maybe<Scalars['Boolean']>
  /** 取消报损订单 */
  cancelOutOrder?: Maybe<Scalars['Boolean']>
  /** 取消计划 */
  cancelPlan?: Maybe<Scalars['Boolean']>
  /** 取消采购订单 */
  cancelPurchase?: Maybe<Scalars['Boolean']>
  /** 采购退货单：取消订单 */
  cancelPurchaseReturnOrder?: Maybe<Scalars['Boolean']>
  /** 取消销售订单 */
  cancelSaleOrder?: Maybe<Scalars['Boolean']>
  /** 成品销售:取消生产 */
  cancelSaleProduction?: Maybe<CancelSaleProductionPayload>
  /** 成品销售退货:取消销售退货单 */
  cancelSaleReturn?: Maybe<Scalars['Boolean']>
  /** 生产计划:取消任务 */
  cancelTask?: Maybe<CancelTaskPayload>
  /** 废旧品销售取消订单 */
  cancelWasteSaleOrder?: Maybe<Scalars['ID']>
  /**  1.9 新增密码修改接口 */
  changePwd?: Maybe<ChangePwdPayload>
  changeSecondmentStatus?: Maybe<Scalars['ID']>
  /** 完成计划 */
  completePlan?: Maybe<Scalars['Boolean']>
  /**     完成任务 */
  completeTask?: Maybe<Scalars['Boolean']>
  /** 生产计划:取消生产 */
  confirmCancelProduction?: Maybe<ConfirmCancelProductionPayload>
  /** 入库审核: 确认入库 返回订单状态 */
  confirmInbound?: Maybe<Scalars['Long']>
  /** 确认出库 */
  confirmOutOrder?: Maybe<Scalars['Boolean']>
  /** 入库审核: 采购确定入库 */
  confirmPurchaseInBound?: Maybe<Scalars['Long']>
  /** 复制订单 */
  copySaleOrder?: Maybe<Scalars['ID']>
  /** 采购: 新增采购 返回inOrderId */
  createAcquire?: Maybe<Scalars['ID']>
  /** 商品转换: 创建商品转换订单 */
  createConvertOrder?: Maybe<CommandOrderResp>
  /** 客户: 创建客户 */
  createCustomer?: Maybe<Scalars['Int']>
  /**
   * 客户: 创建客户地址
   * @deprecated v2.4移除，使用大接口进行信息维护
   */
  createCustomerDistribution?: Maybe<Scalars['Int']>
  /** 新增报损单 */
  createDamageOutOrder?: Maybe<Scalars['ID']>
  /**    报损出库新增（区别于其他操作的报损出库） */
  createDamagedOrder?: Maybe<Scalars['ID']>
  /** v2.8 次品销售:新增 */
  createDefectiveSaleOrder?: Maybe<Scalars['ID']>
  /** 原件销售:新增原件销售 */
  createOriginalSale?: Maybe<OriginalCreatePayload>
  /** 新增其他入库 返回inOrderId */
  createOtherInOrder?: Maybe<Scalars['ID']>
  /** 新增其他出单 */
  createOtherOutOrder?: Maybe<Scalars['ID']>
  /** 采购退货单: 新增采购退货订单 */
  createPurchaseReturn?: Maybe<PurchaseReturnInsertPayload>
  /** 创建快捷标签，增量 */
  createQuickLabel?: Maybe<QuickLabelPayload>
  /** 新增销售 */
  createSaleOrder?: Maybe<Scalars['ID']>
  /** 成品销售退货:新增销售退货单 */
  createSaleReturn?: Maybe<SaleReturnInsertPayload>
  /** 供应商: 创建供应商 */
  createSupplier?: Maybe<Scalars['Int']>
  /** 新增调拨出库单 */
  createTransferOutOrder?: Maybe<Scalars['ID']>
  /** 创建废旧品销售 */
  createWasteSaleOrder?: Maybe<Scalars['ID']>
  /**
   * 客户: 删除客户
   * @deprecated v2.4移除，使用大接口进行信息维护
   */
  deleteCustomer?: Maybe<Scalars['Int']>
  /**
   * 客户: 删除客户地址
   * @deprecated v2.4移除，使用大接口进行信息维护
   */
  deleteCustomerDistribution?: Maybe<Scalars['Int']>
  /** 供应商: 删除供应商 */
  deleteSupplier?: Maybe<Scalars['Int']>
  deleteWarehouse?: Maybe<Scalars['ID']>
  /** 取消生产计划 */
  doCancelPlanStatus?: Maybe<Scalars['ID']>
  /** 删除生产计划任务 */
  doDeletePlanTask?: Maybe<Scalars['ID']>
  /** 生产计划:新增生产计划 */
  doInsertPlan?: Maybe<Scalars['ID']>
  /** 新增生产计划任务 */
  doInsertPlanTask?: Maybe<Scalars['ID']>
  /** 发布计划 */
  doPublishPlan?: Maybe<Scalars['ID']>
  /** 修改生产计划基础信息 */
  doUpdatePlanBaseInfo?: Maybe<Scalars['ID']>
  /** 修改生产计划 */
  doUpdatePlanInfo?: Maybe<Scalars['ID']>
  /** 修改生产计划任务信息 */
  doUpdatePlanTaskInfo?: Maybe<Scalars['ID']>
  finishCheck?: Maybe<CheckStockResultPayload>
  /** 入库审核: 完成入库 */
  finishInbound?: Maybe<Scalars['Boolean']>
  /** 完成出库 */
  finishOutOrder?: Maybe<Scalars['Boolean']>
  /** 入库审核: 采购完成入库 */
  finishPurchaseOrderInBound?: Maybe<Scalars['Boolean']>
  /**  任务忽略 */
  ignoreTaskSaleChange?: Maybe<Scalars['ID']>
  insertAppException?: Maybe<Scalars['Boolean']>
  /** 新增采购 返回inOrderId */
  insertPurchase?: Maybe<Scalars['ID']>
  insertSecondment?: Maybe<Scalars['ID']>
  insertSubsidiary?: Maybe<Scalars['Int']>
  insertWarehouse?: Maybe<Scalars['ID']>
  login?: Maybe<LoginPayload>
  /** 1.9 新增密码登录接口 */
  loginPwd?: Maybe<LoginPwdPayload>
  /** 修改入库订单 */
  modifyInOrder?: Maybe<Scalars['ID']>
  /** 修改其他入库订单 */
  modifyOtherInOrder?: Maybe<Scalars['Boolean']>
  /** 修改出库订单 */
  modifyOutOrder?: Maybe<Scalars['Boolean']>
  /** 修改采购订单 */
  modifyPurchase?: Maybe<Scalars['Boolean']>
  /** 库存调整:通过 */
  passStockAdjustment?: Maybe<Scalars['Boolean']>
  /**  暂停/继续生产任务 */
  pauseOrContinueTask?: Maybe<Scalars['Boolean']>
  /** 2.2 中途新增 token刷新,用原来即将过期的token续约token */
  refreshToken?: Maybe<Scalars['String']>
  /** 配送费用单: 驳回配送费用 */
  rejectDeliveryBillFee?: Maybe<Scalars['Boolean']>
  /** 成品销售:拒绝申请通知清空 */
  rejectNoticeEmptied?: Maybe<RejectNoticeEmptiedPayload>
  /** 商品转换: 驳回订单 */
  rejectOrder?: Maybe<Scalars['Boolean']>
  /** 驳回订单 */
  rejectOutOrderAudit?: Maybe<Scalars['Boolean']>
  /** 入库审核: 采购入库驳回订单 */
  rejectPurchaseOrderAudit?: Maybe<Scalars['Boolean']>
  /** 采购退货费用单: 驳回费用审核订单 */
  rejectReturnsBill?: Maybe<Scalars['Boolean']>
  /** 销售收入单: 驳回 */
  rejectSaleIncomeOrder?: Maybe<Scalars['Boolean']>
  /** 库存调整:驳回 */
  rejectStockAdjustment?: Maybe<Scalars['Boolean']>
  /** 入库审核: 驳回订单 */
  rejectedInOrderAudit?: Maybe<Scalars['Boolean']>
  /** 生产计划:拒绝申请 */
  requestRejection?: Maybe<RequestRejectionPayload>
  saveProductionConfig?: Maybe<Scalars['Int']>
  saveWorkerSalary?: Maybe<Scalars['Int']>
  sendMessage?: Maybe<Scalars['String']>
  sendSms?: Maybe<SendSmsPayload>
  /** 采购: 提交库管 */
  submitAcquire?: Maybe<Scalars['ID']>
  /** 配送费用单: 提交配送费用 */
  submitDeliveryBillFee?: Maybe<Scalars['Boolean']>
  /** 配送单: 提交配送单 */
  submitDeliveryOrder?: Maybe<Scalars['Boolean']>
  /** 入库订单提交库管 */
  submitInOrder?: Maybe<Scalars['ID']>
  /** 商品转换: 提交订单 */
  submitOrder?: Maybe<Scalars['Boolean']>
  /** 原件销售:提交原件销售 */
  submitOriginalSale?: Maybe<Scalars['Boolean']>
  /** 提交库管 */
  submitOtherInOrder?: Maybe<Scalars['ID']>
  /** 提交库管 */
  submitOutOrder?: Maybe<Scalars['Boolean']>
  /** 提交库管 */
  submitPurchase?: Maybe<Scalars['ID']>
  /** 采购退货单：提交订单 */
  submitPurchaseReturnOrder?: Maybe<Scalars['Boolean']>
  /** 采购退货费用单: 提交审核 */
  submitReturnsBill?: Maybe<Scalars['Boolean']>
  /** 销售收入单: 提交 */
  submitSaleIncomeOrder?: Maybe<Scalars['Boolean']>
  /** 提交生产 */
  submitSaleOrder?: Maybe<Scalars['Boolean']>
  /** 成品销售退货:提交销售退货单 */
  submitSaleReturn?: Maybe<Scalars['Boolean']>
  /** 废旧品销售提交(即完成当前废旧品销售单) */
  submitWasteSaleOrder?: Maybe<Scalars['ID']>
  syncUserDevicePlatform?: Maybe<UserDevicePayload>
  /** 任务退回 */
  taskReturned?: Maybe<Scalars['Boolean']>
  /** 撤销生产 */
  undoSaleOrder?: Maybe<Scalars['Boolean']>
  /** 采购: 修改采购订单 */
  updateAcquire?: Maybe<Scalars['Boolean']>
  /** 商品转换: 更新商品转换订单 */
  updateConvertOrder?: Maybe<CommandOrderResp>
  /** 采购费用: 修改费用单 */
  updateCostOrder?: Maybe<Scalars['ID']>
  /** 采购费用: 变更费用单状态 */
  updateCostStatus?: Maybe<Scalars['Boolean']>
  /** 客户: 更新客户 */
  updateCustomer?: Maybe<Scalars['Int']>
  /** 客户: 更新客户地址 */
  updateCustomerDistribution?: Maybe<Scalars['Int']>
  /** 修改报损订单 */
  updateDamageOutOrder?: Maybe<Scalars['Boolean']>
  /**    报损出库修改 */
  updateDamagedOrder?: Maybe<Scalars['Boolean']>
  /** v2.8 次品销售:修改金额 */
  updateDefectiveSaleIncomeAmount?: Maybe<Scalars['Boolean']>
  /** v2.8 次品销售:修改 */
  updateDefectiveSaleOrder?: Maybe<Scalars['ID']>
  /** 配送费用单: 修改配送费用 */
  updateDeliveryBillFee?: Maybe<Scalars['Boolean']>
  /** 配送单: 修改 */
  updateDeliveryOrder?: Maybe<Scalars['Boolean']>
  /** 采购退货费用单: 修改手工单号 */
  updateManualCode?: Maybe<Scalars['Boolean']>
  /** 原件销售:修改原件销售 */
  updateOriginalSale?: Maybe<Scalars['Boolean']>
  /** 原件销售:修改金额 */
  updateOriginalSaleIncomeAmount?: Maybe<Scalars['Boolean']>
  /** 修改其他出库单 */
  updateOtherOutOrder?: Maybe<Scalars['Boolean']>
  /** 成品销售:更新预估销量 */
  updatePlanQuantity?: Maybe<Scalars['Boolean']>
  /** 采购退回单: 修改退货单 */
  updatePurchaseReturn?: Maybe<Scalars['Boolean']>
  /** 采购退货费用单: 修改货款 */
  updateReturnsCommodityBill?: Maybe<Scalars['Boolean']>
  /** 采购退货费用单: 修改运杂 */
  updateReturnsOtherBill?: Maybe<Scalars['Boolean']>
  /** 修改销售订单 */
  updateSaleOrder?: Maybe<Scalars['Boolean']>
  /** 成品销售退货:修改销售退货单 */
  updateSaleReturn?: Maybe<Scalars['Boolean']>
  updateSecondment?: Maybe<Scalars['ID']>
  updateSpec?: Maybe<Scalars['Int']>
  updateSubsidiary?: Maybe<Scalars['Int']>
  updateSubsidiaryStatus?: Maybe<Scalars['Int']>
  /** 供应商: 更新供应商 */
  updateSupplier?: Maybe<Scalars['Int']>
  /** 调拨出库货款单修改 */
  updateTransferCommodityBill?: Maybe<Scalars['ID']>
  /** 调拨入库:修改入库仓库 */
  updateTransferInOrderWarehouse?: Maybe<Scalars['ID']>
  /** 调拨出库运杂款修改 */
  updateTransferOtherBill?: Maybe<Scalars['ID']>
  /** 修改调拨出库单 */
  updateTransferOutOrder?: Maybe<Scalars['ID']>
  /** 提交出库费用单审核 */
  updateTransferStat?: Maybe<Scalars['ID']>
  /** createUser(userInput:UserInput):Int */
  updateUser?: Maybe<Scalars['Int']>
  updateWarehouse?: Maybe<Scalars['ID']>
  /** 废旧品销售修改金额 */
  updateWasteSaleOrderPrice?: Maybe<Scalars['ID']>
}

export type MutationAcceptReturnsBillArgs = {
  updateReturnsBillStatusInput?: InputMaybe<UpdateReturnsBillStatusInput>
}

export type MutationAddDeliveryOrderArgs = {
  addDeliveryOrderInput?: InputMaybe<AddDeliveryOrderInput>
}

export type MutationAddInOrderArgs = {
  inOrder?: InputMaybe<InOrder>
}

export type MutationAddOutOrderArgs = {
  outOrder?: InputMaybe<OutOrder>
}

export type MutationAddStockQuantityArgs = {
  addStockQuantityInput?: InputMaybe<AddStockQuantityInput>
}

export type MutationAuditDeliveryBillFeeArgs = {
  updateDeliveryBillStatusInput?: InputMaybe<UpdateDeliveryBillStatusInput>
}

export type MutationAuditOrderArgs = {
  input?: InputMaybe<CommondOrderStatusInput>
}

export type MutationAuditSaleIncomeOrderArgs = {
  auditSaleIncomeOrderInput?: InputMaybe<AuditSaleIncomeOrderInput>
}

export type MutationBeginTaskArgs = {
  beginTask?: InputMaybe<BeginTask>
}

export type MutationBindOrgArgs = {
  bindOrgInput?: InputMaybe<BindOrgInput>
}

export type MutationCancelAcquireArgs = {
  cancelAcquireInput?: InputMaybe<CancelAcquireInput>
}

export type MutationCancelDeliveryOrderArgs = {
  cancelDeliveryOrderInput?: InputMaybe<CancelDeliveryOrderInput>
}

export type MutationCancelInOrderArgs = {
  cancelInOrderInput: CancelInOrderInput
}

export type MutationCancelOrderArgs = {
  input?: InputMaybe<CommondOrderStatusInput>
}

export type MutationCancelOriginalSaleArgs = {
  originalCancelInput?: InputMaybe<OriginalCancelInput>
}

export type MutationCancelOtherInOrderArgs = {
  cancelOtherInOrderInput?: InputMaybe<CancelOtherInOrderInput>
}

export type MutationCancelOutOrderArgs = {
  cancelOutOrderInput?: InputMaybe<CancelOutOrderInput>
}

export type MutationCancelPlanArgs = {
  planId?: InputMaybe<Scalars['ID']>
}

export type MutationCancelPurchaseArgs = {
  cancelpurchase?: InputMaybe<CancelInOrderInput>
}

export type MutationCancelPurchaseReturnOrderArgs = {
  cancelPurchaseReturnOrderInput?: InputMaybe<CancelPurchaseReturnOrderInput>
}

export type MutationCancelSaleOrderArgs = {
  cancelOutOrderInput?: InputMaybe<CancelOutOrderInput>
}

export type MutationCancelSaleProductionArgs = {
  cancelSaleProductionInput?: InputMaybe<CancelSaleProductionInput>
}

export type MutationCancelSaleReturnArgs = {
  saleReturnCancelInput?: InputMaybe<SaleReturnCancelInput>
}

export type MutationCancelTaskArgs = {
  cancelTaskInput?: InputMaybe<CancelTaskInput>
}

export type MutationCancelWasteSaleOrderArgs = {
  cancelWasteSaleOrderInput?: InputMaybe<CancelWasteSaleOrderInput>
}

export type MutationChangePwdArgs = {
  changePwdInput?: InputMaybe<ChangePwdInput>
}

export type MutationChangeSecondmentStatusArgs = {
  secondmentStatusInput?: InputMaybe<SecondmentStatusInput>
}

export type MutationCompletePlanArgs = {
  planId?: InputMaybe<Scalars['ID']>
}

export type MutationCompleteTaskArgs = {
  taskId: Scalars['ID']
}

export type MutationConfirmCancelProductionArgs = {
  confirmCancelProductionInput?: InputMaybe<ConfirmCancelProductionInput>
}

export type MutationConfirmInboundArgs = {
  confirmInput?: InputMaybe<ConfirmInput>
}

export type MutationConfirmOutOrderArgs = {
  confirmOutOrderInput?: InputMaybe<ConfirmOutOrderInput>
}

export type MutationConfirmPurchaseInBoundArgs = {
  purchaseConfirmInput?: InputMaybe<PurchaseConfirmInput>
}

export type MutationCopySaleOrderArgs = {
  saleOrderInput?: InputMaybe<SaleOrderInput>
}

export type MutationCreateAcquireArgs = {
  createAcquireInput?: InputMaybe<CreateAcquireInput>
}

export type MutationCreateConvertOrderArgs = {
  input?: InputMaybe<CreateConvertInput>
}

export type MutationCreateCustomerArgs = {
  customerInput?: InputMaybe<CustomerInput>
}

export type MutationCreateCustomerDistributionArgs = {
  customerDistributionInput?: InputMaybe<CustomerDistributionInput>
}

export type MutationCreateDamageOutOrderArgs = {
  createDamageOutOrderInput?: InputMaybe<CreateDamageOutOrderInput>
}

export type MutationCreateDamagedOrderArgs = {
  createDamagedOrderInput?: InputMaybe<CreateDamagedOrderInput>
}

export type MutationCreateDefectiveSaleOrderArgs = {
  createDefectiveSaleOrderInput?: InputMaybe<CreateDefectiveSaleOrderInput>
}

export type MutationCreateOriginalSaleArgs = {
  originalCreateInput?: InputMaybe<OriginalCreateInput>
}

export type MutationCreateOtherInOrderArgs = {
  createOtherInOrderInput?: InputMaybe<CreateOtherInOrderInput>
}

export type MutationCreateOtherOutOrderArgs = {
  createOtherOutOrderInput?: InputMaybe<CreateOtherOutOrderInput>
}

export type MutationCreatePurchaseReturnArgs = {
  purchaseReturnInsertInput?: InputMaybe<PurchaseReturnInsertInput>
}

export type MutationCreateQuickLabelArgs = {
  createQuickLabelInput?: InputMaybe<CreateQuickLabelInput>
}

export type MutationCreateSaleOrderArgs = {
  createSaleOrderInput?: InputMaybe<CreateSaleOrderInput>
}

export type MutationCreateSaleReturnArgs = {
  saleReturnInsertInput?: InputMaybe<SaleReturnInsertInput>
}

export type MutationCreateSupplierArgs = {
  supplierInput?: InputMaybe<SupplierInput>
}

export type MutationCreateTransferOutOrderArgs = {
  createTransferOrderInput?: InputMaybe<CreateTransferOrderInput>
}

export type MutationCreateWasteSaleOrderArgs = {
  createWasteSaleOrderInput?: InputMaybe<CreateWasteSaleOrderInput>
}

export type MutationDeleteCustomerArgs = {
  customerId?: InputMaybe<Scalars['Int']>
}

export type MutationDeleteCustomerDistributionArgs = {
  distributionId?: InputMaybe<Scalars['Int']>
}

export type MutationDeleteSupplierArgs = {
  supplierId?: InputMaybe<Scalars['Int']>
}

export type MutationDeleteWarehouseArgs = {
  warehouseId: Scalars['ID']
}

export type MutationDoCancelPlanStatusArgs = {
  cancelPlanInput?: InputMaybe<CancelPlanInput>
}

export type MutationDoDeletePlanTaskArgs = {
  taskId?: InputMaybe<Scalars['ID']>
}

export type MutationDoInsertPlanArgs = {
  planInfoInput?: InputMaybe<PlanInfoInput>
}

export type MutationDoInsertPlanTaskArgs = {
  taskInput?: InputMaybe<TaskInput>
}

export type MutationDoPublishPlanArgs = {
  planId?: InputMaybe<Scalars['ID']>
}

export type MutationDoUpdatePlanBaseInfoArgs = {
  planBaseInfoInput?: InputMaybe<PlanBaseInfoInput>
}

export type MutationDoUpdatePlanInfoArgs = {
  updateProductionPlanInput?: InputMaybe<UpdateProductionPlanInput>
}

export type MutationDoUpdatePlanTaskInfoArgs = {
  planTaskInfoInput?: InputMaybe<PlanTaskInfoInput>
}

export type MutationFinishCheckArgs = {
  checkInfoInput?: InputMaybe<CheckInfoInput>
}

export type MutationFinishInboundArgs = {
  inOrderId: Scalars['ID']
}

export type MutationFinishOutOrderArgs = {
  finishOutOrderInput?: InputMaybe<FinishOutOrderInput>
}

export type MutationFinishPurchaseOrderInBoundArgs = {
  inOrderId: Scalars['ID']
}

export type MutationIgnoreTaskSaleChangeArgs = {
  ignoreTaskSaleChangeInput?: InputMaybe<IgnoreTaskSaleChangeInput>
}

export type MutationInsertAppExceptionArgs = {
  appExceptionDTO?: InputMaybe<AppExceptionInput>
}

export type MutationInsertPurchaseArgs = {
  purchaseOrderInsert?: InputMaybe<PurchaseOrderInsertInput>
}

export type MutationInsertSecondmentArgs = {
  secondmentInput?: InputMaybe<SecondmentInput>
}

export type MutationInsertSubsidiaryArgs = {
  subsidiaryDetailInput?: InputMaybe<SubsidiaryDetailInput>
}

export type MutationInsertWarehouseArgs = {
  warehouseInput: WarehouseInput
}

export type MutationLoginArgs = {
  loginInput?: InputMaybe<LoginInput>
}

export type MutationLoginPwdArgs = {
  loginPwdInput?: InputMaybe<LoginPwdInput>
}

export type MutationModifyInOrderArgs = {
  inOrderUpdate: InOrderUpdate
}

export type MutationModifyOtherInOrderArgs = {
  modifyOtherInOrderInput?: InputMaybe<ModifyOtherInOrderInput>
}

export type MutationModifyOutOrderArgs = {
  outOrderUpdateInput: OutOrderUpdateInput
}

export type MutationModifyPurchaseArgs = {
  purchaseOrderUpdate?: InputMaybe<PurchaseOrderUpdateInput>
}

export type MutationPassStockAdjustmentArgs = {
  passStockAdjustmentInput?: InputMaybe<PassStockAdjustmentInput>
}

export type MutationPauseOrContinueTaskArgs = {
  pauseOrContinueTaskInput?: InputMaybe<PauseOrContinueTaskInput>
}

export type MutationRejectDeliveryBillFeeArgs = {
  updateDeliveryBillStatusInput?: InputMaybe<UpdateDeliveryBillStatusInput>
}

export type MutationRejectNoticeEmptiedArgs = {
  rejectNoticeEmptiedInput?: InputMaybe<RejectNoticeEmptiedInput>
}

export type MutationRejectOrderArgs = {
  input?: InputMaybe<CommondOrderStatusInput>
}

export type MutationRejectOutOrderAuditArgs = {
  rejectOutOrderInput?: InputMaybe<RejectOutOrderInput>
}

export type MutationRejectPurchaseOrderAuditArgs = {
  rejectedInput?: InputMaybe<RejectedInput>
}

export type MutationRejectReturnsBillArgs = {
  updateReturnsBillStatusInput?: InputMaybe<UpdateReturnsBillStatusInput>
}

export type MutationRejectSaleIncomeOrderArgs = {
  rejectSaleIncomeOrderInput?: InputMaybe<RejectSaleIncomeOrderInput>
}

export type MutationRejectStockAdjustmentArgs = {
  rejectStockAdjustmentInput?: InputMaybe<RejectStockAdjustmentInput>
}

export type MutationRejectedInOrderAuditArgs = {
  rejectedInput?: InputMaybe<RejectedInput>
}

export type MutationRequestRejectionArgs = {
  requestRejectionInput?: InputMaybe<RequestRejectionInput>
}

export type MutationSaveProductionConfigArgs = {
  saveConfigInput?: InputMaybe<SaveConfigInput>
}

export type MutationSaveWorkerSalaryArgs = {
  saveWorkerSalary?: InputMaybe<SaveSalaryInput>
}

export type MutationSendMessageArgs = {
  id?: InputMaybe<Scalars['Int']>
}

export type MutationSendSmsArgs = {
  sendSmsInput?: InputMaybe<SendSmsInput>
}

export type MutationSubmitAcquireArgs = {
  submitAcquireInput: SubmitAcquireInput
}

export type MutationSubmitDeliveryBillFeeArgs = {
  updateDeliveryBillStatusInput?: InputMaybe<UpdateDeliveryBillStatusInput>
}

export type MutationSubmitDeliveryOrderArgs = {
  submitDeliveryOrderInput?: InputMaybe<SubmitDeliveryOrderInput>
}

export type MutationSubmitInOrderArgs = {
  inOrderId: Scalars['ID']
}

export type MutationSubmitOrderArgs = {
  input?: InputMaybe<CommondOrderStatusInput>
}

export type MutationSubmitOriginalSaleArgs = {
  originalSubmitInput?: InputMaybe<OriginalSubmitInput>
}

export type MutationSubmitOtherInOrderArgs = {
  inOrderId: Scalars['ID']
}

export type MutationSubmitOutOrderArgs = {
  outOrderId: Scalars['ID']
}

export type MutationSubmitPurchaseArgs = {
  inOrderId: Scalars['ID']
}

export type MutationSubmitPurchaseReturnOrderArgs = {
  submitPurchaseReturnOrderInput?: InputMaybe<SubmitPurchaseReturnOrderInput>
}

export type MutationSubmitReturnsBillArgs = {
  updateReturnsBillStatusInput?: InputMaybe<UpdateReturnsBillStatusInput>
}

export type MutationSubmitSaleIncomeOrderArgs = {
  submitSaleIncomeOrderInput?: InputMaybe<SubmitSaleIncomeOrderInput>
}

export type MutationSubmitSaleOrderArgs = {
  outOrderId: Scalars['ID']
}

export type MutationSubmitSaleReturnArgs = {
  saleReturnSubmitInput?: InputMaybe<SaleReturnSubmitInput>
}

export type MutationSubmitWasteSaleOrderArgs = {
  submitWasteSaleOrderInput?: InputMaybe<SubmitWasteSaleOrderInput>
}

export type MutationSyncUserDevicePlatformArgs = {
  userDeviceInput?: InputMaybe<UserDeviceInput>
}

export type MutationTaskReturnedArgs = {
  taskId?: InputMaybe<Scalars['ID']>
}

export type MutationUndoSaleOrderArgs = {
  undoSaleOrderInput?: InputMaybe<UndoSaleOrderInput>
}

export type MutationUpdateAcquireArgs = {
  updateAcquireInput?: InputMaybe<UpdateAcquireInput>
}

export type MutationUpdateConvertOrderArgs = {
  input?: InputMaybe<UpdateConvertInput>
}

export type MutationUpdateCostOrderArgs = {
  updateCostOrderInput?: InputMaybe<UpdateCostOrderInput>
}

export type MutationUpdateCostStatusArgs = {
  updateCostStatusInput?: InputMaybe<UpdateCostStatusInput>
}

export type MutationUpdateCustomerArgs = {
  customerInput?: InputMaybe<CustomerInput>
}

export type MutationUpdateCustomerDistributionArgs = {
  customerDistributionInput?: InputMaybe<CustomerDistributionInput>
}

export type MutationUpdateDamageOutOrderArgs = {
  updateDamageOutOrderInput?: InputMaybe<UpdateDamageOutOrderInput>
}

export type MutationUpdateDamagedOrderArgs = {
  updateDamagedOrderInput?: InputMaybe<UpdateDamagedOrderInput>
}

export type MutationUpdateDefectiveSaleIncomeAmountArgs = {
  updateDefectiveSaleIncomeAmountInput?: InputMaybe<UpdateDefectiveSaleIncomeAmountInput>
}

export type MutationUpdateDefectiveSaleOrderArgs = {
  updateDefectiveSaleOrderInput?: InputMaybe<UpdateDefectiveSaleOrderInput>
}

export type MutationUpdateDeliveryBillFeeArgs = {
  updateDeliveryBillFeeInput?: InputMaybe<UpdateDeliveryBillFeeInput>
}

export type MutationUpdateDeliveryOrderArgs = {
  updateDeliveryOrderInput?: InputMaybe<UpdateDeliveryOrderInput>
}

export type MutationUpdateManualCodeArgs = {
  input?: InputMaybe<UpdateManualCodeInput>
}

export type MutationUpdateOriginalSaleArgs = {
  originalUpdateInput?: InputMaybe<OriginalUpdateInput>
}

export type MutationUpdateOriginalSaleIncomeAmountArgs = {
  updateSaleIncomeAmountInput?: InputMaybe<UpdateOriginalSaleAmountInput>
}

export type MutationUpdateOtherOutOrderArgs = {
  updateOtherOutOrderInput?: InputMaybe<UpdateOtherOutOrderInput>
}

export type MutationUpdatePlanQuantityArgs = {
  updatePlanQuantityInput?: InputMaybe<UpdatePlanQuantityInput>
}

export type MutationUpdatePurchaseReturnArgs = {
  updatePurchaseReturnInput?: InputMaybe<UpdatePurchaseReturnInput>
}

export type MutationUpdateReturnsCommodityBillArgs = {
  updateReturnsCommodityBillInput?: InputMaybe<UpdateReturnsCommodityBillInput>
}

export type MutationUpdateReturnsOtherBillArgs = {
  updateReturnsOtherBillInput?: InputMaybe<UpdateReturnsOtherBillInput>
}

export type MutationUpdateSaleOrderArgs = {
  updateSaleOrderInput?: InputMaybe<UpdateSaleOrderInput>
}

export type MutationUpdateSaleReturnArgs = {
  saleReturnUpdateInput?: InputMaybe<SaleReturnUpdateInput>
}

export type MutationUpdateSecondmentArgs = {
  secondmentInput?: InputMaybe<SecondmentInput>
}

export type MutationUpdateSpecArgs = {
  commodityModify?: InputMaybe<CommodityModifyInput>
}

export type MutationUpdateSubsidiaryArgs = {
  subsidiaryDetailInput?: InputMaybe<SubsidiaryDetailInput>
}

export type MutationUpdateSubsidiaryStatusArgs = {
  subsidiaryStatusInput?: InputMaybe<SubsidiaryStatusInput>
}

export type MutationUpdateSupplierArgs = {
  supplierInput?: InputMaybe<SupplierInput>
}

export type MutationUpdateTransferCommodityBillArgs = {
  updateFlowTransferCommodityBillInput?: InputMaybe<UpdateFlowTransferCommodityBillInput>
}

export type MutationUpdateTransferInOrderWarehouseArgs = {
  updateTransferInOrderWarehouseInput?: InputMaybe<UpdateTransferInOrderWarehouseInput>
}

export type MutationUpdateTransferOtherBillArgs = {
  updateFlowTransferOtherBillInput?: InputMaybe<UpdateFlowTransferOtherBillInput>
}

export type MutationUpdateTransferOutOrderArgs = {
  updateTransferCommodityInput?: InputMaybe<UpdateTransferCommodityInput>
}

export type MutationUpdateTransferStatArgs = {
  updateTransferOrderStatInput?: InputMaybe<UpdateTransferOrderStatInput>
}

export type MutationUpdateUserArgs = {
  userInput?: InputMaybe<UserInput>
}

export type MutationUpdateWarehouseArgs = {
  warehouseInput: WarehouseInput
}

export type MutationUpdateWasteSaleOrderPriceArgs = {
  updateWasteSaleOrderPriceInput?: InputMaybe<UpdateWasteSaleOrderPriceInput>
}

export type NoCommodityPayload = {
  __typename?: 'NoCommodityPayload'
  /** 商品品类名称 */
  commodityCategoryName?: Maybe<Scalars['String']>
  /** 商品id */
  commodityId?: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品产地名称 */
  commodityPlaceOriginName?: Maybe<Scalars['String']>
  /** 商品类型id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 商品品种名称 */
  commodityVarietyName?: Maybe<Scalars['String']>
}

export type Node = {
  id?: Maybe<Scalars['ID']>
}

export type Option = {
  __typename?: 'Option'
  label?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['Int']>
}

export type OrderIdInput = {
  orderId: Scalars['ID']
}

export enum OrderOperation {
  Audit = 'AUDIT',
  Cancel = 'CANCEL',
  Reject = 'REJECT',
  Submit = 'SUBMIT',
}

export enum OrderStatus {
  /** 已取消 */
  Canceled = 'CANCELED',
  /** 已完成 */
  Completed = 'COMPLETED',
  /** 待审核 */
  ToBeAudit = 'TO_BE_AUDIT',
  /** 待提交 */
  ToSubmit = 'TO_SUBMIT',
}

export type OrderStatusStatisticsInput = {
  /** 出库类型 */
  orderType?: InputMaybe<Scalars['Int']>
  /** 生产任务id */
  taskId: Scalars['ID']
  /** 任务类型id */
  taskTypeCode: Scalars['Int']
}

export type OrderStatusStatisticsPayload = {
  __typename?: 'OrderStatusStatisticsPayload'
  /** 已完成数量 */
  completedNum?: Maybe<Scalars['Int']>
  /** 进行中数量 */
  processingNum?: Maybe<Scalars['Int']>
  /** 待提交数量 */
  toSubmitNum?: Maybe<Scalars['Int']>
}

export type Org = {
  __typename?: 'Org'
  /** 组织id */
  orgId?: Maybe<Scalars['Int']>
  /** 组织名称 */
  orgName?: Maybe<Scalars['String']>
}

export type OrgBase = {
  /** 组织信息 */
  org?: Maybe<Org>
}

export type OrgTreePayload = {
  __typename?: 'OrgTreePayload'
  /** 子节点 */
  children?: Maybe<Array<Maybe<OrgTreePayload>>>
  /** 是否禁用 */
  disabled?: Maybe<Scalars['Boolean']>
  /** 组织id */
  key?: Maybe<Scalars['Int']>
  /** 组织名称 */
  name?: Maybe<Scalars['String']>
  /** 父节点Id */
  parentId?: Maybe<Scalars['Int']>
}

export type Organization = {
  __typename?: 'Organization'
  /** /** 组织所属系统 *\/ */
  appId?: Maybe<Scalars['Int']>
  /** /** 组织架构 *\/ */
  orgGroupId?: Maybe<Scalars['Int']>
  /** /** 组织架构名称 *\/ */
  orgGroupName?: Maybe<Scalars['String']>
  /** /** 组织ID *\/ */
  orgId?: Maybe<Scalars['Int']>
  /** /** 组织名称 *\/ */
  orgName?: Maybe<Scalars['String']>
  /** /** 用户ID *\/ */
  userId?: Maybe<Scalars['Int']>
}

export type OriginalCancelInput = {
  /** 取消描述 */
  outOrderDescription: Scalars['String']
  /** 原件销售Id */
  outOrderId: Scalars['ID']
}

export type OriginalCommodityInput = {
  /** 批次id */
  batchId: Scalars['ID']
  /** 销售单价 */
  salePrice: Scalars['BigDecimal']
  /** 单价计价单位 */
  salePriceType: Scalars['Int']
  /** 销售小计 */
  saleTotalPrice: Scalars['BigDecimal']
  /** skuId */
  skuId: Scalars['Int']
  /** 销售数量大单位数量 */
  totalQuantity?: InputMaybe<Scalars['BigDecimal']>
  /** 销售数量大单位 */
  totalType?: InputMaybe<Scalars['Int']>
  /** 销售数量小单位数量 */
  unitQuantity: Scalars['BigDecimal']
  /** 销售数量小单位 */
  unitType: Scalars['Int']
}

export type OriginalCreateInput = {
  /** v2.9 原件销售:所属组织 */
  belongOrgId: Scalars['Int']
  /** 商品信息 */
  commodityList: Array<InputMaybe<OriginalCommodityInput>>
  /** 商品类型 */
  commodityType: CommodityTypeEnum
  /** 销售客户Id */
  customerId: Scalars['ID']
  /** 销售客户type */
  customerType: Scalars['Int']
  /** 收款方式 */
  payMethod: PayMethodEnum
  /** 备注 */
  remark?: InputMaybe<Scalars['String']>
  /** 所属仓库 */
  warehouseId: Scalars['ID']
}

export type OriginalCreatePayload = {
  __typename?: 'OriginalCreatePayload'
  /** 销售单id */
  outOrderId?: Maybe<Scalars['ID']>
}

export type OriginalSaleAmountItemInput = {
  /** 销售单item id */
  outOrderItemId: Scalars['ID']
  /** 销售单价 */
  salePrice: Scalars['BigDecimal']
  /** 销售单价单位 */
  salePriceType: Scalars['Int']
  /** 销售小计 */
  saleTotalPrice: Scalars['BigDecimal']
}

export type OriginalSaleCommodityPayload = CommoditySkuBase &
  SalePriceTypeBase &
  TotalTypeBase &
  UnitTypeBase & {
    __typename?: 'OriginalSaleCommodityPayload'
    /** 商品批次code */
    batchCode?: Maybe<Scalars['String']>
    /** 商品批次id */
    batchId?: Maybe<Scalars['ID']>
    /** 商品sku */
    commoditySku?: Maybe<CommoditySku>
    /** 销售单item id */
    outOrderItemId?: Maybe<Scalars['ID']>
    /** 销售单价 */
    salePrice?: Maybe<Scalars['BigDecimal']>
    /** 销售单价单位 */
    salePriceType?: Maybe<Unit>
    /** 销售小计 */
    saleTotalPrice?: Maybe<Scalars['BigDecimal']>
    /** 库存量 */
    stockQuantity?: Maybe<StockQuantity>
    /** 销售数量大单位数量 */
    totalQuantity?: Maybe<Scalars['BigDecimal']>
    /** 销售数量大单位 */
    totalType?: Maybe<Unit>
    /** 销售数量小单位数量 */
    unitQuantity?: Maybe<Scalars['BigDecimal']>
    /** 销售数量小单位 */
    unitType?: Maybe<Unit>
  }

export type OriginalSaleOrderInput = {
  /** 原件销售Id */
  outOrderId: Scalars['ID']
}

export type OriginalSalePayload = BelongOrgBase &
  CreateUserBase &
  CustomerBase &
  WarehouseBase & {
    __typename?: 'OriginalSalePayload'
    /** v2.9 原件销售:所属组织 */
    belongOrg?: Maybe<Org>
    /** 商品信息 */
    commodityList?: Maybe<Array<Maybe<OriginalSaleCommodityPayload>>>
    /** 商品类别 */
    commodityType?: Maybe<CommodityTypeEnum>
    /** 商品类别描述 */
    commodityTypeDesc?: Maybe<Scalars['String']>
    /** 创建时间 */
    createTime?: Maybe<Scalars['Long']>
    /** 创建人 */
    createUser?: Maybe<User>
    /** 销售客户 */
    customer?: Maybe<Customer>
    /** 最新日志信息（已驳回、已取消原因） */
    latestDescription?: Maybe<Scalars['String']>
    /** 销售单号code */
    outOrderCode?: Maybe<Scalars['String']>
    /** 销售单号Id */
    outOrderId?: Maybe<Scalars['ID']>
    /** 单据状态 */
    outOrderStatus?: Maybe<OutOrderStatusEnum>
    /** 单据状态描述 */
    outOrderStatusDesc?: Maybe<Scalars['String']>
    /** 出库类型 */
    outOrderType?: Maybe<OutOrderTypeEnum>
    /** 出库类型描述 */
    outOrderTypeDesc?: Maybe<Scalars['String']>
    /** 支付方式 */
    payMethod?: Maybe<PayMethodEnum>
    /** 支付方式描述 */
    payMethodDesc?: Maybe<Scalars['String']>
    /** 备注信息 */
    remark?: Maybe<Scalars['String']>
    /** 收入单 */
    saleIncomeOrder?: Maybe<SaleIncomeOrderPayload>
    /** 销售总计 */
    saleTotalPrice?: Maybe<Scalars['BigDecimal']>
    /** 所属仓库 */
    warehouse?: Maybe<Warehouse>
  }

export type OriginalSaleStatusInput = {
  /** 创建时间 */
  createTime: TimeRange
}

export type OriginalSaleStatusPayload = {
  __typename?: 'OriginalSaleStatusPayload'
  /** 已驳回记录条数 */
  rejected?: Maybe<Scalars['Long']>
  /** 待出库记录条数 */
  toOutbound?: Maybe<Scalars['Long']>
  /** 待提交记录条数 */
  toSubmit?: Maybe<Scalars['Long']>
}

export type OriginalSubmitInput = {
  /** v2.9 原件销售:是否需要配送 1 是 99 否 */
  deliveryRequired?: InputMaybe<Scalars['Int']>
  /** 原件销售Id */
  outOrderId: Scalars['ID']
}

export type OriginalUpdateInput = {
  /** v2.9 原件销售:所属组织 */
  belongOrgId: Scalars['Int']
  /** 商品信息 */
  commodityList: Array<InputMaybe<OriginalCommodityInput>>
  /** 商品类型 */
  commodityType: CommodityTypeEnum
  /** 销售客户 */
  customerId: Scalars['ID']
  /** 销售客户type */
  customerType: Scalars['Int']
  /** 原件销售Id */
  outOrderId: Scalars['ID']
  /** 收款方式 */
  payMethod: PayMethodEnum
  /** 备注 */
  remark?: InputMaybe<Scalars['String']>
  /** 所属仓库 */
  warehouseId: Scalars['ID']
}

export type OtherInOrderItemPayload = {
  __typename?: 'OtherInOrderItemPayload'
  /** SPUId */
  commodityId?: Maybe<Scalars['Int']>
  /** SPU名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品skuID */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 商品规格选项Id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 规格选项 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 总价 */
  totalPrice?: Maybe<Scalars['BigDecimal']>
  /** 副单位数量 */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 副单位类型 */
  totalType?: Maybe<Scalars['Int']>
  /** 副单位类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /** 单价 */
  unitPrice?: Maybe<Scalars['BigDecimal']>
  /** 单价单位Id */
  unitPriceType?: Maybe<Scalars['Int']>
  /** 单价单位名称 */
  unitPriceTypeName?: Maybe<Scalars['String']>
  /** 小单位数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 小单位类型 */
  unitType?: Maybe<Scalars['Int']>
  /** 小单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
}

export type OtherInOrderPayload = {
  __typename?: 'OtherInOrderPayload'
  /** 商品信息 */
  commodities?: Maybe<Array<Maybe<OtherInOrderItemPayload>>>
  /** 商品类型Id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称（原料、辅料） */
  commodityTypeName?: Maybe<Scalars['String']>
  /**  创建人员Id */
  createBy?: Maybe<Scalars['Int']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 创建人员 */
  createUserName?: Maybe<Scalars['String']>
  /** 客户Id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户类型Id */
  customerTypeId?: Maybe<Scalars['Int']>
  /** 客户类型名称 */
  customerTypeName?: Maybe<Scalars['String']>
  /** 驳回（取消）原因(列表+详情) */
  errorDescription?: Maybe<Scalars['String']>
  /** 入库单号 */
  inOrderCode?: Maybe<Scalars['String']>
  /** 订单备注 */
  inOrderDescription?: Maybe<Scalars['String']>
  /** 入库订单Id */
  inOrderId?: Maybe<Scalars['ID']>
  /** 入库状态Id '入库订单状态，默认待提交，10：待提交、20：待入库、30：部分入库、40：已完成、50：已取消'; */
  inOrderStatus?: Maybe<Scalars['Int']>
  /** 入库状态 */
  inOrderStatusName?: Maybe<Scalars['String']>
  /** 入库类型 */
  inOrderTypeId?: Maybe<Scalars['Int']>
  /** 入库类型名称（原料其他入库、辅料其他入库） */
  inOrderTypeName?: Maybe<Scalars['String']>
  /** 供应商Id */
  supplierId?: Maybe<Scalars['Int']>
  /** 供应商名称 */
  supplierName?: Maybe<Scalars['String']>
  /** 总价合计 */
  totalPrice?: Maybe<Scalars['BigDecimal']>
  /** 仓库Id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

/** 领料申请保存提交参数 */
export type OutOrder = {
  /** 商品类型id */
  commodityTypeId: Scalars['Int']
  /** 备注信息 */
  outOrderDescription?: InputMaybe<Scalars['String']>
  outOrderItem: Array<InputMaybe<OutOrderItem>>
  /** 出库订单类型，10：原料领料、20：辅料领料 */
  outOrderType: Scalars['Int']
  /** 生产任务id */
  taskId: Scalars['ID']
}

export type OutOrderInput = {
  outOrderId: Scalars['ID']
  requestFlag?: InputMaybe<RequestFlag>
}

/** 领料申请明细 */
export type OutOrderItem = {
  /** 批次id */
  batchId?: InputMaybe<Scalars['ID']>
  /** 商品sku id */
  commoditySkuId: Scalars['Int']
  /** 总计类型数量（例：件） */
  totalQuantity?: InputMaybe<Scalars['BigDecimal']>
  /** 单位类型数量（例：kg，个） */
  unitQuantity: Scalars['BigDecimal']
}

export type OutOrderItemPayload = {
  __typename?: 'OutOrderItemPayload'
  /** 周转筐归属客户id */
  basketCustomerId?: Maybe<Scalars['Int']>
  /** 周转筐归属客户名称 */
  basketCustomerName?: Maybe<Scalars['String']>
  /** 周转筐数量 */
  basketQuantity?: Maybe<Scalars['Int']>
  batchCode?: Maybe<Scalars['String']>
  /** 1.5新增 */
  batchId?: Maybe<Scalars['ID']>
  belongCustomerId?: Maybe<Scalars['Int']>
  /** 所属客户 */
  belongCustomerName?: Maybe<Scalars['String']>
  /** bomid */
  commodityBomId?: Maybe<Scalars['Int']>
  /** 商品id */
  commodityId?: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品sku id */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 商品规格选项id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 商品状态 10 正常 20 取消中 30 已取消 40 已拒绝 */
  commodityStatus?: Maybe<CommodityStatus>
  /** 是否完成出库：1 是 99 否 */
  completeOutStock?: Maybe<Scalars['Int']>
  /** 转换关系 */
  conversion?: Maybe<Scalars['BigDecimal']>
  /** 创建人id */
  createBy?: Maybe<Scalars['Int']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 报损原因 */
  damageReason?: Maybe<Scalars['String']>
  /** 删除标识：1删除、99未删除，默认99 */
  deleted?: Maybe<Scalars['Int']>
  /** v1.7 已入库量副单位 */
  inBoundTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** v1.7 已入库量基本单位 */
  inBoundUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /**
   * 最大销量
   * @deprecated 当前字段已被弃用
   */
  maxQuantity?: Maybe<Scalars['Int']>
  /** 出库订单id */
  outOrderId?: Maybe<Scalars['ID']>
  /** 生产出库订单明细id */
  outOrderItemId?: Maybe<Scalars['ID']>
  outStockFinishTotalQuantity?: Maybe<Scalars['BigDecimal']>
  outStockFinishUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 次品销售照片 */
  photos?: Maybe<Array<Maybe<Scalars['String']>>>
  pickingTotalQuantity?: Maybe<Scalars['BigDecimal']>
  pickingUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 计划生产 */
  planQuantity?: Maybe<Scalars['Int']>
  /** 实际销量 */
  realQuantity?: Maybe<Scalars['BigDecimal']>
  /** v2.8 销售单号信息 */
  saleOrderInfo?: Maybe<SaleOrderInfoPayload>
  /** 销售单价 */
  salePrice?: Maybe<Scalars['BigDecimal']>
  /** 计价单位 */
  salePriceType?: Maybe<Scalars['Int']>
  /** 计价单位类型名称 */
  salePriceTypeName?: Maybe<Scalars['String']>
  saleTotalPrice?: Maybe<Scalars['BigDecimal']>
  /** sku文字描述，规格选项文字数组 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** v2.8 原件销售:库存量 */
  stockQuantity?: Maybe<StockQuantity>
  /** 单价小计 */
  stockTotalPrice?: Maybe<Scalars['BigDecimal']>
  /** 库存单价 */
  stockUnitPrice?: Maybe<Scalars['BigDecimal']>
  /** 库存单价的单位 */
  stockUnitPriceType?: Maybe<Scalars['Int']>
  /** 库存单价名称 */
  stockUnitPriceTypeName?: Maybe<Scalars['String']>
  /** 总计类型数量（例：件） */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 总计类型（例：件） */
  totalType?: Maybe<Scalars['Int']>
  /** 总计类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /** 单位类型数量（例：kg，个） */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  /** v2.8 次品销售:库存量 */
  unitStockQuantity?: Maybe<Scalars['BigDecimal']>
  /** 总价 */
  unitTotalPrice?: Maybe<Scalars['BigDecimal']>
  /** 单位类型（例：kg，个） */
  unitType?: Maybe<Scalars['Int']>
  /** 单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
  /** 更新人id */
  updateBy?: Maybe<Scalars['Int']>
  /** 更新时间 */
  updateTime?: Maybe<Scalars['Long']>
  /** 待出库库副单位数量 如 10 */
  waitTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 待出库库小单位的数量 如：10 */
  waitUnitQuantity?: Maybe<Scalars['BigDecimal']>
}

/** 包装要求信息 */
export type OutOrderItemRequestInput = {
  /** 包装要求商品id */
  commodityId?: InputMaybe<Scalars['Long']>
  /** 包装要求 */
  requestText?: InputMaybe<Scalars['String']>
}

/** 包装要求信息 */
export type OutOrderItemRequestPayload = {
  __typename?: 'OutOrderItemRequestPayload'
  /** 包装要求商品id */
  commodityId?: Maybe<Scalars['Long']>
  /** 包装要求 */
  requestText?: Maybe<Scalars['String']>
}

export type OutOrderItemUpdate = {
  /** 商品sku id */
  commoditySkuId: Scalars['Int']
  /** 总计类型数量（例：件） */
  totalQuantity?: InputMaybe<Scalars['BigDecimal']>
  /** 单位类型数量（例：kg，个） */
  unitQuantity: Scalars['BigDecimal']
}

export type OutOrderItemsInput = {
  /** 是否完成出库 1 是 99 否 */
  completeOutStock?: InputMaybe<Scalars['Int']>
  outOrderId: Scalars['ID']
}

export type OutOrderLogPayLoad = {
  __typename?: 'OutOrderLogPayLoad'
  /** * 创建用户id */
  createBy?: Maybe<Scalars['Int']>
  /** * 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** * 建用户名称 */
  createUserName?: Maybe<Scalars['String']>
  /** * 出库订单id */
  outOrderId?: Maybe<Scalars['ID']>
  /** * 出库订单操作备注 */
  outOrderLogDescription?: Maybe<Scalars['String']>
  /**   出库订单日志id */
  outOrderLogId?: Maybe<Scalars['Int']>
  /** * 出库订单操作类型，10：创建时间、20：提交时间、30：出库时间、40：取消时间 */
  outOrderLogType?: Maybe<Scalars['Int']>
  /** * 出库订单操作枚举文字 */
  outOrderLogTypeText?: Maybe<Scalars['String']>
}

export type OutOrderLogsInput = {
  outOrderId: Scalars['ID']
}

/** 分页对象 */
export type OutOrderPagePayload = {
  __typename?: 'OutOrderPagePayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  /** 销售订单列表 */
  records?: Maybe<Array<Maybe<OutOrderPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export enum OutOrderPayModeEnum {
  Alipay = 'ALIPAY',
  Card = 'CARD',
  None = 'NONE',
  Transfer = 'TRANSFER',
  Wechat = 'WECHAT',
}

export type OutOrderPayload = BelongOrgBase &
  TargetBelongOrgBase & {
    __typename?: 'OutOrderPayload'
    /** v2.9 次品销售, 采购退货, 原件销售:所属组织 */
    belongOrg?: Maybe<Org>
    /** 商品信息 */
    commodityList?: Maybe<Array<Maybe<OutOrderItemPayload>>>
    /** 商品类型Id */
    commodityTypeId?: Maybe<Scalars['Int']>
    /** 商品类型名称 */
    commodityTypeName?: Maybe<Scalars['String']>
    /** 创建时间 */
    createTime?: Maybe<Scalars['Long']>
    /** 创建人员 */
    createUserName?: Maybe<Scalars['String']>
    /** 联系电话 */
    createUserPhone?: Maybe<Scalars['String']>
    /** 客户配送地址id */
    customerDistributionId?: Maybe<Scalars['Int']>
    /** 客户配送地址 */
    customerDistributionName?: Maybe<Scalars['String']>
    /** 客户Id */
    customerId?: Maybe<Scalars['Int']>
    /** 客户名称 */
    customerName?: Maybe<Scalars['String']>
    /** 客户类型 10 无客户 20 客户分组 30 指定客户 */
    customerType?: Maybe<Scalars['Int']>
    /**  客户类型翻译 */
    customerTypeName?: Maybe<Scalars['String']>
    /**
     * 运费 v2.0
     * @deprecated 当前字段已被弃用
     */
    deliveryFee?: Maybe<Scalars['BigDecimal']>
    /** 驳回（取消）原因(列表+详情) */
    errorDescription?: Maybe<Scalars['String']>
    /** 入库订单编号 */
    inOrderCode?: Maybe<Scalars['String']>
    /** 入库订单Id */
    inOrderId?: Maybe<Scalars['ID']>
    organizationId?: Maybe<Scalars['Int']>
    organizationName?: Maybe<Scalars['String']>
    /** 出库单号 */
    outOrderCode?: Maybe<Scalars['String']>
    /** 订单备注 */
    outOrderDescription?: Maybe<Scalars['String']>
    /** 出库订单Id */
    outOrderId?: Maybe<Scalars['ID']>
    /** 出库状态Id 出库订单状态，默认待提交，10：待提交、20：待出库、30：部分出库、40：已完成、50：已取消 */
    outOrderStatus?: Maybe<Scalars['Int']>
    /** 订单状态翻译 */
    outOrderStatusName?: Maybe<Scalars['String']>
    /** 出库类型出库订单类型，10：原料领料、20辅料领料 30 成品销售 */
    outOrderType?: Maybe<Scalars['Int']>
    /** 出库类型名称 */
    outOrderTypeName?: Maybe<Scalars['String']>
    /** v2.8 次品销售:付款方式 */
    payMethod?: Maybe<PayMethodEnum>
    /** v2.8 次品销售:付款方式描述 */
    payMethodDesc?: Maybe<Scalars['String']>
    /** v2.8 次品销售:销售收入单 */
    saleIncomeOrder?: Maybe<SaleIncomeOrderPayload>
    /** v2.8 销售单号信息 */
    saleOrderInfo?: Maybe<SaleOrderInfoPayload>
    /** 销售时间 */
    saleTime?: Maybe<Scalars['Long']>
    /** 供应商Id */
    supplierId?: Maybe<Scalars['Int']>
    /** 供应商名字 */
    supplierName?: Maybe<Scalars['String']>
    /**  调入所属组织  */
    targetBelongOrg?: Maybe<Org>
    /** 任务单号 */
    taskCode?: Maybe<Scalars['String']>
    /** 商品信息总价 */
    totalPrice?: Maybe<Scalars['BigDecimal']>
    /** 调拨id */
    transferId?: Maybe<Scalars['ID']>
    /** 调入组织id */
    transferOrganizationId?: Maybe<Scalars['Int']>
    /** 调入组织名称 */
    transferOrganizationName?: Maybe<Scalars['String']>
    /** 调拨类型 10:分拣仓-分拣仓 20:分拣仓-批发 */
    transferType?: Maybe<Scalars['Int']>
    /** 创建用户 */
    userId?: Maybe<Scalars['Int']>
    /** 仓库Id */
    warehouseId?: Maybe<Scalars['ID']>
    /** 仓库名称 */
    warehouseName?: Maybe<Scalars['String']>
  }

/** 出库记录列表条件（出库记录） */
export type OutOrderRecordCondition = {
  /** 订单号/客户（模糊查询） */
  keyword?: InputMaybe<Scalars['String']>
  /** 出库时间 */
  outOrderTime?: InputMaybe<Scalars['String']>
  /** 出库类型Id */
  outOrderTypeId?: InputMaybe<Scalars['Int']>
  /** 仓库Id */
  warehouseId?: InputMaybe<Scalars['ID']>
}

export type OutOrderRecordDetail = {
  __typename?: 'OutOrderRecordDetail'
  /** 商品信息 */
  commodities?: Maybe<Array<Maybe<OutOrderRecordItemDetail>>>
  /** 商品类型Id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 客户分组Id */
  customerGroupId?: Maybe<Scalars['Int']>
  /** 客户分组名称 */
  customerGroupName?: Maybe<Scalars['String']>
  /** 客户Id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户类型Id */
  customerTypeId?: Maybe<Scalars['Int']>
  /** 客户类型名称 */
  customerTypeName?: Maybe<Scalars['String']>
  /** 出库单号 */
  outOrderCode?: Maybe<Scalars['String']>
  /** 订单备注 */
  outOrderDescription?: Maybe<Scalars['String']>
  /** 出库订单Id */
  outOrderId?: Maybe<Scalars['ID']>
  /** 出库类型 */
  outOrderTypeId?: Maybe<Scalars['Int']>
  /** 出库类型名称 */
  outOrderTypeName?: Maybe<Scalars['String']>
  /** 出库时间 */
  putInTime?: Maybe<Scalars['String']>
  /** 出库人员 */
  putInUserName?: Maybe<Scalars['String']>
  /** 提交时间 */
  submitTime?: Maybe<Scalars['String']>
  /** 提交人员 */
  submitUserName?: Maybe<Scalars['String']>
  /** 任务单号 */
  taskCode?: Maybe<Scalars['String']>
  /** 任务Id */
  taskId?: Maybe<Scalars['ID']>
  /** 总计 */
  totalPrice?: Maybe<Scalars['String']>
  /** 仓库Id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

export type OutOrderRecordItemDetail = {
  __typename?: 'OutOrderRecordItemDetail'
  /** 周转筐归属名称 */
  basketCustomerName?: Maybe<Scalars['String']>
  /** 周转筐数量 */
  basketQuantity?: Maybe<Scalars['Int']>
  /** 批次号等信息 */
  batchItem?: Maybe<Array<Maybe<BatchItemPayload>>>
  /** SPUId */
  commodityId?: Maybe<Scalars['Int']>
  /** SPU名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品skuID */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 商品规格选项Id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 规格选项 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 副单位类型 */
  totalType?: Maybe<Scalars['Int']>
  /** 副单位类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /** 单价 */
  unitPrice?: Maybe<Scalars['String']>
  /** 单价单位 */
  unitPriceTypeName?: Maybe<Scalars['String']>
  /** 小计 */
  unitTotalPrice?: Maybe<Scalars['String']>
  /** 小单位类型 */
  unitType?: Maybe<Scalars['Int']>
  /** 小单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
}

export type OutOrderRecordList = {
  __typename?: 'OutOrderRecordList'
  /** 商品类型Id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称（原料、辅料） */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 出库时间 */
  createTime?: Maybe<Scalars['String']>
  /** 出库人员 */
  createUserName?: Maybe<Scalars['String']>
  /** 客户分组Id */
  customerGroupId?: Maybe<Scalars['Int']>
  /** 客户分组名称 */
  customerGroupName?: Maybe<Scalars['String']>
  /** 客户Id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户类型Id */
  customerTypeId?: Maybe<Scalars['Int']>
  /** 客户类型名称 */
  customerTypeName?: Maybe<Scalars['String']>
  /** 出库单号 */
  outOrderCode?: Maybe<Scalars['String']>
  /** 出库订单Id */
  outOrderId?: Maybe<Scalars['ID']>
  /** 出库类型 */
  outOrderTypeId?: Maybe<Scalars['Int']>
  /** 出库类型名称（原料采购、辅料采购） */
  outOrderTypeName?: Maybe<Scalars['String']>
  /** 仓库Id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

export type OutOrderStatusCountPayload = {
  __typename?: 'OutOrderStatusCountPayload'
  /** 已完成 */
  finished?: Maybe<Scalars['Int']>
  /** 生产中 */
  producing?: Maybe<Scalars['Int']>
  /** v2.8 次品销售:新增已驳回状态 */
  rejected?: Maybe<Scalars['Int']>
  /** 待审核 */
  toAudit?: Maybe<Scalars['Int']>
  /** 待出库 */
  toOutbound?: Maybe<Scalars['Int']>
  /** 待提交 */
  toSubmit?: Maybe<Scalars['Int']>
}

export enum OutOrderStatusEnum {
  /** 50 已取消 */
  Canceled = 'CANCELED',
  /** 40 已完成 */
  Finished = 'FINISHED',
  /** 16 生产中 */
  InProduction = 'IN_PRODUCTION',
  /** 30 部分出库 */
  Outing = 'OUTING',
  /** 未指定 */
  OutOrderStatusUnspecified = 'OUT_ORDER_STATUS_UNSPECIFIED',
  /** 60 已驳回 */
  Rejected = 'REJECTED',
  /** 15 待审核 */
  ToBeAudit = 'TO_BE_AUDIT',
  /** 20 待出库 */
  ToBeOut = 'TO_BE_OUT',
  /** 35 待接收 */
  ToBeReceived = 'TO_BE_RECEIVED',
  /** 10 待提交 */
  ToBeSubmit = 'TO_BE_SUBMIT',
}

export type OutOrderTypeCountPayload = {
  __typename?: 'OutOrderTypeCountPayload'
  /** 周转狂 */
  basket?: Maybe<Scalars['Long']>
  /** 次品出库记录条数 */
  defectiveProduct?: Maybe<Scalars['Long']>
  /** 成品销售记录条数 */
  finishedProduct?: Maybe<Scalars['Long']>
  /** 原料领料记录条数 */
  rawMaterial?: Maybe<Scalars['Long']>
  /** 退货品 */
  refund?: Maybe<Scalars['Long']>
  /** 半成品出库记录条数 */
  semiFinishedProduct?: Maybe<Scalars['Long']>
  /** 辅料领料记录条数 */
  subMaterial?: Maybe<Scalars['Long']>
}

/** 出库类型 */
export enum OutOrderTypeEnum {
  /** 盘点出库 */
  CheckAcquisition = 'CHECK_ACQUISITION',
  /** 报损出库 */
  DamagedAcquisition = 'DAMAGED_ACQUISITION',
  /** 生产报损 */
  DamagedProduction = 'DAMAGED_PRODUCTION',
  /** 原料报损 */
  DamagedRawMaterial = 'DAMAGED_RAW_MATERIAL',
  /** 退货品报损 */
  DamagedReturnedGoods = 'DAMAGED_RETURNED_GOODS',
  /** 半成品报损 */
  DamagedSemiFinishedProduct = 'DAMAGED_SEMI_FINISHED_PRODUCT',
  /** 未指定 */
  Default = 'DEFAULT',
  /** 次品销售 */
  DefectiveSale = 'DEFECTIVE_SALE',
  /** 成品销售 */
  FinishedProductAcquisition = 'FINISHED_PRODUCT_ACQUISITION',
  /** 原件销售 */
  OriginalSale = 'ORIGINAL_SALE',
  /** 其他出库 */
  OtherAcquisition = 'OTHER_ACQUISITION',
  /** 采购退货 */
  PurchaseReturn = 'PURCHASE_RETURN',
  /** 原料领料 */
  RawMaterialAcquisition = 'RAW_MATERIAL_ACQUISITION',
  /** 退货品领料 */
  ReturnedGoodsOut = 'RETURNED_GOODS_OUT',
  /** 废旧品销售 */
  SaleOfWasteProducts = 'SALE_OF_WASTE_PRODUCTS',
  /** 半成品领料 */
  SemiFinishedProductAcquisition = 'SEMI_FINISHED_PRODUCT_ACQUISITION',
  /** 辅料领料 */
  SupplementaryMaterialAcquisition = 'SUPPLEMENTARY_MATERIAL_ACQUISITION',
  /** 调拨出库 */
  TransferOutApply = 'TRANSFER_OUT_APPLY',
}

export type OutOrderUpdateInput = {
  /** 商品类型 */
  commodityTypeId: Scalars['Int']
  /** 备注信息 */
  outOrderDescription?: InputMaybe<Scalars['String']>
  /** 出库订单id */
  outOrderId: Scalars['ID']
  /** 商品信息 */
  outOrderItem: Array<InputMaybe<OutOrderItemUpdate>>
  /** 出库类型 */
  outOrderType: Scalars['Int']
}

export type OutOrdersCommoditiesInput = {
  /** 商品信息 */
  commodities: Array<InputMaybe<SaleReturnItemInput>>
  /** 销售单Id */
  outOrderId: Scalars['ID']
}

export type OutStockFinishedQuantity = QuantityInterface & {
  __typename?: 'OutStockFinishedQuantity'
  /** 实际完成出库总计类型数量 */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 实际完成出库单位类型数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
}

export type OutStockOrderDetailInput = {
  /**  系统ID */
  appId?: InputMaybe<Scalars['Int']>
  /**  组织ID */
  orgId?: InputMaybe<Scalars['Int']>
  /**  入库单ID */
  outOrderId: Scalars['ID']
  /**  操作人可用仓库集合 */
  userWarehouseIdList?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

/**  出库类型 */
export enum OutStockOrderType {
  /**  盘点出库 */
  CheckAcquisition = 'CHECK_ACQUISITION',
  /**  报损出库 */
  DamagedAcquisition = 'DAMAGED_ACQUISITION',
  /**  生产报损 */
  DamagedProduction = 'DAMAGED_PRODUCTION',
  /**  原料报损 */
  DamagedRawMaterial = 'DAMAGED_RAW_MATERIAL',
  /**  退货品报损 */
  DamagedReturnedGoods = 'DAMAGED_RETURNED_GOODS',
  /**  半成品报损 */
  DamagedSemiFinishedProduct = 'DAMAGED_SEMI_FINISHED_PRODUCT',
  /**  次品销售 */
  DefectiveSale = 'DEFECTIVE_SALE',
  /** 成品销售 */
  FinishedProductAcquisition = 'FINISHED_PRODUCT_ACQUISITION',
  /**  其他出库 */
  OtherAcquisition = 'OTHER_ACQUISITION',
  /**  采购退货 */
  PurchaseReturn = 'PURCHASE_RETURN',
  /**  原料领料 */
  RawMaterialAcquisition = 'RAW_MATERIAL_ACQUISITION',
  /**  退货品领料 */
  ReturnedGoodsOut = 'RETURNED_GOODS_OUT',
  /**  半成品领料 */
  SemiFinishedProductAcquisition = 'SEMI_FINISHED_PRODUCT_ACQUISITION',
  /**  辅料领料 */
  SupplementaryMaterialAcquisition = 'SUPPLEMENTARY_MATERIAL_ACQUISITION',
  /**  调拨出库 */
  TransferOutApply = 'TRANSFER_OUT_APPLY',
}

export type OutStockOrderWaitCommodityPayload = {
  __typename?: 'OutStockOrderWaitCommodityPayload'
  /**  商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /**  skuID */
  commoditySkuId?: Maybe<Scalars['Int']>
  /**  商品规格选项 */
  commoditySpecOptionName?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 商品换算关系 */
  conversion?: Maybe<Scalars['BigDecimal']>
  /**  小计金额 */
  subtotalAmount?: Maybe<Scalars['BigDecimal']>
  /**  总计数量 */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  /**  总计类型 */
  totalType?: Maybe<Scalars['Int']>
  /**  总计类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /**  单价 */
  unitPrice?: Maybe<Scalars['BigDecimal']>
  /**  单价类型 */
  unitPriceType?: Maybe<Scalars['Int']>
  /**  单价类型名称 */
  unitPriceTypeName?: Maybe<Scalars['String']>
  /**  单位数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  /**  单位类型 */
  unitType?: Maybe<Scalars['Int']>
  /**  单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
}

export type OutStockRecordCommodityPayload = {
  __typename?: 'OutStockRecordCommodityPayload'
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /**  skuID */
  commoditySkuId?: Maybe<Scalars['Int']>
  /**  商品规格选项 */
  commoditySpecOptionName?: Maybe<Array<Maybe<Scalars['String']>>>
  /**  批次号 */
  stockBatchCode?: Maybe<Scalars['String']>
  /**  批次ID */
  stockBatchId?: Maybe<Scalars['ID']>
  /**  小计金额 */
  subtotalAmount?: Maybe<Scalars['BigDecimal']>
  /**  总计数量 */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  /**  总计类型 */
  totalType?: Maybe<Scalars['Int']>
  /**  总计类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /**  单价 */
  unitPrice?: Maybe<Scalars['BigDecimal']>
  /**  单价类型 */
  unitPriceType?: Maybe<Scalars['Int']>
  /**  单价类型名称 */
  unitPriceTypeName?: Maybe<Scalars['String']>
  /**  单位数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  /**  单位类型 */
  unitType?: Maybe<Scalars['Int']>
  /**  单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
}

export type OutStockRecordInput = {
  outStockRecordId: Scalars['ID']
}

/** 出库记录聚合 */
export type OutStockRecordItemAggPayload = {
  __typename?: 'OutStockRecordItemAggPayload'
  basketCustomerName?: Maybe<Scalars['String']>
  basketQuantity?: Maybe<Scalars['BigDecimal']>
  commodityName?: Maybe<Scalars['String']>
  /** 单位换算 */
  conversion?: Maybe<Scalars['BigDecimal']>
  items?: Maybe<Array<Maybe<OutStockRecordItemPayload>>>
  outStockCode?: Maybe<Scalars['String']>
  salePrice?: Maybe<Scalars['BigDecimal']>
  salePriceTypeName?: Maybe<Scalars['String']>
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  totalPrice?: Maybe<Scalars['BigDecimal']>
  totalType?: Maybe<Scalars['Int']>
  totalTypeName?: Maybe<Scalars['String']>
  unitType?: Maybe<Scalars['Int']>
  unitTypeName?: Maybe<Scalars['String']>
}

export type OutStockRecordItemPayload = {
  __typename?: 'OutStockRecordItemPayload'
  basketCustomerId?: Maybe<Scalars['Int']>
  basketCustomerName?: Maybe<Scalars['String']>
  basketQuantity?: Maybe<Scalars['Int']>
  belongCustomerId?: Maybe<Scalars['Int']>
  belongCustomerName?: Maybe<Scalars['String']>
  belongWarehouseId?: Maybe<Scalars['ID']>
  belongWarehouseName?: Maybe<Scalars['String']>
  commodityId?: Maybe<Scalars['Int']>
  commodityName?: Maybe<Scalars['String']>
  commoditySkuId?: Maybe<Scalars['Int']>
  outOrderCode?: Maybe<Scalars['String']>
  outOrderId?: Maybe<Scalars['ID']>
  outOrderType?: Maybe<Scalars['Int']>
  outStockRecordId?: Maybe<Scalars['ID']>
  outStockRecordItemId?: Maybe<Scalars['Long']>
  salePrice?: Maybe<Scalars['BigDecimal']>
  salePriceType?: Maybe<Scalars['Int']>
  salePriceTypeName?: Maybe<Scalars['String']>
  skuSpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  stockBatchCode?: Maybe<Scalars['String']>
  /** 单价小计 */
  stockTotalPrice?: Maybe<Scalars['BigDecimal']>
  /** 库存单价 */
  stockUnitPrice?: Maybe<Scalars['BigDecimal']>
  /** 库存单价的单位 */
  stockUnitPriceType?: Maybe<Scalars['Int']>
  /** 库存单价名称 */
  stockUnitPriceTypeName?: Maybe<Scalars['String']>
  taskId?: Maybe<Scalars['ID']>
  totalPrice?: Maybe<Scalars['BigDecimal']>
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  totalType?: Maybe<Scalars['Int']>
  totalTypeName?: Maybe<Scalars['String']>
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  unitType?: Maybe<Scalars['Int']>
  unitTypeName?: Maybe<Scalars['String']>
}

export type OutStockRecordListPayload = {
  __typename?: 'OutStockRecordListPayload'
  outStockOrderWaitCommodities?: Maybe<
    Array<Maybe<OutStockOrderWaitCommodityPayload>>
  >
  outStockRecords?: Maybe<Array<Maybe<OutStockRecordsPayload>>>
}

export type OutStockRecordLogPayload = {
  __typename?: 'OutStockRecordLogPayload'
  /** 入库时间 */
  putInTime?: Maybe<Scalars['Long']>
  /** 入库人员 */
  putInUserName?: Maybe<Scalars['String']>
  /** 提交时间 */
  submitTime?: Maybe<Scalars['Long']>
  /** 提交人员 */
  submitUserName?: Maybe<Scalars['String']>
}

export type OutStockRecordPayload = {
  __typename?: 'OutStockRecordPayload'
  commodityTypeId?: Maybe<Scalars['Int']>
  commodityTypeName?: Maybe<Scalars['String']>
  createBy?: Maybe<Scalars['Int']>
  createTime?: Maybe<Scalars['Long']>
  createUserName?: Maybe<Scalars['String']>
  customerId?: Maybe<Scalars['Int']>
  customerName?: Maybe<Scalars['String']>
  customerType?: Maybe<Scalars['Int']>
  customerTypeName?: Maybe<Scalars['String']>
  deliveryFee?: Maybe<Scalars['BigDecimal']>
  items?: Maybe<Array<Maybe<OutStockRecordItemAggPayload>>>
  organizationId?: Maybe<Scalars['Int']>
  organizationName?: Maybe<Scalars['String']>
  outOrderCode?: Maybe<Scalars['String']>
  outOrderId?: Maybe<Scalars['ID']>
  outOrderItemId?: Maybe<Scalars['ID']>
  outOrderType?: Maybe<Scalars['Int']>
  outOrderTypeName?: Maybe<Scalars['String']>
  outStockCode?: Maybe<Scalars['String']>
  outStockRecordId?: Maybe<Scalars['ID']>
  remark?: Maybe<Scalars['String']>
  taskCode?: Maybe<Scalars['String']>
  totalPrice?: Maybe<Scalars['BigDecimal']>
  warehouseId?: Maybe<Scalars['ID']>
  warehouseName?: Maybe<Scalars['String']>
}

export type OutStockRecordQueryInput = {
  outOrderId: Scalars['ID']
}

export type OutStockRecordQueryPayload = {
  __typename?: 'OutStockRecordQueryPayload'
  commodityTypeId?: Maybe<Scalars['Int']>
  commodityTypeName?: Maybe<Scalars['String']>
  createBy?: Maybe<Scalars['Int']>
  createTime?: Maybe<Scalars['Long']>
  createUserName?: Maybe<Scalars['String']>
  customerId?: Maybe<Scalars['Int']>
  customerName?: Maybe<Scalars['String']>
  customerType?: Maybe<Scalars['Int']>
  customerTypeName?: Maybe<Scalars['String']>
  deliveryFee?: Maybe<Scalars['BigDecimal']>
  items?: Maybe<Array<Maybe<OutStockRecordItemPayload>>>
  organizationId?: Maybe<Scalars['Int']>
  organizationName?: Maybe<Scalars['String']>
  outOrderCode?: Maybe<Scalars['String']>
  outOrderId?: Maybe<Scalars['ID']>
  outOrderItemId?: Maybe<Scalars['ID']>
  outOrderType?: Maybe<Scalars['Int']>
  outOrderTypeName?: Maybe<Scalars['String']>
  outStockCode?: Maybe<Scalars['String']>
  outStockRecordId?: Maybe<Scalars['ID']>
  remark?: Maybe<Scalars['String']>
  taskCode?: Maybe<Scalars['String']>
  totalPrice?: Maybe<Scalars['BigDecimal']>
  warehouseId?: Maybe<Scalars['ID']>
  warehouseName?: Maybe<Scalars['String']>
}

export type OutStockRecordsInput = {
  outOrderId?: InputMaybe<Scalars['ID']>
}

/**  入库记录信息 */
export type OutStockRecordsPayload = {
  __typename?: 'OutStockRecordsPayload'
  /**  所属客户 */
  belongId?: Maybe<Scalars['Int']>
  /**  所属客户名称 */
  belongName?: Maybe<Scalars['String']>
  /**  客户类型 */
  belongType?: Maybe<Scalars['Int']>
  /**  入库商品信息 */
  commoditiesList?: Maybe<Array<Maybe<OutStockRecordCommodityPayload>>>
  /**  商品类型 */
  commodityType?: Maybe<Scalars['Int']>
  /**  商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /**  备注 */
  note?: Maybe<Scalars['String']>
  /**  出库记录编码 */
  recordCode?: Maybe<Scalars['String']>
  /**  出库记录ID */
  recordId?: Maybe<Scalars['Long']>
  /**  总计金额 */
  totalAmount?: Maybe<Scalars['BigDecimal']>
  /**  商品总价格 */
  totalCommodityAmount?: Maybe<Scalars['BigDecimal']>
  /**  操作人 */
  userId?: Maybe<Scalars['Int']>
  /** 用户名 */
  userName?: Maybe<Scalars['String']>
  /**  所属仓库 */
  warehouseId?: Maybe<Scalars['ID']>
  /**  所属仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

export type OutboundBatchItem = {
  __typename?: 'OutboundBatchItem'
  /** 批次号 */
  batchCode?: Maybe<Scalars['String']>
  /** 副单位数量 */
  totalQuantity?: Maybe<Scalars['String']>
  /** 小单位数量 */
  unitQuantity?: Maybe<Scalars['String']>
}

export type OutboundList = {
  __typename?: 'OutboundList'
  outboundRecordList?: Maybe<Array<Maybe<OutboundRecord>>>
  toBeOutBoundList?: Maybe<Array<Maybe<ToBeOutbount>>>
}

/** 已出库商品信息 */
export type OutboundRecord = {
  __typename?: 'OutboundRecord'
  /** 出库人员 */
  createUserName?: Maybe<Scalars['String']>
  /** 出库单号 */
  outOrderCode?: Maybe<Scalars['String']>
  /** 已出库商品信息 */
  outboundRecordItems?: Maybe<Array<Maybe<OutboundRecordItem>>>
  /** 出库时间 */
  outboundTime?: Maybe<Scalars['String']>
  /** 总价 */
  totalPrice?: Maybe<Scalars['String']>
}

export type OutboundRecordItem = {
  __typename?: 'OutboundRecordItem'
  /** 周转筐归属 */
  basketCustomerName?: Maybe<Scalars['String']>
  /** 周转筐数量 */
  basketQuantity?: Maybe<Scalars['String']>
  /** SPU名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 批次等信息 */
  outboundBatchItem?: Maybe<Array<Maybe<OutboundBatchItem>>>
  /** 规格选项 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 总价 */
  totalPrice?: Maybe<Scalars['String']>
  /** 副单位类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /** 单价 */
  unitPrice?: Maybe<Scalars['String']>
  /** 单价单位名称 */
  unitPriceTypeName?: Maybe<Scalars['String']>
  /** 小单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
}

export type OverviewDetailInput = {
  planId: Scalars['ID']
}

export type OverviewDetailPayload = {
  __typename?: 'OverviewDetailPayload'
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品规格 */
  commoditySpecOptionName?: Maybe<Scalars['String']>
  /** 商品类型 */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 已生产数量 */
  completedNum?: Maybe<Scalars['BigDecimal']>
  /** 计划生产 */
  expectNum?: Maybe<Scalars['BigDecimal']>
  /** 期望销售数量 */
  expectSaleNum?: Maybe<Scalars['BigDecimal']>
  /** 组长 */
  leaderName?: Maybe<Scalars['String']>
  /** 生产线 */
  line?: Maybe<Scalars['String']>
  /** 出库数量 */
  outStockNum?: Maybe<Scalars['BigDecimal']>
  totalTypeName?: Maybe<Scalars['String']>
}

export type OverviewPayload = {
  __typename?: 'OverviewPayload'
  /** 已生产总数 */
  completedNumSum?: Maybe<Scalars['BigDecimal']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 生产类型id */
  createType?: Maybe<Scalars['Int']>
  /** 生产类型 */
  createTypeName?: Maybe<Scalars['String']>
  /** 提交人 */
  createUserName?: Maybe<Scalars['String']>
  /** 配送地址名称 */
  customerDistributionName?: Maybe<Scalars['String']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 计划生产总数 */
  expectNumSum?: Maybe<Scalars['BigDecimal']>
  /** 期望销售数量总数 */
  expectSaleNumSum?: Maybe<Scalars['BigDecimal']>
  /** 出库数量总数 */
  outStockNumSum?: Maybe<Scalars['BigDecimal']>
  overviewDetail?: Maybe<Array<Maybe<OverviewDetailPayload>>>
  /** 计划id */
  planId?: Maybe<Scalars['ID']>
  /** 状态id */
  planStatusId?: Maybe<Scalars['Int']>
  /** 状态名称 */
  planStatusName?: Maybe<Scalars['String']>
  /** 商品品类数量 */
  productionTypeNum?: Maybe<Scalars['Int']>
}

export type OverviewStatusInput = {
  /** 渠道 */
  channelId?: InputMaybe<Scalars['Int']>
  /** 类型 */
  createType?: InputMaybe<Scalars['Int']>
  /** 时间 */
  planDate: Scalars['Long']
}

export type OverviewStatusPayload = {
  __typename?: 'OverviewStatusPayload'
  /** 已完成数量 */
  completedNum?: Maybe<Scalars['Int']>
  /** 待审核数量 */
  pendingReviewNum?: Maybe<Scalars['Int']>
  /** 生产中数量 */
  processingNum?: Maybe<Scalars['Int']>
}

export type Page = {
  pageCurrent?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type PageCommodityConvertInput = {
  /** 转换类型 */
  convertType?: InputMaybe<Array<InputMaybe<ConvertType>>>
  /** 结束时间 */
  endDate?: InputMaybe<Scalars['Long']>
  /** 关键词查询 */
  keyword?: InputMaybe<Scalars['String']>
  /** 开始时间 */
  startDate?: InputMaybe<Scalars['Long']>
  /** 状态 */
  status?: InputMaybe<OrderStatus>
}

export type PageCommodityConvertPayload = {
  __typename?: 'PageCommodityConvertPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<CommodityConvertPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

/** 商品管理列表 */
export type PageCommodityInput = {
  /** 品类id */
  categoryId?: InputMaybe<Scalars['Int']>
  /** spu名称 */
  commodityName?: InputMaybe<Scalars['String']>
  /** 商品类型 */
  typeId?: InputMaybe<Scalars['Int']>
}

export type PageCommodityPayload = {
  __typename?: 'PageCommodityPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<ListCommodityPayLoad>>>
  totalRecords?: Maybe<Scalars['Long']>
}

/** 分页查询商品库存 */
export type PageCommodityStockBatchInput = {
  /** 商品类型 */
  commodityTypeId?: InputMaybe<Scalars['Int']>
  /** 所属客户 */
  customerId?: InputMaybe<Scalars['Int']>
  /** 所属客户类型 */
  customerType?: InputMaybe<Scalars['Int']>
  /** 关键字查询 */
  keyword?: InputMaybe<Scalars['String']>
  /** 仓库id */
  warehouseId?: InputMaybe<Scalars['ID']>
}

export type PageCommodityStockBatchPayload = {
  __typename?: 'PageCommodityStockBatchPayload'
  pageCurrent: Scalars['Int']
  pageSize: Scalars['Int']
  records?: Maybe<Array<CommodityStockBatchPayload>>
  totalRecords: Scalars['Long']
}

export type PageCostOrderInput = {
  /** 货品类型 */
  commodityType?: InputMaybe<Scalars['Int']>
  /** 结束时间 */
  endDate?: InputMaybe<Scalars['Long']>
  /** 查询类型 10采购费用单 20采购费用单审核列表 */
  queryType?: InputMaybe<Scalars['Int']>
  /** 开始时间 */
  startDate?: InputMaybe<Scalars['Long']>
  /**
   * 订单状态 10待确认 20待提交 30待业务审核 40 待财务审核 45财务已确认 50已完成 60已取消
   * 待提交：20
   * 已提交：30，40，45，50
   * 待审核：30
   * 已审核：40,45,50
   */
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type PageCostOrderPayload = {
  __typename?: 'PageCostOrderPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<CostOrderPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PageDamageOutOrderInput = {
  /** 商品类型 */
  commodityTypeId?: InputMaybe<Scalars['Int']>
  /** 订单结束时间 */
  endTime?: InputMaybe<Scalars['Long']>
  /** 关键字搜索 */
  keyword?: InputMaybe<Scalars['String']>
  /** 出库订单状态 */
  outOrderStatus?: InputMaybe<Scalars['Int']>
  /** 订单起始时间 */
  startTime?: InputMaybe<Scalars['Long']>
}

export type PageDamagedOrderInput = {
  /** 出库订单状态 */
  outOrderStatus?: InputMaybe<Scalars['Int']>
  /** 出库类型 */
  outOrderType: Array<InputMaybe<Scalars['Int']>>
  /** 任务id */
  taskId: Scalars['ID']
}

export type PageDefectiveSaleOrderInput = {
  /** 查询关键字（订单号/客户，模糊查询） */
  keyword?: InputMaybe<Scalars['String']>
  /** 订单状态（10待提交，15待审核 ，20：待出库，部分出库，40：已完成，50：已取消，60已驳回） */
  orderStatus?: InputMaybe<Scalars['Int']>
  /** 销售时间 */
  saleTime?: InputMaybe<Scalars['Long']>
}

export type PageDeliveryBillInput = {
  /** 配送客户ID */
  customerId?: InputMaybe<Scalars['Int']>
  /** 配送客户类型 */
  customerType?: InputMaybe<Scalars['Int']>
  /** 结束时间 */
  endTime?: InputMaybe<Scalars['Long']>
  /** 开始时间 */
  startTime?: InputMaybe<Scalars['Long']>
  /** 状态 */
  status: PageDeliveryBillStatusEnum
}

export type PageDeliveryBillPayload = {
  __typename?: 'PageDeliveryBillPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<DeliveryBillPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export enum PageDeliveryBillStatusEnum {
  /** 已审核 */
  Audited = 'AUDITED',
  /** 已提交 */
  Submitted = 'SUBMITTED',
  /** 待审核 */
  UnAudit = 'UN_AUDIT',
  /** 待提交 */
  UnSubmit = 'UN_SUBMIT',
}

/** 分页对象 */
export type PageDeliveryOrderPayload = {
  __typename?: 'PageDeliveryOrderPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<DeliveryOrderDetailPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PageInAuditRecordPayload = {
  __typename?: 'PageInAuditRecordPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<AuditInOrderPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PageInOrderRecordPayload = {
  __typename?: 'PageInOrderRecordPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<InOrderRecordListPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PageList = {
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<Node>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PageMonitorInput = {
  /** 生产类型 */
  createType?: InputMaybe<Scalars['Int']>
  /** 客户id */
  customerId?: InputMaybe<Scalars['Int']>
  /** 客户类型 */
  customerType?: InputMaybe<Scalars['Int']>
  /** 生产时间 */
  productionDate?: InputMaybe<Scalars['Long']>
  /** 任务状态 10待生产 20生产中 30已完成 */
  productionStatus?: InputMaybe<Scalars['Int']>
}

export type PageMonitorResult = {
  __typename?: 'PageMonitorResult'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<MonitorPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PageMoreCommoditiesInput = {
  /** 模糊查询 */
  commodityName?: InputMaybe<Scalars['String']>
  commodityTypeId: Scalars['Int']
  customerId: Scalars['Int']
  customerType: Scalars['Int']
  warehouseId: Scalars['ID']
}

/**
 * 商品管理列表
 * 未添加商品列表
 */
export type PageNoCommodityInput = {
  /** 品类 */
  categoryId?: InputMaybe<Scalars['Int']>
  /** 产地 */
  originId?: InputMaybe<Scalars['Int']>
  /** 商品类型 */
  typeId?: InputMaybe<Scalars['Int']>
  /** 品种 */
  varietyId?: InputMaybe<Scalars['Int']>
}

export type PageNoCommodityPayload = {
  __typename?: 'PageNoCommodityPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<NoCommodityPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PageOriginalSaleInput = {
  /** 查询关键字（单据编号/商品名称，模糊查询） */
  keyword?: InputMaybe<Scalars['String']>
  /** 单据状态 */
  outOrderStatus?: InputMaybe<OutOrderStatusEnum>
  /** 查询时间条件 */
  timeRange?: InputMaybe<TimeRange>
}

export type PageOriginalSalePayload = {
  __typename?: 'PageOriginalSalePayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  /** 记录列表 */
  records?: Maybe<Array<Maybe<OriginalSalePayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

/** 其他入库列表条件 */
export type PageOtherInOrderInput = {
  commodityTypeId?: InputMaybe<Scalars['Int']>
  /** 订单结束时间 */
  endTime?: InputMaybe<Scalars['Long']>
  /** 入库类型 */
  inOrderTypeId?: InputMaybe<Scalars['Int']>
  /** 查询关键字（订单号/客户，模糊查询） */
  keyword?: InputMaybe<Scalars['String']>
  /** 订单状态（10全部，20待提交，30待入库 ，40已完成，50已取消） */
  orderStatus?: InputMaybe<Scalars['Int']>
  /** 订单起始时间 */
  startTime?: InputMaybe<Scalars['Long']>
}

/** 分页对象 */
export type PageOtherInOrderPayload = {
  __typename?: 'PageOtherInOrderPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  /** 其他入库订单列表 */
  records?: Maybe<Array<Maybe<OtherInOrderPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PageOtherOutOrderInput = {
  /** 商品类型 */
  commodityTypeId?: InputMaybe<Scalars['Int']>
  /** 创建时间 */
  createTime?: InputMaybe<Scalars['Long']>
  /** 订单结束时间 */
  endTime?: InputMaybe<Scalars['Long']>
  /** 关键字搜索 */
  keyword?: InputMaybe<Scalars['String']>
  /** 出库订单状态(全部：null, 待提交：10， 待出库：20， 已完成：40， 已取消：50) */
  outOrderStatus?: InputMaybe<Scalars['Int']>
  /** 出库类型 */
  outOrderTypeId?: InputMaybe<Scalars['Int']>
  /** 订单起始时间 */
  startTime?: InputMaybe<Scalars['Long']>
}

export type PageOutAuditRecord = {
  __typename?: 'PageOutAuditRecord'
  auditOutOrders?: Maybe<Array<Maybe<AuditOutOrder>>>
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PageOutOrderInput = {
  /**     商品类型， */
  commodityTypeId?: InputMaybe<Scalars['Int']>
  /** 创建时间 */
  createTime?: InputMaybe<Scalars['Long']>
  /** 查询关键字（订单号/客户，模糊查询） */
  keyword?: InputMaybe<Scalars['String']>
  /** 出库订单状态，默认待提交，10：待提交、15 待审核 20：待出库、30：部分出库、40：已完成、50：已取消 */
  orderStatus?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** 销售时间 */
  saleTime?: InputMaybe<Scalars['Long']>
}

export type PageOutOrderRecord = {
  __typename?: 'PageOutOrderRecord'
  outOrders?: Maybe<Array<Maybe<OutOrderRecordList>>>
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PageOutOrderRecordPayload = {
  __typename?: 'PageOutOrderRecordPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<OutStockRecordQueryPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PageOutStockRecordInput = {
  /** 客户Id */
  customerId?: InputMaybe<Scalars['Int']>
  /** 客户类型 */
  customerType?: InputMaybe<Scalars['Int']>
  /** 订单号/商品（模糊查询） */
  keyword?: InputMaybe<Scalars['String']>
  /** 出库类型Id */
  outOrderTypeId?: InputMaybe<Scalars['Int']>
  /** 出库时间 */
  outStockTime?: InputMaybe<Scalars['Long']>
}

export type PageOverviewInput = {
  /** 客户所属渠道id */
  channelId?: InputMaybe<Scalars['Int']>
  createType?: InputMaybe<Scalars['Int']>
  planDate: Scalars['Long']
  /** 10待审核 30进行中 40已完成 */
  planStatus?: InputMaybe<Scalars['Int']>
}

export type PageOverviewResult = {
  __typename?: 'PageOverviewResult'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<OverviewPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PagePurchaseReturnInput = {
  endTime?: InputMaybe<Scalars['Long']>
  keywords?: InputMaybe<Scalars['String']>
  startTime?: InputMaybe<Scalars['Long']>
  status?: InputMaybe<PurchaseStatus>
}

export type PagePurchaseReturnPayload = {
  __typename?: 'PagePurchaseReturnPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<PurchaseReturnPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PageReturnBillPayload = {
  __typename?: 'PageReturnBillPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<ReturnBillPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export enum PageReturnType {
  /** 费用审核 */
  BillAudit = 'BILL_AUDIT',
  /** 费用管理 */
  BillManage = 'BILL_MANAGE',
}

/** 采购退货费用单分页查询参数 */
export type PageReturnsBillInput = {
  /**
   * 查询状态
   * 采购费用管理：待提交[BILL_UN_SUBMITTED],已提交[BILL_BIZ_UN_REVIEWED, BILL_FD_UN_REVIEWED,BILL_FD_CONFIRMED, BILL_COMPLETE]
   * 采购费用审核：待审核[BILL_BIZ_UN_REVIEWED]，已审核[BILL_FD_UN_REVIEWED,BILL_FD_CONFIRMED, BILL_COMPLETE]
   */
  billStatusList: Array<InputMaybe<BillStatusEnum>>
  /** 货品类型 */
  commodityType?: InputMaybe<Scalars['Int']>
  /** 查询结束时间 */
  endTime?: InputMaybe<Scalars['Long']>
  /** 页面类型 */
  pageBillType: PageReturnType
  /** 查询开始时间 */
  startTime?: InputMaybe<Scalars['Long']>
}

export type PageSaleIncomeOrderInput = {
  /** 收入类型 */
  incomeOperation: IncomeOperation
  /** 销售收入状态(10:待提交 15:财务已驳回 20:待业务人员审核 25:待内勤人员审核 30:待财务人员审核 40:已完成 50:业务人员驳回) */
  incomeStatus: Array<InputMaybe<IncomeStatus>>
  /** 类型 10：次品销售 20：废旧品销售 30：成品销售 */
  sourceType?: InputMaybe<SaleIncomeSourceType>
  /** 时间 */
  timeRange?: InputMaybe<TimeRange>
}

export type PageSaleIncomeOrderPayload = {
  __typename?: 'PageSaleIncomeOrderPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<SaleIncomeOrderPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PageSaleReturnInput = {
  /** 入库类型 */
  inOrderType: InOrderType
  /** 查询关键字（退货单号/销售客户名称/商品名称，模糊查询） */
  keyword?: InputMaybe<Scalars['String']>
  /** 订单状态 */
  orderStatus?: InputMaybe<InOrderStatus>
  /** 查询时间条件 */
  timeRange: TimeRange
}

export type PageStockAdjustmentInput = {
  /** 单据状态 */
  stockAdjustmentStatus: StockAdjustmentStatusEnum
}

export type PageStockAdjustmentPayload = {
  __typename?: 'PageStockAdjustmentPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  /** 记录列表 */
  records?: Maybe<Array<Maybe<StockAdjustmentPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PageStockBatchInput = {
  commodityTypeId?: InputMaybe<Scalars['Int']>
  /** 所属客户 */
  customerId?: InputMaybe<Scalars['Int']>
  /** 所属客户类型 */
  customerType?: InputMaybe<Scalars['Int']>
  /** 关键字查询 商品名称 */
  keyword?: InputMaybe<Scalars['String']>
  /** 仓库id */
  warehouseId?: InputMaybe<Scalars['ID']>
}

export type PageStockBatchPayLoad = {
  __typename?: 'PageStockBatchPayLoad'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<StockBatchPayloadV2>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PageUserInput = {
  /** 员工姓名 */
  name?: InputMaybe<Scalars['String']>
  /** 组织ID */
  orgId: Scalars['Int']
  /** 用户状态 */
  status?: InputMaybe<UserStatus>
}

export type PageUserPayload = {
  __typename?: 'PageUserPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<UserPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PageWasteSaleOrderInput = {
  saleOrderStatus?: InputMaybe<Array<InputMaybe<WasteSaleOrderStatusEnum>>>
  saleTime: Scalars['Long']
}

export type PageWasteSaleOrderPayload = {
  __typename?: 'PageWasteSaleOrderPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  /** 销售订单列表 */
  records?: Maybe<Array<Maybe<WasteSaleOrder>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type PassStockAdjustmentInput = {
  /** 调整申请单id */
  stockAdjustmentId: Array<InputMaybe<Scalars['ID']>>
}

export type PauseOrContinueTaskInput = {
  taskId?: InputMaybe<Scalars['ID']>
  taskStatusCode?: InputMaybe<Scalars['Int']>
}

/** 支付方式 */
export enum PayMethodEnum {
  /** 支付宝 */
  Alipay = 'ALIPAY',
  /** 刷卡 */
  CardPay = 'CARD_PAY',
  /** 转账 */
  TransferPay = 'TRANSFER_PAY',
  /** 微信支付 */
  WechatPay = 'WECHAT_PAY',
}

/** 支付结算方式：月结 半月结 */
export type PayMode = {
  __typename?: 'PayMode'
  code?: Maybe<Scalars['Int']>
  message?: Maybe<Scalars['String']>
}

export enum PayModeEnum {
  /** 半月结 */
  HalfMonthPay = 'HALF_MONTH_PAY',
  /** 月结 */
  MonthPay = 'MONTH_PAY',
  /** 次结 */
  OncePay = 'ONCE_PAY',
  Unrecognized = 'UNRECOGNIZED',
}

export type PermissionPayLoad = {
  __typename?: 'PermissionPayLoad'
  authId?: Maybe<Scalars['Int']>
  authKey?: Maybe<Scalars['String']>
  authName?: Maybe<Scalars['String']>
  authPath?: Maybe<Scalars['String']>
  leaf?: Maybe<Scalars['Int']>
}

export type Picking = {
  __typename?: 'Picking'
  accessories?: Maybe<Scalars['Int']>
  accessoriesUnFinish?: Maybe<Scalars['Int']>
  rawMaterial?: Maybe<Scalars['Int']>
  rawMaterialUnFinish?: Maybe<Scalars['Int']>
  returnedGoods?: Maybe<Scalars['Int']>
  returnedGoodsUnFinish?: Maybe<Scalars['Int']>
  semiFinishedProducts?: Maybe<Scalars['Int']>
  semiFinishedProductsUnFinish?: Maybe<Scalars['Int']>
  undone?: Maybe<Scalars['Int']>
}

/** 生产计划 */
export type Plan = {
  __typename?: 'Plan'
  /** 商品类型 */
  commodityType?: Maybe<Scalars['Int']>
  /**  计划类型 */
  createType?: Maybe<Scalars['Int']>
  /**     配送地址id */
  customerDistributionId?: Maybe<Scalars['Int']>
  /**     配送地址名称 */
  customerDistributionName?: Maybe<Scalars['String']>
  /** 客户id */
  customerId?: Maybe<Scalars['Int']>
  /**     客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户类型 */
  customerType?: Maybe<Scalars['Int']>
  /**     计划单号 */
  planCode?: Maybe<Scalars['String']>
  /** 生产日期 */
  planDate?: Maybe<Scalars['Long']>
  /**     备注 */
  planDescription?: Maybe<Scalars['String']>
  /**     计划结束时间 */
  planEndTime?: Maybe<Scalars['Long']>
  /**     计划id */
  planId?: Maybe<Scalars['ID']>
  /**     计划开始时间 */
  planStartTime?: Maybe<Scalars['Long']>
  /**     计划状态【10：待发布、20：待生产、30：生产中、40：已完成、50：已取消】 */
  planStatus?: Maybe<Scalars['Int']>
  /**     仓库id */
  warehouseId?: Maybe<Scalars['ID']>
  /**     仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

/** 计划分析 */
export type PlanAnalysisPayload = {
  __typename?: 'PlanAnalysisPayload'
  /** 成品销售创建计划完成数量 */
  completedSale?: Maybe<Scalars['Int']>
  /** 备货生产创建计划完成数量 */
  completedStock?: Maybe<Scalars['Int']>
  /** 成品销售计划数量 */
  productionSale?: Maybe<Scalars['Int']>
  /** 备货生产计划数量 */
  productionStock?: Maybe<Scalars['Int']>
  /** 计划总数 */
  totalPlan?: Maybe<Scalars['Int']>
  /** 成品销售创建计划未完成数量 */
  undoneSale?: Maybe<Scalars['Int']>
  /** 备货生产创建计划未完成数量 */
  undoneStock?: Maybe<Scalars['Int']>
}

export type PlanBaseInfoInput = {
  /** 备注 */
  planDescription?: InputMaybe<Scalars['String']>
  /** 计划结束时间 */
  planEndTime: Scalars['Long']
  /** 计划id */
  planId: Scalars['ID']
  /** 计划开始时间 */
  planStartTime: Scalars['Long']
}

/** 用户计划变更统计 */
export type PlanChangedSummary = {
  __typename?: 'PlanChangedSummary'
  /** 待处理数量 */
  notHandleCount?: Maybe<Scalars['Int']>
}

/** 创建生产计划信息入参 */
export type PlanInfoInput = {
  /** 商品类型 */
  commodityType: Scalars['Int']
  /** 客户配送地址 */
  customerDistributionId?: InputMaybe<Scalars['Int']>
  /** 客户id */
  customerId: Scalars['Int']
  /** 客户类型 */
  customerType?: InputMaybe<Scalars['Int']>
  /** 备注 */
  planDescription?: InputMaybe<Scalars['String']>
  /** 生产结束日期 */
  planEndTime: Scalars['Long']
  /** 生产开始日期 */
  planStartTime: Scalars['Long']
  /** 计划任务信息 */
  task: Array<InputMaybe<TaskInsertInput>>
  /** 仓库id */
  warehouseId: Scalars['ID']
}

/** 分页对象 */
export type PlanPageResult = {
  __typename?: 'PlanPageResult'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<ProductionPlanPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

/** 生产计划查询入参 */
export type PlanQueryInput = {
  /** 模糊查询 */
  param?: InputMaybe<Scalars['String']>
  /**
   * 列表头筛选
   * 日期
   */
  planDate?: InputMaybe<Scalars['Long']>
  /** 状态 */
  planStatus?: InputMaybe<Scalars['Int']>
}

export type PlanTaskInfoInput = {
  /** 变更id */
  changeId?: InputMaybe<Scalars['ID']>
  /** 商品信息 */
  commodities: Array<InputMaybe<CommodityInput>>
  /** 生产组长id */
  leaderId: Scalars['Int']
  /** 生产组长名称 */
  leaderName: Scalars['String']
  /** 生产线 */
  line: Scalars['Int']
  /** 生产计划id */
  planId: Scalars['ID']
  /** 生产任务id */
  taskId: Scalars['ID']
}

export type PlanTaskInput = {
  planId: Scalars['ID']
  /** 计划任务信息 */
  task: Array<InputMaybe<TaskInput>>
}

export type PositionPayload = {
  __typename?: 'PositionPayload'
  positionId?: Maybe<Scalars['Int']>
  positionName?: Maybe<Scalars['String']>
}

export type PriceTypeBase = {
  /** 单价单位信息 */
  priceType?: Maybe<Unit>
}

export type ProductInput = {
  /** 用户名称 */
  roleName?: InputMaybe<Scalars['String']>
  /** 仓库id */
  storehouseId: Scalars['ID']
}

export type ProductionCommodityPayload = {
  __typename?: 'ProductionCommodityPayload'
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 规格 */
  commoditySpecOptionName?: Maybe<Scalars['String']>
  /** 商品类型 */
  commodityType?: Maybe<Scalars['Int']>
  /** 商品类型 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 已生产数量 */
  completedNum?: Maybe<Scalars['BigDecimal']>
  /** 计划生产数量 */
  expectNum?: Maybe<Scalars['BigDecimal']>
  /** 预估销量 */
  planQuantity?: Maybe<Scalars['Int']>
}

export type ProductionConfigPayload = {
  __typename?: 'ProductionConfigPayload'
  /**
   * 临时工 1000
   * 正式工 1001
   * 提前领料 1100
   */
  configCode?: Maybe<Scalars['Int']>
  configValue?: Maybe<ConfigValuePayload>
  createBy?: Maybe<Scalars['Int']>
  createTime?: Maybe<Scalars['Long']>
  id?: Maybe<Scalars['Int']>
  orgId?: Maybe<Scalars['Int']>
  updateBy?: Maybe<Scalars['Int']>
  updateTime?: Maybe<Scalars['Long']>
}

export type ProductionControlPayload = {
  __typename?: 'ProductionControlPayload'
  /** 商品分析 */
  commodityAnalysis?: Maybe<CommodityAnalysisPaylaod>
  /** 库管分析 */
  keeperAnalysis?: Maybe<KeeperAnalysisPayload>
  /** 组长分析 */
  leaderAnalysis?: Maybe<LeaderAnalysisPayload>
  /** 计划分析 */
  planAnalysis?: Maybe<PlanAnalysisPayload>
  /** 任务分析 */
  taskAnalysis?: Maybe<TaskAnalysisPayload>
}

export type ProductionInOrderItemPayload = {
  __typename?: 'ProductionInOrderItemPayload'
  batchCode?: Maybe<Scalars['String']>
  batchId?: Maybe<Scalars['ID']>
  /** 商品id */
  commodityId?: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品sku id */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 商品规格选项id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  conversion?: Maybe<Scalars['BigDecimal']>
  createBy?: Maybe<Scalars['Int']>
  createTime?: Maybe<Scalars['Long']>
  /** 生库订单id */
  inOrderId?: Maybe<Scalars['ID']>
  /** 生产入库订单明细id */
  inOrderItemId?: Maybe<Scalars['ID']>
  /** 入库完成数量统计 */
  inStockFinishedQuantity?: Maybe<InStockFinishedQuantity>
  /** sku文字描述，规格选项文字数组 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 总计类型数量(x箱) */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  totalQuantityPicking?: Maybe<Scalars['BigDecimal']>
  /** 总计类型（例：件） */
  totalType?: Maybe<Scalars['Int']>
  /** 总计类型数量（例：件） */
  totalTypeName?: Maybe<Scalars['String']>
  /** 单位类型数量(x个) */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  unitQuantityPicking?: Maybe<Scalars['BigDecimal']>
  /** 单位类型（例：kg，个） */
  unitType?: Maybe<Scalars['Int']>
  /** 单位类型数量（例：kg，个） */
  unitTypeName?: Maybe<Scalars['String']>
  updateTime?: Maybe<Scalars['Long']>
}

export type ProductionInOrderListInput = {
  /** 任务状态 */
  inOrderStatus?: InputMaybe<Scalars['Int']>
  /** 出库类型 */
  inOrderType?: InputMaybe<Scalars['Int']>
  /** 生产任务id */
  taskId: Scalars['ID']
  /** 任务类型id */
  taskTypeCode: Scalars['Int']
}

export type ProductionInOrderListPayload = {
  __typename?: 'ProductionInOrderListPayload'
  ProductionInOrdersList?: Maybe<Array<Maybe<ProductionInOrderPayload>>>
}

export type ProductionInOrderLogListPayload = {
  __typename?: 'ProductionInOrderLogListPayload'
  inOrderLogList?: Maybe<Array<Maybe<ProductionInOrderLogPayload>>>
}

export type ProductionInOrderLogPayload = {
  __typename?: 'ProductionInOrderLogPayload'
  createBy?: Maybe<Scalars['Int']>
  createTime?: Maybe<Scalars['Long']>
  /** 创建用户名称 */
  createUserName?: Maybe<Scalars['String']>
  /** 入库订单id */
  inOrderId?: Maybe<Scalars['ID']>
  /** 入库订单操作备注 */
  inOrderLogDescription?: Maybe<Scalars['String']>
  /** 入库订单日志id */
  inOrderLogId?: Maybe<Scalars['ID']>
  /**
   * 入库订单操作类型
   * 10：创建时间
   * 20：提交时间
   * 30：入库时间
   * 40：取消时间;
   */
  inOrderLogType?: Maybe<Scalars['Int']>
  /** 入库订单操作枚举文字 */
  inOrderLogTypeText?: Maybe<Scalars['String']>
}

export type ProductionInOrderPayload = {
  __typename?: 'ProductionInOrderPayload'
  /** 驳回/取消原因（列表/详情通用） */
  cancelDescription?: Maybe<Scalars['String']>
  /** 商品信息 */
  commodities?: Maybe<Array<Maybe<ProductionInOrderItemPayload>>>
  /** 商品类型id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 创建人 */
  createBy?: Maybe<Scalars['Int']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 创建人名称 */
  createUserName?: Maybe<Scalars['String']>
  /** 客户配送地址id */
  customerDistributionId?: Maybe<Scalars['Int']>
  /** 客户配送地址名称 */
  customerDistributionName?: Maybe<Scalars['String']>
  /** 客户所属id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户所属名称 */
  customerName?: Maybe<Scalars['String']>
  /** 入库订单编号 */
  inOrderCode?: Maybe<Scalars['String']>
  /** 备注信息 */
  inOrderDescription?: Maybe<Scalars['String']>
  /** 入库订单id */
  inOrderId?: Maybe<Scalars['ID']>
  /**
   * 入库订单状态
   * 10：待提交
   * 20：待入库
   * 30：部分入库
   * 40：已完成
   * 50：已取消';
   */
  inOrderStatus?: Maybe<Scalars['Int']>
  /** 订单状态名称 */
  inOrderStatusName?: Maybe<Scalars['String']>
  /** 入库订单类型[10:生产入库] */
  inOrderType?: Maybe<Scalars['Int']>
  /** 入库订单类型名称 */
  inOrderTypeName?: Maybe<Scalars['String']>
  /** 分公司id */
  organizationId?: Maybe<Scalars['Int']>
  /** 分公司名称 */
  organizationName?: Maybe<Scalars['String']>
  /** 生产任务编号 */
  taskCode?: Maybe<Scalars['String']>
  /** 生产任务id */
  taskId?: Maybe<Scalars['ID']>
  /** 更新人id */
  updateBy?: Maybe<Scalars['Int']>
  /** 更新时间 */
  updateTime?: Maybe<Scalars['Long']>
  /** 仓库id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

export type ProductionOutOrderDetailPayload = SalePriceTypeBase & {
  __typename?: 'ProductionOutOrderDetailPayload'
  batchCode?: Maybe<Scalars['String']>
  /** 批次id */
  batchId?: Maybe<Scalars['ID']>
  /** 所属客户 */
  belongCustomerName?: Maybe<Scalars['String']>
  /** 商品id */
  commodityId?: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品sku id */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 商品规格选项id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  conversion?: Maybe<Scalars['BigDecimal']>
  createBy?: Maybe<Scalars['Int']>
  createTime?: Maybe<Scalars['Long']>
  /** 报损原因 */
  damageReason?: Maybe<Scalars['String']>
  /** 生库订单id */
  outOrderId?: Maybe<Scalars['ID']>
  /** 生产出库订单明细id */
  outOrderItemId?: Maybe<Scalars['ID']>
  /** 出库完成数量统计 */
  outStockFinishedQuantity?: Maybe<OutStockFinishedQuantity>
  /** 报损照片 */
  photos?: Maybe<Array<Maybe<Scalars['String']>>>
  pickingTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 实际领用量 */
  pickingUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /**  单价  */
  salePrice?: Maybe<Scalars['BigDecimal']>
  /**  单价类型  */
  salePriceType?: Maybe<Unit>
  /** sku文字描述，规格选项文字数组 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  stockTotalQuantity?: Maybe<Scalars['BigDecimal']>
  stockTotalType?: Maybe<Scalars['Int']>
  stockUnitQuantity?: Maybe<Scalars['BigDecimal']>
  stockUnitType?: Maybe<Scalars['Int']>
  /** 总计类型数量 */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 总计类型（例：件） */
  totalType?: Maybe<Scalars['Int']>
  /** 总计类型数量（例：件） */
  totalTypeName?: Maybe<Scalars['String']>
  /** 单位类型数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  /**  小计  */
  unitTotalPrice?: Maybe<Scalars['BigDecimal']>
  /** 单位类型（例：kg，个） */
  unitType?: Maybe<Scalars['Int']>
  /** 单位类型数量（例：kg，个） */
  unitTypeName?: Maybe<Scalars['String']>
  updateTime?: Maybe<Scalars['Long']>
}

export type ProductionOutOrderListInput = {
  /** 任务状态 */
  outOrderStatus?: InputMaybe<Scalars['Int']>
  /** 出库类型 */
  outOrderType?: InputMaybe<Scalars['Int']>
  /** 生产任务id */
  taskId: Scalars['ID']
  /** 任务类型id */
  taskTypeCode: Scalars['Int']
}

export type ProductionOutOrderLogPayload = {
  __typename?: 'ProductionOutOrderLogPayload'
  createBy?: Maybe<Scalars['Int']>
  createTime?: Maybe<Scalars['Long']>
  /** 创建用户名称 */
  createUserName?: Maybe<Scalars['String']>
  /** 出库订单id */
  outOrderId?: Maybe<Scalars['ID']>
  /** 出库订单操作备注 */
  outOrderLogDescription?: Maybe<Scalars['String']>
  /** 出库订单日志id */
  outOrderLogId?: Maybe<Scalars['Int']>
  /**
   * 出库订单操作类型
   * 10：创建时间
   * 20：提交时间
   * 30：出库时间
   * 40：取消时间;
   */
  outOrderLogType?: Maybe<Scalars['Int']>
  /** 出库订单操作枚举文字 */
  outOrderLogTypeText?: Maybe<Scalars['String']>
}

export type ProductionOutOrderPayload = {
  __typename?: 'ProductionOutOrderPayload'
  /** 驳回或取消原因（列表/详情通用） */
  cancelDescription?: Maybe<Scalars['String']>
  /** 商品信息 */
  commodities?: Maybe<Array<Maybe<ProductionOutOrderDetailPayload>>>
  /** 商品类型id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 创建人 */
  createBy?: Maybe<Scalars['Int']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 创建人名称 */
  createUserName?: Maybe<Scalars['String']>
  /** 客户配送地址id */
  customerDistributionId?: Maybe<Scalars['Int']>
  /** 客户配送地址名称 */
  customerDistributionName?: Maybe<Scalars['String']>
  /** 客户所属id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户所属名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户类型 */
  customerType?: Maybe<Scalars['Int']>
  /** 分公司id */
  organizationId?: Maybe<Scalars['Int']>
  /** 分公司名称 */
  organizationName?: Maybe<Scalars['String']>
  /** 出库订单编号 */
  outOrderCode?: Maybe<Scalars['String']>
  /** 备注信息 */
  outOrderDescription?: Maybe<Scalars['String']>
  /** 出库订单id */
  outOrderId?: Maybe<Scalars['ID']>
  /**
   * 出库订单状态
   * 10：待提交
   * 15：待审核
   * 16: 生产中
   * 20：待出库
   * 30：部分出库
   * 40：已完成
   * 50：已取消';
   */
  outOrderStatus?: Maybe<Scalars['Int']>
  /** 订单状态名称 */
  outOrderStatusName?: Maybe<Scalars['String']>
  /** 出库订单类型[10：原料领料出库、20：辅料领料出库] */
  outOrderType?: Maybe<Scalars['Int']>
  /** 出库订单类型名称 */
  outOrderTypeName?: Maybe<Scalars['String']>
  /** 生产任务编号 */
  taskCode?: Maybe<Scalars['String']>
  /** 生产任务id */
  taskId?: Maybe<Scalars['ID']>
  /** 更新人id */
  updateBy?: Maybe<Scalars['Int']>
  /** 更新时间 */
  updateTime?: Maybe<Scalars['Long']>
  /** 仓库id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

/** 生产计划详情 */
export type ProductionPlanDetailPayload = {
  __typename?: 'ProductionPlanDetailPayload'
  /** 商品类型 */
  commodityType?: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 创建人 */
  createBy?: Maybe<Scalars['Int']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 成品销售创建计划:10 手动创建计划:20 */
  createType?: Maybe<Scalars['Int']>
  /** 创建类型名称 */
  createTypeName?: Maybe<Scalars['String']>
  /** 创建人名称 */
  createUserName?: Maybe<Scalars['String']>
  /** 客户配送地址id */
  customerDistributionId?: Maybe<Scalars['Int']>
  /** 客户配送地址名称 */
  customerDistributionName?: Maybe<Scalars['String']>
  /** 客户所属id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户所属名称 */
  customerName?: Maybe<Scalars['String']>
  customerType?: Maybe<Scalars['Int']>
  /** 销售单号 */
  outOrderId?: Maybe<Scalars['ID']>
  /** 订单号 */
  planCode?: Maybe<Scalars['String']>
  /** 生产日期 */
  planDate?: Maybe<Scalars['Long']>
  /** 备注 */
  planDescription?: Maybe<Scalars['String']>
  /** 计划结束时间 */
  planEndTime?: Maybe<Scalars['Long']>
  /** 计划id */
  planId?: Maybe<Scalars['ID']>
  /** 生产计划日志备注 */
  planLogDescription?: Maybe<Scalars['String']>
  /** 计划开始时间 */
  planStartTime?: Maybe<Scalars['Long']>
  /** 任务状态ID */
  planStatus?: Maybe<Scalars['Int']>
  /** 任务状态名称 */
  planStatusName?: Maybe<Scalars['String']>
  /** 计划任务信息 */
  task?: Maybe<Array<Maybe<TaskPayload>>>
  /** 仓库id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

/** 生产计划操作日志 */
export type ProductionPlanLogPayLoad = {
  __typename?: 'ProductionPlanLogPayLoad'
  /** 创建人id */
  createBy?: Maybe<Scalars['Int']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 创建人名称 */
  createUserName?: Maybe<Scalars['String']>
  /** 生产计划id */
  planId?: Maybe<Scalars['ID']>
  /** 日志备注 */
  planLogDescription?: Maybe<Scalars['String']>
  /** 生产计划日志id */
  planLogId?: Maybe<Scalars['ID']>
  /** 日志操作类型 */
  planLogType?: Maybe<Scalars['Int']>
  /** 日志操作类型枚举文字 */
  planLogTypeText?: Maybe<Scalars['String']>
}

/** 生产计划实体 */
export type ProductionPlanPayload = {
  __typename?: 'ProductionPlanPayload'
  /** 产品种类数量 */
  categorySum?: Maybe<Scalars['Int']>
  /** 商品类型 */
  commodityType?: Maybe<Scalars['Int']>
  /** 总完成数 */
  completedNumSum?: Maybe<Scalars['BigDecimal']>
  /** 创建人id */
  createBy?: Maybe<Scalars['Int']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 创建类型 */
  createType?: Maybe<Scalars['Int']>
  /** 创建类型名称 */
  createTypeName?: Maybe<Scalars['String']>
  /** 创建人名称 */
  createUserName?: Maybe<Scalars['String']>
  /** 客户配送地址id */
  customerDistributionId?: Maybe<Scalars['Int']>
  /** 客户配送地址名称 */
  customerDistributionName?: Maybe<Scalars['String']>
  /** 客户id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 总期望数 */
  expectNumSum?: Maybe<Scalars['BigDecimal']>
  /** 分公司id */
  organizationId?: Maybe<Scalars['Int']>
  /** 分公司名称 */
  organizationName?: Maybe<Scalars['String']>
  /** 出库单号 */
  outOrderId?: Maybe<Scalars['ID']>
  /** 计划单号 */
  planCode?: Maybe<Scalars['String']>
  /** 生产日期 */
  planDate?: Maybe<Scalars['Long']>
  /** 备注 */
  planDescription?: Maybe<Scalars['String']>
  /** 计划结束时间 */
  planEndTime?: Maybe<Scalars['Long']>
  /** 计划id */
  planId?: Maybe<Scalars['ID']>
  /** 计划开始时间 */
  planStartTime?: Maybe<Scalars['Long']>
  /** 计划状态 */
  planStatus?: Maybe<Scalars['Int']>
  /** 计划状态名称 */
  planStatusName?: Maybe<Scalars['String']>
  /** 取消生产 */
  saleCancelCount?: Maybe<Scalars['Int']>
  /** 销售变更提示,0 没有通知  10 通知未读  20 通知已处理  30 通知已忽略 */
  saleChangeNotice?: Maybe<Scalars['Int']>
  /** 计划任务暂停数 */
  taskPauses?: Maybe<Scalars['Int']>
  /** 更新人id */
  updateBy?: Maybe<Scalars['Int']>
  /** 更新时间 */
  updateTime?: Maybe<Scalars['Long']>
  /** 仓库id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

/** 生产计划状态下拉（待审核：10 、进行中：20或30 已完成：40） */
export type ProductionPlanStatus = {
  __typename?: 'ProductionPlanStatus'
  /** 已完成数量 */
  completedNum?: Maybe<Scalars['Int']>
  /** 待审核数量 */
  pendingReviewNum?: Maybe<Scalars['Int']>
  /** 进行中数量 */
  processingNum?: Maybe<Scalars['Int']>
}

export type ProductionProcessPayload = {
  __typename?: 'ProductionProcessPayload'
  /** 实际total数量 */
  actualTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 实际unit数量 */
  actualUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 申请total数量 */
  applyTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 申请unit数量 */
  applyUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品sku名称 */
  commodityTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 商品类型id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** total单位id */
  totalType?: Maybe<Scalars['Int']>
  /** total单位名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /** unit单位id */
  unitType?: Maybe<Scalars['Int']>
  /** unit单位名称 */
  unitTypeName?: Maybe<Scalars['String']>
}

/** 开关 */
export type ProductionSwitchPayload = {
  __typename?: 'ProductionSwitchPayload'
  productionSwitch?: Maybe<Scalars['Boolean']>
}

/**
 * #商品规格实体
 * type CommoditySpecPayload {
 *     #商品规格id
 *     commoditySpecId: Int
 *     #商品规格名称
 *     commoditySpecName: String
 *     #商品规格选项列表
 *     commoditySpecOption: [CommoditySpecOptionPayload]
 * }
 * #商品规格选项实体
 * type CommoditySpecOptionPayload {
 *     #商品规格选项id
 *     commoditySpecOptionId: Int
 *     #商品规格选项名称
 *     commoditySpecOptionName: String
 * }
 */
export type ProductionTaskCommoditiesPayload = {
  __typename?: 'ProductionTaskCommoditiesPayload'
  /** 商品id */
  commodityId?: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品sku id */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 规格选项id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** sku文字描述,规格选项文字数组 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type ProvinceBase = {
  /** 省 */
  province?: Maybe<LocationPayload>
}

export type PurchaseConfirmInput = {
  belongId?: InputMaybe<Scalars['Int']>
  belongType?: InputMaybe<Scalars['Int']>
  /** 入库订单Id */
  inOrderId: Scalars['ID']
  /** 采购入库类型 */
  inOrderType: Scalars['Int']
  /** 入库商品信息 */
  items: Array<InputMaybe<PurchaseConfirmItemInput>>
  /** 本次入库操作备注信息 */
  remark?: InputMaybe<Scalars['String']>
}

export type PurchaseConfirmItemInput = {
  /** SPUId */
  commodityId: Scalars['Int']
  /** 商品skuID */
  commoditySkuId: Scalars['Int']
  /** 毛重 */
  grossUnitQuantity?: InputMaybe<Scalars['BigDecimal']>
  /** item列表Id */
  inOrderItemId?: InputMaybe<Scalars['ID']>
  /** 副单位数量 */
  totalQuantity?: InputMaybe<Scalars['BigDecimal']>
  /** 小单位数量 */
  unitQuantity: Scalars['BigDecimal']
}

/** 采购列表条件 */
export type PurchaseListFilter = {
  /** 订单结束时间 */
  endTime?: InputMaybe<Scalars['Long']>
  /** 入库类型 */
  inOrderTypeId?: InputMaybe<Scalars['Int']>
  /** 查询关键字（订单号/客户，模糊查询） */
  keyword?: InputMaybe<Scalars['String']>
  /** 订单状态（10全部，20待提交，30待入库 ，40已完成，50已取消） */
  orderStatus?: InputMaybe<Scalars['Int']>
  /** 订单起始时间 */
  startTime?: InputMaybe<Scalars['Long']>
}

/** 新增采购信息 */
export type PurchaseOrderInsertInput = {
  /** 商品信息 */
  commodities: Array<InputMaybe<PurchaseOrderItemInsertInput>>
  /** 商品类型Id */
  commodityTypeId: Scalars['Int']
  /** 客户Id */
  customerId?: InputMaybe<Scalars['Int']>
  /** 客户类型Id */
  customerTypeId?: InputMaybe<Scalars['Int']>
  /** 预估运费 */
  deliveryFee?: InputMaybe<Scalars['BigDecimal']>
  /** 订单备注 */
  inOrderDescription?: InputMaybe<Scalars['String']>
  /** 入库类型 */
  inOrderTypeId: Scalars['Int']
  /** 供应商Id */
  supplierId: Scalars['Int']
  /** 仓库名称 */
  warehouseId: Scalars['ID']
}

export type PurchaseOrderItemInsertInput = {
  /** 商品skuID */
  commoditySkuId: Scalars['Int']
  /** 总价 */
  totalPrice: Scalars['BigDecimal']
  /** 副单位数量 */
  totalQuantity?: InputMaybe<Scalars['BigDecimal']>
  /** 单价 */
  unitPrice: Scalars['BigDecimal']
  /** 单价单位类型 */
  unitPriceType: Scalars['Int']
  /** 小单位数量 */
  unitQuantity: Scalars['BigDecimal']
}

export type PurchaseOrderItemPayload = {
  __typename?: 'PurchaseOrderItemPayload'
  /** SPUId */
  commodityId?: Maybe<Scalars['Int']>
  /** SPU名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品skuID */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 商品规格选项Id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 副单位与基本单位关系转换 */
  conversion?: Maybe<Scalars['BigDecimal']>
  /** v1.7 已入库量副单位 */
  inBoundTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** v1.7 已入库量基本单位 */
  inBoundUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 销售数量副单位 */
  saleTotalPrice?: Maybe<Scalars['BigDecimal']>
  /** 销售数量副单位 */
  saleTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 销售数量基本单位 */
  saleUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 规格选项 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 总价 */
  totalPrice?: Maybe<Scalars['BigDecimal']>
  /** 副单位数量 */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 副单位类型 */
  totalType?: Maybe<Scalars['Int']>
  /** 副单位类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /** 单价 */
  unitPrice?: Maybe<Scalars['BigDecimal']>
  /** 单价单位Id */
  unitPriceType?: Maybe<Scalars['Int']>
  /** 单价单位名称 */
  unitPriceTypeName?: Maybe<Scalars['String']>
  /** 小单位数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 小单位类型 */
  unitType?: Maybe<Scalars['Int']>
  /** 小单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
}

export type PurchaseOrderPayload = {
  __typename?: 'PurchaseOrderPayload'
  /** 是否能进行退货操作v1.7 */
  canReturn?: Maybe<Scalars['Boolean']>
  /** 商品信息 */
  commodities?: Maybe<Array<Maybe<PurchaseOrderItemPayload>>>
  /** 商品类型Id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称（原料、辅料） */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 创建人员 */
  createUserName?: Maybe<Scalars['String']>
  /** 操作人联系电话 v2.0 */
  createUserPhone?: Maybe<Scalars['String']>
  /** 客户Id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户类型Id */
  customerTypeId?: Maybe<Scalars['Int']>
  /** 客户类型名称 */
  customerTypeName?: Maybe<Scalars['String']>
  /** 预估运费 */
  deliveryFee?: Maybe<Scalars['BigDecimal']>
  /** 驳回（取消）原因 */
  errorDescription?: Maybe<Scalars['String']>
  /** 入库单号 */
  inOrderCode?: Maybe<Scalars['String']>
  /** 订单备注 */
  inOrderDescription?: Maybe<Scalars['String']>
  /** 入库订单Id */
  inOrderId?: Maybe<Scalars['ID']>
  /** 入库状态Id '入库订单状态，默认待提交，10：待提交、20：待入库、30：部分入库、40：已完成、50：已取消'; */
  inOrderStatus?: Maybe<Scalars['Int']>
  /** 入库状态 */
  inOrderStatusName?: Maybe<Scalars['String']>
  /** 入库类型 */
  inOrderTypeId?: Maybe<Scalars['Int']>
  /** 入库类型名称（原料采购、辅料采购） */
  inOrderTypeName?: Maybe<Scalars['String']>
  organizationId?: Maybe<Scalars['Int']>
  organizationName?: Maybe<Scalars['String']>
  /** 销售订单ID */
  outOrderId?: Maybe<Scalars['ID']>
  /**
   * 实际运费v1.7
   * @deprecated 当前字段已被弃用
   */
  realDeliveryFee?: Maybe<Scalars['BigDecimal']>
  /** 销售单号v1.6 */
  saleOrderCode?: Maybe<Scalars['String']>
  /** 供应商Id */
  supplierId?: Maybe<Scalars['Int']>
  /** 供应商名称 */
  supplierName?: Maybe<Scalars['String']>
  /** 总价合计 */
  totalPrice?: Maybe<Scalars['BigDecimal']>
  /** 调拨ID v2.0 */
  transferId?: Maybe<Scalars['ID']>
  /** 调拨组织Id v2.0 */
  transferOrganizationId?: Maybe<Scalars['Int']>
  /** 调拨组织名字 v2.0 */
  transferOrganizationName?: Maybe<Scalars['String']>
  /** 调拨类型 v2.0 */
  transferType?: Maybe<Scalars['Int']>
  /** 仓库Id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

export type PurchaseOrderUpdateInput = {
  /** 商品信息 */
  commodities: Array<InputMaybe<PurchaseOrderItemInsertInput>>
  /** 客户Id */
  customerId?: InputMaybe<Scalars['Int']>
  /** 客户类型Id */
  customerTypeId?: InputMaybe<Scalars['Int']>
  /** 预估运费 */
  deliveryFee?: InputMaybe<Scalars['BigDecimal']>
  /** 订单备注 */
  inOrderDescription?: InputMaybe<Scalars['String']>
  /** 入库订单Id */
  inOrderId: Scalars['ID']
  /** 供应商Id */
  supplierId: Scalars['Int']
  /** 仓库名称 */
  warehouseId: Scalars['ID']
}

/** 分页对象 */
export type PurchasePageResultPayload = {
  __typename?: 'PurchasePageResultPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  /** 采购订单列表 */
  records?: Maybe<Array<Maybe<PurchaseOrderPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

/** 采购退货选择商品 */
export type PurchaseReturnCommoditiesInput = {
  /** 采购订单Id */
  applyId?: InputMaybe<Scalars['ID']>
  /** 费用单Id */
  billId?: InputMaybe<Scalars['ID']>
  /** 退货单Id */
  returnId?: InputMaybe<Scalars['ID']>
}

export type PurchaseReturnCommodityInput = {
  amount: Scalars['BigDecimal']
  skuId: Scalars['Int']
  totalQuantity?: InputMaybe<Scalars['BigDecimal']>
  unitPrice: Scalars['BigDecimal']
  unitQuantity: Scalars['BigDecimal']
}

/** 新增采购退货 */
export type PurchaseReturnInsertInput = {
  /** 采购订单Id */
  applyId: Scalars['ID']
  /** 商品信息 */
  commodities: Array<InputMaybe<PurchaseReturnCommodityInput>>
  /** 运杂费 */
  costs?: InputMaybe<Array<InputMaybe<CostInput>>>
  /** 备注 */
  note?: InputMaybe<Scalars['String']>
  /** 退货类型 */
  returnType: PurchaseReturnsType
  /** 模板Id */
  templateId?: InputMaybe<Scalars['ID']>
}

export type PurchaseReturnInsertPayload = {
  __typename?: 'PurchaseReturnInsertPayload'
  id: Scalars['ID']
}

export type PurchaseReturnPayload = BelongOrgBase &
  CustomerBase &
  SupplierBase &
  UserBase &
  WarehouseBase & {
    __typename?: 'PurchaseReturnPayload'
    applyBillId?: Maybe<Scalars['ID']>
    applyCode?: Maybe<Scalars['String']>
    /** v2.9 冗余采购单id */
    applyId?: Maybe<Scalars['ID']>
    /** v2.9 采购退货:所属组织 */
    belongOrg?: Maybe<Org>
    billId?: Maybe<Scalars['ID']>
    commodityType?: Maybe<Scalars['Int']>
    commodityTypeName?: Maybe<Scalars['String']>
    createTime?: Maybe<Scalars['Long']>
    customer?: Maybe<Customer>
    flowLogs?: Maybe<Array<Maybe<FlowLog>>>
    /** v2.9 采购退货:手工单号 */
    manualCode?: Maybe<Scalars['String']>
    note?: Maybe<Scalars['String']>
    returnCode?: Maybe<Scalars['String']>
    returnId?: Maybe<Scalars['ID']>
    returnOtherRespList?: Maybe<Array<Maybe<ReturnOtherPayload>>>
    returnType?: Maybe<PurchaseReturnsType>
    returnTypeName?: Maybe<Scalars['String']>
    returnsCommodityRespList?: Maybe<Array<Maybe<ReturnsCommodityPayload>>>
    status?: Maybe<PurchaseStatus>
    statusName?: Maybe<Scalars['String']>
    supplier?: Maybe<Supplier>
    user?: Maybe<User>
    warehouse?: Maybe<Warehouse>
  }

/** 采购退货单类型 */
export enum PurchaseReturnTypeEnum {
  /** 扣损 */
  PurchaseDeduction = 'PURCHASE_DEDUCTION',
  /** 退货 */
  PurchaseReturns = 'PURCHASE_RETURNS',
  /** 错误类型 */
  ReturnsTypeError = 'RETURNS_TYPE_ERROR',
  /** 无法识别 */
  Unrecognized = 'UNRECOGNIZED',
}

/** 退货类型枚举 */
export enum PurchaseReturnsType {
  /** 扣损 */
  PurchaseDeduction = 'PURCHASE_DEDUCTION',
  /** 退货 */
  PurchaseReturns = 'PURCHASE_RETURNS',
  ReturnsTypeError = 'RETURNS_TYPE_ERROR',
  Unrecognized = 'UNRECOGNIZED',
}

export enum PurchaseStatus {
  /** 已取消 */
  FlowReturnsStatusCancel = 'FLOW_RETURNS_STATUS_CANCEL',
  /** 已完成 */
  FlowReturnsStatusCompleted = 'FLOW_RETURNS_STATUS_COMPLETED',
  FlowReturnsStatusError = 'FLOW_RETURNS_STATUS_ERROR',
  /** 已驳回 v2.9 */
  FlowReturnsStatusReject = 'FLOW_RETURNS_STATUS_REJECT',
  /** 待处理 */
  FlowReturnsStatusWaitProcessed = 'FLOW_RETURNS_STATUS_WAIT_PROCESSED',
  /** 待提交 */
  FlowReturnsStatusWaitSubmit = 'FLOW_RETURNS_STATUS_WAIT_SUBMIT',
  Unrecognized = 'UNRECOGNIZED',
}

export type Quantity = {
  __typename?: 'Quantity'
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  unitQuantity?: Maybe<Scalars['BigDecimal']>
}

export type QuantityInterface = {
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  unitQuantity?: Maybe<Scalars['BigDecimal']>
}

export type Query = {
  __typename?: 'Query'
  _service?: Maybe<_Service>
  /**  增减记录列表 */
  addOrDeleteRecords?: Maybe<Array<Maybe<AddOrDeleteRecords>>>
  allListCustomer?: Maybe<Array<Maybe<CustomerPayload>>>
  auditSecondmentCount?: Maybe<Scalars['Int']>
  /** 品类下拉列表 */
  categoryOption?: Maybe<Array<Maybe<Option>>>
  checkDetail?: Maybe<CheckInfoPayload>
  /** 成品销售:检查是否存在出库操作 */
  checkIfPicking?: Maybe<CheckIfPickingPayload>
  checkOrders?: Maybe<CheckOrderPayload>
  checkPageRecords?: Maybe<CheckRecordPageResultPayload>
  checkStocks?: Maybe<Array<Maybe<CheckStockPayload>>>
  commodities?: Maybe<Array<Maybe<CommodityPayload>>>
  commodityCategories?: Maybe<Array<Maybe<CommodityCategoryPayload>>>
  /**  基础管理-商品分类-|商品类型接口| */
  commodityList?: Maybe<Array<Maybe<Option>>>
  commoditySku?: Maybe<CommoditySkuPayload>
  commoditySkues?: Maybe<Array<Maybe<CommoditySkuPayload>>>
  commoditySpecs?: Maybe<Array<Maybe<CommoditySpecPayload>>>
  commodityStockBatches?: Maybe<Array<Maybe<CommodityStockBatchPayload>>>
  /** 商品类型下拉列表 */
  commodityTypeOption?: Maybe<Array<Maybe<Option>>>
  /** 完成出库确认框 */
  confirmOutOrderStatistics?: Maybe<ConfirmOutOrderStatisticsPayload>
  /** 完成任务确认列表弹框 */
  confirmTaskFinish?: Maybe<ConfirmTaskFinishPayload>
  /**
   * 费用管控：状态统计
   * @deprecated v2.9.0-1对接费用模板移除
   */
  costOrderStatusStatistic?: Maybe<CostOrderStatusStatisticPayload>
  /** 采购: 查询采购订单不同状态记录条数 */
  countAcquire?: Maybe<CountAcquirePayload>
  /** 入库审核: 查询入库订单记录条数(入库审核) */
  countInOrderAudit?: Maybe<CountInOrderPayload>
  /** 入库审核: 查询订单已入库记录条数 */
  countInbounded?: Maybe<Scalars['Long']>
  /**
   * 采购费用: 查询未提交费用单条数
   * @deprecated v2.9.0-1对接费用模板移除
   */
  countNotSubmitCostOrder?: Maybe<CountCostOrderPayload>
  /** v2.8 次品销售:状态统计 */
  countOutOrderStatus?: Maybe<OutOrderStatusCountPayload>
  /** 根据出库类型查询待办数量 */
  countOutOrderType?: Maybe<OutOrderTypeCountPayload>
  /** 出库记录数量 */
  countOutStockRecord?: Maybe<Scalars['Int']>
  /** 查询采购订单不同状态记录条数 */
  countPurchase?: Maybe<CountPurchasePayload>
  /** 状态数量查询接口 */
  countSaleOrderStatus?: Maybe<SaleOrderStatusCountPayload>
  /** 成品销售退货:查询销售退货订单不同状态记录条数 */
  countSaleReturn?: Maybe<CountSaleReturnPayload>
  /** 查询销售退货记录条数 v1.6 */
  countSaleReturnRecord?: Maybe<Scalars['Long']>
  countTransferInStockRecord?: Maybe<Scalars['Int']>
  countTransferOutStockRecord?: Maybe<Scalars['Int']>
  /** 添加商品 */
  createCommodity?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 客户: 客户详情 */
  customer?: Maybe<CustomerPayload>
  /** 客户: 客户分组列表 */
  customerGroups?: Maybe<Array<Maybe<CustomerGroupPayload>>>
  /** 客户: 按条件获取整体客户树(客户下拉接口) */
  customerTree?: Maybe<Array<Maybe<CustomerTreePayload>>>
  /** 客户: 客户分页列表 */
  customers?: Maybe<CustomerPagePayload>
  /** 报损出库商品列表接口 */
  damagedCommodities?: Maybe<Array<Maybe<DamagedCommoditiesPayload>>>
  /** 报损出库数量统计 */
  damagedOrderStatistics?: Maybe<DamagedOrderStatisticsPayload>
  /** 次品下拉选项 */
  defectiveSkuOption?: Maybe<Array<Maybe<Option>>>
  /** 配送费用单: 配送方式下拉 */
  deliveryBillDeliveryMethod?: Maybe<Array<Maybe<StringOption>>>
  /** 配送费用单: 配送费用结算方式下拉 */
  deliveryBillPayMode?: Maybe<Array<Maybe<StringOption>>>
  /** 配送费用单: 配送费用单状态查询 */
  deliveryBillStatusCount?: Maybe<DeliveryBillStatusCountPayload>
  /** 配送费用单: 配送费用类型下拉 */
  deliveryBillType?: Maybe<Array<Maybe<StringOption>>>
  /** 配送单: 获取配送单列表详情 */
  deliveryOrderDetail?: Maybe<DeliveryOrderDetailPayload>
  /** 配送单: 获取配送单列表统计数据 */
  deliveryOrderStatusCount?: Maybe<DeliveryOrderStatusCountPayload>
  /** 任务按钮选项 */
  fabricationOption?: Maybe<Array<Maybe<Option>>>
  /**
   * 采购费用: 查询费用类型下拉框选项
   * @deprecated v2.9.0-1对接费用模板移除
   */
  freightCostOption?: Maybe<Array<Maybe<Option>>>
  /** 查询费用类型：1调拨采用类型 2采购费用类型 */
  freightTypes?: Maybe<Array<Maybe<FreightType>>>
  /** 采购: 查询采购订单详情 */
  getAcquire?: Maybe<AcquirePayload>
  /** 入库审核: 查询订单详情(入库审核) */
  getAuditDetail?: Maybe<AuditInOrderPayload>
  /** 费用模板: 获取字典表数据 */
  getBillDictItem?: Maybe<Array<Maybe<BillDictItemPayload>>>
  /** 根据商品sku id和规格列表查询具体信息 */
  getCommoditySkuAndUnitInfo?: Maybe<CommoditySkuAndUnitPayload>
  /** 商品库存查询 */
  getCommodityStock?: Maybe<Array<Maybe<CommoditySkuStockPayload>>>
  /** 商品转换: 转换订单详情 */
  getConvertDetail?: Maybe<CommodityConvertPayload>
  /** 采购费用: 获取费用单详情 */
  getCostOrderDetail?: Maybe<CostOrderPayload>
  /** 客户: 查询客户基本信息 */
  getCustomerBase?: Maybe<CustomerBasePayload>
  /** 配送费用单: 配送费用单详情 */
  getDeliveryBill?: Maybe<DeliveryBillPayload>
  /**    任务详情记录统计 */
  getFabricationStatistics?: Maybe<FabricationStatistics>
  /** 入库审核: 获取入库记录详情（入库记录） */
  getInOrderRecordDetail?: Maybe<InOrderRecordDetailPayload>
  /** 详情 */
  getMonitorDetail?: Maybe<MonitorPayload>
  /** 出库记录日志 */
  getOutStockRecordLog?: Maybe<OutStockRecordLogPayload>
  /** 详情 */
  getOverviewDetail?: Maybe<OverviewPayload>
  /** 生产管控: 生产管控查询接口 */
  getProduction?: Maybe<ProductionControlPayload>
  getProductionConfig?: Maybe<ProductionConfigPayload>
  /** 生产计划：生产计划详情 */
  getProductionPlanDetail?: Maybe<ProductionPlanDetailPayload>
  /** 采购退货单: 退货单详情 */
  getPurchaseReturn?: Maybe<PurchaseReturnPayload>
  /** 采购退货费用单: 退货费用详情 */
  getReturnsBillDetail?: Maybe<ReturnBillPayload>
  /** 销售收入单: 查询详情 */
  getSaleIncomeOrder?: Maybe<SaleIncomeOrderPayload>
  /** 成品销售退货:退货单详情 */
  getSaleReturn?: Maybe<SaleReturnPayload>
  /**     借调日志 */
  getSecondmentLogs?: Maybe<Array<Maybe<SecondmentLogPayload>>>
  /** 商品转换: 指定状态的数量查询 */
  getStatusCount?: Maybe<Scalars['Int']>
  /** 供应商: 获取供应商基本信息 */
  getSupplierBase?: Maybe<SupplierBasePayload>
  /** 费用模板: 通过触发条件查询费用模板 */
  getTemplate?: Maybe<TemplatePayload>
  /** 查询调拨费用订单详情 */
  getTransferBill?: Maybe<TransferBillPayload>
  /** 查询调拨入库订单 */
  getTransferInOrder?: Maybe<TransferOrderPayload>
  /** 查询调拨入库订单状态值 */
  getTransferInOrderStatus?: Maybe<GetTransferInOrderStatusPayload>
  /** 查询调拨费用单状态值 */
  getTransferOrderFeeStatus?: Maybe<GetTransferOrderFeeStatusPayload>
  /** 查询调拨出库订单 */
  getTransferOutOrder?: Maybe<TransferOrderPayload>
  /** 查询调拨出库订单状态值 */
  getTransferOutOrderStatus?: Maybe<GetTransferOutOrderStatusPayload>
  /** 获取版本地址 */
  getVersion?: Maybe<AppVersionPayload>
  getWorkerSalary?: Maybe<Array<Maybe<ProductionConfigPayload>>>
  idempotenceId?: Maybe<Scalars['String']>
  /** 生产任务:入库单据详情: */
  inOrderDetail?: Maybe<ProductionInOrderPayload>
  /** 查询全部入库订单 */
  inOrderList?: Maybe<ProductionInOrderListPayload>
  /** 入库订单记录 */
  inOrderLog?: Maybe<ProductionInOrderLogListPayload>
  /** 出库订单列表数量统计 */
  inOrderStatusStatistics?: Maybe<OrderStatusStatisticsPayload>
  /** 入库审核: 入库记录 */
  inboundRecord?: Maybe<InboundListPayload>
  /** 成品销售退货:销售退货入库记录（以前的接口，不晓得哪里有用到） */
  inboundRecords?: Maybe<Array<Maybe<InboundListPayload>>>
  /** 原料/辅料退料->信息保存 */
  insertMaterialReturns?: Maybe<Scalars['ID']>
  /** 查询生产任务列表 */
  keywordTasks?: Maybe<TaskPageResult>
  /** 采购: 查询采购订单 */
  listAcquire?: Maybe<AcquirePageResultPayload>
  /** 组织: 选择所属组织 */
  listBelongOrg?: Maybe<Array<Maybe<BelongOrgPayload>>>
  /** 业务管控: 业务管控查询接口 */
  listBusiness?: Maybe<Array<Maybe<BusinessPayload>>>
  /** 商品列表信息品类（商品名称查询） */
  listCommodities?: Maybe<Array<Maybe<CommodityPayload>>>
  /** 商品品类列表信息 */
  listCommodityCategoryOption?: Maybe<Array<Maybe<CommodityCategoryPayload>>>
  /** 品类id查询商品列表信息 */
  listCommodityOptionByCategoryId?: Maybe<Array<Maybe<CommodityPayload>>>
  /** 商品规格选项id数据和文字描述映射关系列表信息 */
  listCommoditySkuAndUnit?: Maybe<Array<Maybe<CommoditySkuAndUnitPayload>>>
  /** 商品规格和商品规格选项列表信息 */
  listCommoditySpecAndOption?: Maybe<Array<Maybe<CommoditySpecPayload>>>
  listCommoditySpecAndOptionByCommodityId?: Maybe<
    Array<Maybe<CommoditySpecPayload>>
  >
  /** 商品类型单位下拉列表 */
  listCommodityUnitOption?: Maybe<Array<Maybe<Option>>>
  /** 客户: 客户列表 */
  listCustomer?: Maybe<Array<Maybe<CustomerPayload>>>
  /** 生产管控: 库管情况 */
  listKeeperCondition?: Maybe<Array<Maybe<KeeperConditionPayload>>>
  /** 生产管控: 组长情况 */
  listLeaderCondition?: Maybe<Array<Maybe<LeaderConditionPayload>>>
  listLogs?: Maybe<ListLogsPayload>
  /** 业务管控: 组织下有客户的渠道列表 */
  listOrgChannel?: Maybe<Array<Maybe<Option>>>
  /** 原件销售:选择销售商品-批次list */
  listOriginalSaleCommodityBatch?: Maybe<
    Array<Maybe<ListOriginalSaleCommodityBatchPayload>>
  >
  /** 原件销售:选择销售商品-品类list */
  listOriginalSaleCommodityCategory?: Maybe<
    Array<Maybe<ListOriginalSaleCommodityCategoryPayload>>
  >
  /** 原件销售:选择销售商品-商品名称spu list */
  listOriginalSaleCommoditySPU?: Maybe<
    Array<Maybe<ListOriginalSaleCommoditySpuPayload>>
  >
  listProductLeader?: Maybe<Array<Maybe<Option>>>
  /** 查询快捷标签 */
  listQuickLabel?: Maybe<ListQuickLabelPayload>
  /** 查询推荐标签 */
  listRecommendLabel?: Maybe<ListRecommendLabelPayload>
  /** 原件销售:选择销售商品-查询 */
  listSPUByCommodityName?: Maybe<
    Array<Maybe<ListOriginalSaleCommoditySpuPayload>>
  >
  /** 获取成品销售下的商品列表 */
  listSaleOrderCommodities?: Maybe<
    Array<Maybe<ProductionTaskCommoditiesPayload>>
  >
  /** 成品销售退货:选择商品 */
  listSaleReturnCommodities?: Maybe<
    Array<Maybe<ListSaleReturnCommoditiesPayload>>
  >
  /** 查询调拨费用订单 */
  listTransferBill?: Maybe<ListTransferBillPayload>
  /** 查询调拨入库订单列表 */
  listTransferInOrder?: Maybe<ListTransferOrderPayload>
  /** 调入选项下拉 */
  listTransferOptions?: Maybe<Array<Maybe<TransferOptionsPayload>>>
  /** 调拨组织列表 */
  listTransferOrgList?: Maybe<Array<Maybe<ListTransferOrgListPayload>>>
  /** 查询调拨出库订单 */
  listTransferOutOrder?: Maybe<ListTransferOrderPayload>
  /**  1.9新增 查询用户组织列表 */
  listUserOrg?: Maybe<Array<Maybe<Organization>>>
  listWarehouse?: Maybe<Array<Maybe<WarehousePayload>>>
  /** 位置: 获取省市区列表 */
  locationInformation?: Maybe<ListLocationPayload>
  /** 位置: 模糊搜索地址 */
  locationSearch?: Maybe<ListSearchedLocationPayload>
  loginUserInfo?: Maybe<UserPayload>
  /** 各状态数量 */
  monitorStatusOption?: Maybe<MonitorStatusPayload>
  /** 客户: 无客户信息接口查询 */
  orgCustomer?: Maybe<CustomerPayload>
  /** 组织: 获取组织树 */
  orgTree?: Maybe<Scalars['String']>
  /** 商品产地下拉列表 */
  originOption?: Maybe<Array<Maybe<Option>>>
  /** 原件销售:原件销售详情 */
  originalSaleOrder?: Maybe<OriginalSalePayload>
  /** 原件销售:列表页状态统计 */
  originalSaleStatus?: Maybe<OriginalSaleStatusPayload>
  /** v2.8 次品销售:详情页 */
  outOrder?: Maybe<OutOrderPayload>
  /** 生产任务:出库单据详情: */
  outOrderDetail?: Maybe<ProductionOutOrderPayload>
  /** 查询订单商品项 */
  outOrderItems?: Maybe<Array<Maybe<OutOrderItemPayload>>>
  /** 查询全部出库订单 */
  outOrderList?: Maybe<Array<Maybe<ProductionOutOrderPayload>>>
  /** 查询出库订单记录 */
  outOrderLog?: Maybe<Array<Maybe<ProductionOutOrderLogPayload>>>
  /** 查询订单操作日志 */
  outOrderLogs?: Maybe<Array<Maybe<OutOrderLogPayLoad>>>
  /** 出库订单列表数量统计 */
  outOrderStatusStatistics?: Maybe<OrderStatusStatisticsPayload>
  outStockRecord?: Maybe<OutStockRecordPayload>
  outStockRecordDetail?: Maybe<OutStockRecordListPayload>
  /** 查询订单出库记录列表 */
  outStockRecords?: Maybe<Array<Maybe<OutStockRecordPayload>>>
  /** 状态数量统计 */
  overviewStatusOption?: Maybe<OverviewStatusPayload>
  /** 商品转换: 分页查询商品转换待审核列表 */
  pageAuditCommodityConvert?: Maybe<PageCommodityConvertPayload>
  /** 入库审核: 查询待审核入库订单列表(入库审核) */
  pageAuditInOrder?: Maybe<PageInAuditRecordPayload>
  /** 商品管理列表 */
  pageCommodity?: Maybe<PageCommodityPayload>
  /** 商品转换: 分页查询商品转换列表 */
  pageCommodityConvert?: Maybe<PageCommodityConvertPayload>
  /** 库存商品: 分页查询库存 */
  pageCommodityStockBatch?: Maybe<PageCommodityStockBatchPayload>
  /** 采购费用: 分页查询费用单信息 */
  pageCostOrder?: Maybe<PageCostOrderPayload>
  pageDamageOutOrder?: Maybe<OutOrderPagePayload>
  /** 报损出库（区别于其他操作的报损出库） */
  pageDamagedOrder?: Maybe<DamagedOrderPagePayload>
  /** v2.8 次品销售:列表页 */
  pageDefectiveSaleOrder?: Maybe<OutOrderPagePayload>
  /** 配送费用单: 配送费用单列表 */
  pageDeliveryBill?: Maybe<PageDeliveryBillPayload>
  /** 配送单: 获取配送单列表 */
  pageDeliveryOrder?: Maybe<PageDeliveryOrderPayload>
  /** 入库记录: 入库记录列表（入库记录） */
  pageInOrderRecord?: Maybe<PageInOrderRecordPayload>
  /** 分页查询 */
  pageMonitor?: Maybe<PageMonitorResult>
  /** 更多商品列表接口 */
  pageMoreCommodities?: Maybe<MoreCommoditiesPageResult>
  /** 未添加商品列表 */
  pageNoCommodity?: Maybe<PageNoCommodityPayload>
  pageOrgSecondment?: Maybe<SecondmentQueryPayload>
  /** 原件销售:列表页及查询 */
  pageOriginalSale?: Maybe<PageOriginalSalePayload>
  /** 查询其他入库订单 */
  pageOtherInOrder?: Maybe<PageOtherInOrderPayload>
  pageOtherOutOrder?: Maybe<OutOrderPagePayload>
  /** 出库申请单分页接口 */
  pageOutOrder?: Maybe<OutOrderPagePayload>
  /** 出库记录: 出库记录列表（出库记录） */
  pageOutStockRecord?: Maybe<PageOutOrderRecordPayload>
  /** 分页查询概览 */
  pageOverview?: Maybe<PageOverviewResult>
  /** 生产计划：计划列表 */
  pageProductionPlan?: Maybe<PlanPageResult>
  /** 采购退货单: 退货单列表 */
  pagePurchaseReturn?: Maybe<PagePurchaseReturnPayload>
  /** 采购退货费用单: 退货费用单分页 */
  pageReturnsBill?: Maybe<PageReturnBillPayload>
  /** 销售收入单: 列表 */
  pageSaleIncomeOrder?: Maybe<PageSaleIncomeOrderPayload>
  /** 成品销售:列表分页 */
  pageSaleOrder?: Maybe<SaleOrderPagePayload>
  /** 成品销售退货:查询销售退货订单列表 */
  pageSaleReturn?: Maybe<SaleReturnPagePayload>
  pageStock?: Maybe<StockPageResultPayload>
  /** 库存调整:列表页 */
  pageStockAdjustment?: Maybe<PageStockAdjustmentPayload>
  /** 商品批次分页查询 */
  pageStockBatch?: Maybe<PageStockBatchPayLoad>
  /** 分页查询员工信息 */
  pageUser?: Maybe<PageUserPayload>
  pageUserSecondment?: Maybe<SecondmentQueryPayload>
  /** 废旧品销售分页列表接口 */
  pageWasteSaleOrder?: Maybe<PageWasteSaleOrderPayload>
  /** 查询付款方式的下拉列表接口：如 月结 半月结 */
  payModes?: Maybe<Array<Maybe<PayMode>>>
  permissions?: Maybe<Array<Maybe<PermissionPayLoad>>>
  /** 任务商品选择列表接口 */
  planCommodites?: Maybe<Array<Maybe<CommoditySkuPayload>>>
  positions?: Maybe<Array<Maybe<PositionPayload>>>
  /** 操作日志列表 */
  productionPlanLogs?: Maybe<Array<Maybe<ProductionPlanLogPayLoad>>>
  /** 生产计划状态数量统计 */
  productionPlanStatusOption?: Maybe<ProductionPlanStatus>
  /** 查询采购订单详情 */
  purchaseDetail?: Maybe<PurchaseOrderPayload>
  /** 入库审核: 采购入库记录 */
  purchaseInOrderLog?: Maybe<ProductionInOrderLogListPayload>
  /** 查询采购订单 */
  purchaseList?: Maybe<PurchasePageResultPayload>
  /** 采购退货单: 退货商品选择 */
  purchaseReturnCommodities?: Maybe<Array<Maybe<CommoditySkuStock>>>
  /** 配送单: 选择配送货物 */
  querySaleGoodsList?: Maybe<Array<Maybe<SaleGoodsInfoListPayload>>>
  /** 采购退货单: 状态统计 */
  returnStatusStatistic?: Maybe<ReturnStatusStatisticPayload>
  /** 销售收入单: 工作台角标统计 */
  saleIncomeOrderStatistic?: Maybe<SaleIncomeOrderStatisticPayload>
  /** 销售收入单: 列表页状态统计 */
  saleIncomeOrderStatusStatistic?: Maybe<SaleIncomeOrderStatusStatisticPayload>
  /** 成品销售:订单详情 */
  saleOrder?: Maybe<SaleOrderPayload>
  /** 成品销售:驳回申请统计角标 */
  saleRejectStatistic?: Maybe<Scalars['Int']>
  secondmentDetail?: Maybe<SecondmentPayload>
  secondmentStocks?: Maybe<Array<Maybe<SecondmentStockPayload>>>
  skuStocks?: Maybe<Array<Maybe<SkuStockPayload>>>
  /** sku列表接口（新） */
  skues?: Maybe<Array<Maybe<CommoditySkuAndUnitPayload>>>
  specList?: Maybe<Array<Maybe<CommoditySpecPayload>>>
  /** 聚合费用状态统计: 各类型费用单状态数量查询 通过业务类型+状态去确定数量统计 */
  statusGroupCount?: Maybe<Array<Maybe<StatusGroupCountPayload>>>
  /** 库存调整:状态统计 */
  stockAdjustmentStatus?: Maybe<StockAdjustmentStatusPayload>
  stockBatches?: Maybe<Array<Maybe<StockBatchPayload>>>
  /**     库存列表（生产领料） */
  stocks?: Maybe<Array<Maybe<Stock>>>
  subsidiary?: Maybe<SubsidiaryDetailPayload>
  subsidiaryNameRepeat?: Maybe<Scalars['Int']>
  subsidiaryPageResult?: Maybe<SubsidiaryPagePayload>
  /** 供应商: 供应商详情接口 */
  supplier?: Maybe<SupplierPayload>
  supplierCommodityList?: Maybe<Array<Maybe<Option>>>
  /** 供应商: 供应商分页列表接口 */
  supplierPages?: Maybe<SupplierPagePayload>
  /** supplier 类型列表接口 */
  supplierTypes?: Maybe<Array<Maybe<SupplierType>>>
  /** 供应商: 供应商下拉列表接口 */
  suppliers: Array<Maybe<SupplierPayload>>
  systemTime?: Maybe<Scalars['Long']>
  /** 生产任务:详情 */
  task?: Maybe<Task>
  /** 原料辅料领料商品列表接口 */
  taskAcquireMaterialCommodities?: Maybe<
    Array<Maybe<TaskAcquireMaterialCommodityPayload>>
  >
  /** 任务入库商品选择 退料与其他类型隔开 */
  taskInCommodities?: Maybe<Array<Maybe<CommoditySkuPayload>>>
  /**     任务明细列表 */
  taskItems?: Maybe<Array<Maybe<TaskItem>>>
  /**     生产任务操作记录 */
  taskLogs?: Maybe<Array<Maybe<TaskLog>>>
  /** 生产任务:处理通知统计角标 */
  taskNoticeStatistic?: Maybe<Scalars['Int']>
  /** 原料辅料退料商品列表接口 */
  taskReturnMaterialCommodities?: Maybe<
    Array<Maybe<TaskReturnMaterialCommodityPayload>>
  >
  /** 生产任务:列表状态数量统计 */
  taskStatistics?: Maybe<TaskStatistics>
  /** 生产任务:列表 */
  tasks?: Maybe<TaskPageResult>
  /** 调拨费用审核角标 */
  transferBillSummary?: Maybe<TransferBillSummaryPayload>
  transferInStockRecordDetail?: Maybe<InStockRecordListPayload>
  userBaseInfo?: Maybe<UserPayload>
  userExist?: Maybe<Scalars['Int']>
  userInformation?: Maybe<UserPayload>
  userInformationList?: Maybe<UserPageResult>
  /** 用户计划变更数量统计 */
  userPlanChangedSummary?: Maybe<PlanChangedSummary>
  userWarehouse?: Maybe<Array<Maybe<WarehousePayload>>>
  /** 商品品种下拉列表 */
  varietyOption?: Maybe<Array<Maybe<Option>>>
  verifySpecName?: Maybe<Scalars['Boolean']>
  warehouse?: Maybe<WarehousePayload>
  /** 废旧品销售详情接口 */
  wasteSaleOrder?: Maybe<WasteSaleOrder>
  /** 废旧品销售状态数量统计 */
  wasteSaleOrderStats?: Maybe<WasteSaleOrderStatsPayload>
}

export type QueryAddOrDeleteRecordsArgs = {
  addOrDeleteRecordsInput?: InputMaybe<AddOrDeleteRecordsInput>
}

export type QueryCheckDetailArgs = {
  checkId?: InputMaybe<Scalars['ID']>
}

export type QueryCheckIfPickingArgs = {
  checkIfPickingInput?: InputMaybe<CheckIfPickingInput>
}

export type QueryCheckOrdersArgs = {
  checkId?: InputMaybe<Scalars['ID']>
}

export type QueryCheckPageRecordsArgs = {
  checkRecordConfitionInput?: InputMaybe<CheckRecordConfitionInput>
  page?: InputMaybe<Page>
}

export type QueryCheckStocksArgs = {
  checkConditionInput?: InputMaybe<CheckConditionInput>
}

export type QueryCommoditiesArgs = {
  listCommodityInput?: InputMaybe<ListCommodityInput>
}

export type QueryCommodityCategoriesArgs = {
  listCommodityCategoryInput?: InputMaybe<ListCommodityCategoryInput>
}

export type QueryCommoditySkuArgs = {
  getCommoditySkuInput?: InputMaybe<GetCommoditySkuInput>
}

export type QueryCommoditySkuesArgs = {
  listCommoditySkuInput?: InputMaybe<ListCommoditySkuInput>
}

export type QueryCommoditySpecsArgs = {
  listCommoditySpecInput?: InputMaybe<ListCommoditySpecInput>
}

export type QueryCommodityStockBatchesArgs = {
  listCommodityStockBatchInput?: InputMaybe<ListCommodityStockBatchInput>
}

export type QueryConfirmOutOrderStatisticsArgs = {
  outOrderId: Scalars['ID']
}

export type QueryConfirmTaskFinishArgs = {
  taskId: Scalars['ID']
}

export type QueryCountAcquireArgs = {
  countAcquireFilter?: InputMaybe<CountAcquireFilter>
}

export type QueryCountInboundedArgs = {
  inOrderDetailInput?: InputMaybe<InOrderDetailInput>
}

export type QueryCountOutOrderStatusArgs = {
  countOutOrderStatusInput?: InputMaybe<CountOutOrderStatusInput>
}

export type QueryCountOutOrderTypeArgs = {
  countOutOrderTypeInput?: InputMaybe<CountOutOrderTypeInput>
}

export type QueryCountOutStockRecordArgs = {
  countOutStockRecordInput?: InputMaybe<CountOutStockRecordInput>
}

export type QueryCountPurchaseArgs = {
  countPurchaseFilter?: InputMaybe<CountPurchaseFilter>
}

export type QueryCountSaleOrderStatusArgs = {
  countSaleOrderStatusInput?: InputMaybe<CountSaleOrderStatusInput>
}

export type QueryCountSaleReturnArgs = {
  countSaleReturnInput?: InputMaybe<CountSaleReturnInput>
}

export type QueryCountSaleReturnRecordArgs = {
  saleOrderInput?: InputMaybe<SaleOrderInput>
}

export type QueryCountTransferInStockRecordArgs = {
  queryRecordListInput?: InputMaybe<QueryRecordListInput>
}

export type QueryCountTransferOutStockRecordArgs = {
  queryOutRecordListInput?: InputMaybe<QueryOutRecordListInput>
}

export type QueryCreateCommodityArgs = {
  createCommodityInput?: InputMaybe<Array<InputMaybe<CreateCommodityInput>>>
}

export type QueryCustomerArgs = {
  customerId?: InputMaybe<Scalars['Int']>
}

export type QueryCustomerTreeArgs = {
  customerTreeInput?: InputMaybe<CustomerTreeInput>
}

export type QueryCustomersArgs = {
  customersInput?: InputMaybe<CustomersInput>
  page?: InputMaybe<Page>
}

export type QueryDamagedCommoditiesArgs = {
  damagedCommoditiesInput?: InputMaybe<DamagedCommoditiesInput>
}

export type QueryDamagedOrderStatisticsArgs = {
  damagedOrderStatisticsInput?: InputMaybe<DamagedOrderStatisticsInput>
}

export type QueryDefectiveSkuOptionArgs = {
  defectiveSkuOptionInput?: InputMaybe<DefectiveSkuOptionInput>
}

export type QueryDeliveryOrderDetailArgs = {
  deliveryOrderDetailQueryInput?: InputMaybe<DeliveryOrderDetailQueryInput>
}

export type QueryFabricationOptionArgs = {
  code?: InputMaybe<Scalars['Int']>
}

export type QueryGetAcquireArgs = {
  getAcquireInput: GetAcquireInput
}

export type QueryGetAuditDetailArgs = {
  inOrderDetailInput?: InputMaybe<InOrderDetailInput>
}

export type QueryGetBillDictItemArgs = {
  input?: InputMaybe<GetBillDictItemInput>
}

export type QueryGetCommoditySkuAndUnitInfoArgs = {
  commoditySkuAndUnitInput?: InputMaybe<CommoditySkuAndUnitInput>
}

export type QueryGetCommodityStockArgs = {
  commoditySkuStockInput?: InputMaybe<CommoditySkuStockInput>
}

export type QueryGetConvertDetailArgs = {
  input?: InputMaybe<OrderIdInput>
}

export type QueryGetCostOrderDetailArgs = {
  billId: Scalars['ID']
}

export type QueryGetCustomerBaseArgs = {
  getCustomerBaseInput?: InputMaybe<GetCustomerBaseInput>
}

export type QueryGetDeliveryBillArgs = {
  getDeliveryBillInput?: InputMaybe<GetDeliveryBillInput>
}

export type QueryGetFabricationStatisticsArgs = {
  taskId?: InputMaybe<Scalars['ID']>
}

export type QueryGetInOrderRecordDetailArgs = {
  inOrderDetailInput?: InputMaybe<InOrderDetailInput>
}

export type QueryGetMonitorDetailArgs = {
  input?: InputMaybe<MonitorDetailInput>
}

export type QueryGetOutStockRecordLogArgs = {
  getOutStockRecordLogInput?: InputMaybe<GetOutStockRecordLogInput>
}

export type QueryGetOverviewDetailArgs = {
  input?: InputMaybe<OverviewDetailInput>
}

export type QueryGetProductionArgs = {
  input?: InputMaybe<GetProductionInput>
}

export type QueryGetProductionPlanDetailArgs = {
  planId?: InputMaybe<Scalars['ID']>
}

export type QueryGetPurchaseReturnArgs = {
  getPurchaseReturnInput?: InputMaybe<GetPurchaseReturnInput>
}

export type QueryGetReturnsBillDetailArgs = {
  getReturnsBillDetailInput?: InputMaybe<GetReturnsBillDetailInput>
}

export type QueryGetSaleIncomeOrderArgs = {
  input?: InputMaybe<GetSaleIncomeInput>
}

export type QueryGetSaleReturnArgs = {
  getSaleReturnInput?: InputMaybe<GetSaleReturnInput>
}

export type QueryGetSecondmentLogsArgs = {
  secondmentId: Scalars['ID']
}

export type QueryGetStatusCountArgs = {
  input?: InputMaybe<GetStatusCountInput>
}

export type QueryGetSupplierBaseArgs = {
  getSupplierBaseInput?: InputMaybe<GetSupplierBaseInput>
}

export type QueryGetTemplateArgs = {
  input?: InputMaybe<GetTemplateInput>
}

export type QueryGetTransferBillArgs = {
  flowId?: InputMaybe<Scalars['ID']>
}

export type QueryGetTransferInOrderArgs = {
  flowId?: InputMaybe<Scalars['ID']>
}

export type QueryGetTransferInOrderStatusArgs = {
  getTransferInOrderStatusInput?: InputMaybe<GetTransferInOrderStatusInput>
}

export type QueryGetTransferOrderFeeStatusArgs = {
  getTransferBillStatusInput?: InputMaybe<GetTransferBillStatusInput>
}

export type QueryGetTransferOutOrderArgs = {
  flowId?: InputMaybe<Scalars['ID']>
}

export type QueryGetTransferOutOrderStatusArgs = {
  getTransferOutOrderStatusInput?: InputMaybe<GetTransferOutOrderStatusInput>
}

export type QueryGetVersionArgs = {
  devicePlatformInput?: InputMaybe<DevicePlatformInput>
}

export type QueryInOrderDetailArgs = {
  inOrderId: Scalars['ID']
}

export type QueryInOrderListArgs = {
  productionInOrderListInput: ProductionInOrderListInput
}

export type QueryInOrderLogArgs = {
  inOrderId: Scalars['ID']
}

export type QueryInOrderStatusStatisticsArgs = {
  orderStatusStatisticsInput?: InputMaybe<OrderStatusStatisticsInput>
}

export type QueryInboundRecordArgs = {
  inOrderDetailInput?: InputMaybe<InOrderDetailInput>
}

export type QueryInboundRecordsArgs = {
  outOrderId: Scalars['ID']
}

export type QueryInsertMaterialReturnsArgs = {
  insertMaterialReturnsInput?: InputMaybe<InsertMaterialReturnsInput>
}

export type QueryKeywordTasksArgs = {
  keyword?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Page>
}

export type QueryListAcquireArgs = {
  listAcquireFilter?: InputMaybe<ListAcquireFilter>
  page?: InputMaybe<Page>
}

export type QueryListBelongOrgArgs = {
  input?: InputMaybe<ListBelongOrgInput>
}

export type QueryListBusinessArgs = {
  input?: InputMaybe<ListBusinessInput>
}

export type QueryListCommoditiesArgs = {
  commodityName?: InputMaybe<Scalars['String']>
}

export type QueryListCommodityOptionByCategoryIdArgs = {
  categoryId?: InputMaybe<Scalars['Int']>
}

export type QueryListCommoditySkuAndUnitArgs = {
  commodityId?: InputMaybe<Scalars['Int']>
}

export type QueryListCommoditySpecAndOptionArgs = {
  commodityId?: InputMaybe<Scalars['Int']>
}

export type QueryListCommoditySpecAndOptionByCommodityIdArgs = {
  commodityId?: InputMaybe<Scalars['Int']>
}

export type QueryListCommodityUnitOptionArgs = {
  listCommodityUnitOptionInput?: InputMaybe<ListCommodityUnitOptionInput>
}

export type QueryListCustomerArgs = {
  customerListInput?: InputMaybe<CustomerListInput>
}

export type QueryListKeeperConditionArgs = {
  input?: InputMaybe<GetProductionInput>
}

export type QueryListLeaderConditionArgs = {
  input?: InputMaybe<GetProductionInput>
}

export type QueryListLogsArgs = {
  listLogsInput?: InputMaybe<ListLogsInput>
}

export type QueryListOriginalSaleCommodityBatchArgs = {
  listOriginalSaleCommodityBatchInput?: InputMaybe<ListOriginalSaleCommodityBatchInput>
}

export type QueryListOriginalSaleCommodityCategoryArgs = {
  listOriginalSaleCommodityCategoryInput?: InputMaybe<ListOriginalSaleCommodityCategoryInput>
}

export type QueryListOriginalSaleCommoditySpuArgs = {
  listOriginalSaleCommoditySPUInput?: InputMaybe<ListOriginalSaleCommoditySpuInput>
}

export type QueryListProductLeaderArgs = {
  productInput: ProductInput
}

export type QueryListQuickLabelArgs = {
  listQuickLabelInput?: InputMaybe<ListQuickLabelInput>
  page?: InputMaybe<Page>
}

export type QueryListRecommendLabelArgs = {
  listRecommendLabelInput?: InputMaybe<ListRecommendLabelInput>
  page?: InputMaybe<Page>
}

export type QueryListSpuByCommodityNameArgs = {
  listSPUByCommodityNameInput?: InputMaybe<ListSpuByCommodityNameInput>
}

export type QueryListSaleOrderCommoditiesArgs = {
  outOrderId?: InputMaybe<Scalars['ID']>
}

export type QueryListSaleReturnCommoditiesArgs = {
  listSaleReturnCommoditiesInput?: InputMaybe<ListSaleReturnCommoditiesInput>
}

export type QueryListTransferBillArgs = {
  listTransferBillInput?: InputMaybe<ListTransferBillInput>
  page?: InputMaybe<Page>
}

export type QueryListTransferInOrderArgs = {
  listTransferOrderInput?: InputMaybe<ListTransferOrderInput>
  page?: InputMaybe<Page>
}

export type QueryListTransferOrgListArgs = {
  listTransferOrgListInput?: InputMaybe<ListTransferOrgListInput>
}

export type QueryListTransferOutOrderArgs = {
  listTransferOrderInput?: InputMaybe<ListTransferOrderInput>
  page?: InputMaybe<Page>
}

export type QueryListUserOrgArgs = {
  listUserOrgInput?: InputMaybe<ListUserOrgInput>
  page?: InputMaybe<Page>
}

export type QueryLocationInformationArgs = {
  input?: InputMaybe<LocationInput>
}

export type QueryLocationSearchArgs = {
  input?: InputMaybe<LocationSearchInput>
}

export type QueryMonitorStatusOptionArgs = {
  input?: InputMaybe<MonitorStatusInput>
}

export type QueryOrgTreeArgs = {
  input?: InputMaybe<Scalars['String']>
}

export type QueryOriginOptionArgs = {
  categoryId: Scalars['Int']
}

export type QueryOriginalSaleOrderArgs = {
  originalSaleOrderInput?: InputMaybe<OriginalSaleOrderInput>
}

export type QueryOriginalSaleStatusArgs = {
  originalSaleStatusInput?: InputMaybe<OriginalSaleStatusInput>
}

export type QueryOutOrderArgs = {
  outOrderInput?: InputMaybe<OutOrderInput>
}

export type QueryOutOrderDetailArgs = {
  outOrderId: Scalars['ID']
}

export type QueryOutOrderItemsArgs = {
  outOrderItemsInput?: InputMaybe<OutOrderItemsInput>
}

export type QueryOutOrderListArgs = {
  productionOutOrderListInput: ProductionOutOrderListInput
}

export type QueryOutOrderLogArgs = {
  outOrderId: Scalars['ID']
}

export type QueryOutOrderLogsArgs = {
  outOrderLogsInput?: InputMaybe<OutOrderLogsInput>
}

export type QueryOutOrderStatusStatisticsArgs = {
  orderStatusStatisticsInput?: InputMaybe<OrderStatusStatisticsInput>
}

export type QueryOutStockRecordArgs = {
  outStockRecordInput?: InputMaybe<OutStockRecordInput>
}

export type QueryOutStockRecordDetailArgs = {
  queryOutRecordListInput?: InputMaybe<QueryOutRecordListInput>
}

export type QueryOutStockRecordsArgs = {
  outStockRecordsInput?: InputMaybe<OutStockRecordsInput>
}

export type QueryOverviewStatusOptionArgs = {
  input?: InputMaybe<OverviewStatusInput>
}

export type QueryPageAuditCommodityConvertArgs = {
  page?: InputMaybe<Page>
}

export type QueryPageAuditInOrderArgs = {
  commodityType: Scalars['Int']
  page?: InputMaybe<Page>
}

export type QueryPageCommodityArgs = {
  page?: InputMaybe<Page>
  pageCommodityInput?: InputMaybe<PageCommodityInput>
}

export type QueryPageCommodityConvertArgs = {
  input?: InputMaybe<PageCommodityConvertInput>
  page?: InputMaybe<Page>
}

export type QueryPageCommodityStockBatchArgs = {
  input?: InputMaybe<PageCommodityStockBatchInput>
  page: Page
}

export type QueryPageCostOrderArgs = {
  page?: InputMaybe<Page>
  pageCostOrderInput?: InputMaybe<PageCostOrderInput>
}

export type QueryPageDamageOutOrderArgs = {
  page?: InputMaybe<Page>
  pageDamageOutOrderInput?: InputMaybe<PageDamageOutOrderInput>
}

export type QueryPageDamagedOrderArgs = {
  page?: InputMaybe<Page>
  pageDamagedOrderInput?: InputMaybe<PageDamagedOrderInput>
}

export type QueryPageDefectiveSaleOrderArgs = {
  page?: InputMaybe<Page>
  pageDefectiveSaleOrder?: InputMaybe<PageDefectiveSaleOrderInput>
}

export type QueryPageDeliveryBillArgs = {
  page?: InputMaybe<Page>
  pageDeliveryBillInput?: InputMaybe<PageDeliveryBillInput>
}

export type QueryPageDeliveryOrderArgs = {
  deliveryOrderQueryInput?: InputMaybe<DeliveryOrderQueryInput>
  page?: InputMaybe<Page>
}

export type QueryPageInOrderRecordArgs = {
  inOrderRecordCondition?: InputMaybe<InOrderRecordFilter>
  page?: InputMaybe<Page>
}

export type QueryPageMonitorArgs = {
  input?: InputMaybe<PageMonitorInput>
  page?: InputMaybe<Page>
}

export type QueryPageMoreCommoditiesArgs = {
  page?: InputMaybe<Page>
  pageMoreCommoditiesInput?: InputMaybe<PageMoreCommoditiesInput>
}

export type QueryPageNoCommodityArgs = {
  page?: InputMaybe<Page>
  pageNoCommodityInput?: InputMaybe<PageNoCommodityInput>
}

export type QueryPageOrgSecondmentArgs = {
  page?: InputMaybe<Page>
  secondmentPageInput?: InputMaybe<SecondmentPageInput>
}

export type QueryPageOriginalSaleArgs = {
  page?: InputMaybe<Page>
  pageOriginalSaleInput?: InputMaybe<PageOriginalSaleInput>
}

export type QueryPageOtherInOrderArgs = {
  page?: InputMaybe<Page>
  pageOtherInOrderInput?: InputMaybe<PageOtherInOrderInput>
}

export type QueryPageOtherOutOrderArgs = {
  page?: InputMaybe<Page>
  pageOtherOutOrderInput?: InputMaybe<PageOtherOutOrderInput>
}

export type QueryPageOutOrderArgs = {
  page?: InputMaybe<Page>
  pageOutOrderInput?: InputMaybe<PageOutOrderInput>
}

export type QueryPageOutStockRecordArgs = {
  page?: InputMaybe<Page>
  pageOutStockRecordInput?: InputMaybe<PageOutStockRecordInput>
}

export type QueryPageOverviewArgs = {
  input?: InputMaybe<PageOverviewInput>
  page?: InputMaybe<Page>
}

export type QueryPageProductionPlanArgs = {
  page?: InputMaybe<Page>
  planQueryInput?: InputMaybe<PlanQueryInput>
}

export type QueryPagePurchaseReturnArgs = {
  page?: InputMaybe<Page>
  pagePurchaseReturnInput?: InputMaybe<PagePurchaseReturnInput>
}

export type QueryPageReturnsBillArgs = {
  page?: InputMaybe<Page>
  pageReturnsBillInput?: InputMaybe<PageReturnsBillInput>
}

export type QueryPageSaleIncomeOrderArgs = {
  page?: InputMaybe<Page>
  pageSaleIncomeOrderInput?: InputMaybe<PageSaleIncomeOrderInput>
}

export type QueryPageSaleOrderArgs = {
  page?: InputMaybe<Page>
  queryQueryOrderInput?: InputMaybe<QuerySaleOrderInput>
}

export type QueryPageSaleReturnArgs = {
  page?: InputMaybe<Page>
  pageSaleReturnInput?: InputMaybe<PageSaleReturnInput>
}

export type QueryPageStockArgs = {
  page?: InputMaybe<Page>
  stockConditionInput?: InputMaybe<StockConditionInput>
}

export type QueryPageStockAdjustmentArgs = {
  page?: InputMaybe<Page>
  pageStockAdjustmentInput?: InputMaybe<PageStockAdjustmentInput>
}

export type QueryPageStockBatchArgs = {
  page?: InputMaybe<Page>
  pageStockBatchInput?: InputMaybe<PageStockBatchInput>
}

export type QueryPageUserArgs = {
  input: PageUserInput
  page: Page
}

export type QueryPageUserSecondmentArgs = {
  page?: InputMaybe<Page>
  secondmentPageInput: SecondmentPageInput
}

export type QueryPageWasteSaleOrderArgs = {
  page?: InputMaybe<Page>
  pageWasteSaleOrderInput?: InputMaybe<PageWasteSaleOrderInput>
}

export type QueryPlanCommoditesArgs = {
  listPlanCommodityInput?: InputMaybe<ListPlanCommoditySkuInput>
}

export type QueryProductionPlanLogsArgs = {
  planId?: InputMaybe<Scalars['ID']>
}

export type QueryProductionPlanStatusOptionArgs = {
  planDate?: InputMaybe<Scalars['Long']>
}

export type QueryPurchaseDetailArgs = {
  inOrderId: Scalars['ID']
}

export type QueryPurchaseInOrderLogArgs = {
  inOrderId: Scalars['ID']
}

export type QueryPurchaseListArgs = {
  listCondition?: InputMaybe<PurchaseListFilter>
  page?: InputMaybe<Page>
}

export type QueryPurchaseReturnCommoditiesArgs = {
  purchaseReturnCommoditiesInput?: InputMaybe<PurchaseReturnCommoditiesInput>
}

export type QueryQuerySaleGoodsListArgs = {
  saleGoodsListQueryInput?: InputMaybe<SaleGoodsListQueryInput>
}

export type QueryReturnStatusStatisticArgs = {
  returnStatusStatisticInput?: InputMaybe<ReturnStatusStatisticInput>
}

export type QuerySaleIncomeOrderStatusStatisticArgs = {
  saleIncomeOrderStatusStatisticInput?: InputMaybe<SaleIncomeOrderStatusStatisticInput>
}

export type QuerySaleOrderArgs = {
  saleOrderInput?: InputMaybe<SaleOrderInput>
}

export type QuerySecondmentDetailArgs = {
  secondmentId: Scalars['ID']
}

export type QuerySecondmentStocksArgs = {
  secondmentCondition?: InputMaybe<SecondmentConditionInput>
}

export type QuerySkuStocksArgs = {
  stockSkuInput?: InputMaybe<ListSkuStockInput>
}

export type QuerySkuesArgs = {
  skuQueryInput?: InputMaybe<SkuQueryInput>
}

export type QuerySpecListArgs = {
  commodityId?: InputMaybe<Scalars['Int']>
}

export type QueryStatusGroupCountArgs = {
  statusGroupCountInput?: InputMaybe<StatusGroupCountInput>
}

export type QueryStockBatchesArgs = {
  stockBatchQueryInput?: InputMaybe<StockBatchQueryInput>
}

export type QueryStocksArgs = {
  stockCondition?: InputMaybe<StockCondition>
}

export type QuerySubsidiaryArgs = {
  subsidiaryId?: InputMaybe<Scalars['Int']>
}

export type QuerySubsidiaryNameRepeatArgs = {
  subsidiaryRepeatInput?: InputMaybe<SubsidiaryRepeatInput>
}

export type QuerySubsidiaryPageResultArgs = {
  subsidiaryPageInput?: InputMaybe<SubsidiaryPageInput>
}

export type QuerySupplierArgs = {
  getSupplierInput?: InputMaybe<GetSupplierInput>
}

export type QuerySupplierPagesArgs = {
  page?: InputMaybe<Page>
  supplierCondition?: InputMaybe<SupplierConditionInput>
}

export type QuerySuppliersArgs = {
  supplierCondition?: InputMaybe<SupplierConditionInput>
}

export type QueryTaskArgs = {
  taskId: Scalars['ID']
}

export type QueryTaskAcquireMaterialCommoditiesArgs = {
  listTaskAcquireMaterialCommodityInput?: InputMaybe<ListTaskAcquireMaterialCommodityInput>
}

export type QueryTaskInCommoditiesArgs = {
  listTaskInCommodityInput?: InputMaybe<ListTaskInCommodityInput>
}

export type QueryTaskItemsArgs = {
  taskId: Scalars['ID']
}

export type QueryTaskLogsArgs = {
  taskId: Scalars['ID']
}

export type QueryTaskReturnMaterialCommoditiesArgs = {
  listTaskInCommodityInput?: InputMaybe<ListTaskInCommodityInput>
}

export type QueryTaskStatisticsArgs = {
  date?: InputMaybe<Scalars['Long']>
}

export type QueryTasksArgs = {
  page?: InputMaybe<Page>
  taskCondition?: InputMaybe<TaskCondition>
}

export type QueryTransferInStockRecordDetailArgs = {
  inStockOrderDetailInput?: InputMaybe<InStockOrderDetailInput>
}

export type QueryUserBaseInfoArgs = {
  phoneNum: Scalars['String']
}

export type QueryUserExistArgs = {
  phoneNum: Scalars['String']
}

export type QueryUserInformationArgs = {
  userId?: InputMaybe<Scalars['Int']>
}

export type QueryUserInformationListArgs = {
  page?: InputMaybe<Page>
}

export type QueryVarietyOptionArgs = {
  categoryId: Scalars['Int']
}

export type QueryVerifySpecNameArgs = {
  specName?: InputMaybe<Scalars['String']>
}

export type QueryWarehouseArgs = {
  warehouseId: Scalars['ID']
}

export type QueryWasteSaleOrderArgs = {
  getWasteSaleOrderInput?: InputMaybe<GetWasteSaleOrderInput>
}

export type QueryWasteSaleOrderStatsArgs = {
  wasteSaleOrderStatsInput?: InputMaybe<WasteSaleOrderStatsInput>
}

/**  入库请求 */
export type QueryOutRecordListInput = {
  /**  系统ID */
  appId?: InputMaybe<Scalars['Int']>
  /**  业务ID */
  businessId?: InputMaybe<Scalars['ID']>
  /**  组织ID */
  orgId?: InputMaybe<Scalars['Int']>
  /**  出库单ID */
  outOrderId: Scalars['ID']
  /**  用户ID */
  userId?: InputMaybe<Scalars['Int']>
  /**  操作人可用仓库集合 */
  userWarehouseIdList?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type QueryRecordListInput = {
  /**  系统ID */
  appId?: InputMaybe<Scalars['Int']>
  /**  业务ID */
  businessId?: InputMaybe<Scalars['ID']>
  /**  入库单ID */
  inOrderId: Scalars['ID']
  /**  组织ID */
  orgId?: InputMaybe<Scalars['Int']>
  /**  用户ID */
  userId?: InputMaybe<Scalars['Int']>
  /**  操作人可用仓库集合 */
  userWarehouseIdList?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

/** 销售列表条件 */
export type QuerySaleOrderInput = {
  /** 查询关键字（订单号/客户，模糊查询） */
  keyword?: InputMaybe<Scalars['String']>
  /** 订单状态（10全部，20待提交，30待审核 ，40待出库，50已完成） */
  orderStatus?: InputMaybe<Scalars['Int']>
  /** 销售时间 */
  saleTime?: InputMaybe<Scalars['Long']>
}

export type QuickLabelPayload = {
  __typename?: 'QuickLabelPayload'
  /** 品类Id */
  categoryId?: Maybe<Scalars['Int']>
  /** 品类名称 */
  categoryName?: Maybe<Scalars['String']>
  /** 标签内容 */
  labelContent?: Maybe<Scalars['String']>
  /** 标签Id */
  labelId?: Maybe<Scalars['Int']>
  /** 标签类型 10规格要求 30品质要求 */
  labelType?: Maybe<Scalars['Int']>
}

export type RecommendLabelPayload = {
  __typename?: 'RecommendLabelPayload'
  /** 品类Id */
  categoryId?: Maybe<Scalars['Int']>
  /** 品类名称 */
  categoryName?: Maybe<Scalars['String']>
  /** 标签内容 */
  labelContent?: Maybe<Scalars['String']>
  /** 标签Id */
  labelId?: Maybe<Scalars['Int']>
  /** 标签类型 10规格要求 30品质要求 */
  labelType?: Maybe<Scalars['Int']>
}

export type RejectNoticeEmptiedInput = {
  outOrderId: Scalars['ID']
}

export type RejectNoticeEmptiedPayload = {
  __typename?: 'RejectNoticeEmptiedPayload'
  result?: Maybe<Scalars['Boolean']>
}

/** 驳回出库审核订单 */
export type RejectOutOrderInput = {
  outOrderId?: InputMaybe<Scalars['ID']>
  rejectDescription?: InputMaybe<Scalars['String']>
}

export type RejectSaleIncomeOrderInput = {
  incomeId: Scalars['ID']
  remark: Scalars['String']
}

export type RejectStockAdjustmentInput = {
  /** 调整申请单id */
  stockAdjustmentId: Array<InputMaybe<Scalars['ID']>>
}

/** 驳回入库审核订单 */
export type RejectedInput = {
  inOrderId: Scalars['ID']
  /** 驳回原因 */
  rejectedDescription: Scalars['String']
}

export enum RequestFlag {
  /** 审核 */
  Audit = 'AUDIT',
  /** 销售 */
  Sale = 'SALE',
}

export type RequestRejectionInput = {
  /** 出库明细id */
  outOrderItemId: Scalars['ID']
}

export type RequestRejectionPayload = {
  __typename?: 'RequestRejectionPayload'
  result?: Maybe<Scalars['Boolean']>
}

export type ReturnBillPayload = AuditUserBase &
  BelongOrgBase &
  CreateByBase &
  SubmitUserBase &
  SupplierBase &
  WarehouseBase & {
    __typename?: 'ReturnBillPayload'
    /** 关联采购单号 */
    applyCode?: Maybe<Scalars['String']>
    /** 出库时间 */
    auditTime?: Maybe<Scalars['Long']>
    /** 出库审核人 */
    auditUser?: Maybe<User>
    /** 归属id */
    belongId?: Maybe<Scalars['Int']>
    /** 归属名称 */
    belongName?: Maybe<Scalars['String']>
    /** 所属组织 */
    belongOrg?: Maybe<Org>
    /** 归属类型 */
    belongType?: Maybe<Scalars['Int']>
    /** 费用单操作记录 */
    billAuditDetailRespList?: Maybe<Array<Maybe<BillAuditDetailPayload>>>
    /** 费用单Id 修改手工单号使用 */
    billId?: Maybe<Scalars['ID']>
    /** 货品类型 */
    commodityType?: Maybe<Scalars['Int']>
    /** 货品类型名称 */
    commodityTypeName?: Maybe<Scalars['String']>
    /** 退货单创建人/退货人 */
    createBy?: Maybe<User>
    /** 退货单时间 */
    createTime?: Maybe<Scalars['Long']>
    /** 手工单号 */
    manualCode?: Maybe<Scalars['String']>
    /** 备注 */
    note?: Maybe<Scalars['String']>
    /** 驳回原因 */
    refuseNote?: Maybe<Scalars['String']>
    /** 退货单编码 */
    returnCode?: Maybe<Scalars['String']>
    /** 退货单ID */
    returnId?: Maybe<Scalars['ID']>
    /** 退货类型 */
    returnType?: Maybe<PurchaseReturnTypeEnum>
    /** 退货类型 */
    returnTypeName?: Maybe<Scalars['String']>
    /** 退货商品 */
    returnsCommodityBillResp?: Maybe<ReturnsCommodityBillPayload>
    /** 运杂 */
    returnsOtherBillResp?: Maybe<ReturnsOtherBillPayload>
    /** 费用单状态 */
    status?: Maybe<BillStatusEnum>
    /** 费用单状态名称 */
    statusName?: Maybe<Scalars['String']>
    /** 提交时间 */
    submitTime?: Maybe<Scalars['Long']>
    /** 提交人 */
    submitUser?: Maybe<User>
    /** 供应商 */
    supplier?: Maybe<Supplier>
    /** 所属仓库 */
    warehouse?: Maybe<Warehouse>
  }

export type ReturnMaterial = {
  __typename?: 'ReturnMaterial'
  accessories?: Maybe<Scalars['Int']>
  accessoriesUnFinish?: Maybe<Scalars['Int']>
  noReturn?: Maybe<Scalars['Boolean']>
  rawMaterial?: Maybe<Scalars['Int']>
  rawMaterialUnFinish?: Maybe<Scalars['Int']>
  returnedGoods?: Maybe<Scalars['Int']>
  returnedGoodsUnFinish?: Maybe<Scalars['Int']>
  semiFinishedProducts?: Maybe<Scalars['Int']>
  semiFinishedProductsUnFinish?: Maybe<Scalars['Int']>
  undone?: Maybe<Scalars['Int']>
}

export type ReturnOtherInput = {
  /**  金额 */
  amount?: InputMaybe<Scalars['BigDecimal']>
  /**  费用项id */
  costId?: InputMaybe<Scalars['ID']>
  /**  具体字段值 */
  data?: InputMaybe<Scalars['String']>
  /**  业务规则扩展id (客户id或者供应商id) */
  extendId?: InputMaybe<Scalars['Int']>
  /**  备注 */
  note?: InputMaybe<Scalars['String']>
  /**  规则id */
  ruleId?: InputMaybe<Scalars['ID']>
}

export type ReturnOtherPayload = SupplierBase & {
  __typename?: 'ReturnOtherPayload'
  /**  金额 */
  amount?: Maybe<Scalars['BigDecimal']>
  /**  费用项id */
  costId?: Maybe<Scalars['ID']>
  /**  具体字段值 */
  data?: Maybe<Scalars['String']>
  /**  备注 */
  note?: Maybe<Scalars['String']>
  /**  规则id */
  ruleId?: Maybe<Scalars['ID']>
  /**  业务规则扩展 (客户id或者供应商id) */
  supplier?: Maybe<Supplier>
}

export type ReturnStatusStatisticInput = {
  endTime: Scalars['Long']
  startTime: Scalars['Long']
}

export type ReturnStatusStatisticPayload = {
  __typename?: 'ReturnStatusStatisticPayload'
  cancelCount?: Maybe<Scalars['Int']>
  completeCount?: Maybe<Scalars['Int']>
  waitProcessedCount?: Maybe<Scalars['Int']>
  waitSubmitCount?: Maybe<Scalars['Int']>
}

/** 退货商品汇总信息 */
export type ReturnsCommodityBillPayload = {
  __typename?: 'ReturnsCommodityBillPayload'
  /** 货款单号 */
  billCode?: Maybe<Scalars['String']>
  /** 备注 */
  remark?: Maybe<Scalars['String']>
  /** 明细数据 */
  returnsCommodityItemRespList?: Maybe<
    Array<Maybe<ReturnsCommodityItemPayload>>
  >
  /** 总金额 */
  totalAmount?: Maybe<Scalars['BigDecimal']>
}

/** 退货商品信息 */
export type ReturnsCommodityItemPayload = PriceTypeBase &
  SkuBase &
  StockBatchBase &
  TotalTypeBase &
  UnitTypeBase & {
    __typename?: 'ReturnsCommodityItemPayload'
    /** 小计金额 */
    amount?: Maybe<Scalars['BigDecimal']>
    /** 采购 total数量 */
    applyTotalQuantity?: Maybe<Scalars['BigDecimal']>
    /** 采购 unit数量 */
    applyUnitQuantity?: Maybe<Scalars['BigDecimal']>
    /** 批次id */
    batch?: Maybe<StockBatch>
    /** sku入库total数量 */
    inStockTotalQuantity?: Maybe<Scalars['BigDecimal']>
    /** sku入库unit净重量 */
    inStockUnitQuantity?: Maybe<Scalars['BigDecimal']>
    /** 货款明细id */
    itemId?: Maybe<Scalars['ID']>
    /** 单价类型 */
    priceType?: Maybe<Unit>
    /** 已退货total数量 */
    returnTotalQuantity?: Maybe<Scalars['BigDecimal']>
    /** 已退货unit数量 */
    returnUnitQuantity?: Maybe<Scalars['BigDecimal']>
    /** sku id */
    sku?: Maybe<CommoditySku>
    /** 总计数量 */
    totalQuantity?: Maybe<Scalars['BigDecimal']>
    /** 总计类型 */
    totalType?: Maybe<Unit>
    /** 单价 */
    unitPrice?: Maybe<Scalars['BigDecimal']>
    /** 单位数量 */
    unitQuantity?: Maybe<Scalars['BigDecimal']>
    /** 单位类型 */
    unitType?: Maybe<Unit>
  }

export type ReturnsCommodityPayload = CommoditySkuBase &
  TotalTypeBase &
  UnitPriceTypeBase &
  UnitTypeBase & {
    __typename?: 'ReturnsCommodityPayload'
    commoditySku?: Maybe<CommoditySku>
    finishedQuantity?: Maybe<Quantity>
    returnId?: Maybe<Scalars['ID']>
    returnsStockQuantity?: Maybe<ReturnsQuantity>
    totalPrice?: Maybe<Scalars['BigDecimal']>
    totalQuantity?: Maybe<Scalars['BigDecimal']>
    totalType?: Maybe<Unit>
    unitPrice?: Maybe<Scalars['BigDecimal']>
    unitPriceType?: Maybe<Unit>
    unitQuantity?: Maybe<Scalars['BigDecimal']>
    unitType?: Maybe<Unit>
  }

/**  运杂费用 */
export type ReturnsOtherBillInput = {
  /**  金额 */
  amount?: InputMaybe<Scalars['BigDecimal']>
  /**  费用项id */
  costId?: InputMaybe<Scalars['ID']>
  /**  具体字段值 */
  data?: InputMaybe<Scalars['String']>
  /**  业务规则扩展id (客户id或者供应商id) */
  extendId?: InputMaybe<Scalars['Int']>
  /**  备注 */
  note?: InputMaybe<Scalars['String']>
  /**  规则id */
  ruleId?: InputMaybe<Scalars['ID']>
}

/** 退货运杂费用 */
export type ReturnsOtherBillPayload = {
  __typename?: 'ReturnsOtherBillPayload'
  /** 运杂费单号 */
  billCode?: Maybe<Scalars['String']>
  /** 运杂费明细列表 */
  returnsOtherItemBillRespList?: Maybe<
    Array<Maybe<ReturnsOtherItemBillPayload>>
  >
  /** 总金额 */
  totalAmount?: Maybe<Scalars['BigDecimal']>
}

export type ReturnsOtherItemBillPayload = SupplierBase & {
  __typename?: 'ReturnsOtherItemBillPayload'
  /**  金额 */
  amount?: Maybe<Scalars['BigDecimal']>
  /**  费用项id */
  costId?: Maybe<Scalars['ID']>
  /** 费用名称 */
  costName?: Maybe<Scalars['String']>
  /**  具体字段值 */
  data?: Maybe<Scalars['String']>
  /**  备注 */
  note?: Maybe<Scalars['String']>
  /** 规则列表 */
  ruleFieldList?: Maybe<Array<Maybe<FieldPayload>>>
  /**  规则id */
  ruleId?: Maybe<Scalars['ID']>
  /**  业务规则扩展 (客户id或者供应商id) */
  supplier?: Maybe<Supplier>
}

export type ReturnsQuantity = {
  __typename?: 'ReturnsQuantity'
  /** "v2.9 入库净总量 */
  inBoundQuantity?: Maybe<Quantity>
  /**  v2.9 可退货量 */
  returnableQuantity?: Maybe<Quantity>
}

export type RoleInput = {
  roleId?: InputMaybe<Scalars['Int']>
  roleName?: InputMaybe<Scalars['String']>
}

export type SaleChangePayload = {
  __typename?: 'SaleChangePayload'
  changeId?: Maybe<Scalars['ID']>
  /**  变更描述 */
  changeRemark?: Maybe<Scalars['String']>
  /**  1 增加 2 减少 */
  changeType?: Maybe<Scalars['Int']>
  /**  skuId */
  commoditySkuId?: Maybe<Scalars['Int']>
  /**  创建人 */
  createBy?: Maybe<Scalars['Int']>
  /**  创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /**  销售单id */
  outOrderId?: Maybe<Scalars['ID']>
  /**  销售单明细id */
  outOrderItemId?: Maybe<Scalars['ID']>
  /**  生产负责人变更数量 */
  planChangeQuantity?: Maybe<Scalars['Int']>
  /**  计划id */
  planId?: Maybe<Scalars['ID']>
  /**  销售变更数量 */
  saleChangeQuantity?: Maybe<Scalars['Int']>
  /**  10 生产负责人待确认  20 生产负责人已忽略  30 生产负责人已处理  40 生产组长已处理 */
  status?: Maybe<Scalars['Int']>
  /**  任务id */
  taskId?: Maybe<Scalars['ID']>
  /**  更新人 */
  updateBy?: Maybe<Scalars['Int']>
  /**  更新时间 */
  updateTime?: Maybe<Scalars['Long']>
}

export type SaleCostOrderItemInput = {
  materialFee?: InputMaybe<Scalars['BigDecimal']>
  packagingFee?: InputMaybe<Scalars['BigDecimal']>
  saleCostOrderItemId?: InputMaybe<Scalars['ID']>
}

export type SaleCostOrderItemPayload = CommodityBase & {
  __typename?: 'SaleCostOrderItemPayload'
  commodity?: Maybe<CommoditySku>
  materialFee?: Maybe<Scalars['BigDecimal']>
  outOrderItemId?: Maybe<Scalars['ID']>
  packagingFee?: Maybe<Scalars['BigDecimal']>
  saleCostOrderId?: Maybe<Scalars['ID']>
  saleCostOrderItemId?: Maybe<Scalars['ID']>
}

export type SaleGoodsInfoListPayload = CustomerAddressInfoBase & {
  __typename?: 'SaleGoodsInfoListPayload'
  /** 商品类型id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 客户信息 */
  customerAddressInfo?: Maybe<CustomerAddressInfo>
  /** 销售单订单类型,200成品销售，210原件销售 */
  orderType?: Maybe<Scalars['Int']>
  /** 销售单商品列表 */
  saleGoodsItemInfo?: Maybe<Array<Maybe<SaleGoodsItemInfoPayload>>>
  /** 销售单号 */
  saleOrderCode?: Maybe<Scalars['ID']>
  /** 销售订单时间 */
  saleOrderDate?: Maybe<Scalars['Long']>
  /** 销售单号Id */
  saleOrderId?: Maybe<Scalars['ID']>
}

export type SaleGoodsItemInfoPayload = CommodityDetailBase & {
  __typename?: 'SaleGoodsItemInfoPayload'
  /** 商品信息 */
  commodityDetail?: Maybe<CommoditySku>
  /** 是否显示该商品 */
  needShow?: Maybe<Scalars['Boolean']>
  /** 已配送数量 */
  quantity?: Maybe<Scalars['BigDecimal']>
  /** 销售单商品ID */
  saleOrderItemId?: Maybe<Scalars['ID']>
}

/** 获取销售计划商品列表入参 */
export type SaleGoodsListQueryInput = {
  /** 客户信息集合 */
  belongInfo: Array<InputMaybe<CustomerInfo>>
  /** 销售日期 */
  saleDate: Scalars['Long']
  /** 所属仓库ID */
  warehouseId: Scalars['ID']
}

/** 操作类型（10：创建信息 20：提交信息 30：业务审核信息 40：财务审核信息 50：完成信息） */
export enum SaleIncomeLogType {
  /**  内勤审核信息  */
  BackOfficeAudit = 'BACK_OFFICE_AUDIT',
  /**  业务审核信息  */
  BusinessAudit = 'BUSINESS_AUDIT',
  /**  取消信息  */
  Canceled = 'CANCELED',
  /**  创建信息  */
  Create = 'CREATE',
  /**  财务审核信息  */
  FinancialAudit = 'FINANCIAL_AUDIT',
  /**  完成信息  */
  Finished = 'FINISHED',
  /**  驳回信息  */
  Rejected = 'REJECTED',
  /**  提交信息  */
  Submit = 'SUBMIT',
  SaleIncomeLogTypeUnspecified = 'SaleIncomeLogType_UNSPECIFIED',
}

export type SaleIncomeOrderInput = {
  outOrderItemId?: InputMaybe<Scalars['ID']>
  quantity?: InputMaybe<Scalars['BigDecimal']>
  remark?: InputMaybe<Scalars['String']>
  salePrice?: InputMaybe<Scalars['BigDecimal']>
}

/** 销售收入单商品 */
export type SaleIncomeOrderItemPayload = CommoditySkuBase &
  PriceTypeBase &
  TotalTypeBase &
  UnitTypeBase & {
    __typename?: 'SaleIncomeOrderItemPayload'
    batchCode?: Maybe<Scalars['String']>
    batchId?: Maybe<Scalars['Int']>
    /**  商品名字  */
    commodityName?: Maybe<Scalars['String']>
    /**  商品SKUId  */
    commoditySku?: Maybe<CommoditySku>
    /**  收入单ID  */
    incomeId?: Maybe<Scalars['ID']>
    /**  商品明细ID  */
    incomeItemId?: Maybe<Scalars['ID']>
    outOrderItemId?: Maybe<Scalars['ID']>
    /**  拍照记录  */
    photosList?: Maybe<Array<Scalars['String']>>
    priceType?: Maybe<Unit>
    remark?: Maybe<Scalars['String']>
    /**  销售金额  */
    saleMoney?: Maybe<Scalars['BigDecimal']>
    salePrice?: Maybe<Scalars['BigDecimal']>
    totalQuantity?: Maybe<Scalars['BigDecimal']>
    totalSalePrice?: Maybe<Scalars['BigDecimal']>
    totalType?: Maybe<Unit>
    /**  商品单位数量  */
    unitQuantity?: Maybe<Scalars['BigDecimal']>
    /**  商品单位数量单位  */
    unitType?: Maybe<Unit>
  }

/** 销售收入日志 */
export type SaleIncomeOrderLogPayload = UserBase & {
  __typename?: 'SaleIncomeOrderLogPayload'
  /**  创建时间  */
  createTime?: Maybe<Scalars['Long']>
  /**  销售收入单ID  */
  incomeId?: Maybe<Scalars['ID']>
  /**  销售收入日志ID  */
  incomeLogId?: Maybe<Scalars['ID']>
  /**  备注  */
  remark?: Maybe<Scalars['String']>
  /**  日志类型  */
  type?: Maybe<SaleIncomeLogType>
  /**  日志类型文字  */
  typeText?: Maybe<Scalars['String']>
  /**  用户信息  */
  user?: Maybe<User>
}

/** 销售收入单 */
export type SaleIncomeOrderPayload = BelongOrgBase &
  CustomerBase &
  UserBase &
  WarehouseBase & {
    __typename?: 'SaleIncomeOrderPayload'
    /**  所属组织  */
    belongOrg?: Maybe<Org>
    /**  销售商品信息  */
    commoditiesList?: Maybe<Array<Maybe<SaleIncomeOrderItemPayload>>>
    commodityTypeName?: Maybe<Scalars['String']>
    createTime?: Maybe<Scalars['Long']>
    /** " 销售客户  */
    customer?: Maybe<Customer>
    /**  金额统计  */
    functionalField?: Maybe<FunctionalField>
    /**  销售收入单号  */
    incomeCode?: Maybe<Scalars['String']>
    /**  收入单ID  */
    incomeId?: Maybe<Scalars['ID']>
    /**  销售收入单状态  */
    incomeStatus?: Maybe<IncomeStatus>
    /**  销售收入单状态名字  */
    incomeStatusName?: Maybe<Scalars['String']>
    /**  操作日志信息  */
    logs?: Maybe<Array<Maybe<SaleIncomeOrderLogPayload>>>
    payMode?: Maybe<OutOrderPayModeEnum>
    rejectReason?: Maybe<Scalars['String']>
    remark?: Maybe<Scalars['String']>
    /**  销售成本id  */
    saleCostOrderId?: Maybe<Scalars['ID']>
    /**  成本信息  */
    saleCostOrderItems?: Maybe<Array<Maybe<SaleCostOrderItemPayload>>>
    /**  来源ID  */
    sourceId?: Maybe<Scalars['ID']>
    /**  收入单来源类型  */
    sourceType?: Maybe<SaleIncomeSourceType>
    /**  收入单来源类型名称  */
    sourceTypeName?: Maybe<Scalars['String']>
    totalAmount?: Maybe<Scalars['BigDecimal']>
    /**  创建人  */
    user?: Maybe<User>
    /**  仓库Id  */
    warehouse?: Maybe<Warehouse>
  }

export type SaleIncomeOrderStatisticPayload = {
  __typename?: 'SaleIncomeOrderStatisticPayload'
  auditCount?: Maybe<Scalars['Int']>
  orderCount?: Maybe<Scalars['Int']>
}

export type SaleIncomeOrderStatusStatisticInput = {
  incomeOperation: IncomeOperation
  sourceType?: InputMaybe<SaleIncomeSourceType>
}

export type SaleIncomeOrderStatusStatisticPayload = {
  __typename?: 'SaleIncomeOrderStatusStatisticPayload'
  /**  业务人员已驳回  */
  businessReject?: Maybe<Scalars['Int']>
  /**  已取消  */
  canceled?: Maybe<Scalars['Int']>
  /**  财务人员已驳回  */
  financialReject?: Maybe<Scalars['Int']>
  /**  已完成  */
  finished?: Maybe<Scalars['Int']>
  /**  待内勤人员审核  */
  unBackOfficeAudit?: Maybe<Scalars['Int']>
  /**  待业务审核  */
  unBusinessAudit?: Maybe<Scalars['Int']>
  /**  待财务审核  */
  unFinancialAudit?: Maybe<Scalars['Int']>
  /**  待提交  */
  waitSubmit?: Maybe<Scalars['Int']>
}

/** 来源类型(10: 次品销售 20: 废旧品销售) */
export enum SaleIncomeSourceType {
  /**  次品销售  */
  DefectiveSales = 'DEFECTIVE_SALES',
  /**  原件销售  */
  OriginalSale = 'ORIGINAL_SALE',
  /**  废旧品销售  */
  SaleOfWasteProducts = 'SALE_OF_WASTE_PRODUCTS',
  /**  成品销售  */
  SaleProducts = 'SALE_PRODUCTS',
  SaleIncomeSourceTypeUnspecified = 'SaleIncomeSourceType_UNSPECIFIED',
}

export type SaleOrderInfoPayload = {
  __typename?: 'SaleOrderInfoPayload'
  /** 出库订单id */
  outOrderId?: Maybe<Scalars['ID']>
  /** 销售单号Code */
  saleOrderCode?: Maybe<Scalars['String']>
  /** v2.8 销售单号Id */
  saleOrderId?: Maybe<Scalars['ID']>
}

/**  v1.6 */
export type SaleOrderInput = {
  outOrderId: Scalars['ID']
  requestFlag: RequestFlag
}

export type SaleOrderItemPayload = {
  __typename?: 'SaleOrderItemPayload'
  /** 品类Id */
  categoryId?: Maybe<Scalars['Int']>
  /** SPUId */
  commodityId?: Maybe<Scalars['Int']>
  /** SPU名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品skuID */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 商品规格选项Id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 商品状态 10 正常 20 取消中 30 已取消 40 已拒绝 */
  commodityStatus?: Maybe<CommodityStatus>
  /**
   * 最大销量
   * @deprecated 2.0已弃用当前字段
   */
  maxQuantity?: Maybe<Scalars['String']>
  outOrderItemId?: Maybe<Scalars['ID']>
  /**
   * 包装要求
   * @deprecated 2.2已弃用当前字段
   */
  packageLabel?: Maybe<Scalars['String']>
  /** 2.2 修改包装要求为一个对象 */
  packageRequireInfos?: Maybe<Array<Maybe<OutOrderItemRequestPayload>>>
  /** 预估销量 */
  planQuantity?: Maybe<Scalars['String']>
  /** 品质要求 */
  quantityLabel?: Maybe<Scalars['String']>
  /** 实际销量 v1.6 */
  realQuantity?: Maybe<Scalars['BigDecimal']>
  /** 销售单价 */
  salePrice?: Maybe<Scalars['String']>
  /** 规格选项 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 规格要求 */
  specificationLabel?: Maybe<Scalars['String']>
  /** 副单位类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
}

/** 分页对象 */
export type SaleOrderPagePayload = {
  __typename?: 'SaleOrderPagePayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  /** 销售订单列表 */
  records?: Maybe<Array<Maybe<SaleOrderPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type SaleOrderPayload = BelongOrgBase & {
  __typename?: 'SaleOrderPayload'
  /** 所属组织 */
  belongOrg?: Maybe<Org>
  /** 是否能操作 可操作返回true v1.6 */
  canSaleReturn?: Maybe<Scalars['Boolean']>
  /** 商品信息 */
  commodityList?: Maybe<Array<Maybe<SaleOrderItemPayload>>>
  /** 商品类型Id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 退货申请数量 v1.6 */
  countReturnApply?: Maybe<Scalars['Int']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 创建人员 */
  createUserName?: Maybe<Scalars['String']>
  customerDistributionId?: Maybe<Scalars['Int']>
  customerDistributionName?: Maybe<Scalars['String']>
  /** 客户Id */
  customerId?: Maybe<Scalars['Int']>
  /** 客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 客户类型 10 无客户 20 客户分组 30 指定客户 */
  customerType?: Maybe<Scalars['Int']>
  /**  客户类型翻译 */
  customerTypeName?: Maybe<Scalars['String']>
  /** 驳回（取消）原因 */
  errorDescription?: Maybe<Scalars['String']>
  /** 出库单号 */
  outOrderCode?: Maybe<Scalars['String']>
  /** 订单备注 */
  outOrderDescription?: Maybe<Scalars['String']>
  /** 出库订单Id */
  outOrderId?: Maybe<Scalars['ID']>
  /** 出库状态Id 出库订单状态，默认待提交，10：待提交、20：待出库、30：部分出库、40：已完成、50：已取消 */
  outOrderStatus?: Maybe<Scalars['Int']>
  /** 订单状态翻译 */
  outOrderStatusName?: Maybe<Scalars['String']>
  /** 出库类型出库订单类型，10：原料领料、20辅料领料 30 成品销售 */
  outOrderType?: Maybe<Scalars['Int']>
  /** 出库类型名称 */
  outOrderTypeName?: Maybe<Scalars['String']>
  /** 计划详情 */
  plan?: Maybe<Plan>
  /** 拒绝统计数量 */
  rejectCount?: Maybe<Scalars['Int']>
  /** 销售时间 */
  saleTime?: Maybe<Scalars['Long']>
  /** 仓库Id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

export type SaleOrderStatusCountPayload = {
  __typename?: 'SaleOrderStatusCountPayload'
  /** 已完成 */
  finished?: Maybe<Scalars['Int']>
  producing?: Maybe<Scalars['Int']>
  /** 待审核 */
  toAudit?: Maybe<Scalars['Int']>
  /** 待出库 */
  toOutbound?: Maybe<Scalars['Int']>
  /** 待提交 */
  toSubmit?: Maybe<Scalars['Int']>
}

export type SalePriceTypeBase = {
  /** 单价单位信息 */
  salePriceType?: Maybe<Unit>
}

/** 销售退货取消Input */
export type SaleReturnCancelInput = {
  /** 取消描述 */
  inOrderDescription?: InputMaybe<Scalars['String']>
  /** 退货单Id */
  inOrderId: Scalars['ID']
}

export type SaleReturnCommoditiesItemPayload = CommoditySkuBase &
  TotalTypeBase &
  UnitTypeBase & {
    __typename?: 'SaleReturnCommoditiesItemPayload'
    /** 商品sku */
    commoditySku?: Maybe<CommoditySku>
    /** 商品skuId（冗余此字段 for data fetch） */
    commoditySkuId?: Maybe<Scalars['Int']>
    /** 退货单ID（冗余此字段 for data fetch） */
    inOrderId?: Maybe<Scalars['ID']>
    /** 销售单号 */
    outOrderCode?: Maybe<Scalars['String']>
    /** 销售单出库order id */
    outOrderId?: Maybe<Scalars['ID']>
    /** 本次退货量大单位数量 */
    returnQuantity?: Maybe<Quantity>
    /** 退货量相关数据 */
    saleReturnQuantity?: Maybe<SaleReturnQuantity>
    /** 本次退货量大单位 */
    totalType?: Maybe<Unit>
    /** 本次退货量小单位 */
    unitType?: Maybe<Unit>
  }

/** 成品销售退货新增Input */
export type SaleReturnInsertInput = {
  /** 商品信息（成品销售单） */
  outOrdersCommoditiesInput: Array<InputMaybe<OutOrdersCommoditiesInput>>
  /** 退货原因 */
  remark: Scalars['String']
}

/** 成品销售退货:新增销售退货单payload */
export type SaleReturnInsertPayload = {
  __typename?: 'SaleReturnInsertPayload'
  /** 退货单ID */
  inOrderId?: Maybe<Scalars['ID']>
}

export type SaleReturnItemInput = {
  /** 退货量大单位 */
  returnTotalQuantity: Scalars['BigDecimal']
  /** 退货量小单位 */
  returnUnitQuantity: Scalars['BigDecimal']
  /** skuID */
  skuId: Scalars['Int']
}

/** 分页对象 */
export type SaleReturnPagePayload = {
  __typename?: 'SaleReturnPagePayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  /** 销售退货列表 */
  records?: Maybe<Array<Maybe<SaleReturnPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type SaleReturnPayload = BelongOrgBase &
  CreateUserBase &
  CustomerBase &
  WarehouseBase & {
    __typename?: 'SaleReturnPayload'
    /** 所属组织 */
    belongOrg?: Maybe<Org>
    /** 商品信息 */
    commodities?: Maybe<Array<Maybe<SaleReturnCommoditiesItemPayload>>>
    /** 商品类型Id */
    commodityTypeId?: Maybe<Scalars['Int']>
    /** 商品类型名称（退货品） */
    commodityTypeName?: Maybe<Scalars['String']>
    /** 入库记录数 */
    countInBounds?: Maybe<Scalars['Int']>
    /** 创建时间 */
    createTime?: Maybe<Scalars['Long']>
    /** 创建人 */
    createUser?: Maybe<User>
    /** 销售客户 */
    customer?: Maybe<Customer>
    /** 成品销售退货单：退货单号 */
    inOrderCode?: Maybe<Scalars['String']>
    /** 入库订单（销售退货单）Id */
    inOrderId?: Maybe<Scalars['ID']>
    /** 退货单入库状态 */
    inOrderStatus?: Maybe<InOrderStatus>
    /** 退货单状态名称 */
    inOrderStatusName?: Maybe<Scalars['String']>
    /** 入库类型 */
    inOrderType?: Maybe<InOrderType>
    /** 入库类型名称（销售退货） */
    inOrderTypeName?: Maybe<Scalars['String']>
    /** 单据最新备注：驳回（取消）原因，依据单据状态而定 */
    latestDescription?: Maybe<Scalars['String']>
    /** 退货原因 */
    remark?: Maybe<Scalars['String']>
    /** 销售日期 */
    saleTime?: Maybe<Scalars['Long']>
    /** 所属仓库 */
    warehouse?: Maybe<Warehouse>
  }

export type SaleReturnQuantity = {
  __typename?: 'SaleReturnQuantity'
  /** 出库总量 */
  outBoundTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 已退货量 */
  saleReturnFinishedTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 可退货量 */
  saleReturnableQuantity?: Maybe<Scalars['BigDecimal']>
}

export type SaleReturnSubmitInput = {
  inOrderId: Scalars['ID']
}

/** 销售退货更新Input */
export type SaleReturnUpdateInput = {
  /** 退货单Id */
  inOrderId: Scalars['ID']
  /** 商品信息（成品销售单） */
  outOrdersCommoditiesInput: Array<InputMaybe<OutOrdersCommoditiesInput>>
  /** 退货原因 */
  remark: Scalars['String']
}

export type SaveConfigInput = {
  configCode: Scalars['Int']
  configValue: Scalars['Boolean']
}

export type SaveSalaryInput = {
  configCode: Scalars['Int']
  configValue: Scalars['BigDecimal']
}

/** 关键字查询结果 */
export type SearchedLocationPayload = {
  __typename?: 'SearchedLocationPayload'
  /** 名称 */
  detailName: Scalars['String']
  /** id */
  id: Scalars['ID']
  /** 地理位置坐标 */
  location?: Maybe<Array<Maybe<Scalars['Float']>>>
  /** 简称 */
  name: Scalars['String']
}

export type SecondmentConditionInput = {
  /** 归属id */
  belongId: Scalars['Int']
  /** 归属类型 */
  belongType: Scalars['Int']
  /** 商品分类 */
  commodityTypeId: Scalars['Int']
  /** 仓库id */
  warehouseId: Scalars['ID']
}

export type SecondmentInput = {
  /** 商品类型 */
  commodityTypeId?: InputMaybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: InputMaybe<Scalars['String']>
  /** 调入客户di */
  inBelongId?: InputMaybe<Scalars['Int']>
  /** 调入客户名称 */
  inBelongName?: InputMaybe<Scalars['String']>
  /** 调入客户类型 */
  inBelongType?: InputMaybe<Scalars['Int']>
  /** 订单类型 */
  orderType?: InputMaybe<Scalars['Int']>
  outBelongId?: InputMaybe<Scalars['Int']>
  /** 调出客户名称 */
  outBelongName?: InputMaybe<Scalars['String']>
  /** 调出客户类型 */
  outBelongType?: InputMaybe<Scalars['Int']>
  /** 备注 */
  remark?: InputMaybe<Scalars['String']>
  /**  订单号 */
  secondmentCode?: InputMaybe<Scalars['String']>
  /**  借调id */
  secondmentId?: InputMaybe<Scalars['ID']>
  secondmentOrderItemList?: InputMaybe<Array<InputMaybe<SecondmentItemInput>>>
  /** 借调订单状态 */
  secondmentStatus?: InputMaybe<Scalars['Int']>
  /**  仓库id */
  warehouseId?: InputMaybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: InputMaybe<Scalars['String']>
}

export type SecondmentItemInput = {
  batchId?: InputMaybe<Scalars['ID']>
  commodityId?: InputMaybe<Scalars['Int']>
  commodityName?: InputMaybe<Scalars['String']>
  secondmentId?: InputMaybe<Scalars['ID']>
  secondmentItemId?: InputMaybe<Scalars['ID']>
  skuId?: InputMaybe<Scalars['Int']>
  /**
   *     unitType :Int
   *     unitTypeName:String
   *     totalType :Int
   *     totalTypeName :String
   */
  transferPrice?: InputMaybe<Scalars['Float']>
  /**
   *     specOptionId :Int
   *     skuTextDescription:String
   */
  transferTotalQuantity?: InputMaybe<Scalars['Float']>
  transferUnitQuantity?: InputMaybe<Scalars['Float']>
}

export type SecondmentItemPayload = {
  __typename?: 'SecondmentItemPayload'
  batchCode?: Maybe<Scalars['String']>
  batchId?: Maybe<Scalars['ID']>
  commodityId?: Maybe<Scalars['Int']>
  commodityName?: Maybe<Scalars['String']>
  conversion?: Maybe<Scalars['BigDecimal']>
  priceType?: Maybe<Scalars['Int']>
  priceTypeName?: Maybe<Scalars['String']>
  secondmentId?: Maybe<Scalars['ID']>
  secondmentItemId?: Maybe<Scalars['ID']>
  skuId?: Maybe<Scalars['Int']>
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  skuTextDescriptionList?: Maybe<Array<Maybe<Scalars['String']>>>
  specOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  specOptionIdList?: Maybe<Array<Maybe<Scalars['Int']>>>
  totalQuantity?: Maybe<Scalars['Float']>
  totalType?: Maybe<Scalars['Int']>
  totalTypeName?: Maybe<Scalars['String']>
  transferPrice?: Maybe<Scalars['Float']>
  transferTotalQuantity?: Maybe<Scalars['Float']>
  transferUnitQuantity?: Maybe<Scalars['Float']>
  unitPrice?: Maybe<Scalars['Float']>
  unitQuantity?: Maybe<Scalars['Float']>
  unitType?: Maybe<Scalars['Int']>
  unitTypeName?: Maybe<Scalars['String']>
}

export type SecondmentLogPayload = {
  __typename?: 'SecondmentLogPayload'
  createBy?: Maybe<Scalars['Int']>
  createTime?: Maybe<Scalars['Long']>
  createUserName?: Maybe<Scalars['String']>
  secondmentId?: Maybe<Scalars['ID']>
  secondmentLogDescription?: Maybe<Scalars['String']>
  secondmentLogId?: Maybe<Scalars['ID']>
  secondmentLogType?: Maybe<Scalars['Int']>
  secondmentLogTypeText?: Maybe<Scalars['String']>
}

export type SecondmentPageInput = {
  /** 商品类型id */
  commodityTypeId?: InputMaybe<Scalars['Int']>
  /** 借调申请列表时间，以天为单位 */
  date?: InputMaybe<Scalars['Long']>
  /** 订单状态 */
  orderStatus?: InputMaybe<Scalars['Int']>
  /** 借调单号 */
  secondmentCode?: InputMaybe<Scalars['String']>
}

export type SecondmentPayload = {
  __typename?: 'SecondmentPayload'
  /** 商品类型 */
  commodityTypeId?: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 操作原因（驳回原因） */
  description?: Maybe<Scalars['String']>
  /** 调入客户di */
  inBelongId?: Maybe<Scalars['Int']>
  /** 调入客户名称 */
  inBelongName?: Maybe<Scalars['String']>
  /** 调入客户类型 */
  inBelongType?: Maybe<Scalars['Int']>
  /** 操作时间 */
  operateDate?: Maybe<Scalars['Long']>
  /** 操作人员 */
  operateName?: Maybe<Scalars['String']>
  /** 订单类型 */
  orderType?: Maybe<Scalars['Int']>
  outBelongId?: Maybe<Scalars['Int']>
  /** 调出客户名称 */
  outBelongName?: Maybe<Scalars['String']>
  /** 调出客户类型 */
  outBelongType?: Maybe<Scalars['Int']>
  /** 备注 */
  remark?: Maybe<Scalars['String']>
  /**  订单号 */
  secondmentCode?: Maybe<Scalars['String']>
  /**  借调id */
  secondmentId?: Maybe<Scalars['ID']>
  secondmentOrderItemList?: Maybe<Array<Maybe<SecondmentItemPayload>>>
  /** 借调订单状态(10:待提交|20:已提交|30:已驳回|40:已完成|50:已取消|60:待审核) */
  secondmentStatus?: Maybe<Scalars['Int']>
  /**  仓库id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

export type SecondmentQueryPayload = {
  __typename?: 'SecondmentQueryPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<SecondmentPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type SecondmentStatusInput = {
  /** 驳回原因 */
  description?: InputMaybe<Scalars['String']>
  /** 借调id */
  secondmentId?: InputMaybe<Scalars['ID']>
  /** 借调状态 */
  secondmentStatus?: InputMaybe<Scalars['Int']>
}

export type SecondmentStockPayload = {
  __typename?: 'SecondmentStockPayload'
  batchCode?: Maybe<Scalars['String']>
  /** 批次号 */
  batchId?: Maybe<Scalars['ID']>
  /** 归属名称 */
  belongId?: Maybe<Scalars['Int']>
  /** 归属类型 */
  belongType?: Maybe<Scalars['Int']>
  commodityId?: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  conversion?: Maybe<Scalars['BigDecimal']>
  priceType?: Maybe<Scalars['Int']>
  priceTypeName?: Maybe<Scalars['String']>
  skuId?: Maybe<Scalars['Int']>
  /** 规格字符串，由后端组装 */
  skuTextDescriptionList?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 库存总计数量 */
  totalQuantity?: Maybe<Scalars['Float']>
  /** 总计数量单位 */
  totalType?: Maybe<Scalars['Int']>
  totalTypeName?: Maybe<Scalars['String']>
  unitPrice?: Maybe<Scalars['Float']>
  /** 库存数量 */
  unitQuantity?: Maybe<Scalars['Float']>
  /** 库存单位 */
  unitType?: Maybe<Scalars['Int']>
  unitTypeName?: Maybe<Scalars['String']>
}

export type SendSmsInput = {
  mobile?: InputMaybe<Scalars['String']>
}

export type SendSmsPayload = {
  __typename?: 'SendSmsPayload'
  success: Scalars['Boolean']
}

export type SkuBase = {
  /** sku信息 */
  sku?: Maybe<CommoditySku>
}

export type SkuDetailBase = {
  /** sku信息 */
  skuDetail?: Maybe<CommoditySku>
}

export type SkuQueryInput = {
  /** 是否有bom表 1 是 99 不是 */
  buildBom?: InputMaybe<Scalars['Int']>
  /** 商品类型 果品辅料周转筐 */
  commodityId?: InputMaybe<Scalars['Int']>
  /** sku的类型 原料 成品 半成品 次品 */
  skuType?: InputMaybe<Scalars['Int']>
}

export type SkuStockPayload = {
  __typename?: 'SkuStockPayload'
  commodityId?: Maybe<Scalars['Int']>
  commodityName?: Maybe<Scalars['String']>
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 商品规格选项id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** sku文字描述，规格选项文字数组 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 大单位库存数量 */
  stockTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 小单位库存数量 */
  stockUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 总计类型（例：件） */
  totalType?: Maybe<Scalars['Int']>
  /** 总计类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  unitType?: Maybe<Scalars['Int']>
  /** 单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
  warehouseId?: Maybe<Scalars['ID']>
  warehouseName?: Maybe<Scalars['String']>
}

export type SourceBelongOrgBase = {
  /** 调出所属组织 */
  sourceBelongOrg?: Maybe<Org>
}

export type SourceOrgBase = {
  /** 调出组织 */
  sourceOrg?: Maybe<Org>
}

export type StatusGroupCountInput = {
  /** 费用单来源类型 */
  billMainTypeList?: InputMaybe<Array<InputMaybe<BillMainTypeEnum>>>
}

export type StatusGroupCountPayload = {
  __typename?: 'StatusGroupCountPayload'
  /**  类型 */
  billMainType?: Maybe<BillMainTypeEnum>
  /**  状态 */
  billStatus?: Maybe<BillStatusEnum>
  /**  数量 */
  number?: Maybe<Scalars['Int']>
}

/** 库存 */
export type Stock = {
  __typename?: 'Stock'
  /**     商品id */
  commodityId?: Maybe<Scalars['Int']>
  /**     商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /**     商品sku id */
  commoditySkuId?: Maybe<Scalars['Int']>
  /**     商品规格选项id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /**     商品类型id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /**     商品类型名称 */
  commodityTypeName?: Maybe<Scalars['String']>
  /**     客户分组id */
  customerGroupId?: Maybe<Scalars['Int']>
  /**     客户分组名称 */
  customerGroupName?: Maybe<Scalars['String']>
  /**     客户id */
  customerId?: Maybe<Scalars['Int']>
  /**     客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** sku文字描述，规格选项文字数组 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /**     总计类型数量 */
  stockTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /**     总计类型 */
  stockTotalType?: Maybe<Scalars['Int']>
  /**     总计类型名称 */
  stockTotalTypeName?: Maybe<Scalars['String']>
  /**     单位类型数量 */
  stockUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 单位类型 */
  stockUnitType?: Maybe<Scalars['Int']>
  /**     单位类型名称 */
  stockUnitTypeName?: Maybe<Scalars['String']>
}

export type StockAdjustmentPayload = CommoditySkuBase &
  CreateUserBase &
  TotalTypeBase &
  UnitTypeBase & {
    __typename?: 'StockAdjustmentPayload'
    /** sku信息 */
    commoditySku?: Maybe<CommoditySku>
    /** 申请时间 */
    createTime?: Maybe<Scalars['Long']>
    /** 申请人 */
    createUser?: Maybe<User>
    /** 调整申请单id */
    stockAdjustmentId?: Maybe<Scalars['ID']>
    /** 调整申请单状态 */
    stockAdjustmentStatus?: Maybe<StockAdjustmentStatusEnum>
    /** 大单位数量 */
    totalQuantity?: Maybe<Scalars['BigDecimal']>
    /** 总计单位信息 */
    totalType?: Maybe<Unit>
    /** 小单位数量 */
    unitQuantity?: Maybe<Scalars['BigDecimal']>
    /** 基本单位信息 */
    unitType?: Maybe<Unit>
  }

export enum StockAdjustmentStatusEnum {
  /** 已审核 */
  Audited = 'AUDITED',
  /** 未知 */
  None = 'NONE',
  /** 已驳回 */
  Rejected = 'REJECTED',
  /** 待审核 */
  ToBeAudit = 'TO_BE_AUDIT',
}

export type StockAdjustmentStatusPayload = {
  __typename?: 'StockAdjustmentStatusPayload'
  /** 待审核记录条数 */
  toBeAudit?: Maybe<Scalars['Long']>
}

export type StockBatch = {
  __typename?: 'StockBatch'
  /** 批次号 */
  batchCode?: Maybe<Scalars['String']>
  /** 批次ID */
  batchId?: Maybe<Scalars['ID']>
}

export type StockBatchBase = {
  batch?: Maybe<StockBatch>
}

export type StockBatchPayload = {
  __typename?: 'StockBatchPayload'
  batchCode?: Maybe<Scalars['String']>
  batchId?: Maybe<Scalars['ID']>
  /** 换算单位 */
  conversion?: Maybe<Scalars['BigDecimal']>
  createTime?: Maybe<Scalars['Long']>
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  totalType?: Maybe<Scalars['Int']>
  totalTypeName?: Maybe<Scalars['String']>
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  unitType?: Maybe<Scalars['Int']>
  unitTypeName?: Maybe<Scalars['String']>
}

export type StockBatchPayloadV2 = {
  __typename?: 'StockBatchPayloadV2'
  /**  basisId */
  basisId?: Maybe<Scalars['ID']>
  /** 批次号 */
  batchCode?: Maybe<Scalars['String']>
  batchId?: Maybe<Scalars['ID']>
  /** 归属id */
  belongId?: Maybe<Scalars['ID']>
  /** 归属name */
  belongName?: Maybe<Scalars['String']>
  /** 归属类型 */
  belongType?: Maybe<Scalars['Int']>
  /** 分类id */
  categoryId?: Maybe<Scalars['ID']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /**  skuId */
  commoditySkuId?: Maybe<Scalars['ID']>
  /** 规格id */
  commoditySpecOptionIdList?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** 商品分类 */
  commodityTypeId?: Maybe<Scalars['ID']>
  createTime?: Maybe<Scalars['Long']>
  /**  单价类型 */
  priceType?: Maybe<Scalars['ID']>
  /**
   *     # 在库时间
   *     inTime:Long
   *     # 商品状态（10：正常 20：预警 30：呆滞品）
   *     commodityStatus:Int
   * sku 信息
   */
  sku?: Maybe<CommoditySkuPayload>
  /** 规格名称 */
  specOptionList?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 库存总计数量 */
  totalQuantity?: Maybe<Scalars['Float']>
  /** 总计数量单位 */
  totalType?: Maybe<Scalars['ID']>
  totalTypeName?: Maybe<Scalars['String']>
  /** 单价 */
  unitPrice?: Maybe<Scalars['BigDecimal']>
  /** 库存数量 */
  unitQuantity?: Maybe<Scalars['Float']>
  /** 库存单位 */
  unitType?: Maybe<Scalars['ID']>
  unitTypeName?: Maybe<Scalars['String']>
  /** 仓库名称 */
  warehouseId?: Maybe<Scalars['ID']>
  warehouseName?: Maybe<Scalars['String']>
}

export type StockBatchQueryInput = {
  commoditySkuId: Scalars['Int']
  commodityTypeId?: InputMaybe<Scalars['Int']>
  customerId: Scalars['Int']
  customerType: Scalars['Int']
  /** 退货订单ID v2.6.0采购退货新增 仅采购退货使用 */
  outStockId?: InputMaybe<Scalars['ID']>
}

export type StockCheckPayload = {
  __typename?: 'StockCheckPayload'
  /** 批次号 */
  batchNo?: Maybe<Scalars['String']>
  /** 记录id */
  checkRecordId?: Maybe<Scalars['Int']>
  /** 盘点库存总计数量 */
  checkTotalQuantity?: Maybe<Scalars['Float']>
  /** 盘点类型 */
  checkType?: Maybe<Scalars['Int']>
  /** 盘点库存数量 */
  checkUnitQuantity?: Maybe<Scalars['Float']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 订单id */
  orderId?: Maybe<Scalars['Int']>
  /** 备注 */
  remark?: Maybe<Scalars['String']>
  /** 规格字符串，由后端组装 */
  specOption?: Maybe<Scalars['String']>
  /** 总计数量单位 */
  totalName?: Maybe<Scalars['String']>
  /** 库存总计数量 */
  totalQuantity?: Maybe<Scalars['Float']>
  /** 库存单位 */
  unitName?: Maybe<Scalars['String']>
  /** 库存数量 */
  unitQuantity?: Maybe<Scalars['Float']>
}

/** 库存列表请求参数 */
export type StockCondition = {
  /** 商品类型 10原料，20辅料 */
  commodityType: Scalars['Int']
  /** 任务id */
  taskId: Scalars['ID']
}

export type StockConditionInput = {
  /** 归属id */
  belongId?: InputMaybe<Scalars['Int']>
  /** 归属类型 */
  belongType?: InputMaybe<Scalars['Int']>
  /** 具体商品类型(只针对于果品库存的类型需要传入数组参数) 原料 成品 半成品 次品 退货品 */
  commodityType?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** 商品分类 果品 辅料 周转筐 */
  commodityTypeId: Scalars['Int']
  /** 查询参数(商品名称批次号) */
  keyword?: InputMaybe<Scalars['String']>
  /** 仓库id */
  warehouseId?: InputMaybe<Scalars['ID']>
}

export enum StockOrderStatus {
  /**  已完成 */
  Complete = 'COMPLETE',
  /**  部分入(出)库 */
  PartStorage = 'PART_STORAGE',
  /**  待入(出)库 */
  UnStorage = 'UN_STORAGE',
}

export type StockOrderWaitCommodityPayload = {
  __typename?: 'StockOrderWaitCommodityPayload'
  /**  skuID */
  commoditySkuId?: Maybe<Scalars['Int']>
  /**  果品单价定位 */
  pricePosition?: Maybe<Scalars['Int']>
  /**  小计金额 */
  subtotalAmount?: Maybe<Scalars['BigDecimal']>
  /**  总计数量 */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  /**  总计类型 */
  totalType?: Maybe<Scalars['Int']>
  /**  单价 */
  unitPrice?: Maybe<Scalars['BigDecimal']>
  /**  单价类型 */
  unitPriceType?: Maybe<Scalars['Int']>
  /**  单位数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  /**  单位类型 */
  unitType?: Maybe<Scalars['Int']>
}

export type StockPageResultPayload = {
  __typename?: 'StockPageResultPayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<StockPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type StockPayload = {
  __typename?: 'StockPayload'
  /** 批次号 */
  batchCode?: Maybe<Scalars['String']>
  /** 归属id */
  belongId?: Maybe<Scalars['Int']>
  /** 归属name */
  belongName?: Maybe<Scalars['String']>
  /** 归属类型 */
  belongType?: Maybe<Scalars['Int']>
  /** 分类id */
  categoryId?: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 规格id */
  commoditySpecOptionIdList?: Maybe<Array<Maybe<Scalars['Int']>>>
  /**  商品状态（10：正常 20：预警 30：呆滞品） */
  commodityStatus?: Maybe<Scalars['Int']>
  /** 商品分类 */
  commodityTypeId?: Maybe<Scalars['Int']>
  createTime?: Maybe<Scalars['Long']>
  /** displayBelongName */
  displayBelongName?: Maybe<Scalars['String']>
  /**  在库时间 */
  inTime?: Maybe<Scalars['Long']>
  /** 规格名称 */
  specOptionList?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 库存总计数量 */
  totalQuantity?: Maybe<Scalars['Float']>
  /** 总计数量单位 */
  totalType?: Maybe<Scalars['Int']>
  totalTypeName?: Maybe<Scalars['String']>
  /** 库存数量 */
  unitQuantity?: Maybe<Scalars['Float']>
  /** 库存单位 */
  unitType?: Maybe<Scalars['Int']>
  unitTypeName?: Maybe<Scalars['String']>
  /** 仓库名称 */
  warehouseId?: Maybe<Scalars['ID']>
  warehouseName?: Maybe<Scalars['String']>
}

export type StockQuantity = {
  __typename?: 'StockQuantity'
  /** 库存量大单位数量 */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 库存量小单位数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
}

export type StockRecordCommodityPayload = {
  __typename?: 'StockRecordCommodityPayload'
  /**  skuID */
  commoditySkuId?: Maybe<Scalars['Int']>
  /**  单位数量毛重 */
  grossUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /**  批次编码 */
  stockBatchCode?: Maybe<Scalars['String']>
  /**  批次ID */
  stockBatchId?: Maybe<Scalars['ID']>
  /**  小计金额 */
  subtotalAmount?: Maybe<Scalars['BigDecimal']>
  /**  总计数量 */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  /**  总计类型 */
  totalType?: Maybe<Scalars['Int']>
  /**  单价 */
  unitPrice?: Maybe<Scalars['BigDecimal']>
  /**  单价类型 */
  unitPriceType?: Maybe<Scalars['Int']>
  /**  单位数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  /**  单位类型 */
  unitType?: Maybe<Scalars['Int']>
}

export type StringOption = {
  __typename?: 'StringOption'
  /** 描述 */
  label?: Maybe<Scalars['String']>
  /** 值 */
  value?: Maybe<Scalars['String']>
}

export type SubmitAcquireInput = {
  applyId: Scalars['ID']
}

export type SubmitDeliveryOrderInput = {
  /** 配送单订单ID */
  orderId: Scalars['ID']
}

export type SubmitPurchaseReturnOrderInput = {
  returnId: Scalars['ID']
}

export type SubmitSaleIncomeOrderInput = {
  incomeId: Scalars['ID']
}

export type SubmitUserBase = {
  /** 提交人 */
  submitUser?: Maybe<User>
}

export type SubmitWasteSaleOrderInput = {
  saleOrderId: Scalars['ID']
}

export type SubsidiaryDetailInput = {
  commodityCategoryName?: InputMaybe<Scalars['String']>
  commodityId?: InputMaybe<Scalars['Int']>
  commodityName?: InputMaybe<Scalars['String']>
  commoditySpec?: InputMaybe<CommoditySpecInput>
  skuSum?: InputMaybe<Scalars['Int']>
  status?: InputMaybe<Scalars['Int']>
}

export type SubsidiaryDetailPayload = {
  __typename?: 'SubsidiaryDetailPayload'
  commodityCategoryName?: Maybe<Scalars['String']>
  commodityId?: Maybe<Scalars['Int']>
  commodityName?: Maybe<Scalars['String']>
  commoditySpec?: Maybe<CommoditySpecPayload>
  skuSum?: Maybe<Scalars['Int']>
  status?: Maybe<Scalars['Int']>
}

export type SubsidiaryPageInput = {
  commodityName?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Page>
}

export type SubsidiaryPagePayload = {
  __typename?: 'SubsidiaryPagePayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<SubsidiaryPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type SubsidiaryPayload = {
  __typename?: 'SubsidiaryPayload'
  commodityCategoryId?: Maybe<Scalars['Int']>
  commodityCategoryName?: Maybe<Scalars['String']>
  commodityId?: Maybe<Scalars['Int']>
  commodityName?: Maybe<Scalars['String']>
  skuSum?: Maybe<Scalars['Int']>
  status?: Maybe<Scalars['Int']>
}

export type SubsidiaryRepeatInput = {
  commodityId?: InputMaybe<Scalars['Int']>
  commodityName?: InputMaybe<Scalars['String']>
}

export type SubsidiaryStatusInput = {
  commodityId?: InputMaybe<Scalars['Int']>
  status?: InputMaybe<Scalars['Int']>
}

export type SummaryAddressInfo = AddressInfoBase & {
  __typename?: 'SummaryAddressInfo'
  /** 地址信息 */
  addressInfo?: Maybe<AddressInfo>
}

export type SummaryCustomerAddressInfo = CustomerAddressInfoBase & {
  __typename?: 'SummaryCustomerAddressInfo'
  /** 客户或地址信息 */
  customerAddressInfo?: Maybe<CustomerAddressInfo>
}

export type Supplier = {
  __typename?: 'Supplier'
  /** 供应商Id */
  supplierId?: Maybe<Scalars['Int']>
  /** 供应商名称 */
  supplierName?: Maybe<Scalars['String']>
}

/** 供应商属性 */
export enum SupplierAttribute {
  /** 外部 */
  External = 'EXTERNAL',
  /** 内部 */
  Internal = 'INTERNAL',
}

export type SupplierBase = {
  supplier?: Maybe<Supplier>
}

export type SupplierBasePayload = {
  __typename?: 'SupplierBasePayload'
  /** 供应商属性 */
  attribute?: Maybe<Scalars['Int']>
  /** 供应商门牌号 */
  houseNum?: Maybe<Scalars['String']>
  /** 供应商主表id */
  id?: Maybe<Scalars['Int']>
  /** 座机号码 */
  landlineNum?: Maybe<Scalars['String']>
  /** 供应商名称 */
  name?: Maybe<Scalars['String']>
  /** 联系电话 */
  phoneNum?: Maybe<Scalars['String']>
  /** 供应商地址 */
  supplierAddress?: Maybe<Scalars['String']>
  /** 纳税人识别号 */
  tfn?: Maybe<Scalars['String']>
}

export type SupplierConditionInput = {
  /** 供应商属性 v2.4 */
  attribute?: InputMaybe<SupplierAttribute>
  keyword?: InputMaybe<Scalars['String']>
  /** 供应商类型 2.3新增  1：水果 2：食品 3：辅料 4：周转筐 5：运杂 */
  supplierTypeId?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type SupplierInput = {
  /** 供应商属性 v2.4 */
  attribute?: InputMaybe<SupplierAttribute>
  /** 供应商所属组织 v2.4 */
  belongOrgId?: InputMaybe<Scalars['Int']>
  houseNum?: InputMaybe<Scalars['String']>
  phoneNum?: InputMaybe<Scalars['String']>
  remark?: InputMaybe<Scalars['String']>
  supplierAddress?: InputMaybe<Scalars['String']>
  supplierId?: InputMaybe<Scalars['Int']>
  supplierName?: InputMaybe<Scalars['String']>
  supplierShortName?: InputMaybe<Scalars['String']>
  /** 供应商类型 2.3新增  1：水果 2：食品 3：辅料 4：周转筐 5：运杂 */
  supplierTypeId?: InputMaybe<Scalars['Int']>
  tfn?: InputMaybe<Scalars['String']>
}

/** 客户分页实体 */
export type SupplierPagePayload = {
  __typename?: 'SupplierPagePayload'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<SupplierPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type SupplierPayload = BelongOrgBase & {
  __typename?: 'SupplierPayload'
  /** 供应商属性Id v2.4 */
  attribute?: Maybe<SupplierAttribute>
  /** 供应商所属组织 v2.4 */
  belongOrg?: Maybe<Org>
  /**
   * 供应商商品类型
   * @deprecated 2.3废弃
   */
  commodityTypeId?: Maybe<Scalars['Int']>
  /**
   * 供应商商品类型名称
   * @deprecated 2.3 废弃
   */
  commodityTypeName?: Maybe<Scalars['String']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 财务编码 */
  financialSystemCode?: Maybe<Scalars['String']>
  /** 门牌号 */
  houseNum?: Maybe<Scalars['String']>
  /** 座机号 */
  landlineNum?: Maybe<Scalars['String']>
  /** 电话号码 */
  phoneNum?: Maybe<Scalars['String']>
  /** 备注 */
  remark?: Maybe<Scalars['String']>
  /** 供应商地址 */
  supplierAddress?: Maybe<Scalars['String']>
  /** 详情id */
  supplierDetailId?: Maybe<Scalars['Int']>
  /** 供应商id */
  supplierId?: Maybe<Scalars['Int']>
  /** 供应商名称 */
  supplierName?: Maybe<Scalars['String']>
  /** 供应商简称 */
  supplierShortName?: Maybe<Scalars['String']>
  /** 供应商类型 2.3新增  1：水果 2：食品 3：辅料 4：周转筐 5：运杂 */
  supplierTypeId?: Maybe<Scalars['Int']>
  /** 税务号 */
  tfn?: Maybe<Scalars['String']>
  /** 供应商类型名称 */
  typeName?: Maybe<Scalars['String']>
}

export type SupplierType = {
  __typename?: 'SupplierType'
  /** 供应商类型 */
  supplierType?: Maybe<Scalars['Int']>
  /** 供应商类型名称 */
  typeName?: Maybe<Scalars['String']>
}

export type TargetBelongOrgBase = {
  /** 调入所属组织 */
  targetBelongOrg?: Maybe<Org>
}

export type TargetOrgBase = {
  /** 调入组织 */
  targetOrg?: Maybe<Org>
}

/** 生产任务详情 */
export type Task = {
  __typename?: 'Task'
  /**      取消原因 */
  cancelReason?: Maybe<Scalars['String']>
  /**     生产组长id */
  leaderId?: Maybe<Scalars['Int']>
  /**     生产组长名称 */
  leaderName?: Maybe<Scalars['String']>
  /** 生产线 */
  line?: Maybe<Scalars['Int']>
  /**     正式工人数 */
  numberActual?: Maybe<Scalars['Int']>
  /**     计划人数 */
  numberPlan?: Maybe<Scalars['Int']>
  /**     生产计划 */
  plan?: Maybe<Plan>
  /** 生产计划id */
  planId?: Maybe<Scalars['ID']>
  /** 任务单号 */
  taskCode?: Maybe<Scalars['String']>
  /** 生产任务id */
  taskId?: Maybe<Scalars['ID']>
  /**     生产任务明细 */
  taskItems?: Maybe<Array<Maybe<TaskItem>>>
  /**     任务状态【10：无状态，计划未发布时任务没有状态、20：待生产、30：生产中、40：已完成、50：已取消】 */
  taskStatus?: Maybe<Scalars['Int']>
  /**     任务状态名称 */
  taskStatusName?: Maybe<Scalars['String']>
  /**     临时工人数 */
  tempWorkerQuantity?: Maybe<Scalars['Int']>
}

export type TaskAcquireMaterialCommodityPayload = {
  __typename?: 'TaskAcquireMaterialCommodityPayload'
  bomId?: Maybe<Scalars['Int']>
  commodityCategoryId?: Maybe<Scalars['Int']>
  commodityCategoryName?: Maybe<Scalars['String']>
  commodityId?: Maybe<Scalars['Int']>
  commodityName?: Maybe<Scalars['String']>
  commodityPlaceOriginId?: Maybe<Scalars['Int']>
  commodityPlaceOriginName?: Maybe<Scalars['String']>
  commoditySkuId?: Maybe<Scalars['Int']>
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  commodityTypeId?: Maybe<Scalars['Int']>
  commodityTypeName?: Maybe<Scalars['String']>
  commodityVarietyId?: Maybe<Scalars['Int']>
  commodityVarietyName?: Maybe<Scalars['String']>
  customerId?: Maybe<Scalars['Int']>
  customerName?: Maybe<Scalars['String']>
  outStockRecordItemId?: Maybe<Scalars['Long']>
  property?: Maybe<Array<Maybe<Scalars['Int']>>>
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  status?: Maybe<Scalars['Int']>
  stockBatchCode?: Maybe<Scalars['String']>
  stockBatchId?: Maybe<Scalars['ID']>
  stockTotalQuantity?: Maybe<Scalars['BigDecimal']>
  stockTotalTypeName?: Maybe<Scalars['String']>
  stockUnitQuantity?: Maybe<Scalars['BigDecimal']>
  stockUnitTypeName?: Maybe<Scalars['String']>
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  totalType?: Maybe<Scalars['Int']>
  totalTypeName?: Maybe<Scalars['String']>
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  unitType?: Maybe<Scalars['Int']>
  unitTypeName?: Maybe<Scalars['String']>
  warehouseId?: Maybe<Scalars['ID']>
  warehouseName?: Maybe<Scalars['String']>
}

/** 任务分析 */
export type TaskAnalysisPayload = {
  __typename?: 'TaskAnalysisPayload'
  /** 按渠道统计任务 */
  channelStatistics?: Maybe<Array<Maybe<ChannelStatisticsPayload>>>
  /** 任务总数 */
  totalTask?: Maybe<Scalars['Int']>
}

/** 生产任务列表查询 */
export type TaskCondition = {
  /**     时间 yyyy-MM-dd */
  date: Scalars['Long']
  /**     任务状态 */
  taskStatus: Scalars['Int']
}

/** 生产任务添加入参 */
export type TaskInput = {
  /** 变更id */
  changeId?: InputMaybe<Scalars['ID']>
  /** 商品信息 */
  commodities: Array<InputMaybe<CommodityInput>>
  /** 生产组长id */
  leaderId: Scalars['Int']
  /** 生产组长名称 */
  leaderName: Scalars['String']
  /** 生产线 */
  line: Scalars['Int']
  /** 生产计划id */
  planId: Scalars['ID']
}

export type TaskInsertInput = {
  commodities: Array<InputMaybe<CommodityInput>>
  /** 生产组长id */
  leaderId: Scalars['Int']
  /** 生产线 */
  line: Scalars['Int']
}

/** 生产任务明细 */
export type TaskItem = {
  __typename?: 'TaskItem'
  /**  变更数量 */
  changeQuantity?: Maybe<Scalars['BigDecimal']>
  /**  变更类型 */
  changeType?: Maybe<Scalars['Int']>
  /**     bom id */
  commodityBomId?: Maybe<Scalars['Int']>
  /**     商品id */
  commodityId?: Maybe<Scalars['Int']>
  /**     商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /**     商品sku id */
  commoditySkuId?: Maybe<Scalars['Int']>
  /**     商品规格选项id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 商品状态 10 正常 20 取消中 30 已取消 40 已拒绝 */
  commodityStatus?: Maybe<CommodityStatus>
  /**     已生产数量，默认0 */
  completedNum?: Maybe<Scalars['BigDecimal']>
  /**     期望数量 */
  expectNum?: Maybe<Scalars['BigDecimal']>
  /** 出库明细id */
  outOrderItemId?: Maybe<Scalars['Long']>
  /** 包装要求 */
  packageLabel?: Maybe<Scalars['String']>
  /**     变更通知,0 没有通知  10 通知未读  20 通知已处理  30 通知已忽略 */
  planChangeNotice?: Maybe<Scalars['Int']>
  /** 生产计划id */
  planId?: Maybe<Scalars['ID']>
  /** 品质要求 */
  quantityLabel?: Maybe<Scalars['String']>
  /**     sku文字描述，规格选项文字数组 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 规格要求 */
  specificationLabel?: Maybe<Scalars['String']>
  /**     生产任务id */
  taskId?: Maybe<Scalars['ID']>
  /**     生产任务明细id */
  taskItemId?: Maybe<Scalars['ID']>
  /**     总计类型 */
  totalType?: Maybe<Scalars['Int']>
  /**     总计类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /** 单位数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 单位类型 */
  unitType?: Maybe<Scalars['Int']>
  /**     单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
}

export type TaskItemPayload = {
  __typename?: 'TaskItemPayload'
  commodityBomId?: Maybe<Scalars['Int']>
  commodityId?: Maybe<Scalars['Int']>
  commodityName?: Maybe<Scalars['String']>
  commoditySkuId?: Maybe<Scalars['Int']>
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 商品状态 10 正常 20 取消中 30 已取消 40 已拒绝 */
  commodityStatus?: Maybe<CommodityStatus>
  completedNum?: Maybe<Scalars['BigDecimal']>
  expectNum?: Maybe<Scalars['BigDecimal']>
  outOrderItemId?: Maybe<Scalars['ID']>
  /** 包装要求 */
  packageLabel?: Maybe<Scalars['String']>
  /** 包装要求 */
  packageRequireInfos?: Maybe<Array<Maybe<OutOrderItemRequestPayload>>>
  /**  0 没有通知  10 通知未读  20 通知已处理  30 通知已忽略 */
  planChangeNotice?: Maybe<Scalars['Int']>
  /**  预估销量 */
  planQuantity?: Maybe<Scalars['BigDecimal']>
  /** 品质要求 */
  quantityLabel?: Maybe<Scalars['String']>
  saleChangePayload?: Maybe<Array<Maybe<SaleChangePayload>>>
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 规格要求 */
  specificationLabel?: Maybe<Scalars['String']>
  /**  库存成品数量 */
  stockQuantity?: Maybe<Scalars['BigDecimal']>
  taskItemId?: Maybe<Scalars['ID']>
  totalType?: Maybe<Scalars['Int']>
  totalTypeName?: Maybe<Scalars['String']>
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  unitType?: Maybe<Scalars['Int']>
  unitTypeName?: Maybe<Scalars['String']>
}

/** 生产任务列表商品信息 */
export type TaskItems = {
  __typename?: 'TaskItems'
  /**     商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /**     期望数量 */
  expectNum?: Maybe<Scalars['BigDecimal']>
  /** 取消生产统计 */
  planCancelCount?: Maybe<Scalars['Int']>
  /**     变更标识,0 没有通知  10 通知未读  20 通知已处理  30 通知已忽略 */
  planChangeNotice?: Maybe<Scalars['Int']>
  /**     sku选项 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /**     总计类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
}

/** 生产操作记录 */
export type TaskLog = {
  __typename?: 'TaskLog'
  /** 创建人id */
  createBy?: Maybe<Scalars['Int']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 创建人名称 */
  createUserName?: Maybe<Scalars['String']>
  /** 生产计划id */
  planId?: Maybe<Scalars['ID']>
  /** 生产任务id */
  taskId?: Maybe<Scalars['ID']>
  /** 生产任务操作日志备注 */
  taskLogDescription?: Maybe<Scalars['String']>
  /** 生产任务操作日志id */
  taskLogId?: Maybe<Scalars['Int']>
  /** 生产任务操作日志类型【10：开始任务、20：原料领料、30：辅料领料、40：成品入库、50：结束任务】 */
  taskLogType?: Maybe<Scalars['Int']>
  /** 生产任务操作类型枚举文字 */
  taskLogTypeText?: Maybe<Scalars['String']>
}

/** 分页对象 */
export type TaskPageResult = {
  __typename?: 'TaskPageResult'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<Tasks>>>
  totalRecords?: Maybe<Scalars['Long']>
}

/** 任务实体 */
export type TaskPayload = {
  __typename?: 'TaskPayload'
  /** 商品信息 */
  commodities?: Maybe<Array<Maybe<TaskItemPayload>>>
  /** 生产组长id */
  leaderId?: Maybe<Scalars['Int']>
  /** 生产组长名称 */
  leaderName?: Maybe<Scalars['String']>
  /** 生产线 */
  line?: Maybe<Scalars['Int']>
  /** 计划人数 */
  numberPlan?: Maybe<Scalars['Int']>
  /** 任务单号名称 */
  taskCode?: Maybe<Scalars['String']>
  /** 生产任务id */
  taskId?: Maybe<Scalars['ID']>
  /** 任务状态ID */
  taskStatus?: Maybe<Scalars['Int']>
  /** 任务状态名称 */
  taskStatusName?: Maybe<Scalars['String']>
}

export type TaskReturnMaterialCommodityPayload = {
  __typename?: 'TaskReturnMaterialCommodityPayload'
  Deleted?: Maybe<Scalars['Int']>
  bomId?: Maybe<Scalars['Int']>
  commodityCategoryId?: Maybe<Scalars['Int']>
  commodityCategoryName?: Maybe<Scalars['String']>
  commodityId?: Maybe<Scalars['Int']>
  commodityName?: Maybe<Scalars['String']>
  commodityPlaceOriginId?: Maybe<Scalars['Int']>
  commodityPlaceOriginName?: Maybe<Scalars['String']>
  commoditySkuId?: Maybe<Scalars['Int']>
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  commodityTypeId?: Maybe<Scalars['Int']>
  commodityTypeName?: Maybe<Scalars['String']>
  commodityVarietyId?: Maybe<Scalars['Int']>
  commodityVarietyName?: Maybe<Scalars['String']>
  /** 单位换算关系 */
  conversion?: Maybe<Scalars['BigDecimal']>
  createBy?: Maybe<Scalars['Int']>
  createTime?: Maybe<Scalars['Int']>
  customerId?: Maybe<Scalars['Int']>
  customerName?: Maybe<Scalars['String']>
  outStockRecordId?: Maybe<Scalars['ID']>
  outStockRecordItemId?: Maybe<Scalars['ID']>
  pickingTotalQuantity?: Maybe<Scalars['BigDecimal']>
  pickingUnitQuantity?: Maybe<Scalars['BigDecimal']>
  property?: Maybe<Array<Maybe<Scalars['Int']>>>
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  status?: Maybe<Scalars['Int']>
  stockBatchCode?: Maybe<Scalars['String']>
  stockBatchId?: Maybe<Scalars['ID']>
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  totalType?: Maybe<Scalars['Int']>
  totalTypeName?: Maybe<Scalars['String']>
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  unitType?: Maybe<Scalars['Int']>
  unitTypeName?: Maybe<Scalars['String']>
  updateBy?: Maybe<Scalars['Int']>
  updateTime?: Maybe<Scalars['Int']>
}

/** 生产任务统计 */
export type TaskStatistics = {
  __typename?: 'TaskStatistics'
  /** 已取消 */
  canceled?: Maybe<Scalars['Int']>
  /** 已完成数量 */
  completed?: Maybe<Scalars['Int']>
  /**     生产中数量 */
  inProduction?: Maybe<Scalars['Int']>
  /**     待生产数量 */
  toBeProduced?: Maybe<Scalars['Int']>
}

/** 生产任务列表 */
export type Tasks = {
  __typename?: 'Tasks'
  /**     客户名称 */
  customerName?: Maybe<Scalars['String']>
  /**     结束时间 */
  endTime?: Maybe<Scalars['Long']>
  /**     生产进度 */
  schedule?: Maybe<Scalars['String']>
  /** 开始时间 */
  startTime?: Maybe<Scalars['Long']>
  /**     任务单号 */
  taskCode?: Maybe<Scalars['String']>
  /**     生产任务id */
  taskId?: Maybe<Scalars['ID']>
  /**     任务明细 */
  taskItems?: Maybe<Array<Maybe<TaskItems>>>
  /**     任务状态【10：无状态、20：待生产、30：生产中、40：已完成、50：已取消】 */
  taskStatus?: Maybe<Scalars['Int']>
  /**     任务状态名称 */
  taskStatusName?: Maybe<Scalars['String']>
  /**     总实际生产数量 */
  totalCompletedNum?: Maybe<Scalars['Int']>
  /**     总预期数量 */
  totalExpectNum?: Maybe<Scalars['Int']>
  /**     仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

export type TemplateDetailPayload = {
  __typename?: 'TemplateDetailPayload'
  amount?: Maybe<Scalars['Float']>
  businessItemValue?: Maybe<Scalars['String']>
  costRule?: Maybe<CostRulePayload>
  dictItemId?: Maybe<Scalars['ID']>
  extendTypesList?: Maybe<Array<Maybe<Scalars['Int']>>>
  partCostCalculate?: Maybe<Scalars['Int']>
  repeatUse?: Maybe<Scalars['Int']>
  requiredField?: Maybe<Scalars['Int']>
}

/** Query root */
export type TemplatePayload = {
  __typename?: 'TemplatePayload'
  appId?: Maybe<Scalars['Int']>
  createTime?: Maybe<Scalars['Long']>
  note?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  tempCode?: Maybe<Scalars['String']>
  tempId?: Maybe<Scalars['ID']>
  tempName?: Maybe<Scalars['String']>
  tempType?: Maybe<Scalars['String']>
  templateDetailList?: Maybe<Array<Maybe<TemplateDetailPayload>>>
  tenantId?: Maybe<Scalars['ID']>
  updateTime?: Maybe<Scalars['Long']>
  version?: Maybe<Scalars['Int']>
}

export type TimeRange = {
  /** 截至时间 */
  endTime?: InputMaybe<Scalars['Long']>
  /** 起始时间 */
  startTime?: InputMaybe<Scalars['Long']>
}

/** 待入库商品信息 */
export type ToBeInboundPayload = {
  __typename?: 'ToBeInboundPayload'
  /** SPU名称 */
  commodityName?: Maybe<Scalars['String']>
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 副单位与基本单位换算 */
  conversion?: Maybe<Scalars['BigDecimal']>
  /** 毛重 */
  grossUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 2.3.1新增 0 其他 10 净重 20 毛重 */
  pricePosition?: Maybe<Scalars['Int']>
  /** 规格选项 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 副单位数量 */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  totalType?: Maybe<Scalars['Int']>
  /** 副单位类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /** 小单位数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  unitType?: Maybe<Scalars['Int']>
  /** 小单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
  waitTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 待入库数量 */
  waitUnitQuantity?: Maybe<Scalars['BigDecimal']>
}

/** 待出库商品信息 */
export type ToBeOutbount = {
  __typename?: 'ToBeOutbount'
  /** SPU名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 规格选项 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  /** 副单位数量 */
  totalQuantity?: Maybe<Scalars['String']>
  /** 副单位类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /** 小单位数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 小单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
}

export type TotalTypeBase = {
  /** 总计单位信息 */
  totalType?: Maybe<Unit>
}

export type TransferBillInput = {
  /**  费用金额 */
  amount?: InputMaybe<Scalars['BigDecimal']>
  /**  费用类型 */
  billType?: InputMaybe<Scalars['Int']>
  /**  车牌 */
  brand?: InputMaybe<Scalars['String']>
  /**  付款方式 */
  payMode?: InputMaybe<Scalars['Int']>
  /**  联系电话 */
  phone?: InputMaybe<Scalars['String']>
  /**  备注 */
  remark?: InputMaybe<Scalars['String']>
  /**  供应商id */
  supplierId?: InputMaybe<Scalars['Int']>
}

export type TransferBillPayload = BelongOrgBase &
  TargetBelongOrgBase & {
    __typename?: 'TransferBillPayload'
    /**  所属组织  */
    belongOrg?: Maybe<Org>
    /**  费用审核人 */
    billAuditBy?: Maybe<Scalars['Int']>
    /**  费用审核人姓名 */
    billAuditName?: Maybe<Scalars['String']>
    /**  费用单id */
    billId?: Maybe<Scalars['ID']>
    billStatus?: Maybe<BillStatusEnum>
    /**  费用状态 */
    billStatusCode?: Maybe<Scalars['Int']>
    /**  费用状态名称 */
    billStatusName?: Maybe<Scalars['String']>
    /**  商品类型 */
    commodityType?: Maybe<Scalars['Int']>
    /**  商品类型名称 */
    commodityTypeName?: Maybe<Scalars['String']>
    /**  调拨订单创建时间 */
    flowApplyCreateTime?: Maybe<Scalars['Long']>
    /**  调拨单号 */
    flowCode?: Maybe<Scalars['String']>
    /**  调拨订单创建人 */
    flowCreateBy?: Maybe<Scalars['Int']>
    /**  调拨订单创建人姓名 */
    flowCreateName?: Maybe<Scalars['String']>
    /**  调拨申请单id */
    flowId?: Maybe<Scalars['ID']>
    /**  调拨申请状态 */
    flowStatus?: Maybe<Scalars['Int']>
    /**  调拨申请状态名称 */
    flowStatusName?: Maybe<Scalars['String']>
    /**  调拨申请类型 */
    flowType?: Maybe<Scalars['Int']>
    /**  调拨申请类型名称 */
    flowTypeName?: Maybe<Scalars['String']>
    /**  出入库订单编号 */
    orderCode?: Maybe<Scalars['String']>
    /**  出入库订单id */
    orderId?: Maybe<Scalars['ID']>
    recordUpdateTime?: Maybe<Scalars['Long']>
    /**  驳回原因 */
    refuseNote?: Maybe<Scalars['String']>
    /**  备注信息 */
    remark?: Maybe<Scalars['String']>
    /**  来源APP */
    sourceAppId?: Maybe<Scalars['Int']>
    /**  调出归属id */
    sourceBelongId?: Maybe<Scalars['Int']>
    /**  调出归属名称 */
    sourceBelongName?: Maybe<Scalars['String']>
    /**  调出归属类型 */
    sourceBelongType?: Maybe<Scalars['Int']>
    /**  来源id */
    sourceId?: Maybe<Scalars['ID']>
    /**  调出方合计 */
    sourceTotalAmount?: Maybe<Scalars['BigDecimal']>
    /**  调出仓库id */
    sourceWarehouseId?: Maybe<Scalars['ID']>
    /**  调出仓库名称 */
    sourceWarehouseName?: Maybe<Scalars['String']>
    /**  出入库审核人 */
    stockAuditUser?: Maybe<Scalars['Int']>
    /**  出入库审核人 */
    stockAuditUserName?: Maybe<Scalars['String']>
    /**  出入库操作人 */
    stockCreateBy?: Maybe<Scalars['Int']>
    /**  出入库操作人姓名 */
    stockCreateName?: Maybe<Scalars['String']>
    /**  出入库时间 */
    stockUpdateTime?: Maybe<Scalars['Long']>
    /**  调入归属id */
    targetBelongId?: Maybe<Scalars['Int']>
    /**  调入归属名称 */
    targetBelongName?: Maybe<Scalars['String']>
    /**  调入所属组织  */
    targetBelongOrg?: Maybe<Org>
    /**  调入归属类型 */
    targetBelongType?: Maybe<Scalars['Int']>
    /**  调入方合计 */
    targetTotalAmount?: Maybe<Scalars['BigDecimal']>
    /**  调入仓库id */
    targetWarehouseId?: Maybe<Scalars['ID']>
    /**  调入仓库名称 */
    targetWarehouseName?: Maybe<Scalars['String']>
    /**  调拨商品 */
    transferCommodityBill?: Maybe<TransferCommodityBillPayload>
    /**  运杂费用 */
    transferOtherBill?: Maybe<TransferOtherBillPayload>
    /**  调拨类型 */
    transferType?: Maybe<Scalars['Int']>
  }

export type TransferBillSummaryPayload = {
  __typename?: 'TransferBillSummaryPayload'
  toAudit?: Maybe<Scalars['Long']>
  toInSubmit?: Maybe<Scalars['Long']>
  toOutSubmit?: Maybe<Scalars['Long']>
}

export type TransferCommodityBillPayload = {
  __typename?: 'TransferCommodityBillPayload'
  /**  货款单号 */
  billCode?: Maybe<Scalars['String']>
  /**  备注 */
  remark?: Maybe<Scalars['String']>
  /**  货款金额总计 */
  totalAmount?: Maybe<Scalars['BigDecimal']>
  /**  明细数据 */
  transferCommodityItemBills?: Maybe<
    Array<Maybe<TransferCommodityItemBillPayload>>
  >
}

export type TransferCommodityItemBillPayload = SkuDetailBase & {
  __typename?: 'TransferCommodityItemBillPayload'
  /** 小计 */
  amount?: Maybe<Scalars['BigDecimal']>
  /** 批次号 */
  batchCode?: Maybe<Scalars['String']>
  /** 批次id */
  batchId?: Maybe<Scalars['ID']>
  /** 商品id */
  commodityId?: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 商品sku id */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 商品规格选项id */
  commoditySpecOptionId?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 换算关系 */
  conversion?: Maybe<Scalars['BigDecimal']>
  /** 创建人id */
  createBy?: Maybe<Scalars['Int']>
  /** 创建时间 */
  createTime?: Maybe<Scalars['Long']>
  /** 所属客户id */
  customerId?: Maybe<Scalars['Int']>
  /** 所属客户名称 */
  customerName?: Maybe<Scalars['String']>
  /** 订单明细id */
  itemId?: Maybe<Scalars['ID']>
  /** 计价单位 */
  priceType?: Maybe<Scalars['Int']>
  /** 计价单位类型名称 */
  priceTypeName?: Maybe<Scalars['String']>
  /** 商品信息 */
  skuDetail?: Maybe<CommoditySku>
  /** sku文字描述，规格选项文字数组 */
  skuTextDescription?: Maybe<Array<Maybe<Scalars['String']>>>
  stockTotalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 库存数量 */
  stockUnitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 总计类型数量（例：件） */
  totalQuantity?: Maybe<Scalars['BigDecimal']>
  /** 总计类型（例：件） */
  totalType?: Maybe<Scalars['Int']>
  /** 总计类型名称 */
  totalTypeName?: Maybe<Scalars['String']>
  /** 销售单价 */
  unitPrice?: Maybe<Scalars['BigDecimal']>
  /** 单位类型数量（例：kg，个） */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 单位类型（例：kg，个） */
  unitType?: Maybe<Scalars['Int']>
  /** 单位类型名称 */
  unitTypeName?: Maybe<Scalars['String']>
  /** 更新人id */
  updateBy?: Maybe<Scalars['Int']>
  /** 更新时间 */
  updateTime?: Maybe<Scalars['Long']>
}

export type TransferOptionsPayload = {
  __typename?: 'TransferOptionsPayload'
  label?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['Int']>
}

export type TransferOrderPayload = BelongOrgBase &
  TargetBelongOrgBase & {
    __typename?: 'TransferOrderPayload'
    /**  所属组织  */
    belongOrg?: Maybe<Org>
    /** 费用id */
    billId?: Maybe<Scalars['ID']>
    /** 费用状态 */
    billStatus?: Maybe<Scalars['Int']>
    /** 费用状态名称 */
    billStatusName?: Maybe<Scalars['String']>
    /** 商品类型 */
    commodityType?: Maybe<Scalars['Int']>
    /** 商品类型名称 */
    commodityTypeName?: Maybe<Scalars['String']>
    /** 创建人员 */
    createBy?: Maybe<Scalars['Int']>
    /** 创建时间 */
    createTime?: Maybe<Scalars['Long']>
    /** 创建人员姓名 */
    createUserName?: Maybe<Scalars['String']>
    /** 操作人联系电话 */
    createUserPhone?: Maybe<Scalars['String']>
    /** 调拨去向筛选 10 分拣仓-分拣仓 20批发-分拣仓 30分拣仓-批发 */
    direction?: Maybe<Scalars['Int']>
    /** 调拨单号 */
    flowCode?: Maybe<Scalars['String']>
    /** 调拨订单id */
    flowId?: Maybe<Scalars['ID']>
    /** 订单备注 */
    flowRemark?: Maybe<Scalars['String']>
    /** 订单状态 */
    flowStatus?: Maybe<Scalars['Int']>
    /** 入库状态 */
    flowStatusName?: Maybe<Scalars['String']>
    /** 调拨申请类型 */
    flowType?: Maybe<Scalars['Int']>
    /** 调拨申请类型名称 */
    flowTypeName?: Maybe<Scalars['String']>
    /** 调拨驳回/取消原因(列表+详情) */
    reason?: Maybe<Scalars['String']>
    sourceAppId?: Maybe<Scalars['Int']>
    /**  调出归属id  */
    sourceBelongId?: Maybe<Scalars['Int']>
    /** 调出归属名称 */
    sourceBelongName?: Maybe<Scalars['String']>
    /** 调出仓库Id */
    sourceWarehouseId?: Maybe<Scalars['ID']>
    /** 调出仓库名称 */
    sourceWarehouseName?: Maybe<Scalars['String']>
    targetAppId?: Maybe<Scalars['Int']>
    /** 调入归属id */
    targetBelongId?: Maybe<Scalars['Int']>
    /** 调入归属名称 */
    targetBelongName?: Maybe<Scalars['String']>
    /**  调入所属组织  */
    targetBelongOrg?: Maybe<Org>
    /** 调入仓库Id */
    targetWarehouseId?: Maybe<Scalars['ID']>
    /** 调入仓库名称 */
    targetWarehouseName?: Maybe<Scalars['String']>
    /** 总货款 */
    totalGoodsFee?: Maybe<Scalars['BigDecimal']>
    /** 总运杂款 */
    totalTransportFees?: Maybe<Scalars['BigDecimal']>
    /** 调拨商品 */
    transferCommodityItemBills?: Maybe<
      Array<Maybe<TransferCommodityItemBillPayload>>
    >
    /** 运杂费用 */
    transferOtherItemBills?: Maybe<Array<Maybe<TransferOtherItemBillPayload>>>
    /** 调拨类型（10 仓库间调拨，20 跨组织调拨，30库存退货，40库存借调） */
    transferType?: Maybe<Scalars['Int']>
    /** 修改人员 */
    updateBy?: Maybe<Scalars['Int']>
    /** 修改时间 */
    updateTime?: Maybe<Scalars['Long']>
    /** 修改人员姓名 */
    updateUserName?: Maybe<Scalars['String']>
  }

export type TransferOtherBillPayload = {
  __typename?: 'TransferOtherBillPayload'
  /**  运杂费单号 */
  billCode?: Maybe<Scalars['String']>
  /**  运杂单id */
  billItemId?: Maybe<Scalars['ID']>
  /**  运杂款金额合计 */
  totalAmount?: Maybe<Scalars['BigDecimal']>
  /**  运杂费明细列表 */
  transferOrderFeeItems?: Maybe<Array<Maybe<TransferOtherItemBillPayload>>>
}

export type TransferOtherItemBillPayload = {
  __typename?: 'TransferOtherItemBillPayload'
  amount?: Maybe<Scalars['BigDecimal']>
  /** 运杂费属性（10:正常 20:调拨出库） */
  attr?: Maybe<Scalars['Int']>
  billFreightItemId?: Maybe<Scalars['ID']>
  billType?: Maybe<Scalars['Int']>
  billTypeText?: Maybe<Scalars['String']>
  brand?: Maybe<Scalars['String']>
  createBy?: Maybe<Scalars['Int']>
  createTime?: Maybe<Scalars['Long']>
  payMode?: Maybe<Scalars['Int']>
  payModeText?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  remark?: Maybe<Scalars['String']>
  supplierId?: Maybe<Scalars['Int']>
  supplierName?: Maybe<Scalars['String']>
  updateBy?: Maybe<Scalars['Int']>
  updateTime?: Maybe<Scalars['Long']>
}

export type UndoSaleOrderInput = {
  outOrderId: Scalars['ID']
  /** 撤销原因 */
  undoDescription: Scalars['String']
}

export type Unit = {
  __typename?: 'Unit'
  /** 单位id */
  unitId?: Maybe<Scalars['Int']>
  /** 单位名称 */
  unitName?: Maybe<Scalars['String']>
}

export type UnitBase = {
  /** 单位信息 */
  unit?: Maybe<Unit>
}

export type UnitPriceTypeBase = {
  /** 单价单位信息 */
  unitPriceType?: Maybe<Unit>
}

export type UnitQuantity = UnitBase & {
  __typename?: 'UnitQuantity'
  /** 数量 */
  quantity?: Maybe<Scalars['BigDecimal']>
  /** 单位 */
  unit?: Maybe<Unit>
}

export type UnitTypeBase = {
  /** 基本单位信息 */
  unitType?: Maybe<Unit>
}

export type UpdateAcquireInput = {
  /** 入库订单Id */
  applyId: Scalars['ID']
  /** 客户Id */
  belongId: Scalars['Int']
  /** 所属组织 v2.9.0 */
  belongOrgId: Scalars['Int']
  /** 客户类型Id */
  belongType: Scalars['Int']
  /** 商品信息 */
  commodities: Array<CreateAcquireItemInput>
  /** 费用信息 */
  costs?: InputMaybe<Array<InputMaybe<CreateCostInput>>>
  /** 订单备注 */
  note?: InputMaybe<Scalars['String']>
  /** 供应商Id */
  supplierId: Scalars['Int']
  /** 模板Id */
  templateId?: InputMaybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseId: Scalars['ID']
}

export type UpdateByBase = {
  /** 更新人 */
  updateBy?: Maybe<User>
}

/**  修改货款明细 */
export type UpdateCommodityItemInput = {
  /**  小计价格 */
  amount: Scalars['BigDecimal']
  /**  货款明细id */
  itemId: Scalars['ID']
  /**  skuID */
  skuId: Scalars['Int']
  /**  单价 */
  unitPrice: Scalars['BigDecimal']
}

export type UpdateCommodityPriceInput = {
  /** 赠送total数量 */
  giveTotalQuantity?: InputMaybe<Scalars['BigDecimal']>
  /** 赠送unit数量 */
  giveUnitQuantity?: InputMaybe<Scalars['BigDecimal']>
  /** 货款明细ID */
  itemId: Scalars['ID']
  /** 商品skuid */
  skuId: Scalars['Int']
  /** 小计总价 */
  totalAmount: Scalars['BigDecimal']
  /** 单价 */
  unitPrice: Scalars['BigDecimal']
}

export type UpdateConvertInput = {
  /** 客户id */
  belongId: Scalars['Int']
  /** 客户类型 */
  belongType: Scalars['Int']
  /** 商品明细 */
  convertItems?: InputMaybe<Array<InputMaybe<CommondConvertItemInput>>>
  /** 订单id */
  convertOrderId: Scalars['ID']
  /** 备注 */
  remark?: InputMaybe<Scalars['String']>
  /** 仓库id */
  warehouseId: Scalars['ID']
}

export type UpdateCostOrderInput = {
  /** 申请id */
  billId: Scalars['ID']
  commodityItems?: InputMaybe<Array<InputMaybe<UpdateCommodityPriceInput>>>
  commodityRemark?: InputMaybe<Scalars['String']>
  freightCostItems?: InputMaybe<Array<InputMaybe<UpdateFreightCostInput>>>
  /** 手工单号 */
  manualCode?: InputMaybe<Scalars['String']>
}

export type UpdateCostStatusInput = {
  /** id */
  billId: Scalars['ID']
  remark?: InputMaybe<Scalars['String']>
  /** 更改后状态 */
  status: Scalars['Int']
}

export type UpdateDamageOutOrderInput = {
  /** 商品信息 */
  commodityList: Array<InputMaybe<CreateDamageOutOrderItemInput>>
  /** 订单备注 */
  outOrderDescription?: InputMaybe<Scalars['String']>
  /** 出库订单Id */
  outOrderId: Scalars['ID']
  /** 仓库名称 */
  warehouseId: Scalars['ID']
}

export type UpdateDamagedOrderInput = {
  /** 商品信息 */
  commodityList: Array<InputMaybe<CreateDamagedOrderItemInput>>
  /** 订单备注 */
  outOrderDescription?: InputMaybe<Scalars['String']>
  /** 出库订单Id */
  outOrderId: Scalars['ID']
  /** 仓库名称 */
  warehouseId: Scalars['ID']
}

export type UpdateDefectiveSaleIncomeAmountInput = {
  /** 商品信息 */
  commodityList: Array<InputMaybe<DefectiveSaleAmountItemInput>>
  /** 销售单id */
  outOrderId: Scalars['ID']
  /** 备注信息 */
  remark?: InputMaybe<Scalars['String']>
}

export type UpdateDefectiveSaleOrderInput = {
  /** v2.9 次品销售:新增所属组织 */
  belongOrgId: Scalars['Int']
  defectiveItems: Array<InputMaybe<CreateDefectiveItemInput>>
  outOrderId?: InputMaybe<Scalars['ID']>
  /** v2.8 次品销售:新增付款方式 */
  payMethod: PayMethodEnum
  remark?: InputMaybe<Scalars['String']>
  /** v2.8 次品销售:新增可更改销售时间 */
  saleTime: Scalars['Long']
}

export type UpdateDeliveryBillFeeInput = {
  /** 费用信息 */
  billFeeItems: Array<UpdateDeliveryBillFeeItemInput>
  /** 配送费用Id */
  deliveryBillId: Scalars['ID']
}

export type UpdateDeliveryBillFeeItemInput = {
  /** 金额 */
  amount?: InputMaybe<Scalars['BigDecimal']>
  /** 费用类型 */
  billType: DeliveryFeeTypeEnum
  /** 结算方式 */
  deliveryBillPayMode?: InputMaybe<DeliveryFeePayModeEnum>
  /** 备注信息 */
  remark?: InputMaybe<Scalars['String']>
  /** 供应商Id */
  supplierId: Scalars['Int']
}

export type UpdateDeliveryBillStatusInput = {
  /** 配送费用单Id */
  deliveryBillId: Scalars['ID']
  /** 备注信息 */
  remark?: InputMaybe<Scalars['String']>
}

/** 修改配送单入参 */
export type UpdateDeliveryOrderInput = {
  /** 客户信息集合 */
  belongInfo: Array<InputMaybe<CustomerInfo>>
  /** 所属组织ID */
  belongOrgId: Scalars['Int']
  /** 业务员名字 */
  businessUserName?: InputMaybe<Scalars['String']>
  /** 车牌号 */
  carNum?: InputMaybe<Scalars['String']>
  /** 车辆类型 */
  carType: Scalars['String']
  /** 配送单费用明细 */
  deliveryOrderFee: Array<DeliveryOrderFeeInput>
  /** 配送单商品明细 */
  deliveryOrderItem: Array<DeliveryOrderItemInput>
  /** 配送方式 */
  deliveryType: DeliveryMethodEnum
  /** 司机联系方式 */
  driverContact?: InputMaybe<Scalars['String']>
  /** 司机姓名 */
  driverName?: InputMaybe<Scalars['String']>
  /** 配送单ID */
  orderId: Scalars['ID']
  /** 配送货物销售订单日期 */
  saleOrderDate: Scalars['Long']
  /** 仓库ID */
  warehouseId: Scalars['ID']
}

export type UpdateFlowTransferCommodityBillInput = {
  /**  调拨申请id */
  flowId?: InputMaybe<Scalars['ID']>
  /**  备注 */
  remark?: InputMaybe<Scalars['String']>
  /**  货款明细 */
  updateFlowTransferCommodityItemReqList?: InputMaybe<
    Array<InputMaybe<UpdateFlowTransferCommodityItemInput>>
  >
}

export type UpdateFlowTransferCommodityItemInput = {
  /**  小计 */
  amount?: InputMaybe<Scalars['BigDecimal']>
  /**  批次id */
  batchId?: InputMaybe<Scalars['ID']>
  /**  item id */
  itemId?: InputMaybe<Scalars['ID']>
  /**  sku id */
  skuId?: InputMaybe<Scalars['Int']>
  /**  单价 */
  unitPrice?: InputMaybe<Scalars['BigDecimal']>
}

export type UpdateFlowTransferOtherBillInput = {
  /**  费用单id */
  billId?: InputMaybe<Scalars['ID']>
  /**  调拨申请id */
  flowId?: InputMaybe<Scalars['ID']>
  /**  运杂款明细 */
  flowTransferOtherBillReqList?: InputMaybe<
    Array<InputMaybe<FlowTransferOtherBillInput>>
  >
}

export type UpdateFreightCostInput = {
  /**  金额 */
  amount?: InputMaybe<Scalars['BigDecimal']>
  /**  费用项id */
  costId?: InputMaybe<Scalars['ID']>
  /**  具体字段值 */
  data?: InputMaybe<Scalars['String']>
  /**  业务规则扩展id (客户id或者供应商id) */
  extendId?: InputMaybe<Scalars['Int']>
  /**  备注 */
  note?: InputMaybe<Scalars['String']>
  /**  规则id */
  ruleId?: InputMaybe<Scalars['ID']>
}

export type UpdateManualCodeInput = {
  /** 费用单Id */
  billId: Scalars['ID']
  /** 手工单号 */
  manualCode: Scalars['String']
  /** 费用类型 */
  type: BillMainTypeEnum
}

export type UpdateOriginalSaleAmountInput = {
  /** 商品信息 */
  commodityList: Array<InputMaybe<OriginalSaleAmountItemInput>>
  /** 销售单id */
  outOrderId: Scalars['ID']
  /** 备注信息 */
  remark?: InputMaybe<Scalars['String']>
}

export type UpdateOtherOutOrderInput = {
  /** 商品信息 */
  commodityList: Array<InputMaybe<CreateOtherOutOrderItemInput>>
  /** 客户Id */
  customerId?: InputMaybe<Scalars['Int']>
  /** 客户类型 */
  customerType: Scalars['Int']
  /** 订单备注 */
  outOrderDescription?: InputMaybe<Scalars['String']>
  /** 出库订单Id */
  outOrderId: Scalars['ID']
  /** 仓库名称 */
  warehouseId: Scalars['ID']
}

/**  v1.6 */
export type UpdatePlanQuantityInput = {
  outOrderId: Scalars['ID']
  outOrderItemId: Scalars['ID']
  planQuantity: Scalars['BigDecimal']
}

export type UpdatePlanTaskInput = {
  /**  10：分配 20：暂不分配 */
  assignmentType?: InputMaybe<Scalars['Int']>
  leaderId?: InputMaybe<Scalars['Int']>
  leaderName?: InputMaybe<Scalars['String']>
  line?: InputMaybe<Scalars['Int']>
  updateTaskItemInput: Array<InputMaybe<UpdateTaskItemInput>>
}

export type UpdateProductionPlanInput = {
  planDescription: Scalars['String']
  planEndTime: Scalars['Long']
  planId: Scalars['ID']
  planStartTime: Scalars['Long']
  updatePlanTaskInput: Array<InputMaybe<UpdatePlanTaskInput>>
}

export type UpdatePurchaseReturnInput = {
  /** v2.9 采购单id */
  applyId: Scalars['ID']
  commodityList: Array<InputMaybe<PurchaseReturnCommodityInput>>
  note?: InputMaybe<Scalars['String']>
  returnId: Scalars['ID']
  returnOtherList?: InputMaybe<Array<InputMaybe<ReturnOtherInput>>>
  /** 模板Id */
  templateId?: InputMaybe<Scalars['ID']>
}

/**  v1.6 */
export type UpdateRealQuantityInput = {
  outOrderId: Scalars['ID']
  outOrderItemId: Scalars['ID']
  realQuantity: Scalars['BigDecimal']
}

/**  变更调拨费用单状态 */
export type UpdateReturnsBillStatusInput = {
  /**  驳回原因 */
  refuseNote?: InputMaybe<Scalars['String']>
  /**  退货单ID */
  returnId: Scalars['ID']
}

/**  修改商品req */
export type UpdateReturnsCommodityBillInput = {
  /** 手工单号 */
  manualCode?: InputMaybe<Scalars['String']>
  /**  备注 */
  note?: InputMaybe<Scalars['String']>
  /**  退货单id */
  returnId: Scalars['ID']
  /**  货款明细 */
  updateReturnsCommodityItemReqList?: InputMaybe<
    Array<InputMaybe<UpdateCommodityItemInput>>
  >
}

/**  修改运杂req */
export type UpdateReturnsOtherBillInput = {
  /**  退货单id */
  returnId: Scalars['ID']
  /**  运杂 */
  returnsOtherBillReqList: Array<InputMaybe<ReturnsOtherBillInput>>
}

/**
 * input UpdateSaleIncomeOrderInput {
 *     incomeId:ID!
 *     remark:String
 *     updateSaleIncomeOrderItems:[UpdateSaleIncomeOrderItemInput]
 * }
 */
export type UpdateSaleIncomeOrderItemInput = {
  incomeItemId: Scalars['ID']
  saleMoney: Scalars['BigDecimal']
}

export type UpdateSaleOrderInput = {
  /**  所属组织  */
  belongOrgId?: InputMaybe<Scalars['Int']>
  /** 商品信息 */
  commodityList: Array<InputMaybe<CreateSaleOrderItemInput>>
  /** 客户配送地址id */
  customerDistributionId: Scalars['Int']
  /** 客户Id */
  customerId: Scalars['Int']
  /** 订单备注 */
  outOrderDescription?: InputMaybe<Scalars['String']>
  /** 出库订单Id */
  outOrderId: Scalars['ID']
  /** 销售时间 */
  saleTime: Scalars['Long']
  /** 仓库名称 */
  warehouseId: Scalars['ID']
}

export type UpdateTaskItemInput = {
  commoditySkuId: Scalars['Int']
  expectNum?: InputMaybe<Scalars['BigDecimal']>
}

export type UpdateTransferCommodityInput = {
  /**  所属组织  */
  belongOrgId: Scalars['Int']
  /**  商品类型 */
  commodityType?: InputMaybe<Scalars['Int']>
  /**  调拨id */
  flowId?: InputMaybe<Scalars['ID']>
  /**  调拨商品 */
  flowTransferCommodityInput?: InputMaybe<
    Array<InputMaybe<FlowTransferCommodityInput>>
  >
  /**  运杂费用 */
  flowTransferOtherBillInput?: InputMaybe<
    Array<InputMaybe<FlowTransferOtherBillInput>>
  >
  /**  备注信息 */
  remark?: InputMaybe<Scalars['String']>
  /**  调出归属id */
  sourceBelongId?: InputMaybe<Scalars['Int']>
  /**  调出归属类型 */
  sourceBelongType?: InputMaybe<Scalars['Int']>
  /**  调出仓库id */
  sourceWarehouseId?: InputMaybe<Scalars['ID']>
  /**  调入系统id */
  targetAppId?: InputMaybe<Scalars['Int']>
  /**  调入归属id */
  targetBelongId?: InputMaybe<Scalars['Int']>
  /**  调入组织  */
  targetBelongOrgId: Scalars['Int']
  /**  调入仓库id */
  targetWarehouseId?: InputMaybe<Scalars['ID']>
  /**  调拨类型 */
  transferType?: InputMaybe<Scalars['Int']>
}

export type UpdateTransferInOrderWarehouseInput = {
  inOrderId: Scalars['ID']
  warehouseId: Scalars['ID']
}

export type UpdateTransferOrderStatInput = {
  billId: Scalars['ID']
  orderOperation?: InputMaybe<OrderOperation>
  remark?: InputMaybe<Scalars['String']>
}

export type UpdateWasteSaleOrderPriceInput = {
  remark?: InputMaybe<Scalars['String']>
  saleOrderId: Scalars['ID']
  updateWasteSaleOrderPriceItemInput: Array<
    InputMaybe<UpdateWasteSaleOrderPriceItemInput>
  >
}

export type UpdateWasteSaleOrderPriceItemInput = {
  commodityName: Scalars['String']
  saleAmount: Scalars['BigDecimal']
  saleOrderItemId: Scalars['ID']
  totalSaleAmount: Scalars['BigDecimal']
}

export type User = {
  __typename?: 'User'
  /** 电话号码 */
  phoneNum?: Maybe<Scalars['String']>
  /** userid */
  userId?: Maybe<Scalars['Int']>
  /** user名称 */
  userName?: Maybe<Scalars['String']>
}

export type UserBase = {
  /** 用户信息 */
  user?: Maybe<User>
}

export type UserDeviceInput = {
  platformType?: InputMaybe<Scalars['Int']>
  userId?: InputMaybe<Scalars['Int']>
}

export type UserDevicePayload = {
  __typename?: 'UserDevicePayload'
  platformType?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
}

export type UserInput = {
  stores?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  userId?: InputMaybe<Scalars['Int']>
}

export type UserListPayload = {
  __typename?: 'UserListPayload'
  /**  创建时间 */
  createTime?: Maybe<Scalars['String']>
  /**  座机号码 */
  landlineNum?: Maybe<Scalars['String']>
  /**  组织名称 */
  organizationName?: Maybe<Scalars['String']>
  /**  岗位 */
  positions?: Maybe<Array<Maybe<Scalars['String']>>>
  /**  仓库 */
  stores?: Maybe<Array<Maybe<Scalars['String']>>>
  userId?: Maybe<Scalars['Int']>
  /**  用户名称 */
  userName?: Maybe<Scalars['String']>
  /**  用户电话号码 */
  userPhoneNum?: Maybe<Scalars['String']>
}

/** 用户账户密码返回 */
export type UserLoginResponse = {
  __typename?: 'UserLoginResponse'
  /** 组织id */
  organizationId?: Maybe<Scalars['Int']>
  /** 组织名称 */
  organizationName?: Maybe<Scalars['String']>
  token?: Maybe<Scalars['String']>
  /** 用户id */
  userId?: Maybe<Scalars['Int']>
  /** 用户名称 */
  userName?: Maybe<Scalars['String']>
}

export type UserPageResult = {
  __typename?: 'UserPageResult'
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  records?: Maybe<Array<Maybe<UserListPayload>>>
  totalRecords?: Maybe<Scalars['Long']>
}

export type UserPayload = {
  __typename?: 'UserPayload'
  /**  创建时间 */
  createTime?: Maybe<Scalars['String']>
  /** 身份证号码 */
  idNum?: Maybe<Scalars['String']>
  /**  座机号码 */
  landlineNum?: Maybe<Scalars['String']>
  organizationId?: Maybe<Scalars['Int']>
  /**  组织名称 */
  organizationName?: Maybe<Scalars['String']>
  positions?: Maybe<Array<Maybe<PositionPayload>>>
  /** 用户状态 */
  status?: Maybe<UserStatus>
  stores?: Maybe<Array<Maybe<UserStorePayload>>>
  teamId?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  /**  用户名称 */
  userName?: Maybe<Scalars['String']>
  /**  用户电话号码 */
  userPhoneNum?: Maybe<Scalars['String']>
}

export enum UserStatus {
  /** 离职 */
  Departure = 'DEPARTURE',
  /** 在职 */
  OnJob = 'ON_JOB',
  /** 停职 */
  Suspended = 'SUSPENDED',
  /** 无法识别 */
  Unrecognized = 'UNRECOGNIZED',
  /** 异常状态 */
  UserErrorStatus = 'USER_ERROR_STATUS',
}

export type UserStoreInput = {
  /**  仓库ID */
  storehouseId?: InputMaybe<Scalars['ID']>
  /**  仓库名称 */
  storehouseName?: InputMaybe<Scalars['String']>
  /**  用户id */
  userId?: InputMaybe<Scalars['Int']>
}

export type UserStorePayload = {
  __typename?: 'UserStorePayload'
  /**  仓库ID */
  storehouseId?: Maybe<Scalars['ID']>
  /**  仓库名称 */
  storehouseName?: Maybe<Scalars['String']>
  /**  用户id */
  userId?: Maybe<Scalars['Int']>
}

export type Warehouse = {
  __typename?: 'Warehouse'
  /** 仓库id */
  warehouseId?: Maybe<Scalars['ID']>
  /** 仓库名称 */
  warehouseName?: Maybe<Scalars['String']>
}

export type WarehouseBase = {
  /** 仓库信息 */
  warehouse?: Maybe<Warehouse>
}

export type WarehouseInput = {
  address: Scalars['String']
  houseNumber?: InputMaybe<Scalars['String']>
  remark?: InputMaybe<Scalars['String']>
  warehouseId?: InputMaybe<Scalars['ID']>
  warehouseName: Scalars['String']
}

/** 仓库列表下拉 */
export type WarehousePayload = {
  __typename?: 'WarehousePayload'
  address?: Maybe<Scalars['String']>
  houseNumber?: Maybe<Scalars['String']>
  remark?: Maybe<Scalars['String']>
  warehouseId?: Maybe<Scalars['ID']>
  warehouseName?: Maybe<Scalars['String']>
}

export type Warehousing = {
  __typename?: 'Warehousing'
  defective?: Maybe<Scalars['Int']>
  defectiveUnFinish?: Maybe<Scalars['Int']>
  finishedProduct?: Maybe<Scalars['Int']>
  finishedProductUnFinish?: Maybe<Scalars['Int']>
  semiFinishedProducts?: Maybe<Scalars['Int']>
  semiFinishedProductsUnFinish?: Maybe<Scalars['Int']>
  undone?: Maybe<Scalars['Int']>
}

export type WasteSaleOrder = BelongOrgBase &
  OrgBase &
  UserBase &
  WarehouseBase & {
    __typename?: 'WasteSaleOrder'
    /** 所属组织 */
    belongOrg?: Maybe<Org>
    createTime?: Maybe<Scalars['Long']>
    org?: Maybe<Org>
    payMode?: Maybe<OutOrderPayModeEnum>
    reason?: Maybe<Scalars['String']>
    remark?: Maybe<Scalars['String']>
    saleIncome?: Maybe<SaleIncomeOrderPayload>
    saleOrderCode?: Maybe<Scalars['String']>
    saleOrderId?: Maybe<Scalars['ID']>
    saleOrderStatus?: Maybe<WasteSaleOrderStatusEnum>
    user?: Maybe<User>
    warehouse?: Maybe<Warehouse>
    wasteSaleOrderItemList?: Maybe<Array<Maybe<WasteSaleOrderItemList>>>
    wasteSaleOrderLogList?: Maybe<Array<Maybe<WasteSaleOrderLogList>>>
  }

export type WasteSaleOrderItemList = UnitBase & {
  __typename?: 'WasteSaleOrderItemList'
  commodityName?: Maybe<Scalars['String']>
  photos?: Maybe<Array<Maybe<Scalars['String']>>>
  saleAmount?: Maybe<Scalars['BigDecimal']>
  saleOrderItemId?: Maybe<Scalars['ID']>
  totalSaleAmount?: Maybe<Scalars['BigDecimal']>
  unit?: Maybe<Unit>
  unitQuantity?: Maybe<Scalars['BigDecimal']>
}

export type WasteSaleOrderLogList = UserBase & {
  __typename?: 'WasteSaleOrderLogList'
  createTime?: Maybe<Scalars['Long']>
  remark?: Maybe<Scalars['String']>
  saleOrderId?: Maybe<Scalars['ID']>
  saleOrderLogId?: Maybe<Scalars['ID']>
  type?: Maybe<Scalars['String']>
  typeText?: Maybe<Scalars['String']>
  user?: Maybe<User>
}

export type WasteSaleOrderStatsInput = {
  saleTime: Scalars['Long']
}

export type WasteSaleOrderStatsPayload = {
  __typename?: 'WasteSaleOrderStatsPayload'
  canceled?: Maybe<Scalars['Int']>
  finished?: Maybe<Scalars['Int']>
  reject?: Maybe<Scalars['Int']>
}

export enum WasteSaleOrderStatusEnum {
  Canceled = 'CANCELED',
  Finished = 'FINISHED',
  Reject = 'REJECT',
}

/** 工资 */
export type WorkerSalaryPayload = {
  __typename?: 'WorkerSalaryPayload'
  workerSalary?: Maybe<Scalars['BigDecimal']>
}

export type _Service = {
  __typename?: '_Service'
  sdl: Scalars['String']
}

/**
 * extend type Mutation {
 *     #新增销售退货
 *     createSaleReturn(saleReturnInsertInput:SaleReturnInsertInput):ID
 *     #修改销售退货
 *     updateSaleReturn(saleReturnUpdateInput:SaleReturnUpdateInput):Boolean
 * }
 * extend type Query {
 *     #销售退货选择商品
 *     listSaleReturnCommodities(saleReturnInput:SaleReturnInput):[OutOrderItemPayload]
 *     #查询销售退货订单列表
 *     pageSaleReturn(pageSaleReturnInput:PageSaleReturnInput,page:Page):PurchasePageResultPayload
 *     #查询销售退货订单不同状态记录条数
 *     countSaleReturn(countSaleReturnInput:CountSaleReturnInput):CountPurchasePayload
 *     #销售退货入库记录
 *     inboundRecords(outOrderId:ID!):[InboundListPayload]
 * }
 *
 * input SaleReturnInput{
 *     #销售订单Id
 *     outOrderId:ID!
 * }
 *
 *
 * #采购列表条件
 * input PageSaleReturnInput{
 *     #退货时间
 *     createTime:Long
 *     #入库类型
 *     inOrderTypeId:Int!
 *     #订单状态（10全部，20待提交，30待入库 ，40已完成，50已取消）
 *     orderStatus:Int
 *     #查询关键字（订单号/客户，模糊查询）
 *     keyword:String
 * }
 *
 * #采购列表条件
 * input CountSaleReturnInput{
 *     #退货时间
 *     createTime:Long!
 *     #入库类型
 *     inOrderTypeId:Int!
 * }
 *
 * input SaleReturnInsertInput{
 *     outOrderId:ID!
 *     remark:String
 *     commodities:[SaleReturnItemPayload]!
 * }
 *
 * input SaleReturnUpdateInput{
 *     inOrderId:ID!
 *     remark:String
 *     commodities:[SaleReturnItemPayload]!
 * }
 *
 * input SaleReturnItemPayload{
 *     #skuId
 *     skuId:Int!
 *     #退货数量副单位
 *     returnTotalQuantity:BigDecimal!
 *     #退货数量基本单位
 *     returnUnitQuantity:BigDecimal!
 * }
 */
export type Comment = {
  __typename?: 'comment'
  /** 之前的销售退货注释掉了，这个先不用，v2.7开发中，新的schema在 ../api与../type */
  comment?: Maybe<Scalars['String']>
}
