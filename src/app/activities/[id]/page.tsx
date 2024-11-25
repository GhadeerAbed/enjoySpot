import { YachtsDetails } from "@/features/SubCategories/components/YachtsDetails/page";
import React from "react";


const ActivityDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div>
      <YachtsDetails id={id} />
    </div>
  );
};

export default ActivityDetailsPage;
