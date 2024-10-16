import Image from "next/image";
import { pana} from "../../public/images/page";
export default function NotFound() {
  return (
    <div
      className="flex justify-center items-center mx-auto mt-20"
      style={{
        backgroundImage: `url(${pana.src})`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '500px',
        height: '320px', 
      }}
    >
      <h1 className="font-Sans text-primary text-2xl text-center  ">
        Coming Soon!
      </h1>
    </div>
  );
}
