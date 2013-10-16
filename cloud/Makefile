TEST_FILES=tests/test-databrowser.js tests/test-weather.js
DEP=tests/dependencies.json

test:
	whiskey --tests "${TEST_FILES}" --only-essential-dependencies --dependencies "${DEP}"

test-fast:
	whiskey --tests "${TEST_FILES}" --dependencies  "${DEP}" --only-essential-dependencies --failfast

tap:
	whiskey --tests "${TEST_FILES}" --dependencies  "${DEP}" --only-essential-dependencies --test-reporter tap

coverage:
	whiskey --tests "${TEST_FILES}" --dependencies  "${DEP}" --only-essential-dependencies --coverage --coverage-reporter html \
          --coverage-dir coverage_html

cov:
	make coverage

leaks:
	whiskey --tests "${TEST_FILES}" --dependencies  "${DEP}" --only-essential-dependencies --scope-leaks

.PHONY: test tap coverage cov leaks