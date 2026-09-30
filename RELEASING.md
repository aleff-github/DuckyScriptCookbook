# Publishing DuckyScript Cookbook

The workflow `.github/workflows/publish-extension.yml` publishes the **same VSIX** to the Visual Studio Marketplace and Open VSX, then creates a GitHub Release with that VSIX. It also bumps `package.json`, dates the current `[Unreleased]` changelog section and commits the generated JavaScript. No deployment is triggered by pushing code or merging a pull request.

## Initial setup (do this before the first run)

**Preferred: trusted publishing (no long-lived tokens).** Both publisher registries now support GitHub Actions OIDC:

1. In the **Visual Studio Marketplace**, access the existing `Aleff` publisher and configure its *trusted publishing* policy for `aleff-github/DuckyScriptCookbook` and the workflow `publish-extension.yml`. Follow the publisher's UI for any required branch or environment policy. The workflow requests `id-token: write` and `vsce publish --oidc`.
2. In **Open VSX**, sign in and ensure you own the `Aleff` namespace. In the namespace's *Trusted publishers* settings, register GitHub repository `aleff-github/DuckyScriptCookbook` and workflow `publish-extension.yml`; do not set an environment unless you also add it to the workflow.
3. In GitHub repository **Settings → Actions → General**, confirm that Actions is enabled and that the workflow's `GITHUB_TOKEN` may write contents/create releases. Repository or organization policies can override workflow permissions.

If either registry's trusted publishing is unavailable or has not been configured, the workflow also supports repository Actions secrets in **Settings → Secrets and variables → Actions**:

- `VSCE_PAT`: Visual Studio Marketplace publisher token. Use only if Marketplace OIDC is not configured; plan to migrate away from global PATs before their December 1, 2026 retirement.
- `OVSX_PAT`: Open VSX token with publishing rights in the `Aleff` namespace. This is useful until you obtain namespace ownership and can configure trusted publishing.

When a nonempty secret exists, that registry uses its PAT; otherwise it requires OIDC. Configure at least one method for **each** registry. Do not put credentials in repository files, issues, or pull requests. Existing marketplace publisher accounts and the Open VSX namespace must already be set up.

Official references:

- Microsoft VSCE: https://github.com/microsoft/vscode-vsce#trusted-publishing
- Open VSX CLI: https://github.com/eclipse-openvsx/openvsx/blob/main/cli/README.md#trusted-publishing
- GitHub manual dispatch: https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow

## Run the first deployment on or after October 9, 2026

The current source manifest is `1.1.0`. The proposed release for these changes is **1.2.0**. Nothing is scheduled to run before your Actions minutes renew.

1. Open **GitHub → DuckyScriptCookbook → Actions → Publish DuckyScript Cookbook**.
2. Click **Run workflow**, select `main`, leave `version` at `1.2.0`, and keep both skip switches **off**.
3. The workflow validates the version, compiles the TypeScript, packages/checks the VSIX and preserves it as a workflow artifact. It commits the release version and compiled files to `main`, publishes the **identical** VSIX to both registries and creates `v1.2.0` as a GitHub Release *only after* both publishers report success.
4. Check the Actions log and both public extension listings. Marketplace-side scanning/approval may delay public visibility after uploading.

For a later release, add changes under `[Unreleased]` and manually dispatch the same workflow with a **new** stable semantic version, for example `1.2.1` or `1.3.0`. No manual version editing, packaging or upload is needed.

## If one registry succeeds and the other fails

A failed job does **not** create a GitHub Release tag, but it may already have committed the new version to `main` and uploaded to one registry. Confirm which upload succeeded in the job logs and registry listing.

After fixing the failed registry's credentials/configuration, run **a new workflow dispatch** for the **same version**. Check `skip_openvsx` or `skip_marketplace` **only** if that registry already received this exact version. Leave the failed registry enabled. Skipping is disallowed when starting a new version and both registries cannot be skipped. A previously created GitHub version tag prevents republishing that version.

The VSIX remains available as a GitHub Actions artifact even if a publishing step fails. This workflow has no automatic schedule or tag trigger, so it cannot deploy unexpectedly.
