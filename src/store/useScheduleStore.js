import {defineStore} from "pinia";
import ScheduleService from "@/services/schedule-service";
import router from "@/router";

const SCHEDULE = "schedule";

const DEFAULT_SCHEDULE = {
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        boundData: {
        nominalValue: 0,
            commercialValue: 0,
            years: 0,
            couponFrequency: '',
            daysYears: 0,
            typeInterestRate: '',
            capitalization: '',
            interestRate: 0,
            annualDiscountRate: 0,
            incomeTax: 0,
            issue: '',
            gracePeriod: 0,
            typeOfGracePeriod: 'S',
    },
    initialCostData: {
        premium: 0,
            structuring: 0,
            collocation: 0,
            floatation: 0,
            cavali: 0
    }
}

export const useScheduleStore = defineStore({
        id: "Schedule",
        state: () => ({
            schedule: DEFAULT_SCHEDULE,
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
                        }
                    )
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
            },
            seeSchedule(schedule) {
                this.schedule = schedule;
                localStorage.setItem(SCHEDULE, JSON.stringify(schedule));
                router.push("/auth");
            },
            editSchedule(schedule) {
                this.seeSchedule(schedule);
            },
            clearScheduleCalculatorForm() {
                this.schedule = DEFAULT_SCHEDULE;
                localStorage.removeItem(SCHEDULE);
            }
        }
    })
;