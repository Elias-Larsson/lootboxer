<script lang="ts">
</script>

<svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		d="M21.5 21.5H2.64551C3.78924 11.624 11.624 3.78924 21.5 2.64551V21.5Z"
		fill="#A3B3FF"
		stroke="#615FFF"
		stroke-width="5"
		class="left-lootbox"
	/>
	<path d="M107.5 2.5V21.5H36.5V2.5H107.5Z" fill="#A3B3FF" stroke="#615FFF" stroke-width="5" class="middle-lootbox"/>
	<path
		d="M122.5 2.64551C132.376 3.78924 140.211 11.624 141.354 21.5H122.5V2.64551Z"
		fill="#A3B3FF"
		stroke="#615FFF"
		stroke-width="5"
		class="right-lootbox"
	/>
	<path
		d="M141.5 36.5V120C141.5 131.874 131.874 141.5 120 141.5H24C12.1259 141.5 2.5 131.874 2.5 120V36.5H141.5Z"
		fill="#A3B3FF"
		stroke="#615FFF"
		stroke-width="5"
		class="bottom-lootbox"
	/>
	<path
		d="M51 37H93V68C93 79.598 83.598 89 72 89V89C60.402 89 51 79.598 51 68V37Z"
		stroke="#615FFF"
		stroke-width="6"
	/>
	<path
		d="M72 42C78.0751 42 82.9998 46.925 83 53C83 57.6636 80.0968 61.6466 76 63.2471V76C76 78.2091 74.2091 80 72 80C69.7909 80 68 78.2091 68 76V63.2461C63.9034 61.6455 61 57.6634 61 53C61.0002 46.925 65.925 42.0001 72 42Z"
		fill="#615FFF"
	/>
</svg>

<style>
	@keyframes fallLeft {
	0% { transform: translate(0px, 0px); visibility: visible; }
	100% { transform: translate(-200px, 1000px);  visibility: visible; }
	}

	@keyframes fallRight {
		0% { transform: translate(0px, 0px); visibility: visible; }
		100% { transform: translate(200px, 1000px);  visibility: visible; }
	}	

	@keyframes fallMiddle {
		0% { transform: translate(0px, 0px); visibility: visible; }
		100% { transform: translate(0px, 1000px);  visibility: visible; }
	}

	svg {
		overflow: visible;
	}
	svg * {
		position: absolute;
		display: flex;

	}
	.left-lootbox {
		animation: fallLeft 1500ms ease-in;
		animation-delay: 300ms;
	}
	.middle-lootbox {
		animation: fallMiddle 1500ms ease-in;
		animation-delay: 300ms;

	}
	.right-lootbox {
		animation: fallRight 1500ms ease-in;
		animation-delay: 300ms;
	}
	.bottom-lootbox {
		position: relative;
	}
</style>
