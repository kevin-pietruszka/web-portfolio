export default function Tag({ word }: { word: string }) {
  return (
    <span className="inline-flex text-nowrap bg-overlay1/25 rounded p-1 text-xs text-blue/80">
      {word}
    </span>
  );
}
