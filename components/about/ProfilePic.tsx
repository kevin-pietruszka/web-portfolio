import Image from "next/image";

export default function ProfilePic({
  containerStyle,
  imageStyle,
}: {
  containerStyle: string;
  imageStyle: string;
}) {

  return (
    <div className={containerStyle}>
      <Image
        src={"/me.png"}
        width={300}
        height={300}
        alt="profile picture"
        priority
        quality={100}
        className={imageStyle}
      ></Image>
    </div>
  );
}
