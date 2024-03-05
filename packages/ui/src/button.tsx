export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <div>
      <button type="button" {...other}>
        {children}
      </button>
      <p className="text-3xl font-bold underline">Hello world</p>
    </div>
  );
}

Button.displayName = "Button";
