const App = () => {
    return (
        // @ts-ignore
        <a-scene
            embedded
            arjs="sourceType: webcam; debugUIEnabled: false;"
        >
            {/*@ts-ignore*/}
            <a-marker preset="hiro">
                {/*@ts-ignore*/}
                <a-entity
                    gltf-model="url(/pojarni123.glb)"
                    scale="0.5 0.5 0.5"
                    rotation="0 180 0"
                />
                {/*@ts-ignore*/}
            </a-marker>
            {/*@ts-ignore*/}
            <a-entity camera/>
            {/*@ts-ignore*/}
        </a-scene>
    )
};

export default App;
