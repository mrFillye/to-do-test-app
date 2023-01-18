import { forwardRef } from "react";
import * as S from "./style";

export type TextareaProps = {
  className?: string;
  onChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  error?: boolean;
  placeholder?: string;
  name?: string;
  maxLength?: number;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { onChange, className, value, error, placeholder, name, maxLength } = props;

  return (
    <S.Textarea
      ref={ref}
      className={className}
      error={error}
      maxLength={maxLength}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
});
