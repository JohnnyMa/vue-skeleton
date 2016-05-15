<template>
	<div class="container">
	    <div class="nav">
	      <!-- use v-link directive for navigation. -->
	      <a v-link="{ path: '/hello' }">Hello</a>
	      <a v-link="{ path: '/grid' }">Grid</a>
	      <a v-link="{ path: '/dashboard' }">Dashboard</a>
	      <a v-link="{ path: '/foo' }">Go to Foo</a>
	      <a v-link="{ path: '/bar' }">Go to Bar</a>
	      <a v-link="{ path: '/bar2' }">Go to Bar2</a>
	      <a v-link="{ path: '/todo' }">Todo sample</a>
	      <!-- <a v-link="{ path: '/vueTable' }">vueTable sample</a> -->
	    </div>
	    <!-- use router-view element as route outlet -->
	    <div class="content">
	    	<router-view></router-view>
	    </div>
	  </div>
</template>