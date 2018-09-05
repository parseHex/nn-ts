# `nn-ts`

A fork of [Daniel Shiffman](https://github.com/shiffman)'s [Toy Neural Network](https://github.com/CodingTrain/Toy-Neural-Network-JS), refactored in Typescript, with some improvements(/bugs) and new goodies as I need them in my own projects.

This is just Typescript, no JS here. I recommend compiling it using [`typescript`](https://www.npmjs.com/package/typescript) if you need a JavaScript build.

## TODO

To be honest I don't know what I'm doing when it comes to actually building NN libraries, so my goal is to improve this library **and** not break it.

- Performance improvements.
	- I'm looking for a matrix library that I can swap in with the least amount of effort.
- Clustering support
	- I think it could be great to be able to train the NN as a cluster of multiple NNs, with 1 master NN (using Web Workers for each "child" NN would allow training to go by a lot faster in parallel).
	- I'll do my best to make sure that the results of the NN when clustering is not changed.

## Original Authors

* **shiffman** - *Initial work* - [shiffman](https://github.com/shiffman)

See also the list of [contributors](https://github.com/CodingTrain/Toy-Neural-Network-JS/contributors) who participated in this project.

## License

This project is licensed under the terms of the MIT license, see LICENSE.
