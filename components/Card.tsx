export type CardProp = {
  className?: String;
  children: React.ReactNode;
};

export default function Card({ className, children }: CardProp) {
  return (
    <div className="p-px bg-app-gradient-to-br rounded">
      <div className={`bg-black rounded ${className}`}>{children}</div>
    </div>
  );
}
