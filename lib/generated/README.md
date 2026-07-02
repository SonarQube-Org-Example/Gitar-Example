# Generated demo helpers

Every file in this directory is produced by the **Open Demo PR** workflow
(`scripts/new-helper.mjs`). Each run adds one new, uniquely-named
`roi-<id>.ts` helper. These files are never hand-edited and never imported by the
app — they exist only to give Gitar something to review, fix, and auto-merge.

**Why this directory matters for forks:** the demo flow only ever *adds* files
here and touches nothing else the upstream template owns. That means a fork can
`git pull` upstream changes again at any time without merge conflicts. To keep
that guarantee:

- Don't edit, rename, or delete these files by hand.
- Don't put any template/app code in this directory.
