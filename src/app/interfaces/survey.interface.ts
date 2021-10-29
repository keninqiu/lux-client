import { Entity } from './entity.interface';
export interface Survey extends Entity {
    type: string,
    user: string,
    job: string,
    years: number,
    city: string,
    compensationType: string,
    yearlyPay: number;
    salaryHoursPerWeek: string;
    hourlyPay: number;
    hoursPerWeek: number;
  
    hasBonus: boolean;
    annualBonus: number;
    hasProfitShare: boolean;
    profitShare: number;
    hasSalesCommissions: boolean;
    annualSalesCommissions: number;
    annualSalesVolume: number;
}