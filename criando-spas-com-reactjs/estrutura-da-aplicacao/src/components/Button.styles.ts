import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const ButtonVariants = {
  primary: 'purple',
  secondary: 'red',
  danger: 'orange',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 4px;
  margin: 10px;

  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};

  /* ${({ variant }) =>
    css`
      background-color: ${ButtonVariants[variant]};
    `} */
`
