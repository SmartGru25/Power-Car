<template>
  <v-app 
    style="background: black"
  >
    <v-app-bar
      app
      hide-on-scroll
      short
      class="bar"
      elevation="0"
      color="rgba(0,0,0,0)"
    >
      <v-img src="./assets/title.png" height="100%" max-width="45vw" contain position="left center"></v-img>
      <v-spacer></v-spacer>

      <unlock-wallet
        v-if="!$store.state.wallet.unlocked"
      />
      <wallet
        v-else
      />
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <snackbar />
    </v-main>
     


  <v-footer app fixed padless class="footer" color="rgba(0,0,0,0)">
    <v-btn class="d-none d-md-flex" icon href="https://twitter.com/PowercNFT" target="_blank">
      <v-icon>mdi-twitter</v-icon> 
    </v-btn>
    <v-btn class="d-none d-md-flex" icon href="https://t.me/powercarNTF" target="_blank">
      <v-icon>mdi-send</v-icon> 
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="90vw"

    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
          icon
        >
          <v-icon>mdi-help-circle</v-icon>
        </v-btn>
      </template>

      <div class="nes-container" style="background: black;">
        <h2>
          Whitepaper
        </h2>
        <p>
          1. 91 were minted (Max 100). <br>
          2. Power: Increase the chances of wining a race. Higher bonus is better. Races take place on Telegram Group<br>
          3. Fee, at the beginning, for selling a car is 5%, it will never be higher, it is written in the smart contract. It can only decrease.<br>
          <a href="https://powercar-legacy.netlify.app/#/"  target="_blank">Legacy WebSite</a><br>
          <a href="https://explorer.callisto.network/address/0xE830AFDAe4Dba5b3b6c6b3506138C373Eb6CE73C/contracts" target="_blank">Contract Code</a>
        </p>

        <v-divider></v-divider>
        <button
          class="nes-btn is-success" 
          @click="dialog = false"
        >
          Let's ride
        </button>
      </div>
    </v-dialog>
    <v-spacer></v-spacer>
      <v-btn
        class="mx-2 my-2 d-none d-md-flex"
        color="grey"
        outlined
        rounded
        small
        @click="$store.dispatch('switchChain')"
      >
        Add Network
      </v-btn>
  </v-footer>
  </v-app>
  
</template>

<script>
  export default {
    name: "PowerCar",
    data () {
      return {
        dialog: false,
      }
    },
    components: {
      'unlock-wallet': require('@/components/Shared/UnlockWallet.vue').default,
      'wallet': require('@/components/Shared/Wallet.vue').default,
      'snackbar': require('@/components/Shared/Snackbar.vue').default,
      },
      created(){
        this.$store.dispatch('getProvider');
      },
      beforeMount(){
        this.$store.commit('getFeeRate');
        this.$store.dispatch('getNetworkId');
      }
  }
</script>

<style>
  * {
    font-family: 'Press Start 2P', cursive;
    font-size: 11px;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 20px;
  }

  .bar{
    background: rgb(255,0,0);
    background: linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(0,0,0,0) 90%);
  }

  .footer{
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 25%, rgba(255,0,0,0) 75%);    
  }

  @import "../node_modules/nes.css/css/nes.css"

</style>