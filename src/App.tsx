const App = () => {
    return (
        // @ts-ignore
        <a-scene
            vr-mode-ui="enabled: false;"
            renderer="logarithmicDepthBuffer: true;"
            arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
            embedded
        >
            {/*@ts-ignore*/}
            <a-marker
                type="pattern"
                url={'/marker.patt'}
            >
                {/*@ts-ignore*/}
                <a-entity
                    gltf-model={`url(/pojarni123.glb)`}
                    scale="0.1 0.1 0.1"
                    position="0 0.5 0"
                    rotation="-90 0 0"
                    animation-mixer
                />
                {/*@ts-ignore*/}
            </a-marker>
            {/*@ts-ignore*/}
            <a-entity camera></a-entity>
            {/*@ts-ignore*/}
        </a-scene>
    )
};

export default App;
