DATE := `date '+%d/%m/%Y %H:%M:%S'`

build:
	@echo 'Building webpack for production'
	@echo NODE_ENV: production
	@NODE_ENV=production npm run build

git_commit:
	@echo 'Commiting as user: TravisCI' \
		&& cd dist/ \
		&& git init . \
		&& git add --all \
		&& git -c user.email=me@ardel.io -c user.name='Travis CI' commit -m "Site update at ${DATE}";

git_push:
	@echo 'Force pushing quietly' \
	&& cd dist/ \
	&& git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:master 2>%1 > /dev/null;

deploy: build git_commit git_push
	@echo 'Deployed to GitHub';

.PHONY: build deploy git_commit git_push
