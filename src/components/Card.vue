<template>
    <div class="card">
        <div class="card__left">
            <span class="card__title">{{title}}</span>
            <span class="card__content">{{content}}</span>
        </div>
        <div class="card__right">
            <Icon class="card__logo" :type = "logo"></Icon>
        </div>
    </div>
</template>

<script>
    import {Icon} from 'ant-design-vue';
    export default {
        components: {
            Icon
        },
        name: "Card",
        props: ['title', 'content', 'logo']
    }
</script>

<style lang="scss" scoped>
    @import "./../assets/sass/_variables.scss";
    .card {
        padding: 2rem;
        box-shadow: 0 5px 5px 5px rgba(0,0,0,.1);
        border-radius: 1rem;
        display: flex;
        width: 100%;
        justify-content: space-around;

        &__left {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        &__title {
            font-weight: 300;
            font-size: 1.2rem;
        }

        &__content {
            font-weight: 400;
            font-size: 3rem;
        }

        &__title {
            font-weight: 300;
        }

        &__right {
            align-self: center;
        }

        &__logo {
            font-size: 3.9rem;
            color: $color-primary;

            @media screen and (max-width: 1000px){
                font-size: 2.5rem;
            }
        }
    }
</style>