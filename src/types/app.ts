import { FC, PropsWithChildren } from "react";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      black: string;
      gray: string;
      white: string;
      bg: string;
      line: string;
      blue: string;
      red: string;
      green: string;
      lightGray: string;
    };
    common: {
      boxShadow: string;
    };
  }
}

export type FCWithChildren<T = {}> = FC<PropsWithChildren<T>>;
