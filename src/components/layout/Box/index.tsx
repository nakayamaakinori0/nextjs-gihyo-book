/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { toPropValue, Color, Space } from 'utils/styles'
import type { Responsive } from 'types/styles'

// Boxがとりうるプロパティを列挙
export type BoxProps = {
  color?: Responsive<Color>
  backgroundColor?: Responsive<Color>
  width?: Responsive<string>
  height?: Responsive<string>
  minWidth?: Responsive<string>
  minHeight?: Responsive<string>
  display?: Responsive<string>
  border?: Responsive<string>
  overflow?: Responsive<string>
  margin?: Responsive<Space>
  marginTop?: Responsive<Space>
  marginRight?: Responsive<Space>
  marginBottom?: Responsive<Space>
  marginLeft?: Responsive<Space>
  padding?: Responsive<Space>
  paddingTop?: Responsive<Space>
  paddingRight?: Responsive<Space>
  paddingBottom?: Responsive<Space>
  paddingLeft?: Responsive<Space>
}

/**
 * Boxコンポーネント
 * レイアウトの調整に利用する
 * ${(props) => toPropValue('color', props.color, props.theme)}
 */
const Box = styled.div<BoxProps>`
  ${(props) => toPropValue('color', props.color, props.theme)}
  ${(props) => toPropValue('backgroundColor', props.backgroundColor, props.theme)}
  ${(props) => toPropValue('width', props.width, props.theme)}
  ${(props) => toPropValue('height', props.height, props.theme)}
  ${(props) => toPropValue('minWidth', props.minWidth, props.theme)}
  ${(props) => toPropValue('minHeight', props.minHeight, props.theme)}
  ${(props) => toPropValue('display', props.display, props.theme)}
  ${(props) => toPropValue('border', props.border, props.theme)}
  ${(props) => toPropValue('overflow', props.overflow, props.theme)}
  ${(props) => toPropValue('margin', props.margin, props.theme)}
  ${(props) => toPropValue('marginTop', props.marginTop, props.theme)}
  ${(props) => toPropValue('marginRight', props.marginRight, props.theme)}
  ${(props) => toPropValue('marginBottom', props.marginBottom, props.theme)}
  ${(props) => toPropValue('marginLeft', props.marginLeft, props.theme)}
  ${(props) => toPropValue('padding', props.padding, props.theme)}
  ${(props) => toPropValue('paddingTop', props.paddingTop, props.theme)}
  ${(props) => toPropValue('paddingRight', props.paddingRight, props.theme)}
  ${(props) => toPropValue('paddingBottom', props.paddingBottom, props.theme)}
  ${(props) => toPropValue('paddingLeft', props.paddingLeft, props.theme)}
`

export default Box
