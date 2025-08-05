import 'aframe';
import 'ar.js';

const App = () => {
    return (
        <div className={'w-full h-screen'}>

            <a-scene embedded arjs="debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 4x4;">
                <a-marker preset="hiro">
                    <a-entity gltf-model="/pojarni123.glb" position="-0.75 0.5 -2"></a-entity>
                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>
        </div>
    );
};

export default App;