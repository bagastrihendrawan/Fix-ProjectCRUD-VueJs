<template>
    <div>
        <Header></Header>
        <AddForm></AddForm>
        <Copyrightt></Copyrightt>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import AddForm from '../components/AddForm.vue';
import Copyrightt from '../components/Copyrightt.vue';
export default {
    name: 'ProjectVueAdd',
    components: {
        Header,
        AddForm,
        Copyrightt
    }
};
</script>

<style scoped>

</style>