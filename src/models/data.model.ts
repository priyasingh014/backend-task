export interface CompanyData {
  name: string;
  phone: number;
}

export interface CustomerData {
  firstName?: string;
  lastName?: string;
  zipCode?: number;
  mail?: string;
}

export interface Data {
  id: string;
  companyData: CompanyData;
  customerData?: CustomerData;
}

