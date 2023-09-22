import Banner from "@/components/Banner";
import Card from "@/components/Card";
import CurrentBanner from "@/components/CurrentBanner";

export default function Home() {
  return (
    <div className="bg-[url('/stars.png')]">
      <Banner />
      <CurrentBanner />
      <div className="px-2 pb-2">
        <Card className="p-2">
          <h1 className="text-base font-bold text-center">Disclaimer</h1>
          This website is created by{" "}
          <a
            href="http://nizarbaihaqi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Nizar Baihaqi
          </a>{" "}
          only for example project purposes only, any game assets are property
          of COGNOSPHERE PTE. LTD.
        </Card>
      </div>
    </div>
  );
}
