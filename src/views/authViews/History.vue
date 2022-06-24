<template>
  <v-container fluid>
    <h1 class="text-center mb-10">Historial de cálculos</h1>
    <v-card
        v-for="schedule in schedules"
        :key="schedule.id"
        color="blue-grey lighten-5"
        class="mb-10"
    >
      <v-card-title>ID: {{ schedule.id }}</v-card-title>

      <v-row class="col-12">
        <v-col class="col-12 col-lg-8">
          <v-row>
            <v-col class="pa-0">
              <v-card-title class="pt-0">Datos de bono</v-card-title>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="col-12 col-md-6">
              <v-row>
                <v-col class="col-5 col-sm-4 pa-0">
                  <v-subheader class="font-weight-medium">Valor Nominal</v-subheader>
                </v-col>
                <v-col class="col-7 col-sm-8 pa-0">
                  <v-text-field
                      background-color="primary"
                      color="accent"
                      prefix="s/"
                      solo
                      readonly
                      :value="schedule.boundData.nominalValue"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="col-5 col-sm-4 pa-0">
                  <v-subheader class="font-weight-medium">Valor Comercial</v-subheader>
                </v-col>
                <v-col class="col-7 col-sm-8  pa-0">
                  <v-text-field
                      background-color="primary"
                      color="accent"
                      prefix="s/"
                      solo
                      readonly
                      :value="schedule.boundData.commercialValue"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="col-5 col-sm-4 pa-0">
                  <v-subheader class="font-weight-medium">Número de años</v-subheader>
                </v-col>
                <v-col class="col-7 col-sm-8  pa-0">
                  <v-text-field
                      background-color="primary"
                      color="accent"
                      solo
                      readonly
                      :value="schedule.boundData.years"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="col-5 col-sm-4 pa-0">
                  <v-subheader class="font-weight-medium">Frecuencia del cupón</v-subheader>
                </v-col>
                <v-col class="col-7 col-sm-8  pa-0">
                  <v-text-field
                      background-color="primary"
                      color="accent"
                      solo
                      readonly
                      :value="getCouponFrequency(schedule.boundData.couponFrequency)"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="col-5 col-sm-4 pa-0">
                  <v-subheader class="font-weight-medium">Días por año</v-subheader>
                </v-col>
                <v-col class="col-7 col-sm-8  pa-0">
                  <v-text-field
                      background-color="primary"
                      color="accent"
                      solo
                      readonly
                      :value="schedule.boundData.daysYear"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="col-5 col-sm-4 pa-0">
                  <v-subheader class="font-weight-medium">Tipo de tasa de interés</v-subheader>
                </v-col>
                <v-col class="col-7 col-sm-8  pa-0">
                  <v-text-field
                      background-color="primary"
                      color="accent"
                      solo
                      readonly
                      :value="getTypeInterestRate(schedule.boundData.typeInterestRate)"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>

            <v-col class="col-12 col-md-6">
              <v-row>
                <v-col class="col-5 col-sm-4 pa-0">
                  <v-subheader class="font-weight-medium">Capitalización</v-subheader>
                </v-col>
                <v-col class="col-7 col-sm-8  pa-0">
                  <v-text-field
                      background-color="primary"
                      color="accent"
                      solo
                      readonly
                      :value="getCapitalization(schedule.boundData.capitalization)"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="col-5 col-sm-4 pa-0">
                  <v-subheader class="font-weight-medium">Tasa de interés</v-subheader>
                </v-col>
                <v-col class="col-7 col-sm-8  pa-0">
                  <v-text-field
                      background-color="primary"
                      color="accent"
                      solo
                      suffix="%"
                      readonly
                      :value="toPercent(schedule.boundData.interestRate)"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="col-5 col-sm-4 pa-0">
                  <v-subheader class="font-weight-medium">Tasa anual de descuento</v-subheader>
                </v-col>
                <v-col class="col-7 col-sm-8  pa-0">
                  <v-text-field
                      background-color="primary"
                      color="accent"
                      solo
                      suffix="%"
                      readonly
                      :value="toPercent(schedule.boundData.annualDiscountRate)"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="col-5 col-sm-4 pa-0">
                  <v-subheader class="font-weight-medium">Impuesto a la renta</v-subheader>
                </v-col>
                <v-col class="col-7 col-sm-8  pa-0">
                  <v-text-field
                      background-color="primary"
                      color="accent"
                      solo
                      suffix="%"
                      readonly
                      :value="toPercent(schedule.boundData.incomeTax)"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="col-5 col-sm-4 pa-0">
                  <v-subheader class="font-weight-medium">Fecha de emisión</v-subheader>
                </v-col>

                <v-col class="col-7 col-sm-8  pa-0">
                  <v-text-field
                      background-color="primary"
                      color="accent"
                      solo
                      readonly
                      :value="formatDate(schedule.boundData.issue)"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-12 col-md-6 col-lg-4">
          <v-row>
            <v-col class="pa-0">
              <v-card-title class="pt-0">Datos de bono</v-card-title>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="col-5 col-sm-4 pa-0">
              <v-subheader class="font-weight-medium">Prima</v-subheader>
            </v-col>
            <v-col class="col-7 col-sm-8  pa-0">
              <v-text-field
                  background-color="primary"
                  color="accent"
                  solo
                  suffix="%"
                  readonly
                  :value="toPercent(schedule.initialCostData.premium)"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="col-5 col-sm-4 pa-0">
              <v-subheader class="font-weight-medium">Estructuración</v-subheader>
            </v-col>
            <v-col class="col-7 col-sm-8  pa-0">
              <v-text-field
                  background-color="primary"
                  color="accent"
                  solo
                  suffix="%"
                  readonly
                  :value="toPercent(schedule.initialCostData.structuring)"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="col-5 col-sm-4 pa-0">
              <v-subheader class="font-weight-medium">Colocación</v-subheader>
            </v-col>
            <v-col class="col-7 col-sm-8  pa-0">
              <v-text-field
                  background-color="primary"
                  color="accent"
                  solo
                  suffix="%"
                  readonly
                  :value="toPercent(schedule.initialCostData.collocation)"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="col-5 col-sm-4 pa-0">
              <v-subheader class="font-weight-medium">Flotación</v-subheader>
            </v-col>
            <v-col class="col-7 col-sm-8  pa-0">
              <v-text-field
                  background-color="primary"
                  color="accent"
                  solo
                  suffix="%"
                  readonly
                  :value="toPercent(schedule.initialCostData.floatation)"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="col-5 col-sm-4 pa-0">
              <v-subheader class="font-weight-medium">CAVALI</v-subheader>
            </v-col>
            <v-col class="col-7 col-sm-8  pa-0">
              <v-text-field
                  background-color="primary"
                  color="accent"
                  solo
                  suffix="%"
                  readonly
                  :value="toPercent(schedule.initialCostData.cavali)"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="col-12">
        <v-btn
            class="ml-auto"
            width="150"
            color="secondary"
            @click="seeSchedule(schedule)"
        >Ver
        </v-btn>
        <v-btn
            class="ml-5"
            width="150"
            color="secondary"
            @click="editSchedule(schedule)"
        >Editar
        </v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import {useScheduleStore} from "@/store/useScheduleStore";
