const tf = require("@tensorflow/tfjs-node");

async function loadModel() {
  try {
    // Use the model URL from environment variables if provided
    const modelUrl = process.env.MODEL_URL;

    // Load the model
    const model = await tf.loadGraphModel(modelUrl);

    console.log("Model loaded successfully.");
    return model;
  } catch (error) {
    console.error("Error loading model:", error);
    throw new Error("Failed to load the model.");
  }
}
module.exports = loadModel;
