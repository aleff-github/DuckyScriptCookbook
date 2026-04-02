# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2026-04-02

### Added
- Base support for newer Pager-related commands in autocomplete, grammar, and bundled themes.
- Initial command descriptions for the new Pager command set, ready to be expanded with examples in future updates.

### Changed
- Improved TextMate scopes so syntax highlighting works better with standard editor themes.
- Corrected and aligned the bundled dark and light themes for a more consistent DuckyScript palette.
- Updated the cookbook panel so it follows the active VS Code or VSCodium theme more naturally.
- Cleaned up release metadata and packaging rules for a leaner published extension.

### Fixed
- Corrected the bundled dark theme contribution metadata so it is registered as a dark theme.
- Reduced theme dependency for core syntax highlighting by using more compatible scope naming.
