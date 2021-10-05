import { Entity } from './entity.interface';
import { Translate } from './translate.interface';
export interface Job extends Entity {
    name: string,
    namet: Translate,
    description: string,
    category: string,
    url: string,
    salaryType: string,
    slug: string,
    currencyCode: string,    
    careerPathData: {
        childCount: number,
        children: [
            {
                value: {
                    jobTitle: string,
                    percent: number
                },
                childCount: number,
                children: [
                    {
                        value: {
                            jobTitle: string,
                            percent: number
                        },
                        childCount: number,
                        children: [
                            {
                                value: {
                                    jobTitle: string,
                                    percent: number
                                }
                            } 
                        ]
                    }                     
                ]
            }            
        ]
    },
    narratives: {
        description: string
    },
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
        }
    },
    byDimension: {
        experience: {
            entryLevel: {
                profileCount: number,
                min: number,
                max: number,
                avg: number
            },
            earlyCareer: {
                profileCount: number,
                min: number,
                max: number,
                avg: number
            },
            midCareer: {
                profileCount: number,
                min: number,
                max: number,
                avg: number
            },
            lateCareer: {
                profileCount: number,
                min: number,
                max: number,
                avg: number
            },
            experienced: {
                profileCount: number,
                min: number,
                max: number,
                avg: number
            }
        },
        gender: {
            male: {
              profileCount: number,
              min: number,
              max: number,
              avg: number
            },
            female: {
              profileCount: number,
              min: number,
              max: number,
              avg: number
            },
            selfDefine: {
                profileCount: number,
                min: number,
                max: number,
                avg: number
            }
        },
        healthBenefit: {
            medical: {
                profileCount: number
            },
            dental: {
                profileCount: number
            },
            vision: {
                profileCount: number
            },
            none: {
                profileCount: number
            }
        }
    }
}
