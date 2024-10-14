export type TableProps = {
  createdAt?: string;
  activitySubject?: string;
  id?: string;
  isComplete?: boolean;
  nodes?: number;
  activity_type?: string;
  data?: Date;
  activity?: string;
  date?: string;
  action?: string;
  amount?: string;
  status?: string;
  invoiceType?: string;
  billingType?: string;
  invoiceNumber?: string;
  fullName?: string;
  source?: string;
  creation_date?: string;
  mobile_number?: string;
  email_address?: string;
  country?: string;
  nationality?: string;
  budget?: string;
  call_status?: string;
  lead_status?: string;
  preferred_language?:string;
  agent?:string;
  subject?:string;
  priority?:string;
  addedBy?:string;
  property?:any;
  property_type?:string;
  price?:string;
  rental_periods?:string;
  category?:string;
  furnish_type?:string;
  reference?:string;
  featured?:string;
  area?:string;
  publish_date?:string;
  role?:string;
 city?:string;
 manger?:string;
 enquiryType?:string;
 description?:string;
};
export interface IGlobalGetResponse{
  isSuccessed: boolean;
  data: {
    totalCount: number;
    paginationResult: {
      currentPage: number;
      limit: number;
      numberOfPages: number;
      next: number;
    };
    data: any[];
  };
  message: string;
}
export interface ILookUp {
  name: string;
  _id: string;
  id: number;
}

export interface Activity {
  id: number;
  name: string;
  price: string;
  rating: string;
  imageUrl: string;
  location: string;
  people: string;
}


export interface  BestDeal{
  id: number;
  name: string;
  priceBefore: string;
  priceAfter: string;
  rating: string;
  imageUrl: string;
  seats:string;
  durations: string;
  
}


export interface reviews{
  id:number;
  name:string;
  rating:number;
  review:string;
  imageUrl:string;
}