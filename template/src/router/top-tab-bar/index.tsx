// import type { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
// import isNil from 'lodash/isNil'
// import React, { memo, useState, useRef, useCallback, useEffect } from 'react'
// import type { LayoutRectangle, LayoutChangeEvent } from 'react-native'
// import { View, Text, Animated, TouchableOpacity } from 'react-native'

// import EStyleSheet from '@/lib/react-native-extended-stylesheet'

// interface TopTabBarProps extends MaterialTopTabBarProps {
//   /**
//    * tabItem 均分宽度 flex 1
//    */
//   tabItemAverageWidth?: boolean

//   /**
//    * 被选中文字的颜色
//    */
//   activedTextColor?: string

//   /**
//    * 指示器颜色
//    */
//   indicatorColor?: string

//   /**
//    * 指示器高度
//    * @description 设置为 0 就是不出现
//    * @default 3
//    */
//   indicatorHeight?: number

//   /**
//    * 指示器宽
//    * @description 如果是 0 就自适应 tab
//    */
//   indicatorWidth?: number
// }

// const TopTabBar: React.FC<TopTabBarProps> = ({
//   state,
//   descriptors,
//   navigation,
//   tabItemAverageWidth = false,
//   activedTextColor = EStyleSheet.value('$text_color_1'),
//   indicatorColor = EStyleSheet.value('$primary'),
//   indicatorHeight = 3,
//   indicatorWidth = 0,
// }) => {
//   // 修正数据
//   if (indicatorWidth < 0) {
//     indicatorWidth = 0
//   }

//   const TabItemLayouts = useRef<
//     (LayoutRectangle & { indicatorWidth: number })[]
//   >(new Array(state.routes.length).fill({}))
//   const [mounted, setMounted] = useState(false)
//   const translateXAnim = useRef(new Animated.Value(0))
//   const startTranslateX = useCallback(
//     (x: number, width: number, duration = 300) => {
//       if (indicatorHeight > 0) {
//         const toValue = x
//           ? x + (indicatorWidth === 0 ? 0 : (width - indicatorWidth) / 2)
//           : 0

//         Animated.timing(translateXAnim.current, {
//           toValue,
//           duration,
//           useNativeDriver: true,
//         }).start()
//       }
//     },
//     [indicatorHeight, indicatorWidth],
//   )
//   const checkTabItemLayouts = useCallback(() => {
//     if (
//       TabItemLayouts.current.filter(til => {
//         return isNil(til.x) && isNil(til.indicatorWidth)
//       }).length === TabItemLayouts.current.length
//     ) {
//       setMounted(true)
//     }
//   }, [])

//   const activeTabItemLayout = TabItemLayouts.current[state.index]

//   useEffect(() => {
//     if (mounted) {
//       startTranslateX(activeTabItemLayout.x, activeTabItemLayout.width)
//     }
//   }, [mounted, startTranslateX, activeTabItemLayout])

//   const genOnLayoutItem = (index: number) => (event: LayoutChangeEvent) => {
//     TabItemLayouts.current[index] = {
//       ...event.nativeEvent.layout,
//       indicatorWidth: TabItemLayouts.current[index].indicatorWidth,
//     }
//     checkTabItemLayouts()
//   }
//   const genOnLayoutItemText = (index: number) => (event: LayoutChangeEvent) => {
//     TabItemLayouts.current[index] = {
//       ...TabItemLayouts.current[index],
//       indicatorWidth: event.nativeEvent.layout.width,
//     }
//     checkTabItemLayouts()
//   }

//   return (
//     <View style={Styles.tab}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key]
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name

//         const isFocused = state.index === index

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           })

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name)
//           }
//         }

//         return (
//           <TouchableOpacity
//             key={route.key}
//             accessibilityRole="button"
//             accessibilityState={isFocused ? { selected: true } : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             style={[
//               Styles.tabItem,
//               tabItemAverageWidth ? Styles.tabItemFlex1 : null,
//             ]}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLayout={genOnLayoutItem(index)}>
//             <Text
//               style={[
//                 Styles.tabItemLabel,
//                 tabItemAverageWidth ? Styles.tabItemLabelFlex1 : null,
//                 isFocused ? { color: activedTextColor } : null,
//               ]}
//               onLayout={genOnLayoutItemText(index)}>
//               {label}
//             </Text>
//           </TouchableOpacity>
//         )
//       })}

//       {mounted && indicatorHeight > 0 && (
//         <Animated.View
//           style={[
//             Styles.tabIndicator,
//             {
//               width: indicatorWidth || activeTabItemLayout.width,
//               height: indicatorHeight,
//               backgroundColor: indicatorColor,
//               transform: [
//                 {
//                   translateX: translateXAnim.current,
//                 },
//               ],
//             },
//           ]}
//         />
//       )}
//     </View>
//   )
// }

// const Styles = EStyleSheet.create({
//   tab: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     position: 'relative',
//     paddingHorizontal: '$padding_sm',
//     backgroundColor: '#fff',
//   },

//   tabItem: {
//     paddingVertical: 10,
//     flexDirection: 'row',
//   },

//   tabItemFlex1: {
//     flex: 1,
//   },

//   tabItemLabel: {
//     fontSize: 15,
//     lineHeight: 20,
//     color: '$text_color_2',
//     textAlign: 'center',
//   },

//   tabItemLabelFlex1: {
//     flex: 1,
//   },

//   tabIndicator: {
//     position: 'absolute',
//     left: 0,
//     bottom: 0,
//   },
// })

// export default memo(TopTabBar)

export default 'do you want it?'
