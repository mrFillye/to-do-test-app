import { forwardRef, ChangeEvent, HTMLInputTypeAttribute } from "react";
import * as S from "./style";

export type InputProps = {
  className?: string;
  disabled?: boolean;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: boolean;
  placeholder?: string;
  name?: string;
  type?: HTMLInputTypeAttribute;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { onChange, className, disabled, value, error, placeholder, name, type = "text" } = props;

  return (
    <S.InputContainer>
      <S.Input
        ref={ref}
        className={className}
        disabled={disabled}
        error={error}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </S.InputContainer>
  );
});
