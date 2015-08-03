BEM_DIST = bem/bem-dist
ENB = $(BEM_DIST)/node_modules/.bin/enb

all: build

build: install
	$(ENB) make -d $(BEM_DIST)

install: $(BEM_DIST)/node_modules

$(BEM_DIST)/node_modules:
	@cd $(BEM_DIST); npm install --silent &> /dev/null
	@echo "ok"

.PHONY: build install
