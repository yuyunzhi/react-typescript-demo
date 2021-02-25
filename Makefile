export PATH := $(shell pwd)/node_modules/.bin:$(PATH)
.PHONY: init dev  build clean api

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
	npm run build
	tar -czf dist.tar.gz dist

clean:
	rm -rf dist

# api文件与后端沟通好, 需要添加的是哪个文件
# 以阳光作业为例
# services = api/hera/tracevisual/tracevisual.api

# api:
# 	make init
# 	@$(foreach var, $(services), api/script/goctl api ts -dir  $(dir $(subst api/hera/,./src/api/,$(var))) -api $(var) -webapi api/api )
#
