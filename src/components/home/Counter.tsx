interface CounterProps {
  target: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ target, suffix = "" }) => {
  return (
    <span>
      {Number.isInteger(target) ? Math.floor(target) : target.toFixed(1)}
      {suffix}
    </span>
  );
};

export default Counter;
