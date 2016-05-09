<template>
	<div id="table-section">
        <vuetable
            api-url="http://localhost:8080/src/store/users.json"
            :fields="columns"
        ></vuetable>
    </div>
</template>

<script>
	import Vue from 'vue'

	export default {
		data: function() {
			return new Vue({
					        el: '#app',
					        columns: [
					            'firstname',
					            'lastname',
					            'nickname',
					            'birthdate',
					            'group.name_en',
					            'gender',
					            'last_login',
					            '__actions'
					        ]
					    });
		}
	}
    
</script>