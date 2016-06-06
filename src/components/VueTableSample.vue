<template>
	<div id="table-section">
        <vuetable
            api-url="http://localhost:8080/src/store/users.json"
            wrapper-class="vuetable-wrapper ui basic segment"
            table-wrapper=".vuetable-wrapper"
            :fields="columns"
            :item-actions="itemActions"
        ></vuetable>
    </div>
</template>

<script>
	import Vue from 'vue'
    import Vuetable from './../../src/components/Vuetable.vue'

	var tableColumns = [
        {
          name: 'name',
          title: 'Full Name',
          sortField: 'name'
        },
        {
            name: 'email',
            sortField: 'email',
            visible: false
        },
        {
            name: 'nickname',
            sortField: 'nickname',
            callback: 'allCap'
        },
        {
            name: 'birthdate',
            sortField: 'birthdate',
            callback: 'formatDate|D/MM/Y'
        },
        {
            name: 'gender',
            sortField: 'gender',
            titleClass: 'center aligned',
            dataClass: 'center aligned',
            callback: 'gender'
        },
        {
            name: '__actions',
            dataClass: 'center aligned',
        }
    ];

    var itemActions = [
		                { name: 'view-item', label: '', icon: 'zoom icon', class: 'ui teal button' },
		                { name: 'edit-item', label: '', icon: 'edit icon', class: 'ui orange button'},
		                { name: 'delete-item', label: '', icon: 'delete icon', class: 'ui red button' }
		              ];


	var obj = new Vue({
                            el: '#app',
                            data: {
                                columns: tableColumns,
                                itemActions: itemActions
                            },
                            ready: function() {
                                // Vue.log(this.columns, this);
                                console.log(this.columns);
                                console.log(this.fields);
                                console.log(this.itemActions);
                                console.log(tableColumns);
                            }
                        });
		
    export default {
        data: function() {
            return obj
        }
    }
</script>