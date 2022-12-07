<template>
    <div>     
        <Header></Header>
        <CardComp></CardComp>
        <Copyrightt></Copyrightt>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import CardComp from '@/components/CardComp.vue';
import Copyrightt from '@/components/Copyrightt.vue';
export default {
    name: 'VueDetail',
    components: {
        Header,        
        CardComp,
        Copyrightt
    }

};
</script>

<style lang="scss" scoped>

</style>