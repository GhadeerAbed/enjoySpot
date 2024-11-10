export const ExploreMore = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto pb-10 max-sm:mx-5">
        <h2 className="font-bold text-2xl text-primary ">Explore More</h2>
        <div className="flex flex-wrap text-h6Color py-2 space-y-2">
          {Array(24).fill('').map((_, index) => (
            <div key={index} className="border-r px-4 mt-[8px]">
              Explore Topic
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreMore;


  // const exploreTopics = Array.from(
  //   { length: 25 },
  //   (_, index) => `Explore Topic `
  // );
  
// export const ExpoloreMore = () => {
//   return (
//     <>
//       <div className="  ">
//         <h2 className=" font-bold text-2xl text-primary my-7">Explore More</h2>
//         <div className="flex flex-wrap text-h6Color py-2 space-y-2">
//           <div className=" border-r px-4 mt-[8px] ">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4 ">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4 ">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4 ">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//           <div className=" border-r px-4">Explore Topic</div>
//         </div>
//       </div>

      {/* <div className=" ">
        <div className="flex flex-wrap text-h6Color py-2">
          <div className=" border-r pr-4 ">Explore Topic</div>
          <div className=" border-r px-4">Explore Topic</div>
          <div className=" border-r px-4">Explore Topic</div>
          <div className=" border-r px-4">Explore Topic</div>
          <div className=" border-r px-4">Explore Topic</div>
          <div className=" border-r px-4">Explore Topic</div>
        </div>
      </div> */}

      {/* <div className=" ">
        <div className="flex flex-wrap text-h6Color py-2">
          <div className=" border-r pr-4 ">Explore Topic</div>
          <div className=" border-r px-4">Explore Topic</div>
          <div className=" border-r px-4">Explore Topic</div>
          <div className=" border-r px-4">Explore Topic</div>
          <div className=" border-r px-4">Explore Topic</div>
          <div className=" border-r px-4">Explore Topic</div>
        </div>
      </div>
      <div className=" ">
        <div className="flex flex-wrap text-h6Color py-2">
          <div className=" border-r pr-4 ">Explore Topic</div>
          <div className=" border-r px-4">Explore Topic</div>
          <div className=" border-r px-4">Explore Topic</div>
          <div className=" border-r px-4">Explore Topic</div>
          
        </div>
      </div> */}
    {/* </>
  );
}; */}

// export default ExpoloreMore;
