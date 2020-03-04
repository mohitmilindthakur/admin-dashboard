<template>
    <div class="admin-panel">
        <div class="card-list padding-u-2">
            <Card v-for = "product in productData" :key = "product.id" :title = "product.title" :content = "product.content" :logo = "product.logo" />
        </div>
        <div class="admin-panel__content padding-u-2">
            <div class = "admin-panel__chart"><column-chart height = "100%" :data = "chartData" /></div>
            <div class="admin-panel__calendar"><Calendar /></div>
        </div>
    </div>
</template>

<script>
    import Card from './../components/Card';
    import {Calendar} from 'ant-design-vue'

    export default {
        name: "AdminPanelPage",
        data: () => ({
            productData: [
                {
                    id: 1,
                    title: 'OEMS',
                    content: 12,
                    logo: 'trademark'
                },

                {
                    id: 2,
                    title: 'PRODUCT TYPES',
                    content: 6,
                    logo: 'tag'
                },

                {
                    id: 3,
                    title: 'PRODUCTS',
                    content: 742,
                    logo: 'gold'
                },

                {
                    id: 4,
                    title: 'ARCHIVED PRODUCTS',
                    content: 27,
                    logo: 'save'
                }
            ],

            chartData: [
                ['Users', 25],
                ['Inactive-Users', 0],
                ['Manager', 5],
                ['Vendor', 0]
            ]
        }),
        components: {
            Card,
            Calendar
        }    
    }
</script>

<style lang="scss">

    @import "./../assets/sass/_utils.scss";

    .admin-panel {

        &__content {
            max-width: 100%;
            height: 70%;
            display: flex;
            justify-content: space-between;

            & > * {
                flex-basis: 40%;
                height: 100%;
            }

            @media screen and (max-width: 1000px) {
                height: auto;
                flex-wrap: wrap;

                .admin-panel__calendar {
                    height: 35vh;
                }

                .admin-panel__chart {
                    height: 35vh;
                }

                & > * {
                    flex-basis: 100%;
                }
            }
        }

        
    }

    .card-list {
        display: flex;
        justify-content: space-between;
        height: 20%;

        & > * {
            flex-basis: 20%;
        }

        @media screen and (max-width: 1000px){
            flex-wrap: wrap;
        }

        @media screen and (max-width: 650px) {
            height: 30vh;
            width: 100%;     
            display: grid;
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>