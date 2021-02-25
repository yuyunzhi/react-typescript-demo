export PATH := $(shell pwd)/node_modules/.bin:$(PATH)
.PHONY: init dev  build clean lint

# 项目初始化
init:
	# git submodule init
	# git submodule update
	yarn

# 开发模式
dev:init
	yarn run start

# build到online环境
build:clean
	yarn
	yarn lint
	npm run build

clean:
	rm -rf dist


