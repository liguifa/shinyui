<template>
    <div class='sui-avatar' v-on:click='click'>
                    <img class='sui-avatar-image' :src='src' />
                    <div v-if='number>0' class='sui-avatar-number'>{{number}}</div>
                  </div>
</template>

<script>
    export default {
        name:"avatar",
        props:{
            src:String,
            number:Number
        },
        data(){
            return {

            }
        },
        methods:{
            click(){

            }
        }
    }
</script>

<style>
    .sui-avatar{
        width: 50px;
        height: 50px;
        cursor: pointer;
    }

    .sui-avatar-image{
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    .sui-avatar-number{
        background: #f04134;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        font-size: 12px;
        color: #fff;
        line-height: 20px;
        text-align: center;
        position: relative;
        float: right;
        right: 0px;
        top:-60px;
    }
</style>