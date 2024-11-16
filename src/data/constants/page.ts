export const API_SERVICES_URLS = {
  GET_ALL_LISTING_TYPES: "/listingTypes/getAll",
  GET_ALL_LISTING_SUB_TYPES: (id: string) =>
    `/listingCategories/getAll?listingTypeId=${id}`,
  HOME_SLIDER: "/siteConfigurations/getSiteConfigurationDetails",
  GET_All_currencies: "/currencies/getAll",
  // GET_All_nationalities:'/nationalities/getAll',
  // GET_All_cities:'/cities/getAll',
  SIGN_UP: "/api/v1/auth/register",
  SIGN_IN: "/api/v1/auth/login",
  FORGET_PASSWORD: "/api/v1/auth/forgotPasswordWithinLogin",
  VERIFY_CODE: "/api/v1/auth/verifyResetCodeWithinLogin",
  RESET_PASSWORD: "/api/v1/auth/resetPasswordWithinLogin",
  UPDATE_AGENCY:(id:string) => `/api/v1/users/updateAgency/${id}`,
  GET_ALL_LISTINGS:`/listings/getAll`,
};
