build:
	@echo 'Building webpack for production'
	@echo NODE_ENV: production
	@NODE_ENV=production ./node_modules/.bin/webpack

package:
	@echo 'Creating Distribution directory' \
		&& mkdir -p dist \
		&& cp -r build index.html dist/;

git_commit:
	@echo 'Commiting as user: TravisCI' \
		&& cd dist/ \
		&& git init . \
		&& git add --all \
		&& git -c user.email=me@ardel.io -c user.name='Travis CI' commit -m "Site update at $(date '+%d/%m/%Y %H:%M:%S')";

git_push:
	@echo 'Force pushing quietly' \
	&& cd dist/ \
	&& git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:master 2>%1 > /dev/null;

cleanup:
	@echo 'Obliterating dist/' \
	&& rm -rf dist/;

deploy: build package git_commit git_push cleanup
	@echo 'Deployed to GitHub';

.PHONY: build cleanup deploy git_commit git_push package
