import { Entity } from './entity.interface';
export interface Country extends Entity {
    name: string,
    namet: any,
    code: string,
    currencyCode: string,
    byDimension: {
        salaryByJob: [
            {
                job: string,
                name: string,
                url: string,
                profileCount: number,
                min: number,
                max: number,
                avg: number                
            }
        ],
        hourlyRateByJob: [
            {
                job: string,
                name: string,
                url: string,
                profileCount: number,
                min: number,
                max: number,
                avg: number                
            }
        ],  
        
        salaryByEmployer: [
            {
                employer: string,
                name: string,
                url: string,
                profileCount: number,
                min: number,
                max: number,
                avg: number                
            }
        ],
        hourlyRateByEmployer: [
            {
                employer: string,
                name: string,
                url: string,
                profileCount: number,
                min: number,
                max: number,
                avg: number                
            }
        ],    
        
        salaryByDegree: [
            {
                degree: string,
                name: string,
                url: string,
                profileCount: number,
                min: number,
                max: number,
                avg: number                
            }
        ],
        hourlyRateByDegree: [
            {
                degree: string,
                name: string,
                url: string,
                profileCount: number,
                min: number,
                max: number,
                avg: number                
            }
        ],

        salaryBySchool: [
            {
                school: string,
                name: string,
                url: string,
                profileCount: number,
                min: number,
                max: number,
                avg: number                
            }
        ],
        hourlyRateBySchool: [
            {
                school: string,
                name: string,
                url: string,
                profileCount: number,
                min: number,
                max: number,
                avg: number                
            }
        ],
    };
}
