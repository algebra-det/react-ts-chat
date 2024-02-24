import { isAlphanumeric } from '@/utils/validators'
import { useState } from 'react'

export type LooseObject = {
  [key: string]: string
}

function useFormValidHook() {
  const [notValidFields, setNotValidFields] = useState<LooseObject>({})

  const validateFormData = (formObj: object) => {
    const unValidFields: LooseObject = {}
    Object.entries(formObj).forEach(([key, value]) => {
      if (!value) unValidFields[key] = `${key} is required`
      else if (key === 'username' && !isAlphanumeric(value as string)) {
        unValidFields[key] = 'Username not valid'
        console.log('key is: ', key, value, !isAlphanumeric(value as string))
      }
    })
    setNotValidFields(unValidFields)
    console.log('Fields: ', unValidFields)
  }
  return [notValidFields, validateFormData]
}

export default useFormValidHook
