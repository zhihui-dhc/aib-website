<template>
	<form action="//network.us14.list-manage.com/subscribe/post?u=1b8aeaa81ca615914eb2eb7fc&amp;id=64c73f9f5f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>

		<div class="mc-field-group">
			<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Email Address">
		</div>

		<!--
		<div class="mc-field-group">
			<label for="mce-FNAME">First Name </label>
			<input type="text" value="" name="FNAME" class="" id="mce-FNAME">
		</div>

		<div class="mc-field-group">
			<label for="mce-LNAME">Last Name </label>
			<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
		</div>
		-->

		<div class="mc-field-group">
			<input type="submit" value="Alert Me" name="subscribe" id="mc-embedded-subscribe">
		</div>

		<div id="mce-responses" class="clear">
			<div class="response" id="mce-error-response" style="display:none"></div>
			<div class="response" id="mce-success-response" style="display:none"></div>
		</div>

		<!-- anti-bot signups-->
		<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1b8aeaa81ca615914eb2eb7fc_64c73f9f5f" tabindex="-1" value=""></div>
	</form>
</template>

<script>
</script>


<style lang="stylus" scoped>
@import '../../styles/variables.styl'

form
	display flex
	flex-flow row

	max-width 320px
	margin x auto 0.25*x

	.mc-field-group
		input
			-webkit-appearance none
			background #fff
			border-radius 0
			padding 0 0.5*x
			margin 0
			height 2*x

			df()
			line-height 2*x - 2px
			border 1px solid light

			&[type="email"]
				flex 2
				margin-right 0.5*x

			&[type="submit"]
				flex 1
				padding 0 x
				background mcolor
				color #fff
				border-color mcolor
</style>
