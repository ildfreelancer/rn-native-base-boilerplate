import {BottomSheetModal, BottomSheetModalProps} from '@gorhom/bottom-sheet'
import {forwardRef, Ref, createContext, useState, useMemo} from 'react'
import {BottomBackdrop} from './components/bottom-backdrop'
import {BottomSheetHandle} from './components/bottom-sheet-handle'
import {nanoid} from 'nanoid'
import {Flex} from 'native-base'

export const BottomModalContext = createContext({name: ''})

export const BottomModal = forwardRef(
  ({children, ...rest}: BottomSheetModalProps, ref: Ref<BottomSheetModal>) => {
    const [name] = useState(nanoid())
    const values = useMemo(
      () => ({
        name,
      }),
      [name],
    )

    return (
      <BottomModalContext.Provider value={values}>
        <BottomSheetModal
          ref={ref}
          name={name}
          enablePanDownToClose
          keyboardBlurBehavior="restore"
          backdropComponent={BottomBackdrop}
          handleComponent={BottomSheetHandle}
          {...rest}>
          <Flex flex="1" bg="primary.50" borderTopRadius="s-3">
            {children}
          </Flex>
        </BottomSheetModal>
      </BottomModalContext.Provider>
    )
  },
)
