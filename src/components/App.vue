<template>
	<div class="container">
	    <div class="nav">
	      <!-- use v-link directive for navigation. -->
	      <a v-link="{ path: '/dashboard' }">Dashboard</a>
	      <a v-link="{ path: '/foo' }">Go to Foo</a>
	      <a v-link="{ path: '/bar' }">Go to Bar</a>
	    </div>
	    <!-- use router-view element as route outlet -->
	    <router-view class="content"></router-view>
	  </div>
</template>