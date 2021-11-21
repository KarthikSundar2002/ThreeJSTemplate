import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';
async function loadModels() {
    const loader = new GLTFLoader();

    const ModelData = await loader.loadAsync('leather.gltf');

    console.log("Model", ModelData);

    const model = setupModel(ModelData);

    return { model };
}

export { loadModels };
