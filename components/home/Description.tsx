import { description, name, title } from "@/lib/constants";

export default function Description() {
  return (
    <div className="text-center lg:text-left">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl">
        {"Hello, I'm"}
        <span className="block text-pink"> {name} </span>
      </h1>
      <h2 className="text-xl mb-8">
        {title}
      </h2>
      <p className="text-lg mb-8">
        {description}
      </p>
    </div>
  );
}
