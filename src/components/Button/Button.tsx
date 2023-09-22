interface ButtonProps {
  label: string;
  size?: 'lg' | 'md' | 'sm';
  type?: 'primary' | 'secondary';
  backgroundColor?: string;
  onClick: () => void;
}

const Button = ({
  label,
  size = 'md',
  type = 'primary',
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
