import React from "react";

const ActivityDetailsPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = await params;
  return <div>activity{id}</div>;
};

export default ActivityDetailsPage;