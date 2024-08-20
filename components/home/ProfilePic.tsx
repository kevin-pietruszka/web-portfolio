import { main_image } from "@/lib/constants";
import Image from "next/image";

export default function ProfilePic() {
  return (
    <div className={"relative w-72 h-72 lg:w-96 lg:h-96 rounded-full border-2 border-pink overflow-hidden"}>
      <Image
        src={main_image}
        alt="profile picture"
        priority
        fill
        quality={100}
        className={"object-cover"}
      ></Image>
    </div>
  );
}
