export default function Technologies() {
  const technologies = [
    { name: "Azure" },
    { name: "GCP" },
    { name: "AWS" },
    { name: "Docker" },
    { name: "Databricks" },
    { name: "Apache Spark" },
    { name: "MySQL" },
    { name: "Make" },
    { name: "Firebase" },
    { name: "Mistral" },
    { name: "LLama" },
    { name: "GPT" },
    { name: "Wireshark" },
    { name: "Snort" },
    { name: "Nmap" },
    { name: "Netcat" },
    { name: "Metasploit" },
    { name: "John the Ripper" },
  ];
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold"> Technologies </h1>
      <div className="flex flex-row shrink-0 grow-0 flex-wrap gap-2 mt-2">
        {technologies.map((tech, index, array) => {
          return (
            <span key={index}>
              {tech.name}
              {index < array.length - 1 && " | "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
