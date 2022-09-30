import {Icon as NBIcon, IIconProps, useToken, Box} from 'native-base'
import {memo} from 'react'
import icons from './icons'
import pick from 'lodash-es/pick'
import omit from 'lodash-es/omit'

export type IconName = keyof typeof icons

export type IconProps = IIconProps & {
  stroke?: string
  fill?: string
}
export const Icon = memo((props: IconProps) => {
  const {name, height, width, size, ...rest} = props
  const [colorPick, fillColor, strokeColor] = useToken('colors', [
    rest.color as any,
    rest.fill as any,
    rest.stroke as any,
  ])
  const sizePick = useToken('sizes', size as any)

  if (name && icons[name]) {
    const {color, fill, stroke, ...otherProps} = rest
    const cloned: any = {...otherProps}
    if (color) {
      if (colorPick) {
        cloned.color = colorPick
      } else if ((color as any).includes('#') || !(color as any).includes('.')) {
        cloned.color = color
      }
    }

    if (fill) {
      if (fillColor) {
        cloned.fill = fillColor
      } else if (fill.includes('#') || !fill.includes('.')) {
        cloned.fill = fill
      }
    }

    if (stroke) {
      if (strokeColor) {
        cloned.stroke = strokeColor
      } else if (stroke.includes('#') || !stroke.includes('.')) {
        cloned.stroke = stroke
      }
    }

    const IconSVG = icons[name]
    if (height || size) {
      cloned.height = height || size
    }
    if (height || size) {
      cloned.width = width || size
    }
    if (!!size && typeof size === 'string') {
      cloned.height = sizePick
      cloned.width = sizePick
    }

    return (
      <Box {...omit(cloned, ['height', 'width', 'color', 'fill', 'stroke'])}>
        <IconSVG {...pick(cloned, ['height', 'width', 'color', 'fill', 'stroke'])} />
      </Box>
    )
  }
  return <NBIcon {...omit(props, ['fill', 'stroke'])} />
})
