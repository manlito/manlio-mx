import SuperpixelMeshModule from './SuperpixelMeshModule.js';
import SuperpixelMeshModuleWASM from './SuperpixelMeshModule.wasm';

const imageRGBAToGray = (rgbaArray, width, height) => {
  const grayArray = new Uint8Array(width * height);
  for (let i = 0; i < rgbaArray.length; i += 4) {
    grayArray[i / 4] = Math.ceil(Math.max(0, Math.min(255,
      0.299 * rgbaArray[i + 0] +
      0.587 * rgbaArray[i + 1] +
      0.114 * rgbaArray[i + 2])));
  }
  return grayArray;
}

/**
 * Converts a mesh into Object, so that caller of worker does not
 * need to know about this WASM module
 * @param {Mesh} mesh instance coming from WASM
 */
const exportMesh = (mesh) => {
  const exportedMesh = {
    vertices: [],
    faces: []
  };
  const numFaces = mesh.GetFacesCount();
  for (let i = 0; i < numFaces; i++) {
    const face = mesh.GetFaceAt(i);
    exportedMesh.faces.push([face.tl, face.tr, face.br, face.bl]);
  }
  const numVertices = mesh.GetVerticesCount();
  for (let i = 0; i < numVertices; i++) {
    const vertex = mesh.GetVertexAt(i);
    exportedMesh.vertices.push({ x: vertex.x, y: vertex.y });
  }
  return exportedMesh;
}

self.addEventListener('message', (event) => {
  console.log('Worker starting superpixel mesh');

  const { rgbaArray, width, height, options } = event.data;
  const imageData = imageRGBAToGray(rgbaArray, width, height);
  console.log(options)

  SuperpixelMeshModule({
    locateFile(path) {
      if (path.endsWith('.wasm')) {
        return SuperpixelMeshModuleWASM;
      }
      return path;
    }
  }).then(module => {
    // Allocate and preprocess image
    let image = new module.Image(width, height, imageData);
    image.Blur(25, 3.0);

    // General meshing options
    const meshingOptions = new module.MeshingOptions();
    meshingOptions.target_area = options.targetSize * options.targetSize;
    meshingOptions.regularization = options.regularization;
    meshingOptions.max_iterations = options.maxIterations;

    // Set progress callback
    const meshingIterationCallback = new module.MeshingIterationCallback();
    const meshingCallback = () => {
      const iterationProgress = meshingIterationCallback.GetIterationProgress();
      postMessage({
        mesh: exportMesh(iterationProgress.mesh),
        iteration: iterationProgress.iteration,
        cost: iterationProgress.cost,
        isFinished: false
      });
    }
    const meshingCallbackPtr = module.addFunction(meshingCallback, 'v')
    meshingIterationCallback.SetCallback(meshingCallbackPtr);

    // Call SuperpixelMesh
    const superpixelMesh = new module.SuperpixelsMesh(image, meshingOptions);
    superpixelMesh.SetIterationCallback(meshingIterationCallback);
    superpixelMesh.SeedSuperpixelsMesh();
    const meshingResult = superpixelMesh.OptimizeSuperpixelsMesh();
    const finalMesh = superpixelMesh.GetMesh();

    postMessage({
      mesh: exportMesh(finalMesh),
      isFinished: true
    });
  });

})
// self.postMessage('from Worker')
