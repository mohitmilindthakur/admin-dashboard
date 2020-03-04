<template>
    <div class="header">
        <Icon type = "bars" class = "icon" @click = "toggleSidenav"></Icon>
        <HeaderRoutes />
    </div>
</template>

<script>
    import HeaderRoutes from './HeaderRoutes';
    import {Icon} from 'ant-design-vue'
    export default {
        components: {
            HeaderRoutes,
            Icon
        },
        name: 'Header',

        methods: {
            toggleSidenav: function () {
                this.$emit('onSidenavToggle');
            }
        }
    }
</script>

<style lang="scss">
    @import "./../assets/sass/_variables.scss";
    .header {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        padding: 1rem 2rem;
        align-items: center;
        box-shadow: $box-shadow-light;

        .icon {
            color: $color-primary;
            font-size: 2.5rem;
        }
    }
</style>