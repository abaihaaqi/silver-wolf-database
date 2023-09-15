import Banner from "@/components/Banner";
import CurrentBanner from "@/components/CurrentBanner";

export default function Home() {
  return (
    <div className="bg-[url('/stars.png')]">
      <Banner />
      <CurrentBanner />
    </div>
  );
}
