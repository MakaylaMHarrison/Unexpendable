
# Unexpendable — Development Log

**Project:** Unexpendable
**Purpose:** Build MVP architecture and deployment pipeline
**Environment:** VS Code + Node.js + Next.js + Vercel
**Log Start Date:** 2026-02-24

-----------------------------------------------------------------------

## 📘 Entry #001

**Date:** 2026-02-24
**Phase:** Environment Setup
**Layer:** Environment Navigation
**Status:** ✅ Resolved

-------------------------------------------------------

### 🎯 Context

Attempted to start the development server for the Unexpendable project.

---------------------------------------------------------------------

### 🛠 Action Taken

Ran the following command in the terminal:

```bash
npm run dev
```

---

### ❌ Error Output

```bash
npm error code ENOENT
npm error syscall open
npm error path C:\Users\Im The Developer\VisualCode\Unexpendable\package.json
npm error errno -4058
npm error enoent Could not read package.json: Error: ENOENT: no such file or directory
```

---

### 🔍 System Diagnosis

The terminal was not pointed at the correct project directory.

`npm` looks for `package.json` in the **current working directory**.
Since the terminal was in the wrong location, it could not find the file.

**System Layer Failure:**
Execution layer failed due to incorrect directory context.

The application existed — the terminal was simply not inside the project folder.

---

### ✅ Resolution

Navigated to the correct directory using:

```bash
cd Unexpendable
```

After switching into the correct folder, ran:

```bash
npm run dev
```

The development server started successfully.

---

### 🧠 Lesson Learned

npm commands execute relative to the current working directory.

Before running scripts, confirm location using:

```bash
cd
```

(or visually confirm your terminal path)

**System Insight:**
Environment context determines execution behavior.
Commands run based on *where you are*, not where the project exists.

======================================================================
Entry : 2/28 [Last day of feburary]
-Create source folder that has the building blocks of app that includes:
    src/lib/classification.ts
==============================================



## 📘 Entry #002
**Date:** 2026-03-20

## Task

Set up Git remote and perform initial push for project.

## Context

First time pushing this project; no remote repository was previously configured.

## Steps Taken

* Checked for existing remotes using `git remote -v`
* Created a new repository on GitHub
* Added remote with `git remote add origin <repo-url>`
* Verified remote was added correctly
* Pushed code using `git push -u origin main`

## Outcome

Remote repository successfully connected and initial codebase pushed. Upstream tracking established for simpler future pushes.

## Notes

* Default remote name used: `origin`
* Future pushes can be done with `git push`
==============================================
