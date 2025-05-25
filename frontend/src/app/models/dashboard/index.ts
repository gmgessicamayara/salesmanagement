export interface DashboardData {
  sales?: number;
  products?: number;
  customers?: number;
  salesByMonth?: SalesByMonth[];
}

export interface SalesByMonth {
  month?: number;
  total?: number;
}
