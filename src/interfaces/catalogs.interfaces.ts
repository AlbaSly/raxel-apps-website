export interface IAppCatalog {
  id: number;
  name: string;
  description?: string;
  categories: Array<IAppCatalogCategory>;
}

export interface IAppCatalogCategory {
  name: string;
  accounts: Array<IAppCatalogAccount>;
}

export interface IAppCatalogAccount {
  name: string;
  devices: number | null;
  details: string | null;
  price: string;
  available: boolean;
}