interface Props {
  title: string;
  subtitle?: string;
}

export default function PageTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center pb-12 md:pb-20">
      <h1 className="h1  text-white drop-shadow-md">{title}</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-pink-400">{subtitle}</p>
      </div>
    </div>
  );
}
