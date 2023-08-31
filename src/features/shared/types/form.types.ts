import { UseControllerProps } from "react-hook-form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IBaseInputProps = UseControllerProps<any> & {
  label: string;
  placeholder?: string;
  isDisabled?: boolean;
  helperText?: string;
  showError?: boolean;
  hiddenLabel?: boolean;
};
