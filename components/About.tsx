import Socials from "@/components/about/Socials";
import Description from "@/components/about/Description";
import ProfilePic from "@/components/about/ProfilePic";

export default function About() {
  return (
    <section id="about" className="container mx-auto h-full p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="order-2 lg:order-1">
          <Description />
          <Socials
            containerStyle={
              "grid grid-cols-1 sm:grid-cols-4 gap-4 place-content-center place-items-center"
            }
            socialStyles={
              "inline-flex rounded p-1 gap-1 border-border border-2 items-center justify-center bg-primary text-primary-foreground"
            }
          />
        </div>

        <div className="order-1 lg:order-2">
          <ProfilePic
            containerStyle="w-full h-full flex justify-center items-center"
            imageStyle="rounded-[100%] border-2 border-primary"
          />
        </div>
      </div>
    </section>
  );
}
