# Changesets for versioning and release automation

We use Changesets to manage versioning and npm publishing rather than manual version bumps or direct-publish-on-merge.

The workflow is: contributors run `pnpm changeset` when making library changes, which produces a small markdown file in `.changeset/`. When such a PR merges to `main`, the Changesets GitHub Action opens a "Version Packages" PR that bumps `package.json` versions and generates `CHANGELOG.md` entries for all affected packages. Merging that PR triggers the actual npm publish.

The alternative — publishing a new version on every merge to `main` — was rejected because it forces every PR (including docs fixes, CI changes, and refactors) to carry a version bump, produces meaningless changelogs, and removes the ability to batch multiple changes into a single deliberate release. The two-merge model keeps versioning intentional and gives maintainers control over release timing without requiring any CLI work.
