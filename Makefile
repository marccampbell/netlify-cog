build:
	mkdir -p lib
	./node_modules/.bin/tsc

list:
	./bin/list

describe:
	./bin/describe

docker:
	docker build -t marc/netlify-cog .

deploy:
	docker push marc/netlify-cog