# Day 1 - Practical Project 1: Your First Git Repository

## Project Overview

In this project, you'll create your very first Git repository and make your first commit. This is the foundation for everything else in Git.

## What You'll Learn

- How to initialize a Git repository
- How to create files in your repository
- How to stage changes
- How to make your first commit
- How to view your commit history

## Prerequisites

- Git installed on your computer (we'll verify this)
- A text editor (Notepad, VS Code, or any editor)
- A terminal/command prompt open

## Step-by-Step Instructions

### Step 1: Verify Git is Installed

**Why:** Before we start, we need to make sure Git is properly installed on your computer.

**How:**

Open your terminal/command prompt and type:
```
git --version
```

**What you should see:**
```
git version 2.40.0
```

(The version number might be different, but you should see a version number)

**If you see an error:** Git isn't installed. Go back to Day 2 setup instructions and install Git first.

---

### Step 2: Create a Project Folder

**Why:** Git works with folders (repositories). We need a dedicated folder for this project.

**How:**

1. Open your terminal/command prompt
2. Navigate to where you want to create the project (for example, your Documents folder)
3. Create a new folder:

```
mkdir my-first-repo
cd my-first-repo
```

**What this does:**
- `mkdir my-first-repo` creates a new folder called "my-first-repo"
- `cd my-first-repo` moves into that folder

**Verify:** Type `pwd` (Mac/Linux) or `cd` (Windows) to see your current location

---

### Step 3: Initialize a Git Repository

**Why:** This tells Git to start tracking this folder and its files.

**How:**

Type this command:
```
git init
```

**What you should see:**
```
Initialized empty Git repository in /path/to/my-first-repo/.git
```

**What this does:** Git creates a hidden folder called `.git` that stores all the version control information. You won't need to touch this folder - Git manages it automatically.

**Verify:** Type `ls -la` (Mac/Linux) or `dir /a` (Windows) to see the hidden `.git` folder

---

### Step 4: Create Your First File

**Why:** We need something to commit. Let's create a simple file.

**How:**

Create a file called `README.md` with this content:

```markdown
# My First Repository

This is my first Git repository!

## About Me
- Learning Git
- Preparing for Outlier assessment
- Building professional skills

## Projects
- This repository
```

**How to create the file:**

**Option A: Using a text editor**
1. Open your text editor (VS Code, Notepad, etc.)
2. Copy the content above
3. Save the file as `README.md` in your `my-first-repo` folder

**Option B: Using terminal**

Mac/Linux:
```
cat > README.md << 'EOF'
# My First Repository

This is my first Git repository!

## About Me
- Learning Git
- Preparing for Outlier assessment
- Building professional skills

## Projects
- This repository
EOF
```

Windows (PowerShell):
```
@"
# My First Repository

This is my first Git repository!

## About Me
- Learning Git
- Preparing for Outlier assessment
- Building professional skills

## Projects
- This repository
"@ | Out-File README.md -Encoding UTF8
```

**Verify:** Type `ls` (Mac/Linux) or `dir` (Windows) and you should see `README.md`

---

### Step 5: Check Git Status

**Why:** Before committing, it's good practice to see what Git sees. This shows you what's changed.

**How:**

Type:
```
git status
```

**What you should see:**
```
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (tracking use "git add" to track)
```

**What this means:**
- "On branch main" - You're on the main branch (the default)
- "No commits yet" - This is your first repository, so no commits exist
- "Untracked files" - Git sees README.md but hasn't started tracking it yet
- "README.md" - This is the file Git found

---

### Step 6: Stage Your Changes

**Why:** Before committing, you must "stage" files. This tells Git which changes you want to include in the commit.

**Think of it like this:** Staging is like putting items in a shopping cart before checking out. You're selecting what you want to commit.

**How:**

Type:
```
git add README.md
```

**What this does:** Tells Git to include README.md in the next commit

**Verify:** Type `git status` again

**What you should see:**
```
On branch main

No commits yet

Changes to be committed:
  (use "rm --cached <file>..." to unstage)
        new file:   README.md
```

Notice it now says "Changes to be committed" instead of "Untracked files". This means the file is staged and ready to commit.

---

### Step 7: Make Your First Commit

**Why:** A commit saves a snapshot of your code with a message describing what changed.

**How:**

Type:
```
git commit -m "Initial commit: Add README file"
```

**What this does:**
- `git commit` creates a commit
- `-m` means "message follows"
- `"Initial commit: Add README file"` is your commit message

**What you should see:**
```
[main (root-commit) a1b2c3d] Initial commit: Add README file
 1 file changed, 5 insertions(+)
 create mode 100644 README.md
```

**What this means:**
- `[main (root-commit) a1b2c3d]` - This is your first commit on the main branch, with ID a1b2c3d
- `1 file changed` - One file was modified
- `5 insertions(+)` - Five lines were added
- `create mode 100644 README.md` - README.md was created

---

### Step 8: View Your Commit History

**Why:** This shows you all commits you've made. It's like a timeline of your project.

**How:**

Type:
```
git log
```

**What you should see:**
```
commit a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
Author: Your Name <your.email@example.com>
Date:   Mon Dec 23 10:30:45 2024 +0000

    Initial commit: Add README file
```

**What this shows:**
- `commit a1b2c3d...` - The unique ID of this commit
- `Author` - Who made the commit
- `Date` - When the commit was made
- The commit message you wrote

**Congratulations!** You've made your first Git commit! 🎉

---

## Understanding What Just Happened

Let's break down the workflow you just completed:

1. **Initialize** (`git init`) - Set up Git tracking
2. **Create** - Made a file
3. **Check Status** (`git status`) - See what Git sees
4. **Stage** (`git add`) - Select what to commit
5. **Commit** (`git commit`) - Save a snapshot with a message
6. **View History** (`git log`) - See all commits

This is the core Git workflow you'll use every single day as a developer.

---

## Common Questions

**Q: What's the difference between staging and committing?**

A: Staging (`git add`) is like putting items in a shopping cart. Committing (`git commit`) is like checking out and paying. You can stage multiple files and commit them all at once.

**Q: Why do I need a commit message?**

A: The message explains WHY you made changes. Future you (or your team) will read these messages to understand the project history. Good messages are essential for professional development.

**Q: Can I change my commit message?**

A: Yes, but it's complicated. For now, write your message carefully before committing. We'll learn to fix mistakes later.

**Q: What's the `.git` folder?**

A: This is where Git stores all the version control information. Don't delete it or modify it manually. Git manages it automatically.

---

## Practice Exercises

### Exercise 1: Make Another Commit

1. Edit your README.md file and add a new section:
```markdown
## Skills I'm Learning
- Git basics
- Version control
- Professional workflows
```

2. Check status: `git status`
3. Stage changes: `git add README.md`
4. Commit: `git commit -m "Add skills section to README"`
5. View history: `git log`

### Exercise 2: Create Another File

1. Create a new file called `notes.txt` with some notes about what you learned
2. Stage it: `git add notes.txt`
3. Commit it: `git commit -m "Add learning notes"`
4. View history: `git log`

### Exercise 3: View Detailed History

Type this command to see more details:
```
git log --oneline
```

This shows a condensed version of your history.

---

## Key Takeaways

- `git init` initializes a repository
- `git status` shows what Git sees
- `git add` stages files for commit
- `git commit -m "message"` saves a snapshot
- `git log` shows your commit history
- Every commit has a unique ID and timestamp
- Commit messages are important for documentation

## Next Steps

In the next project, you'll learn about branches and how to create separate lines of development!

---

## Troubleshooting

**Problem: "git: command not found"**
- Solution: Git isn't installed. Install it from git-scm.com

**Problem: "fatal: not a git repository"**
- Solution: You're not in a Git repository folder. Run `git init` first

**Problem: "Please tell me who you are"**
- Solution: Configure Git with your name and email:
```
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Problem: "nothing to commit"**
- Solution: You haven't made any changes, or you haven't staged them with `git add`
