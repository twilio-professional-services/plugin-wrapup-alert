git_publish () {
  git init
  current_path=`pwd`
  current_folder=${current_path##*/}
  git add -A
  git commit -m "init"
  git remote add origin git@github.com:cjose/$current_folder.git
  git remote -v
  git push -u origin master
}

git_push () {
# $1 message
git add -A
git commit -m "$1"
git push
echo "All are pushed"
}
