import { Category } from './category.interface';
import { Entity } from './entity.interface';
import { Translate } from './translate.interface';

export interface Degree extends Entity {
    name: string,
    namet: Translate,
    category: Category,
    salaryType: string,
    slug: string,
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
        jobSatisfaction: {
            profileCount: number,
            score: number
        },
    },
    related: [] 
}