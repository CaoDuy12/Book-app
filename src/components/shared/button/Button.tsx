type Props = {
  text: string
  disabled?: boolean
  variant?: 'primary' | 'secondary'
  width?: string
  height?: string
  borderRadius?: string
  onClick: () => void
}
const FnButton = ({
  text,
  variant = 'secondary',
  width = '90px',
  height = '23px',
  borderRadius = '3px',
  disabled,
  onClick
}: Props) => {
  return (
    <button
      style={{ width, height, borderRadius }}
      disabled={disabled}
      type='button'
      className={`fn-btn ${variant}`}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  )
}
export default FnButton
