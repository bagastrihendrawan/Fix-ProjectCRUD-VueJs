<template>
    <div>
        <Header></Header>
        <SuccesForm></SuccesForm>
        <Copyrightt></Copyrightt>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import SuccesForm from '../components/SuccesForm.vue';
import Copyrightt from '../components/Copyrightt.vue';
export default {
    name: 'ProjectVueSucces',
    components: {
        Header,
        SuccesForm,
        Copyrightt
    }
};
</script>

<style lang="scss" scoped>

</style>