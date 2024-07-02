export default function Frameworks() {
  const frameworks = [
    { name: "D3" },
    { name: "Ionic" },
    { name: "JavaFX" },
    { name: "Node.js" },
    { name: "NumPy" },
    { name: "OpenCV" },
    { name: "PyTorch" },
    { name: "Processing" },
    { name: "React" },
    { name: "Streamlit" },
    { name: "TensorFlow" },
    { name: "lombok" },
    { name: "matplotlib" },
    { name: "pandas" },
    { name: "scikit-learn" },
  ];
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold"> Frameworks </h1>
      <div className="flex flex-row shrink-0 grow-0 flex-wrap gap-2 mt-2">
        {frameworks.map((framework, index, array) => {
          return (
            <span key={index}>
              {framework.name}
              {index < array.length - 1 && " | "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