import {useAuthStore} from "@/store/useAuthStore";
import { bus } from '@/main'

export default {
  name: "History",
  data() {
    return {
      authStore: useAuthStore(),
      scheduleStore: useScheduleStore(),
      schedules: []
      /*schedules: [
        {
          id: 1,
          date: "2022-06-10T19:10:04.826Z",
          createBoundDataResource: {
            nominalValue: 1000,
            commercialValue: 1050,
            years: 5,
            couponFrequency: "SIXMONTHLY",
            daysYear: 360,
            typeInterestRate: "EFFECTIVE",
            capitalization: "MONTHLY",
            interestRate: 0.08,
            annualDiscountRate: 0.045,
            incomeTax: 0.3,
            issue: "2022-06-10T19:10:04.826Z",
            gracePeriod: 0,
            typeOfGracePeriod: "S"
          },
          createInitialCostDataResource: {
            premium: 0.01,
            structuring: 0.01,
            collocation: 0.0025,
            floatation: 0.0045,
            cavali: 0.005
          }
        },
        {
          id: 2,
          date: "2022-06-10T19:10:04.826Z",
          createBoundDataResource: {
            nominalValue: 1000,
            commercialValue: 1050,
            years: 5,
            couponFrequency: "SIXMONTHLY",
            daysYear: 360,
            typeInterestRate: "EFFECTIVE",
            capitalization: "MONTHLY",
            interestRate: 0.08,
            annualDiscountRate: 0.045,
            incomeTax: 0.3,
            issue: "2022-06-10T19:10:04.826Z",
            gracePeriod: 0,
            typeOfGracePeriod: "S"
          },
          createInitialCostDataResource: {
            premium: 0.01,
            structuring: 0.01,
            collocation: 0.0025,
            floatation: 0.0045,
            cavali: 0.005
          }
        }
      ]*/
    }
  },
  methods: {
    getTypeInterestRate(typeInterestRate) {
      if (typeInterestRate == "EFFECTIVE") return "Efectiva";
      return "Nominal";
    },
    getCouponFrequency(couponFrequency) {
      switch (couponFrequency) {
        case "MONTHLY":
          return "Mensual";
        case "BIMONTHLY":
          return "Bimestral";
        case "QUARTERLY":
          return "Trimestral";
        case "FOURMONTHLY":
          return "Cuatrimestral";
        case "SIXMONTHLY":
          return "Semestral";
        case "ANNUAL":
          return "Anual";
        default:
          return "Null";
      }
    },
    getCapitalization(capitalization) {
      switch (capitalization) {
        case "DAILY":
          return "Diario";
        case "BIWEEKLY":
          return "Quincenal";
        case "MONTHLY":
          return "Mensual";
        case "BIMONTHLY":
          return "Bimestral";
        case "QUARTERLY":
          return "Trimestral";
        case "FOURMONTHLY":
          return "Cuatrimestral";
        case "SIXMONTHLY":
          return "Semestral";
        case "ANNUAL":
          return "Anual";
        default:
          return "Null";
      }
    },
    toPercent(n) {
      return Math.round(((n + Number.EPSILON) * 100) * 100000) / 100000;
    },
    formatDate(date) {
      const fDate = new Date(date);
      return `${fDate.getDay()}/${fDate.getMonth()}/${fDate.getFullYear()}`;
    },
    onLoad() {
      this.schedules = this.authStore.user.schedules;
    },
    seeSchedule(schedule) {
      this.scheduleStore.seeSchedule(schedule);
      bus.$emit('showAll')
    },
    editSchedule(schedule) {
      this.seeSchedule(schedule);
    }
  },
  mounted() {
    this.onLoad();
  }
}
</script> 