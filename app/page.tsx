import Header from '@/components/Header';
import HomeSection from '@/components/HomeSection';
import WinnerSection from '@/components/WinnerSection';

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex-1">
        <WinnerSection />
        <HomeSection />
      </div>
    </>
  );
}
