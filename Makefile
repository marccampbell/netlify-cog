build:
	mkdir -p lib
	./node_modules/.bin/tsc

test:
	yarn test

list:
	./bin/list

describe:
	./bin/describe

sites:
	./bin/sites

docker:
	docker build -t marc/netlify-cog .

deploy:
	docker push marc/netlify-cog