// src/models/information.model.ts

interface CompanyData {
  name: string;
  phone: number;
}

interface CustomerData {
  firstName?: string;
  lastName?: string;
  zipCode?: number;
  mail?: string;
}

interface Information {
  id: string;
  companyData: CompanyData;
  customerData?: CustomerData;
}

export default Information;

