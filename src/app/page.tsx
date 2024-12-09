import Image from 'next/image';
import Banner from '@/components/banner';
import Category from '@/components/category';
import Featured from '@/components/featured';
import Navbar from '@/components/navbar';






export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Featured/>
      <Category/>
      
    </div>
  );
}
