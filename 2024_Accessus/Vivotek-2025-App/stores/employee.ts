import { defineStore } from 'pinia';
import type { EmployeeType } from '~/types/employee';

export const useEmployeeStore = defineStore('employee', {
  state: () => ({
    id: '',
    name_tw: '',
    name_en: '',
    email: '',
    preferred_language: '',
    phone: '',    
    country_code: '',
  }),
  actions: {
    async fetchEmployee() {
      const res: any = await $fetch('/api/my/profile');
      this.setEmployee(res.data);
    },
    setEmployee(data: EmployeeType) {
      this.id = data.id;
      this.name_tw = data.name_tw;
      this.name_en = data.name_en;
      this.email = data.email;
      this.preferred_language = data.preferred_language;
      this.phone = data.phone;
      this.country_code = data.country_code;
    },
    clearEmployee() {
      this.id = '';
      this.name_tw = '';
      this.name_en = '';
      this.email = '';
      this.preferred_language = '';
      this.phone = '';
    },
  },
});