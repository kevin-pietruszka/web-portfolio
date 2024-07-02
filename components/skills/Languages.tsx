export default function Languages() {
  const languages = [
    { name: "Bash" },
    { name: "C" },
    { name: "C++" },
    { name: "CSS" },
    { name: "HTML" },
    { name: "Java" },
    { name: "JavaScript" },
    { name: "Python" },
    { name: "Rust" },
    { name: "SQL" },
    { name: "TypeScript" },
  ];
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold"> Languages </h1>
      <div className="flex flex-row shrink-0 grow-0 flex-wrap gap-2 mt-2">
        {languages.map((lang, index, array) => {
          return (
            <span key={index}>
              {lang.name}
              {index < array.length - 1 && " | "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
