# React Challenge

[![Build Status](https://travis-ci.org/adenh93/cgn-challenge.svg?branch=master)](https://travis-ci.org/adenh93/cgn-challenge)

I've created this repository to fulfill the requirements of a React-based challenge.
I've generated the initial boilerplate via the create-react-app utility, using a Typescript template.

### Assumptions

- It can be assumed that the challenge requirements are only a small slice of a much larger, complex application.
- With this in mind, I've utilized Redux + Sagas for state management and handling side-effects.

### Remarks

- I really need to acquire some design/UX training, to stop relying on my poor use of Material UI.
- See above.

### Installation

This application utilizes Docker to build development and production containers.

#### Development

```sh
$ docker build -t challenge:dev .
$ docker run -it -p 3000:3000 challenge:dev
```

#### Production

```sh
$ docker build -t challenge -f Dockerfile.production .
$ docker run -it -p 8080:80 challenge
```
