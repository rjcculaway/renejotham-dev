<script>
	import Navigation from 'components/Navigation.svelte';

	import '../app.css';

	import { Canvas, InteractiveObject, OrbitControls, T } from '@threlte/core';
	import { spring } from 'svelte/motion';
	import { degToRad } from 'three/src/math/MathUtils';

	const scale = spring(1);
</script>

<div class="container mx-auto h-full">
	<Navigation />
	<slot />
</div>
<div class="fixed left-0 top-0 -z-50 h-full w-full">
	<Canvas>
		<T.PerspectiveCamera
			makeDefault
			position={[10, 10, 10]}
			fov={25}
			aspect={2}
			near={0.1}
			far={100}
		/>

		<T.DirectionalLight castShadow position={[3, 10, 10]} />
		<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
		<T.AmbientLight intensity={0.2} />

		<!-- Cube -->
		<T.Group scale={1}>
			<T.Mesh position.y={0.5} castShadow let:ref>
				<T.BoxGeometry />
				<T.MeshStandardMaterial color="#333333" />
			</T.Mesh>
		</T.Group>

		<!-- Floor -->
		<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
			<T.CircleGeometry args={[3, 72]} />
			<T.MeshStandardMaterial color="black" />
		</T.Mesh>
	</Canvas>
</div>
