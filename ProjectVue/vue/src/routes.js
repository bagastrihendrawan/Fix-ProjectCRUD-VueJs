import Home from "./page/Home.vue"; 
import AddForm from "./page/AddForm.vue";
import Succes from "./page/Succes.vue";
import UpdateStudent from './page/UpdateStudent';
export default [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/add",
        component: AddForm
    },
    {
        path: "/succes",
        component: Succes
    },
    {
        path: "/update/:id",
        component: UpdateStudent,
        name: "botekuat"
    }
   
]