import { ListingDetails } from '@/features/SubCategories/components/page';
import BestDeals from '@/features/SubCategories/components/BestDeals/page';
import React from 'react'

const BestOffer = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
 
  return (
    <div>
      <ListingDetails id={id} />
    </div>
  );
  
}

export default BestOffer