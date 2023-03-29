export interface ButtonProps {
  context: string;
  handler: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ApiStateRes {
  isSuccess: boolean;
  result: any;
}
