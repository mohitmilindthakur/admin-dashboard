<template>
    <div class="header-routes">
        <span class="header-route">Home</span>
        <span class="header-route">Quotes</span>
        <span class="header-route current-route">Admin Panel</span>
        <span class="header-route">John Doe</span>
    </div>    
</template>

<script>
export default {
    name: "HeaderRoutes"
}
</script>

<style lang="scss" scoped>
    @import "./../assets/sass/_variables.scss";
    .header-routes {

        .header-route {
            margin-right: 2rem;
            font-size: 1.5rem;
        }
    }

    .current-route {
        color: $color-primary;
        font-weight: bold;
    }
</style>