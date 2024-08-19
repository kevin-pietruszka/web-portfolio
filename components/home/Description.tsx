import { description, name, title } from "@/lib/constants";

export default function Description({
  containerStyle,
  greetingStyle,
  nameStyle,
  titleStyle,
  descriptionStyle,
}: {
  containerStyle: string,
  greetingStyle: string,
  nameStyle: string,
  titleStyle: string,
  descriptionStyle: string,
}) {
  return (
    <div className={containerStyle}>
      <h1 className={greetingStyle}>
        {"Hello, I'm"}
        <span className={nameStyle}> {name} </span>
      </h1>
      <h2 className={titleStyle}>
        {title}
      </h2>
      <p className={descriptionStyle}>
        {description}
      </p>
    </div>
  );
}
