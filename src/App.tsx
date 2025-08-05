import 'aframe';
import 'ar.js';

const App = () => {
    return (
        <div className={'w-full h-screen'}>
{/*@ts-ignore*/}
            <a-scene embedded arjs="debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 4x4;">
{/*@ts-ignore*/}
                <a-marker preset="hiro">
{/*@ts-ignore*/}
                    <a-entity gltf-model="/pojarni123.glb" position="-0.75 0.5 -2"></a-entity>
{/*@ts-ignore*/}
                </a-marker>
{/*@ts-ignore*/}
                <a-entity camera></a-entity>
{/*@ts-ignore*/}
            </a-scene>
        </div>
    );
};

export default App;