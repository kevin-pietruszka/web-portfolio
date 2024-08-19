import Socials from "@/components/home/Socials";
import Description from "@/components/home/Description";
import ProfilePic from "@/components/home/ProfilePic";

export default function Home() {
  return (
    <section className="container mx-auto px-8 py-8 lg:py-56">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="order-2 lg:order-1">
          <Description 
            containerStyle="text-center lg:text-left"
            greetingStyle="text-4xl lg:text-5xl xl:text-6xl"
            nameStyle="block text-pink"
            titleStyle="text-xl mb-8"
            descriptionStyle="text-lg mb-8"
          />
          <Socials
            containerStyle={
              "grid grid-cols-1 sm:grid-cols-4 gap-4 place-content-center place-items-center"
            }
            socialStyles={
              "inline-flex gap-1 items-center justify-center rounded-full p-1 bg-surface0 hover:border-lavender transition-colors border-2 border-transparent"
            }
          />
        </div>

        <div className="order-1 lg:order-2">
          <ProfilePic
            containerStyle="flex justify-center items-center"
            imageStyle="rounded-[100%] border-2 border-pink"
          />
        </div>
      </div>
    </section>
  );
}
