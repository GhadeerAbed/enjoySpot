
import { ListingDetails } from "@/features/SubCategories/components/page";
import React from "react";


const ActivityDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div>
      <ListingDetails id={id} />
    </div>
  );
};

export default ActivityDetailsPage;
