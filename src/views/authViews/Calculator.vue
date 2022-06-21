<template>
  <v-container>
    <v-form
    ref="form"
    v-model="form.isValid"
    >
      <v-container fluid>
        <h1 class="text-left mb-10">Ingreso de Datos</h1>
        <v-row>
          <v-col class="col-12 col-sm-8 col-md-5 mx-auto flex">
            <h2 class="text-center mb-10">Datos del Bono</h2>
            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Valor Nominal</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                    v-model="form.scheduleData.boundData.nominalValue"
                    color="accent"
                    prefix="s/"
                    solo
                    :rules="[rules.required,rules.isPositive]"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Valor Comercial</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                    v-model="form.scheduleData.boundData.commercialValue"
                    color="accent"
                    prefix="s/"
                    solo
                    :rules="[rules.required,rules.isPositive]"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Numero de años</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                    v-model="form.scheduleData.boundData.years"
                    color="accent"
                    solo
                    :rules="[rules.required,rules.isInt,rules.isPositive]"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Frecuencia del cupón</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-select
                    v-model="form.scheduleData.boundData.couponFrequency"
                    :items="form.items.couponFrequencyItems"
                    persistent-hint
                    solo
                    :rules=[rules.required]
                ></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Dias por año</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                    v-model="form.scheduleData.boundData.daysYear"
                    color="accent"
                    solo
                    :rules="[rules.required,rules.isInt,rules.isPositive]"
                ></v-text-field>
              </v-col>
            </v-row>


            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Tipo de tasa de interes</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-select
                    v-model="form.scheduleData.boundData.typeInterestRate"
                    :items="form.items.interestRateTypeItems"
                    persistent-hint
                    solo
                    :rules="[rules.required]"
                ></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Capitalización</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-select
                    v-model="form.scheduleData.boundData.capitalization"
                    :items="form.items.capitalizationItems"
                    item-text="state"
                    item-value="abbr"
                    solo
                    :rules="[rules.required]"
                ></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Tasa de interés</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                    v-model="form.scheduleData.boundData.interestRate"
                    color="accent"
                    suffix="%"
                    solo
                    :rules="[rules.required,rules.isPositive]"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Tasa anual de descuento</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                    v-model="form.scheduleData.boundData.annualDiscountRate"
                    color="accent"
                    suffix="%"
                    solo
                    :rules="[rules.required,rules.isPositive]"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Impuesto a la Renta</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                    v-model="form.scheduleData.boundData.incomeTax"
                    color="accent"
                    suffix="%"
                    solo
                    :rules="[rules.required,rules.isPositive]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Fecha de emisión</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-menu
                    ref="menu"
                    v-model="form.scheduleData.issueDateMenu"
                    :close-on-content-click="false"
                    :return-value.sync="form.issue"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="form.scheduleData.boundData.issue"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        solo
                        :rules="[rules.required]"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                      v-model="form.scheduleData.boundData.issue"
                      no-title
                      scrollable
                  >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="form.scheduleData.issueDateMenu = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(form.scheduleData.boundData.issue)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>

              </v-col>
            </v-row>

          </v-col >
          <v-col class="col-12 col-sm-8 col-md-5 mx-auto flex">
            <h2 class="text-center mb-10">Datos de los costes</h2>
            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">% Prima</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field

                    v-model="form.scheduleData.initialCostData.premium"
                    color="accent"
                    suffix="%"
                    solo
                    :rules="[rules.required,rules.isPositive]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">% Estructuración</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                    v-model="form.scheduleData.initialCostData.structuring"
                    color="accent"
                    suffix="%"
                    solo
                    :rules="[rules.required,rules.isPositive]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">% Colocación</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field

                    v-model="form.scheduleData.initialCostData.collocation"
                    color="accent"
                    suffix="%"
                    solo
                    :rules="[rules.required,rules.isPositive]"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Flotacion</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                    v-model="form.scheduleData.initialCostData.floatation"
                    color="accent"
                    suffix="%"
                    solo
                    :rules="[rules.required,rules.isPositive]"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Cavali</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                    v-model="form.scheduleData.initialCostData.cavali"
                    color="accent"
                    suffix="%"
                    solo
                    :rules="[rules.required,rules.isPositive]"
                ></v-text-field>
              </v-col>
            </v-row>

          </v-col>
        </v-row>
        <v-btn
            align="center"
            color="secondary"
            class="py-5 mb-5"
            x-large
            @click="onSubmit"
            :style="{left: '50%', transform:'translateX(-50%)'}"
                 >
          Calcular
        </v-btn
         >
      </v-container>
    </v-form>
    <v-snackbar
        v-model="scheduleStore.error"
        :timeout="timeout"
        color="red accent-2"
    >
      {{ "Uno o más datos son incorrectos y/o requeridos" }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="accent"
            text
            v-bind="attrs"
            @click="scheduleStore.error = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { useScheduleStore } from "@/store/useScheduleStore";
import { useAuthStore } from "@/store/useAuthStore";

export default {
  name: "Calculator",
  data () {
    return {
      form: {
        scheduleData: {
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            boundData: {
            nominalValue: '',
            commercialValue: '',
            years: '',
            couponFrequency: '',
            daysYear: '',
            typeInterestRate: '',
            capitalization: '',
            interestRate: '',
            annualDiscountRate: '',
            incomeTax: '',
            issue: '',
            gracePeriod: '',
            typeOfGracePeriod: 'S',
          },
            initialCostData: {
            premium: '',
            structuring: '',
            collocation: '',
            floatation: '',
            cavali: ''
          }
        },
        items :{
          interestRateTypeItems: [
             'EFFECTIVE',
             'NOMINAL'
          ],
          couponFrequencyItems: [
            'MONTHLY',
            'BIMONTHLY',
            'QUARTERLY',
            'FOURMONTHLY',
            'SIXMONTHLY',
            'ANNUAL'
          ],
          capitalizationItems: [
            'DAILY',  
            'BIWEEKLY',
            'MONTHLY',
            'BIMONTHLY',
            'QUARTERLY',
            'FOURMONTHLY',
            'SIXMONTHLY',
            'ANNUAL'
          ],
        },
        isValid: false,
        issueDateMenu: false,
      },
      rules:{
        required: v => !!v || 'Requerido',
        isInt: v => Number.isInteger(Number(v)) || 'Entero requerido',
        isPositive:v => Number(v) > 0 || 'Número positivo requerido',
      },
      timeout: 3000,
      userId: 0,
      scheduleStore: useScheduleStore(),
      authStore: useAuthStore()
    }
  },
  methods: {
    retrieveData(){
         const dataRetrieve = {
        
              date : this.form.scheduleData.date,
              createBoundDataResource : {
              nominalValue : this.form.scheduleData.boundData.nominalValue,
              commercialValue : parseFloat(this.form.scheduleData.boundData.commercialValue),
              years : parseInt(this.form.scheduleData.boundData.years),
              couponFrequency: this.form.scheduleData.boundData.couponFrequency,
              daysYear : parseInt(this.form.scheduleData.boundData.daysYear),
              typeInterestRate : this.form.scheduleData.boundData.typeInterestRate,
              capitalization : this.form.scheduleData.boundData.capitalization,
              interestRate : parseFloat(this.form.scheduleData.boundData.interestRate),
              annualDiscountRate : parseFloat(this.form.scheduleData.boundData.annualDiscountRate),
              incomeTax : parseFloat(this.form.scheduleData.boundData.incomeTax),
              issue : this.form.scheduleData.boundData.issue,
              gracePeriod : this.form.scheduleData.boundData.gracePeriod,
              typeOfGracePeriod : this.form.scheduleData.boundData.typeOfGracePeriod,
            },
            createInitialCostDataResource : {
              premium : this.form.scheduleData.initialCostData.premium  ,
              structuring : this.form.scheduleData.initialCostData.structuring ,
              collocation : this.form.scheduleData.initialCostData.collocation,
              floatation : this.form.scheduleData.initialCostData.floatation,
              cavali: this.form.scheduleData.initialCostData.cavali,
            }
         
      }
      return dataRetrieve
    },
    
    async onSubmit() {
       if(this.$refs.form.validate()){
          const data = this.retrieveData()
          this.userId = this.authStore.user.id;
          await this.scheduleStore.createSchedule(this.userId, data);
       }
       else this.scheduleStore.error = true
    },
     initForm() {
            this.form.scheduleData.boundData.nominalValue = '',
            this.form.scheduleData.boundData.commercialValue = '',
            this.form.scheduleData.boundData.years = '',
            this.form.scheduleData.boundData.couponFrequency ='',
            this.form.scheduleData.boundData.daysYear = '',
            this.form.scheduleData.boundData.typeInterestRate = '',
            this.form.scheduleData.boundData.capitalization ='',
            this.form.scheduleData.boundData.interestRate = '',
            this.form.scheduleData.boundData.annualDiscountRate = '',
            this.form.scheduleData.boundData.incomeTax = '',
            this.form.scheduleData.boundData.issue = '',
            this.form.scheduleData.boundData.gracePeriod = '',
            this.form.scheduleData.boundData.typeOfGracePeriod = '',
            this.form.scheduleData.initialCostData.premium = '',
            this.form.scheduleData.initialCostData.structuring = '',
            this.form.scheduleData.initialCostData.collocation = '',
            this.form.scheduleData.initialCostData.floatation = '',
            this.form.scheduleData.initialCostData.cavali= ''
    }
  },
  mounted() {
      this.initForm();
  }
}
</script>
<style>

</style>