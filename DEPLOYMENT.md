# Review and publish the redesign

This is a Next.js site. v0 is optional; GitHub and Vercel can handle the full workflow.

Current redesign branch: `redesign/v4-editorial`.

## Recommended: keep the existing Vercel project

The repository's previous README identifies this project:
https://vercel.com/aliwout3003-9996s-projects/v0-alizee-wouters-website

Open that project's settings and confirm:
- Its connected GitHub repository is `aliwouters/aliwouters`.
- Its Production Branch is `main`, not the redesign branch.
- `alizee.me` is attached to Production.

These account settings have not been checked from this workspace.

Push the redesign branch to GitHub and open a pull request targeting main. With the Git integration enabled, Vercel normally creates a separate Preview deployment. Review it before merging. Merging into the configured Production Branch normally deploys to the existing domain automatically.

Do not click Promote to Production or merge the pull request until ready to replace the live website.

## Option A: apply the supplied patch to a clone

The patch contains the accumulated tracked changes relative to the main revision used for this redesign, including binary assets. It does not include dependencies or generated build files.

1. Clone the repository to your computer and enter it:

```sh
git clone https://github.com/aliwouters/aliwouters.git
cd aliwouters
git switch -c redesign/v4-editorial
```

2. Put `alizee-redesign.patch` in the folder ABOVE `aliwouters`, then check and apply it:

```sh
git apply --check ../alizee-redesign.patch
git apply ../alizee-redesign.patch
git add .
git commit -m "Redesign personal website"
```

If the check fails, stop: main may have changed since this patch was prepared. Resolve that against the current source rather than forcing the patch.

3. After confirming the Vercel production branch settings above, upload ONLY the redesign branch:

```sh
git push -u origin redesign/v4-editorial
```

4. On GitHub, create a pull request with base `main` and compare `redesign/v4-editorial`. Follow the Vercel Preview link when its build finishes. Leave the pull request unmerged until the preview is approved.

## Option B: use the full ZIP

The ZIP contains the complete tracked source and all tracked public assets. It excludes `.git`, dependencies, local credentials and generated builds. Extract it into a fresh folder to run locally. To transfer it to GitHub, use a fresh clone on a redesign branch and replace its tracked project files with the extracted version, preserving the clone's `.git` directory. The patch route is preferable because it records deletions and detects conflicts.

## Run locally

Use Node.js 22 LTS and pnpm. With pnpm available:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Next.js. To build and run the production build:

```sh
pnpm build
pnpm start
```

Dependencies include optional native packages; follow your package manager's normal prompts if any are needed. The existing Next.js configuration skips lint/type validation during builds. Standalone TypeScript checking still reports three pre-existing Three.js typing issues.

## Before the live merge

- Test EN/FR translation on the Vercel preview domain; Google Translate did not produce translated output in the local preview.
- Test the anatomical 3D models in a WebGL-capable browser. Model assets and rotation/zoom/pan controls remain; the local QA browser could only show their fallback.
- Confirm the resume button saves the PDF. The correct PDF opened in the viewer; automated save-to-disk events were not available.
- Review the site on a phone.

The Phosphene Simulator is still embedded from its original external Vercel app, and several original videos remain externally hosted. Those dependencies are retained rather than bundled into this site's source.

## After approval

Merge the pull request into the verified Production Branch. Confirm the deployment is successful in the existing Vercel project, then check https://alizee.me/.

Use GitHub Revert on the merge commit if the previous site needs to be restored; the connected Vercel project will normally deploy the revert.

Reference: https://vercel.com/docs/deployments/environments
