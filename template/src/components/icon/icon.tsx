import {Icon as NBIcon, IIconProps, useToken, Box} from 'native-base'
import {memo} from 'react'
import icons from './icons'
import pick from 'lodash-es/pick'
import omit from 'lodash-es/omit'

export const Icon = memo(({name, height, width, size, ...rest}: IIconProps) => {
  const [colorPick] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors', // the subkey(s), resolving to `theme.colors.warning.1`
    [rest.color as any], // a single fallback or fallback array matching the length of the previous arg
  )
  const [sizePick] = useToken('sizes', [size as any])

  if (name && icons[name]) {
    const {color, ...otherProps} = rest
    const cloned: any = {...otherProps}
    if (color) {
      if (colorPick) {
        cloned.color = colorPick
      } else {
        cloned.color = color
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
      <Box {...omit(cloned, ['height', 'width', 'color'])}>
        <IconSVG {...pick(cloned, ['height', 'width', 'color'])} />
      </Box>
    )
  }
  return <NBIcon {...rest} />
})
