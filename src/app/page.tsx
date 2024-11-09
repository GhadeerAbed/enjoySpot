import { Booking, MainHome, SubCategory } from "@/features/page";
import NotFound from "./not-found";
import User from "@/features/User/page";
import Auth from "@/features/Auth/page";

export default function Home() {
  return (
    <main>
      <MainHome />
      {/* <NotFound/> */}
      {/* <SubCategory/> */}
      {/* <Booking/> */}
      <Auth/> 
    </main>
  );
}
