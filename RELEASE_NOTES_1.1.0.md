# Release Notes - DuckyScript Cookbook 1.1.0

DuckyScript Cookbook 1.1.0 is a polish and compatibility release focused on improving the editing experience in VS Code and VSCodium while preparing the extension for a cleaner new publication cycle.

## Highlights

- Better syntax highlighting compatibility with standard editor themes
- Corrected and improved bundled dark and light themes
- Cookbook panel styling that adapts more naturally to the active theme
- Base support for newer Pager commands
- Final release cleanup for packaging and marketplace metadata

## What is included

### Syntax highlighting and themes
- More standard TextMate scopes are now used for DuckyScript tokens, which improves color support outside the bundled themes.
- The bundled DarkDuckyScript and LightDuckyScript themes have been aligned for more consistent highlighting.
- The dark theme contribution metadata has been corrected.

### Cookbook panel
- The cookbook panel now follows the active VS Code or VSCodium theme more closely instead of relying on a fixed custom palette.
- Visual structure and spacing have been refined so the panel feels more native to the editor UI.

### Pager groundwork
- Added base support for newer Pager commands in autocomplete and grammar.
- Included initial command descriptions as a foundation for future examples and richer inline documentation.

### Release preparation
- Cleaned up extension metadata and publishing inputs for a leaner package.
- Added and organized the changelog for ongoing version tracking.

## Notes

- The bundled themes remain optional. Core syntax highlighting now behaves better with standard and third-party editor themes.
- Pager command entries currently ship with concise descriptions and can be expanded with examples in a later release.
