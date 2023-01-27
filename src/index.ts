import { join } from 'path';

import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-node';
import IJS from 'image-js';

import { BlazeFaceModel as BlazeFace } from './blazeface/face';

async function run() {
  let rawImage = await IJS.load(join(__dirname, '../test4.jpg'));

  // needs exactly that size (which alters the image asp ratio)
  rawImage = rawImage.resize({ width: 128, height: 128 });
  const pretrainedNN = tf.loadGraphModel(
    `file://${join(__dirname, '../', 'hub-models/model.json')}`,
  );
  const model = new BlazeFace(
    await pretrainedNN,
    rawImage.width,
    rawImage.height,
    5,
    0.3,
    0.3,
  );

  const returnTensors = false;
  const predictions = await model.estimateFaces(
    rawImage.getCanvas(),
    returnTensors,
  );

  console.log(predictions);
}

run().catch((e) => console.error(e));
