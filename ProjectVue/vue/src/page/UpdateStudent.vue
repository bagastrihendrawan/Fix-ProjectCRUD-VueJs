<template>
    <div>
        <Header></Header>
        <AddForm></AddForm>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import AddForm from "@/components/AddForm.vue";
export default {
    name: 'ProjectVueUpdateStudent',
    components: {
        Header,
        AddForm,
    },
};
</script>

<style lang="scss" scoped>

</style>