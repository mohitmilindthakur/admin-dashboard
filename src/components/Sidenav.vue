<template>
    <div class="sidenav">
        <span class="sidenav__header">Admin Panel</span>
        <nav class="sidenav__navigation">
            <div class="sidenav__links">
                <Icon class="sidenav__link-icon" type = "home" theme = "filled"/>
                <span class="sidenav__link-text">Home</span>
            </div>
        </nav>
    </div>
</template>

<script>
    import {Icon} from 'ant-design-vue'
    export default {
        components: {
            Icon
        },
        name: "Sidenav",   
    }

</script>

<style lang="scss" scoped>
    @import "./../assets/sass/_variables.scss";
    .sidenav {
        height: 100vh;
        background-color: #f5f5f5;
        width: 20%;

        &__header {
            height: 7%;
            box-shadow: $box-shadow-light;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $color-primary;
            font-size: 2rem;
        }

        &__navigation {
            height: 93%;
            padding-top: 2rem;
        }

        &__links {
            padding: 1rem;
            display: flex;
            align-items: center;

            &:hover {
                background-color: #f1f1f1;
                cursor: pointer;
            }
        }

        &__link {

            &-icon {
                font-size: 2rem;
                color: $color-primary;
            }

            &-text {
                font-size: 2rem;
                color: $color-primary;
                padding-left: 2rem;
            }
        }
    }
</style>