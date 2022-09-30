import {forwardRef, Ref, useCallback, useMemo, ReactNode} from 'react'
import {
  BottomSheetModal,
  useBottomSheetDynamicSnapPoints,
  BottomSheetBackdrop,
  BottomSheetModalProps,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet'
import {BottomSheetHandle} from '@components/bottom-modal/components/bottom-sheet-handle'
import {ScaledSheet} from '@libs/react-native-size-matters'
import layout from '@constants/layout'
import {Optional} from '@typings/app'

type BottomDynamicHeightModalProps = Optional<BottomSheetModalProps, 'snapPoints'> & {
  variant?: 'fixed' | 'scroll'
  children: ReactNode | ReactNode[]
}
export const BottomDynamicHeightModal = forwardRef(
  ({variant = 'fixed', children}: BottomDynamicHeightModalProps, ref: Ref<BottomSheetModal>) => {
    const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], [])
    const {animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout} =
      useBottomSheetDynamicSnapPoints(initialSnapPoints)

    const _renderBackdrop = useCallback(props => {
      return (
        <BottomSheetBackdrop
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          enableTouchThrough
          {...props}
        />
      )
    }, [])
    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        enablePanDownToClose
        enableOverDrag
        activeOffsetY={[0, 0]}
        handleComponent={BottomSheetHandle}
        backdropComponent={_renderBackdrop}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore">
        {variant === 'scroll' ? (
          <BottomSheetScrollView
            style={styles.list}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
            onLayout={handleContentLayout}>
            {children}
          </BottomSheetScrollView>
        ) : (
          <BottomSheetView onLayout={handleContentLayout}>{children}</BottomSheetView>
        )}
      </BottomSheetModal>
    )
  },
)

const styles = ScaledSheet.create({
  list: {
    maxHeight: layout.window.height * 0.9,
  },
  content: {
    flexGrow: 1,
  },
})
