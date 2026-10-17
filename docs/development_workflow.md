# Development and Deployment Workflow

Welcome to the project! This document explains our Git branching strategy and contribution workflow.

## Branching Strategy

### `main` — Production Branch

- Contains stable, tested, and production-ready code.
- Used for production deployment.
- Changes are merged from `dev` through Pull Requests (PRs).
- Direct pushes to `main` are not allowed.

### `dev` — Development Branch

- The primary branch for ongoing development.
- Features and bug fixes are merged through Pull Requests.
- All changes should be tested before being promoted to `main`.

## Feature Branches

- Each contributor should create a separate branch for their task.
- Use descriptive branch names.

Examples:

- `feature/user-authentication`
- `feature/dashboard`
- `fix/login-error`
- `docs/update-readme`

## Contribution Workflow

1. Clone the repository.
2. Switch to the latest `dev` branch.
3. Create a feature branch for your task.
4. Implement your changes.
5. Commit your changes with a meaningful message.
6. Push your feature branch to GitHub.
7. Open a Pull Request (PR) targeting `dev`.
8. Wait for code review and approval ( if needed ).
9. Test the changes after merging into `dev`.
10. Once `dev` is stable, maintainers open a PR from `dev` to `main`.
11. After approval and merging, deploy the updated `main` branch.

## Important Rules

- Do not work directly on `main` or `dev`.
- Always create a feature branch for your task.
- Use Pull Requests instead of pushing directly to protected branches.
- Keep your branch updated with the latest changes from `dev`.
- Resolve merge conflicts before requesting final review.
- Never commit passwords, API keys, tokens, or other secrets.
- Test your changes before opening a PR.

## Workflow Summary

```text
Feature Branch
      ↓
Pull Request
      ↓
dev
      ↓
Testing and Review
      ↓
Pull Request
      ↓
main
      ↓
Production Deployment
```

## Our Goal

Build collaboratively, review carefully, and deploy confidently.

> Remember: `dev` is for development and testing, while `main` is for stable, production-ready releases.
