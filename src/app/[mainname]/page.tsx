import { SubCategories } from "@/features/page";

const MainNamePage = async ({ params }: { params: { mainname: string } }) => {
  const { mainname } = await params; 
  return (
    <div>
      <SubCategories name={mainname} />
    </div>
  );
};

export default MainNamePage;

