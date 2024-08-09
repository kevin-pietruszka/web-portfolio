export default function SectionBreak({ header }: { header: string }) {
  return (
    <div className="flex items-center justify-between gap-4 mb-8">
      <h1 className="text-4xl font-bold">{header}</h1>
      <div className="h-px bg-text w-full"></div>
    </div>
  );
}
