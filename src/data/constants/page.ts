export const API_SERVICES_URLS = {
  GET_ALL_LISTING_TYPES: "/listingTypes/getAll",
  GET_ALL_LISTING_SUB_TYPES: (id: string) =>
    `/listingCategories/getAll?listingTypeId=${id}`,
  HOME_SLIDER: "/siteConfigurations/getSiteConfigurationDetails",
  GET_All_currencies: "/currencies/getAll",
  GET_All_packages: "/listingPackages/getAll",
  // GET_All_nationalities:'/nationalities/getAll',
  // GET_All_cities:'/cities/getAll',
  SIGN_UP: "/auth/Register",
  SIGN_IN: "/auth/token",
  FORGET_PASSWORD: "/auth/forgotPasswordWithinLogin",
  VERIFY_CODE: "/auth/verifyResetCodeWithinLogin",
  RESET_PASSWORD: "/auth/resetPasswordWithinLogin",
  GET_ALL_LISTINGS:`/listings/getAll`,
  GET_ALL_LISTINGS_PROFILE_BY_ID: (id: string) =>
  `/listings/GetProfile/${id}`, 
};
