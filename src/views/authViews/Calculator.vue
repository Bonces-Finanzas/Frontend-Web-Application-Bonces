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
            <h2 class="text-center mb-10"><span>Datos del Bono</span></h2>

           <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Método de amortization</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-select
                    v-model="form.scheduleData.methodType"
                    :items="form.items.amortizationMethods"
                    persistent-hint
                    color="accent"
                    background-color="blue-grey lighten-5"
                    solo
                    :rules=[rules.required]
                ></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Tipo de moneda</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-select
                    v-model="form.scheduleData.currencyType"
                    :items="form.items.currencyTypeItems"
                    persistent-hint
                    color="accent"
                    background-color="blue-grey lighten-5"
                    solo
                    :rules=[rules.required]
                ></v-select>
              </v-col>
            </v-row>
            
            
            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Valor Nominal</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                    v-model="form.scheduleData.boundData.nominalValue"
                    color="accent"
                    background-color="blue-grey lighten-5"
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
                    background-color="blue-grey lighten-5"
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
                    background-color="blue-grey lighten-5"
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
                    color="accent"
                    background-color="blue-grey lighten-5"
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
                    background-color="blue-grey lighten-5"
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
                    color="accent"
                    background-color="blue-grey lighten-5"
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
                    color="accent"
                    background-color="blue-grey lighten-5"
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
                    suffix="%"
                    color="accent"
                    background-color="blue-grey lighten-5"
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
                    suffix="%"
                    color="accent"
                    background-color="blue-grey lighten-5"
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
                    suffix="%"
                    color="accent"
                    background-color="blue-grey lighten-5"
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
                        color="accent"
                        background-color="blue-grey lighten-5"
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

            <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Periodo de gracia</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                    v-model="form.scheduleData.boundData.gracePeriod"
                    suffix="%"
                    color="accent"
                    background-color="blue-grey lighten-5"
                    solo
                    :rules="[rules.required,rules.isInteger]"
                ></v-text-field>
              </v-col>
            </v-row>

             <v-row>
              <v-col cols="4">
                <v-subheader class="font-weight-medium">Tipo de periodo de gracias</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-select
                    v-model="form.scheduleData.boundData.typeOfGracePeriod"
                    :items="form.items.typeOfGracePeriodItems"
                    persistent-hint
                    color="accent"
                    background-color="blue-grey lighten-5"
                    solo
                    :rules=[rules.required]
                ></v-select>
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
                    suffix="%"
                    color="accent"
                    background-color="blue-grey lighten-5"
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
                    suffix="%"
                    color="accent"
                    background-color="blue-grey lighten-5"
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
                    background-color="blue-grey lighten-5"
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
                    background-color="blue-grey lighten-5"
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
                    background-color="blue-grey lighten-5"
                    suffix="%"
                    solo
                    :rules="[rules.required,rules.isPositive]"
                ></v-text-field>
              </v-col>
            </v-row>

          </v-col>
        </v-row>
        <v-btn
            v-if="!scheduleStore.loading"
            color="secondary"
            class="py-5 mb-5"
            block
            align="center"
            x-large
            @click="onSubmit"
            :style="{left: '50%', transform:'translateX(-50%)'}"
                 >
          Calcular
        </v-btn>
         <div
          v-else
          class="flex d-flex"
      >
        <v-progress-circular
            indeterminate
            color="primary"
            class="mx-auto mb-5"
        ></v-progress-circular>
      </div>
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
    <v-container
     v-if="showResults"
    >
      <v-container>
        <h1>Resultados</h1>
        <br>
        <v-row>
          <v-col class="col-12 col-sm-8 col-md-5 mx-auto flex">
            <div>
              <h2>Resultados de la Estructuración<br>del bono</h2>
              <br>
              <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">Frecuencia del Cupon</v-subheader>
                    </v-col>
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="results.structuringResults.couponFrequencyDays"
                      ></v-text-field>
                    </v-col>
              </v-row>
    
              <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">Dias Capitalización</v-subheader>
                    </v-col>
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="results.structuringResults.capitalizationDays"
                      ></v-text-field>
                    </v-col>
              </v-row>
    
              <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">Nº Periodos por año</v-subheader>
                    </v-col>
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="results.structuringResults.periodsPerYear"
                      ></v-text-field>
                    </v-col>
              </v-row>
    
              <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">Nº Total de Periodos</v-subheader>
                    </v-col>
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="results.structuringResults.totalNumberOfPeriods"
                      ></v-text-field>
                    </v-col>
              </v-row>
              
              <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">Tasa Efectiva Anual</v-subheader>
                    </v-col>
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="toCorrectPercentDecimal(results.structuringResults.effectiveAnnualRate)"
                      ></v-text-field>
                    </v-col>
              </v-row>
    
              <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">Tasa Efectiva Semestral</v-subheader>
                    </v-col>
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="toCorrectPercentDecimal(results.structuringResults.effectiveRate)"
                      ></v-text-field>
                    </v-col>
              </v-row>
    
               <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">COK Semestral</v-subheader>
                    </v-col>
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="toCorrectPercentDecimal(results.structuringResults.cok)"
                      ></v-text-field>
                    </v-col>
              </v-row>
    
              <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">Costes Iniciales Emisor</v-subheader>
                    </v-col>
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="toCorrectValueDecimal(results.structuringResults.initialCostsEmitter)"
                      ></v-text-field>
                    </v-col>
              </v-row>
    
                <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">Costes Iniciales Bonista</v-subheader>
                    </v-col>
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="toCorrectValueDecimal(results.structuringResults.initialCostsBondholder)"
                      ></v-text-field>
                    </v-col>
              </v-row>
            </div> 
  
            <div>
              <h2>Resultados del precio actual y<br>utilidad</h2>
              <br>
              <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">Precio Actual</v-subheader>
                    </v-col>
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="toCorrectValueDecimal(results.resultsOfCurrentPriceAndProfit.currentPrice)"
                      ></v-text-field>
                    </v-col>
              </v-row>
    
              <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">Utilidad/Pérdida</v-subheader>
                    </v-col>
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="toCorrectValueDecimal(results.resultsOfCurrentPriceAndProfit.lostProfit)"
                      ></v-text-field>
                    </v-col>
              </v-row>
            </div>
  
          </v-col>
          <v-col class="col-12 col-sm-8 col-md-5 mx-auto flex">
            <div>
              <h2>Resultados  de ratios de desición</h2>
              <br>
              <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">Duración</v-subheader>
                    </v-col>
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                           :value="toCorrectValueDecimal(results.resultsOfDecisionRatio.duration)"
                      ></v-text-field>
                    </v-col>
              </v-row>
  
              <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">Convexidad</v-subheader>
                    </v-col>
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="toCorrectValueDecimal(results.resultsOfDecisionRatio.convexity)"
                      ></v-text-field>
                    </v-col>
              </v-row>
              <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">Total</v-subheader>
                    </v-col>
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="toCorrectValueDecimal(results.resultsOfDecisionRatio.total)"
                      ></v-text-field>
                    </v-col>
              </v-row>
     
              <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">Duración Modificada</v-subheader>
                    </v-col>
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="toCorrectValueDecimal(results.resultsOfDecisionRatio.modifiedDuration)"
                      ></v-text-field>
                    </v-col>
              </v-row>
            </div> 
  
            <div>
              <h2>Resultados  de los indicadores de rentabilidad</h2>
              <br>
              <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">TCEA Emisor</v-subheader>
                    </v-col>
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="toCorrectPercentDecimal(results.profitabilityResults.emitterTcea)"
                      ></v-text-field>
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                           :value="toCorrectPercentDecimal(results.profitabilityResults.emitterTirTcea)"
                      ></v-text-field>
                    </v-col>
              </v-row>
  
              <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">TCEA Emisor c/Escudo</v-subheader>
                    </v-col>
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="toCorrectPercentDecimal(results.profitabilityResults.emitterTceaWithShield)"
                      ></v-text-field>
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="toCorrectPercentDecimal(results.profitabilityResults.emitterTirTceaWithShield)"
                      ></v-text-field>
                    </v-col>
              </v-row>
  
              <v-row>
                    <v-col class="col-5 col-sm-4 pa-0">
                      <v-subheader class="font-weight-medium">TREA Bonista</v-subheader>
                    </v-col>
  
                    <v-col class="col-7 col-sm-8  pa-0">
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                          :value="toCorrectPercentDecimal(results.profitabilityResults.bondHolderTrea)"
                      ></v-text-field>
                      <v-text-field
                          background-color="blue-grey lighten-5"
                          color="accent"
                          solo
                          readonly
                           :value="toCorrectPercentDecimal(results.profitabilityResults.bondholderTirTrea)"
                      ></v-text-field>
                    </v-col>       
              </v-row>
            </div> 
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-card>
          <v-card-title>
            Cronograma
            <v-spacer></v-spacer>
            <v-text-field
              v-model="quotasData.search"
              append-icon="mdi-magnify"
              label="Buscar"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="quotasData.headers"
            :items="quotasData.quotas"
            :search="quotasData.search"
            :sort-by.sync="quotasData.sortBy"
            :sort-desc.sync="quotasData.sortDesc"
          ></v-data-table>
        </v-card>
      </v-container>

    </v-container>
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
            methodType:'',
            currencyType:'',
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
            typeOfGracePeriod: '',
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
          amortizationMethods: [
             'Americano',
             'Alemán',
             'Francés',
          ],
           currencyTypeItems: [
             'PEN',
             'EUR',
             'USD'
          ],
          interestRateTypeItems: [
             'Efectiva',
             'Nominal'
          ],
          couponFrequencyItems: [
            'Mensual',
            'Bimestral',
            'Trimestral',
            'Cuatrimestral',
            'Semestral',
            'Anual'
          ],
          capitalizationItems: [
            'Diario',  
            'Quincenal',
            'Mensual',
            'Bimestral',
            'Trimestral',
            'Cuatrimestral',
            'Semestral',
            'Anual'
          ],
          typeOfGracePeriodItems:[
            'S',
            'T',
            'P'
          ]
        },
        isValid: false,
        issueDateMenu: false,
      },
     
      results:{
        resultsOfCurrentPriceAndProfit : Object,
        resultsOfDecisionRatio : Object,
        profitabilityResults : Object,
        structuringResults : Object,
        quotas : Object
      },
      quotasData :{
          search: '',
          sortBy: 'numberOfQuota',
          sortDesc: false,
          headers: [
            {
              text: 'Nº',
              value: 'numberOfQuota',
            },
            { text: 'Fecha Programada', value: 'scheduledDate' },
            { text: 'Inflación Anual', value: 0 },
            { text: 'Inflacion Semestral', value: 0 },
            { text: 'Plazo de Gracia', value: 'typeOfGracePeriod' },
            { text: 'Bono', value: 'bond' },
            { text: 'Bono Indexado', value: 'indexedBond' },
            { text: 'Cupón(Interes)', value: 'coupon' },
            { text: 'Cuota', value: 'quota' },
            { text: 'Amort.', value: 'amortization' },
            { text: 'Prima', value: 'premium' },
            { text: 'Escudo', value: 'shield' },
            { text: 'Flujo emisor.', value: 'emitterStream' },
            { text: 'Flujo emisor c/escudo', value: 'emitterFlowWithShield' },
            { text: 'Flujo Bonista', value: 'boundHolderFlow' },
            { text: 'Flujo Act.', value: 'currentFlow' },
            { text: 'FA x Plazo.', value: 'currentFlowPerPeriod' },
            { text: 'FA x Factor p/Plazo convexidad', value: 'convexityFactor' },
        ],
        quotas:[]
      },

      rules:{
        required: v => !!v || 'Requerido',
        isInt: v => Number.isInteger(Number(v)) || 'Entero requerido',
        isPositive:v => Number(v) > 0 || 'Número positivo requerido',
      },
      showResults: false,
      timeout: 3000,
      userId: 0,
      scheduleCurrentData : Object,
      scheduleStore: useScheduleStore(),
      authStore: useAuthStore()
    }
  },
  methods: {
    formatDate(date) {
      const fDate = new Date(date);
      return `${fDate.getDay()}/${fDate.getMonth()}/${fDate.getFullYear()}`;
    },
     getMethodType(method){
      switch(method){
        case "Americano":
         return "AMERICAN";
        case "Francés":
         return "FRENCH";
        case "Alemán":
          return "GERMAN"
      }
      
     },
     getInterestRateType(interestRateType){
       switch(interestRateType){
        case "Efectiva":
          return "EFFECTIVE";
        case "Nominal":
          return "NOMINAL";
        default:
          return "Null";  
       }
     },
     getCouponFrequency(couponFrequency) {
      switch (couponFrequency) {
        case "Mensual":
          return "MONTHLY";
        case "Bimestral":
          return "BIMONTHLY";
        case "Trimestral":
          return "QUARTERLY";
        case "Cuatrimestral":
          return "FOURMONTHLY";
        case "Semestral":
          return "SIXMONTHLY";
        case "Anual":
          return "ANNUAL";
        default:
          return "Null";
      }
    },
    getCapitalization(capitalization) {
      switch (capitalization) {
        case "Diario":Diario
          return "DAILY";
        case "Quincenal":
          return "BIWEEKLY";
        case "Mensual":
          return "MONTHLY";
        case "Bimestral":
          return "BIMONTHLY";
        case "Trimestral":
          return "QUARTERLY";
        case "Cuatrimestral":
          return "FOURMONTHLY";
        case "Semestral":
          return "SIXMONTHLY";
        case "Anual":
          return "ANNUAL";
        default:
          return "Null";
      }
    },
    retrieveData(){
         const dataRetrieve = {
              methodType :this.getMethodType(this.form.scheduleData.methodType),
              currencyType : this.form.scheduleData.currencyType,
              createBoundDataResource : {
              nominalValue : parseFloat(this.form.scheduleData.boundData.nominalValue),
              commercialValue : parseFloat(this.form.scheduleData.boundData.commercialValue),
              years : parseInt(this.form.scheduleData.boundData.years),
              couponFrequency: this.getCouponFrequency(this.form.scheduleData.boundData.couponFrequency),
              daysYear : parseInt(this.form.scheduleData.boundData.daysYear),
              typeInterestRate :this.getInterestRateType(this.form.scheduleData.boundData.typeInterestRate),
              capitalization :this.getCapitalization(this.form.scheduleData.boundData.capitalization),
              interestRate : (parseFloat(this.form.scheduleData.boundData.interestRate)/100),
              annualDiscountRate : (parseFloat(this.form.scheduleData.boundData.annualDiscountRate)/100),
              incomeTax : (parseFloat(this.form.scheduleData.boundData.incomeTax))/100,
              issue : this.form.scheduleData.boundData.issue,
              gracePeriod : parseFloat(this.form.scheduleData.boundData.gracePeriod),
              typeOfGracePeriod : this.form.scheduleData.boundData.typeOfGracePeriod,
            },
            createInitialCostDataResource : {
              premium : (parseFloat(this.form.scheduleData.initialCostData.premium)/100),
              structuring : (parseFloat(this.form.scheduleData.initialCostData.structuring)/100),
              collocation : (parseFloat(this.form.scheduleData.initialCostData.collocation)/100),
              floatation : (parseFloat(this.form.scheduleData.initialCostData.floatation)/100),
              cavali : (parseFloat(this.form.scheduleData.initialCostData.cavali)/100),
            }
         
      }
      return dataRetrieve
    },
    
    async onSubmit() {
       if(this.$refs.form.validate()){
          const data = this.retrieveData()
          this.userId = this.authStore.user.id;
          console.log(data);
         if(this.scheduleCurrentData.hasOwnProperty('id')){
          //Actualizar Schedule
         }
         else  await this.scheduleStore.createSchedule(this.userId, data).
          then(()=>{
            this.updateShowResultsData();
            this.showResults=true;
          })
       }
       else this.scheduleStore.error = true
    },
    initForm() {
            if(this.scheduleCurrentData.hasOwnProperty('id')){    
               this.form.scheduleData.boundData.nominalValue = this.scheduleCurrentData.boundData.nominalValue,
               this.form.scheduleData.boundData.commercialValue = this.scheduleCurrentData.boundData.commercialValue,
               this.form.scheduleData.boundData.years = this.scheduleCurrentData.boundData.years,
               this.form.scheduleData.boundData.couponFrequency = this.scheduleCurrentData.boundData.couponFrequency,
               this.form.scheduleData.boundData.daysYear = this.scheduleCurrentData.boundData.daysYear,
               this.form.scheduleData.boundData.typeInterestRate = this.scheduleCurrentData.boundData.typeInterestRate,
               this.form.scheduleData.boundData.capitalization = this.scheduleCurrentData.boundData.capitalization,
               this.form.scheduleData.boundData.interestRate = this.scheduleCurrentData.boundData.interestRate,
               this.form.scheduleData.boundData.annualDiscountRate = this.scheduleCurrentData.boundData.annualDiscountRate,
               this.form.scheduleData.boundData.incomeTax = this.scheduleCurrentData.boundData.incomeTax,
               this.form.scheduleData.boundData.issue = this.scheduleCurrentData.boundData.issue,
               this.form.scheduleData.boundData.gracePeriod = this.scheduleCurrentData.boundData.gracePeriod,
               this.form.scheduleData.boundData.typeOfGracePeriod = this.scheduleCurrentData.boundData.typeOfGracePeriod,
               this.form.scheduleData.initialCostData.premium = this.scheduleCurrentData.initialCostData.premium,
               this.form.scheduleData.initialCostData.structuring = this.scheduleCurrentData.initialCostData.structuring,
               this.form.scheduleData.initialCostData.collocation = this.scheduleCurrentData.initialCostData.collocation,
               this.form.scheduleData.initialCostData.floatation = this.scheduleCurrentData.initialCostData.floatation,
               this.form.scheduleData.initialCostData.cavali= this.scheduleCurrentData.initialCostData.cavali
               this.updateShowResultsData()
            }
            else {
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
    updateShowResultsData(){
    this.scheduleCurrentData = this.scheduleStore.schedule;
    console.log(this.scheduleCurrentData)
    this.results.resultsOfCurrentPriceAndProfit = (this.scheduleCurrentData.resultsOfCurrentPriceAndProfit);
    this.results.resultsOfDecisionRatio = this.scheduleCurrentData.resultsOfDecisionRatio;
    this.results.profitabilityResults = this.scheduleCurrentData.profitabilityResults;
    this.results.structuringResults = this.scheduleCurrentData.structuringResults;
    this.quotasData.quotas = this.scheduleCurrentData.quotas;
    this.quotasData.quotas = this.quotasData.quotas.map((_quota)=>{
      var newQuota = {
          numberOfQuota: _quota.numberOfQuota,
          scheduledDate:_quota.scheduledDate,
          typeOfGracePeriod: _quota.typeOfGracePeriod,
          bond : this.toCorrectValueDecimal(_quota.bond),
          indexedBond: this.toCorrectValueDecimal(_quota.indexedBond),
          coupon : this.toCorrectValueDecimal(_quota.coupon),
          quota : this.toCorrectValueDecimal(_quota.quota),
          amortization : this.toCorrectValueDecimal(_quota.amortization) ,
          premium : this.toCorrectPercentDecimal(_quota.premium),
          shield : this.toCorrectValueDecimal(_quota.shield),
          emitterStream : this.toCorrectValueDecimal(_quota.emitterStream),
          emitterFlowWithShield : this.toCorrectValueDecimal(_quota.emitterFlowWithShield),
          boundHolderFlow :this.toCorrectValueDecimal(_quota.boundHolderFlow),
          currentFlow : this.toCorrectValueDecimal(_quota.currentFlow),
          currentFlowPerPeriod :this.toCorrectValueDecimal(_quota.currentFlowPerPeriod),
          convexityFactor :this.toCorrectValueDecimal(_quota.convexityFactor)    
      }
      return newQuota
    })
    console.log(this.results)
    },
    toCorrectValueDecimal(n){
      return parseFloat(n).toFixed(2);
    },
    toCorrectPercentDecimal(n){
      return (parseFloat(n)*100).toFixed(7);
    }
  },
 
  mounted() {
      this.scheduleCurrentData=this.scheduleStore.schedule
      this.initForm();
      console.log(this.scheduleCurrentData)
  }
}
</script>
<style>
 h2 {
   text-align:center;
   background-color: #A5EBE9;
   padding: 4% 10%;
   margin: 5% 0%;
   
 }
</style>