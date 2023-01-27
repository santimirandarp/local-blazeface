# local-blazeface

This is just continuing the Google Project Blazeface [model here](https://tfhub.dev/tensorflow/tfjs-model/blazeface/1/default/1) and [code for face location](https://github.com/tensorflow/tfjs-models/tree/master/blazeface) which was deprecated, but for some small tasks may be all you need.

The idea is for it to run in NodeJS and Browser as well.

## RUN

1. `git clone`
2. `npm i`
3. in the `src/index` add the absolute path to the image
4. run using `ts-node src/index.ts`

## Example

Currently the code runs the `TEST_IMAGE.jpg`

![image](./TEST_IMAGE.jpg)

And detects six faces (one with low confidence):

```
[
  {
    topLeft: [ 42.72835159301758, 21.883153915405273 ],
    bottomRight: [ 82.3387451171875, 61.49302673339844 ],
    landmarks: [ [Array], [Array], [Array], [Array], [Array], [Array] ],
    probability: [ 0.9971631765365601 ]
  },
  {
    topLeft: [ 1.7003669738769531, 20.177637100219727 ],
    bottomRight: [ 40.242950439453125, 58.720008850097656 ],
    landmarks: [ [Array], [Array], [Array], [Array], [Array], [Array] ],
    probability: [ 0.996035099029541 ]
  },
  {
    topLeft: [ 45.27635955810547, 85.84265899658203 ],
    bottomRight: [ 79.8038558959961, 120.37024688720703 ],
    landmarks: [ [Array], [Array], [Array], [Array], [Array], [Array] ],
    probability: [ 0.9888219833374023 ]
  },
  {
    topLeft: [ 88.72583770751953, 20.111013412475586 ],
    bottomRight: [ 120.5309066772461, 51.91657257080078 ],
    landmarks: [ [Array], [Array], [Array], [Array], [Array], [Array] ],
    probability: [ 0.9794632792472839 ]
  },
  {
    topLeft: [ -1.2589588165283203, 80.52241516113281 ],
    bottomRight: [ 40.64569091796875, 122.42802429199219 ],
    landmarks: [ [Array], [Array], [Array], [Array], [Array], [Array] ],
    probability: [ 0.9237962961196899 ]
  },
  {
    topLeft: [ 89.83699798583984, 76.77738952636719 ],
    bottomRight: [ 121.19535064697266, 108.13551330566406 ],
    landmarks: [ [Array], [Array], [Array], [Array], [Array], [Array] ],
    probability: [ 0.354998916387558 ]
  }
]
```

## License

[MIT](./LICENSE)

All the files are kept the original license notice from Google LLC as well as a modification notice, as required by Apache2.0 (compatible with MIT.)
