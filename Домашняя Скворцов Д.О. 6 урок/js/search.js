
Vue.component('searchform', {
    props: ['searchValue'],
    template: `
        <form action="#" class="search-form" @submit.prevent="$emit('filter')">
            <input type="text" class="search-field" v-bind:value="searchValue" v-on:input="$emit('input', $event.target.value)">
                <button class="btn-search" type="submit" >
                    <i class="fas fa-search"></i>
                </button>
        </form>  
        `
});
