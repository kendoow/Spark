export  interface ButtonProps
extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>{
  children: React.ReactNode
  size?: 'small' | 'medium'
  type?: 'button' | 'reset' | 'submit'
  variant?: 'primary' | 'secondary'
}