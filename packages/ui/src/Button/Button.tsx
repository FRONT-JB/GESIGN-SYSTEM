interface ButtonProps {
  color: string;
}

const Button = ({ color }: ButtonProps) => (
  <button type="button" style={{ color: `${color}` }}>
    @common/ui 버튼
  </button>
);

export default Button;
