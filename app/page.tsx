import Header from '@/components/Header';
import HomeSection from '@/components/HomeSection';

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex-1">
        <HomeSection />
      </div>
    </>
  );
}
