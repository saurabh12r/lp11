
METHOD 1 :

1.Create a New Repo on github profile dashboard after github login.

2.Use the commands written on github start page on VS code terminal after creating a new file (text , pdf , word , html ,etc) in a new folder on Desktop.

Index.html (example code):

<!DOCTYPE html>
<html>
<head>
<title>Welcome</title>
</head>
<body>
<h1> Welcome to Firebase Auth Demo API!</h1>
<p>You are successfully authenticated with Firebase and Node.js.</p>
</body>
</html>

METHOD 2 :

Here’s a step-by-step guide to create a GitHub account, create a repository, and push your code using Git commands:

Step 1: Create a GitHub Account

1.Go to https://github.com

2.Click Sign up.

3.Fill in your username, email, and password.

4.Verify your email and complete account setup.


Step 2: Create a New Repository on GitHub

1.After logging in, click the + icon at the top-right and select "New repository".

2.Give your repo a name (e.g., my-first-repo).

3.Choose:
o
Public or Private
o
(Optional) Add a README file.

4.Click Create repository.

Step 3: Set Up Git Locally
Make sure Git is installed. Run this to check:
git --version
If not installed, download it from https://git-scm.com.

Step 4: Initialize Your Local Repository
In your project folder:
cd path/to/your/project
git init

Step 5: Add Files and Commit
git add .
git commit -m "Initial commit"

Step 6: Link Your Local Repo to GitHub
Copy the remote URL from your GitHub repo (e.g., https://github.com/yourusername/my-first-repo.git) and run:
git remote add origin https://github.com/yourusername/my-first-repo.git

Step 7: Push to GitHub
If this is your first push:
git branch -M main
git push -u origin main

IF ERRORS FOLLOW THE BELOW COMMANDS OR STEPS : -

If you're trying to push to GitHub but not pushing due to a branch error, it usually means either:
•
Your local branch name doesn't match the remote branch (e.g., trying to push main when it doesn't exist remotely).
•
You're trying to push from a branch that doesn't track any remote branch yet.
Fix Branch Errors with These Commands

🛠 1. Check your current branch name
git branch
Make sure you're on the correct branch, typically main or master.

🛠 2. Rename your local branch to main (if needed)
If you're on master and GitHub is expecting main, rename it:
git branch -m master main

🛠 3. Set the upstream branch and push
This tells Git where to push your local branch:
git push -u origin main
The -u flag sets the upstream branch so future git push or git pull commands will work without extra arguments.

🛠 4. If remote already has a branch with a different name
You can create and push a branch that matches your local branch:
git push --set-upstream origin your-branch-name

🛠 5. To list remote branches (for troubleshooting)
git branch -r



Example :


C:\Users\eXpert\Desktop\WAD>git init
Initialized empty Git repository in C:/Users/eXpert/Desktop/WAD/.git/

C:\Users\eXpert\Desktop\WAD>git remote add origin https://github.com/HarshCraft/WAD_Practical.git
WAD Cheat no.3

3.Create a version control account on GitHub and use Git commands to create a repository and push your code to GitHub.

C:\Users\eXpert\Desktop\WAD>git add .

C:\Users\eXpert\Desktop\WAD>git commit -m "Initial commit for WAD practical"
[master (root-commit) 97aa776] Initial commit for WAD practical
4 files changed, 353 insertions(+)
create mode 100644 Exam management system/Exam Dashboard.html
create mode 100644 Exam management system/college_Dashboard.html
create mode 100644 user registration data (2,8)/register.html
create mode 100644 user registration data (2,8)/users.html

C:\Users\eXpert\Desktop\WAD>git push -u origin main
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 4 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 3.18 KiB | 361.00 KiB/s, done.
Total 8 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/HarshCraft/WAD_Practical.git
* [new branch] main -> main
branch 'main' set up to track 'origin/main
