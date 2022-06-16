import { defineStore } from "pinia";
import ScheduleService from "@/services/schedule-service";

const SCHEDULE = "schedule";

export const useScheduleStore = defineStore({
   id:  "Schedule",
   state: () => ({
      schedule: JSON.parse(localStorage.getItem(SCHEDULE)),
      loading: false,
      error: false
   }),
   actions: {
      async getScheduleById(id) {
         this.loading = true;
         this.error = false;
         await ScheduleService.getById(id)
             .then(response => {
                this.schedule = response.data;
                localStorage.setItem(SCHEDULE, JSON.stringify(response.data));
             })
             .catch(e => {
                console.log(e);
                this.error = true;
             });
         this.loading = false;
      },
      async createSchedule(userId, data) {
         this.loading = true;
         this.error = false;
         await ScheduleService.create(userId, data)
             .then(response => {
                this.schedule = response.data;
                localStorage.setItem(SCHEDULE, JSON.stringify(response.data));
             })
             .catch(e => {
                console.log(e);
                this.error = true;
             });
         this.loading = false;
      },
      async updateSchedule(scheduleId, data) {
         this.loading = true;
         this.error = false;
         await ScheduleService.update(scheduleId, data)
             .then(response => {
                this.schedule = response.data;
                localStorage.setItem(SCHEDULE, JSON.stringify(response.data));
             })
             .catch(e => {
                console.log(e);
                this.error = true;
             });
         this.loading = false;
      },
      async deleteSchedule(scheduleId) {
         this.loading = true;
         this.error = false;
         await ScheduleService.delete(scheduleId)
             .then(response => {
                console.log(response);
             })
             .catch(e => {
                console.log(e);
                this.error = true;
             });
         this.loading = false;
      }
   }
});