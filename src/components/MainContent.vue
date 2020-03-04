<template>
    <div class="main-content">
        <Header @onSidenavToggle = "toggleSidenav" />
        <component class = "currentPage" :is = "selectedPage" />
    </div>
</template>

<script>
import Header from './../components/Header';
import AdminPanelPage from './../pages/AdminPanel.page';

export default {
    name: "MainContent",
    data: () => ({
        selectedPage: AdminPanelPage 
    }),
    components: {
        Header,
        AdminPanelPage
    },
    methods: {
        toggleSidenav: function () {
            this.$emit('onSidenavToggle');
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        height: 7%;
    }
    .currentPage {
        height: 93%;

        @media screen and (max-width: 1000px) {
            height: auto;
        }
        padding: 0 1%;
    }
</style>