<template>
    <b-jumbotron :header="header" :lead="lead" class="error-jumbotron">
      <p class="text-center">
          <slot>
              {{ $t("errors.jumbotron.default.message") }}
          </slot>
      </p>
      <b-row class="text-center">
        <b-col sm="12" md="6" class="pt-3">
          <b-button 
            size="lg" 
            variant="info" 
            href="tel:+12345678900"
            block
          >
          {{ $t("errors.jumbotron.buttons.phone", { phoneNumber: "1 (234) 567-8900" }) }}
          </b-button>
        </b-col>
        <b-col sm="12" md="6" class="pt-3">
          <b-button 
            size="lg" 
            variant="info" 
            href="mailto:test@example.com"
            block
          >
          {{ $t("errors.jumbotron.buttons.email", { email: "test@example.com" }) }}
          </b-button>
        </b-col>
      </b-row>
    </b-jumbotron>
</template>

<script>
export default {
    name: "ErrorJumbotron",
    props: {
        header: {
            type: String,
            default() {
                return this.$t("errors.jumbotron.default.header");
            }
        },
        lead: {
            type: String,
            default() {
                return this.$t("errors.jumbotron.default.lead");
            }
        }
    }
}
</script>
