default: build-dev start

build:
	npm run build

build-dev:
	npm run build:dev

start:
	node app.js

watch:
	npm run watch

test:
	npm test

clean:
	rm -rf node_modules dist

.PHONY: build test
