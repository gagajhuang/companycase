export interface EmployeeType {
    id: string;
    name_tw: string;
    name_en: string;
    email: string;
    preferred_language: string;
    phone: string;
    country_code: 'Taiwan' | 'USA' | 'EMEA' | 'LATAM' | 'Japan' | 'Australia' | 'India';
}