import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { ButtonContainer } from "./styles";

type ButtonVariants = "secondary" | "danger";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
  background?: string;
  color?: string;
  active: boolean;
};

export function Button(props: PropsWithChildren<ButtonProps>) {
  const { children, variant, type = "button", active, ...rest } = props;

  return (
    <ButtonContainer
      active={active}
      type={type}
      variant={variant}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
};


