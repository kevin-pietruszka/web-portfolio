export default function Tag({ skill }: { skill: string }) {
  return (
    <span className="inline-flex text-nowrap bg-primary/25 rounded p-1 text-xs text-primary/50">
      {skill}
    </span>
  );
}
