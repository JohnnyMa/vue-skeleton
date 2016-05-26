<template>
	<div class="container">
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#">Johnny</a>
					<span class="app-name">Sample App</span>
				</div>
				<div class="navbar-collapse collapse" id="bs-example-navbar-collapse-6" aria-expanded="false" style="height: 1px;">
					<ul class="nav navbar-nav">
						<li><a v-link="{ path: '/dashboard' }">Dashboard</a></li>
						<li><a v-link="{ path: '/alert' }">Alert</a></li>
						<li><a v-link="{ path: '/audit' }">Audit</a></li>
						<li><a v-link="{ path: '/todo' }">Todo</a></li>
						<li><a v-link="{ path: '/audit' }">Audit</a></li>
						<li><a v-link="{ path: '/audit' }">Audit</a></li>
						<li><a v-link="{ path: '/audit' }">Audit</a></li>
					</ul>
				</div>
			</div>
		</nav>


	    <!-- use router-view element as route outlet -->
	    <div class="content">
	    	<router-view></router-view>
	    </div>
	  </div>
</template>


<script>
export default {
  ready: function () {
  	//init nav event handler
    $('.navbar-brand').click(function() {
    	$('button.navbar-toggle').click();
    });
    $('.navbar-nav li').click(function() {
    	$('button.navbar-toggle').click();
    });

    return null;
  }
}
</script>

<style lang="stylus">
.navbar-brand {
	background: url('../img/avatar.jpg') no-repeat;
	padding-left: 45px;
    font-size: 14px;
}
.app-name {
	padding: 15px 15px;
    font-size: 18px;
    line-height: 20px;
    height: 50px;
    display: inline-block;
    margin-left: 15px;
}
</style>