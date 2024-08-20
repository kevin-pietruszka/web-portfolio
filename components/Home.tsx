import Socials from "@/components/home/Socials";
import Description from "@/components/home/Description";
import ProfilePic from "@/components/home/ProfilePic";

export default function Home() {
  return (
    <section className="container mx-auto px-8 py-8 lg:py-56">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="order-2 lg:order-1">
          <Description />
          <Socials />
        </div>

        <div className="order-1 lg:order-2 flex items-center justify-center">
          <ProfilePic />
        </div>
      </div>
    </section>
  );
}
