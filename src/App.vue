<template>
  <div id="app">
    <Sidenav v-if = "isSidenavVisible"></Sidenav>
    <MainContent @onSidenavToggle = "toggleSidenav"/>
  </div>
</template>

<script>
  import Sidenav from './components/Sidenav';
  import MainContent from './components/MainContent';

  export default {
    data: () => ({
      isSidenavVisible: false,
    }),
    name: 'App',
    components: {
      Sidenav,
      MainContent
    },
    methods: {
      toggleSidenav: function () {
        this.isSidenavVisible = !this.isSidenavVisible;
      }
    }
}
</script>

<style lang = "scss">

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%
  }

  body {
    font-family: 'Oxygen', sans-serif;
  }

  #app {
    height: 100vh;
    max-width: 100vw;
    display: flex;

    @media screen and (max-width: 1000px) {
      height: auto;
      font-size: 56.5%;
    }

    .ant-fullcalendar-fullscreen .ant-fullcalendar-month, .ant-fullcalendar-fullscreen .ant-fullcalendar-date {
      max-height: 75px;
    }

    /* I Know !important should not be used. In this case, the library was not using 100% on styling which 
      was not helping in being responsive and hence I modified to always have 100% and controlling
      the width and height from the outer component
    */
    .chartjs-render-monitor {
      width: 100% !important;
      height: 100% !important;
    }

    .sidenav {
      flex-basis: 15%;
    }

    .main-content {
      flex-basis: 85%;
      flex-grow: 1;
      overflow: auto;
    }
  }
</style>