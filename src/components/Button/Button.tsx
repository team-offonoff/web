interface ButtonProps {
  label: string;
  size?: 'lg' | 'md' | 'sm';
  primary?: boolean;
  backgroundColor?: string;
  onClick: () => void;
}

const Button = ({
  label,
  size = 'md',
  primary = true,
  backgroundColor = '#cccccc',
  onClick,
}: ButtonProps) => {
  return (
    <button type={'button'} style={{ backgroundColor: backgroundColor }} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
