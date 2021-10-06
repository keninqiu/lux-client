import { Category } from './category.interface';
import { Entity } from './entity.interface';
import { Translate } from './translate.interface';
export interface Employer extends Entity {
    name: string,
    namet: Translate,
    category: Category,
    salaryType: string,
    slug: string,
    url: string,
    currencyCode: string,
    compensation: {
        bonus: {
            min: number,
            max: number,
            avg: number,
            profileCount: number
        },
        commission: {
            min: number,
            max: number,
            avg: number,
            profileCount: number
        },
        salary: {
            min: number,
            max: number,
            avg: number,
            profileCount: number
        },
        hourlyRate: {
            min: number,
            max: number,
            avg: number,
            profileCount: number            
        },
        profitSharing: {
            min: number,
            max: number,
            avg: number,
            profileCount: number              
        },
        total: {
            min: number,
            max: number,
            avg: number,
            profileCount: number              
        }
    },
    ratings: {
        overall: {
            profileCount: number,
            score: number
        },
        appreciation: {
            profileCount: number,
            score: number
        },
        companyOutlook: {
            profileCount: number,
            score: number
        },
        fairPay: {
            profileCount: number,
            score: number
        },
        learningandDevelopment: {
            profileCount: number,
            score: number
        },
        managerCommunication: {
            profileCount: number,
            score: number
        },
        managerRelationship: {
            profileCount: number,
            score: number
        },
        payTransparency: {
            profileCount: number,
            score: number
        }
    },
    byDimension: {
        salaryByJob: [],
        hourlyRateByJob: [],
        salaryByDegree: [],
        hourlyRateByDegree: []
    },
    related: [],
    reviews: [],
}
