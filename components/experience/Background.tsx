import { about } from "@/lib/constants";

export default function Background({ containerStyle }: { containerStyle: string }) {
  return (
    <p className={containerStyle}>
      {about}
    </p>
  );
}
