<template>
  <v-form>
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
                  v-model="form.nominalValue"
                  color="accent"
                  prefix="s/"
                  solo
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4">
              <v-subheader class="font-weight-medium">Valor Comercial</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field
                  v-model="form.commercialValue"
                  color="accent"
                  prefix="s/"
                  solo
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4">
              <v-subheader class="font-weight-medium">Numero de años</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field
                  v-model="form.numberOfYears"
                  color="accent"
                  solo
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4">
              <v-subheader class="font-weight-medium">Frecuencia del cupón</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-select
                  v-model="form.couponFrequency"
                  :hint="`${form.couponFrequency.state}, ${form.couponFrequency.abbr}`"
                  :items="form.couponFrequencyItems"
                  item-text="state"
                  item-value="abbr"
                  persistent-hint
                  return-object
                  solo
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4">
              <v-subheader class="font-weight-medium">Frecuencia del cupón</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-select
                  v-model="form.interestRateType"
                  :hint="`${form.interestRateType.state}, ${form.interestRateType.abbr}`"
                  :items="form.interestRateTypeItems"
                  item-text="state"
                  item-value="abbr"
                  persistent-hint
                  return-object
                  solo
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4">
              <v-subheader class="font-weight-medium">Capitalización</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-select
                  v-model="form.capitalization"
                  :hint="`${form.capitalization.state}, ${form.capitalization.abbr}`"
                  :items="form.capitalizationItems"
                  item-text="state"
                  item-value="abbr"
                  persistent-hint
                  return-object
                  solo
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4">
              <v-subheader class="font-weight-medium">Tasa de interés</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field
                  v-model="form.interestRate"
                  color="accent"
                  suffix="%"
                  solo
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4">
              <v-subheader class="font-weight-medium">Tasa anual de descuento</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field
                  v-model="form.annualDiscountRate"
                  color="accent"
                  suffix="%"
                  solo
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4">
              <v-subheader class="font-weight-medium">Impuesto a la Renta</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field
                  v-model="form.incomeTax"
                  color="accent"
                  suffix="%"
                  solo
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
                  v-model="form.issueDateMenu"
                  :close-on-content-click="false"
                  :return-value.sync="form.issueDate"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="form.issueDate"
                      label="Click aquí"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                    v-model="form.issueDate"
                    no-title
                    scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn
                      text
                      color="primary"
                      @click="form.issueDateMenu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                      text
                      color="primary"
                      @click="$refs.menu.save(form.issueDate)"
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

                  v-model="form.premium"
                  color="accent"
                  suffix="%"
                  solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-subheader class="font-weight-medium">% Estructuración</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field

                  v-model="form.structuring"
                  color="accent"
                  suffix="%"
                  solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-subheader class="font-weight-medium">% Colocación</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field

                  v-model="form.collocation"
                  color="accent"
                  suffix="%"
                  solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-subheader class="font-weight-medium">Cavali</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field
                  v-model="form.cavali"
                  color="accent"
                  suffix="%"
                  solo
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
          :style="{left: '50%', transform:'translateX(-50%)'}"
               >
        Calcular
      </v-btn
       >
    </v-container>

  </v-form>
</template>

<script>
import { useScheduleStore } from "@/store/useScheduleStore";

export default {
  name: "Calculator",
  data () {
    return {
      form: {
        nominalValue:0,
        commercialValue:0,
        numberOfYears:0,
        couponFrequency: {state: '', abbr: ''},
        couponFrequencyItems: [
          {state: 'Diaria', abbr: '1 día'},
          {state: 'Mensual', abbr: '30 días'},
          {state: 'Bimestral', abbr: '60 días'},
          {state: 'Trimestral', abbr: '90 días'},
          {state: 'Semestral', abbr: '180 días'},
          {state: 'Anual', abbr: '360 días'},
        ],

        daysforYears:0,

        interestRateType:{state: '', abbr:''},
        interestRateTypeItems: [
          {state: 'Nominal', abbr: 'n'},
          {state: 'Efectiva', abbr: 'e'},
        ],

        capitalization:{state: '', abbr:''},
        capitalizationItems: [
          {state: 'Diaria', abbr: '1 días'},
          {state: 'Mensual', abbr: '30 días'},
          {state: 'Bimestral', abbr: '60 días'},
          {state: 'Trimestral', abbr: '90 días'},
          {state: 'Semestral', abbr: '180 días'},
          {state: 'Anual', abbr: '360 días'},
        ],
        interestRate:0,
        annualDiscountRate:0,
        incomeTax:0,
        issueDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        issueDateMenu: false,

        //Datos de los costes
        premium:0,
        structuring:0,
        collocation:0,
        floatation:0,
        cavali:0
      },
      scheduleStore: useScheduleStore()
    }
  },
}
</script>
<style>

</style>