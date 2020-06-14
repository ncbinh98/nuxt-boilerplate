<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <br>
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          {{ $t("home.title") }}
        </v-card-title>

        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="getTests()">
            Test aPI
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue"
import VuetifyLogo from "~/components/VuetifyLogo.vue"
import { mapGetters } from "vuex"
export default {
  components: {
    Logo,
    VuetifyLogo
  },
  //Helmet
  head() {
    return {
      title: "My helmet title here",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      loading: "getLoading",
      error: "getError"
    })
  },
  methods: {
    getTests() {
      this.$store.dispatch("getTests")
    }
  }
}
</script>
