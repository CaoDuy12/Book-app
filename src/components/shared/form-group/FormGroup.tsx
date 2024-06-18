import { styled } from '@mui/material'
import theme from '../../../theme'
import './formGroup.scss'
import { useState } from 'react'
import palette from '../../../theme/palette'
import typography from '../../../theme/typography'

interface FormGroupProps {
  labelName: string
  label: string
  type: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Label = styled('label')({
  color: theme.palette.grey[900]
})
const Input = styled('input')({
  '&.form-control': {
    width: '258px',
    height: '44px',
    padding: '10px 16px',
    borderRadius: '10px',
    border: '1px solid ' + palette.grey[400],
    background: '#FFF',
    fontSize: typography.base.fontSize,
    fontWeight: typography.base.fontWeight,
    lineHeight: typography.base.lineHeight,
    color: palette.grey[400]
  },

  '&.is-invalid': {
    border: '1px solid ' + palette.primary.main,
    marginBottom: '5px'
  },

  '&.form-disabled': {
    background: '#F8F9FA'
  }
})

function FormGroup(props: FormGroupProps) {
  const { labelName, label, type, value, onChange } = props
  const [isEmpty, setIsEmpty] = useState<string | null>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event)

    // Check if the input is empty
    if (event.target.value.trim() === '') {
      setIsEmpty('This field is required.')
    } else {
      setIsEmpty(null)
    }
    onChange(event)
  }

  return (
    <>
      <div className={`form-group ${isEmpty ? 'empty' : ''}`}>
        <Label className='form-title' htmlFor={label}>
          {labelName}
        </Label>
        <Input
          className={`form-control ${isEmpty ? 'empty' : ''}`}
          type={type}
          name={label}
          id={label}
          placeholder={`Enter book ${label}`}
          value={value}
          onChange={handleInputChange}
        />
      </div>
    </>
  )
}

export default FormGroup
