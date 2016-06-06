<template>
    <div class="ui vertical stripe segment">
        <div class="ui container">
            <div id="content" class="ui basic segment">
                <h3 class="ui header">List of Users</h3>
                <vuetable
                    api-url="http://localhost:8080/src/store/users.json"
                    pagination-path=""
                    :pagination-component="paginationComponent"
                    wrapper-class="vuetable-wrapper ui basic segment"
                    table-wrapper=".vuetable-wrapper"
                    :fields="columns"
                    :item-actions="itemActions"
                    :sort-order="sortOrder"
                    :per-page="perPage"
                    :append-params="moreParams"
                ></vuetable>
            </div>
        </div>
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
            visible: true
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
                                itemActions: itemActions,
                                searchFor: '',
                                moreParams: [],
                                sortOrder: {
                                    field: 'name',
                                    direction: 'asc',
                                },
                                paginationComponent: 'vuetable-pagination',
                                perPage: 10,
                                paginationInfoTemplate: 'Displaying {from} to {to} of {total} items',
                            },
                            ready: function() {
                                // Vue.log(this.columns, this);
                                console.log(this.columns);
                                console.log(this.fields);
                                console.log(this.itemActions);
                                console.log(tableColumns);
                            },
                            watch: {
                                'perPage': function(val, oldVal) {
                                    this.$broadcast('vuetable:refresh')
                                },
                                'paginationComponent': function(val, oldVal) {
                                    this.$broadcast('vuetable:load-success', this.$refs.vuetable.tablePagination)
                                }
                            },
                            methods: {
                                viewProfile: function(id) {
                                    console.log('view profile with id:', id)
                                },
                                /**
                                * Callback functions
                                */
                                allCap: function(value) {
                                    return value.toUpperCase()
                                },
                                gender: function(value) {
                                    return value == 'M'
                                        ? '<span class="ui teal label"><i class="male icon"></i>Male</span>'
                                        : '<span class="ui pink label"><i class="female icon"></i>Female</span>'
                                },
                                formatDate: function(value, fmt) {
                                    if (value == null) return ''
                                    fmt = (typeof fmt == 'undefined') ? 'D MMM YYYY' : fmt
                                    return moment(value, 'YYYY-MM-DD').format(fmt)
                                },
                                setFilter: function() {
                                    this.moreParams = [
                                        'filter=' + this.searchFor
                                    ]
                                    this.$nextTick(function() {
                                        this.$broadcast('vuetable:refresh')
                                    })
                                },
                                resetFilter: function() {
                                    this.searchFor = ''
                                    this.setFilter()
                                },
                                changePaginationComponent: function() {
                                    this.$broadcast('vuetable:load-success', this.$refs.vuetable.tablePagination)
                                },
                                preg_quote: function( str ) {
                                    // http://kevin.vanzonneveld.net
                                    // +   original by: booeyOH
                                    // +   improved by: Ates Goral (http://magnetiq.com)
                                    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                                    // +   bugfixed by: Onno Marsman
                                    // *     example 1: preg_quote("$40");
                                    // *     returns 1: '\$40'
                                    // *     example 2: preg_quote("*RRRING* Hello?");
                                    // *     returns 2: '\*RRRING\* Hello\?'
                                    // *     example 3: preg_quote("\\.+*?[^]$(){}=!<>|:");
                                    // *     returns 3: '\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:'

                                    return (str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");
                                },
                                highlight: function(needle, haystack) {
                                    return haystack.replace(
                                        new RegExp('(' + this.preg_quote(needle) + ')', 'ig'),
                                        '<span class="highlight">$1</span>'
                                    )
                                }
                            },
                            events: {
                                'vuetable:action': function(action, data) {
                                    console.log('vuetable:action', action, data)
                                    if (action == 'view-item') {
                                        this.viewProfile(data.id)
                                    }
                                },
                                'vuetable:load-error': function(response) {
                                    console.log('Load Error: ', response)
                                }
                            }
                        });
		
    export default {
        data: function() {
            return obj
        }
    }
</script>

<style type="text/css">
        .ui.vertical.stripe h3 {
          font-size: 2em;
        }

        .secondary.pointing.menu .toc.item {
          display: none;
        }

        .vuetable {
            margin-top: 1em !important;
        }
        .vuetable-wrapper.ui.basic.segment {
            padding: 0em;
        }
        .vuetable button.ui.button {
            padding: .5em .5em;
            font-weight: 400;
        }
        .vuetable button.ui.button i.icon {
            margin: 0;
        }
        .vuetable th.sortable:hover {
          color: #2185d0;
          cursor: pointer;
        }
        .vuetable-actions {
          width: 15%;
          padding: 12px 0px;
          text-align: center;
        }
        .vuetable-pagination {
          background: #f9fafb !important;
        }
        .vuetable-pagination-info {
          margin-top: auto;
          margin-bottom: auto;
        }
        [v-cloak] {
            display: none;
        }
        .highlight {
            background-color: yellow;
        }
    </style>
