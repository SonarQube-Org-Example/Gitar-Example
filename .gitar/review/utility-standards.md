# Utility function standards

Apply these checks to every exported function under `lib/`:

- **Self-documenting:** each exported function must have a JSDoc block with a concrete `@example`. Flag any exported function in `lib/` that has no `@example`.
- **Input safety:** numeric inputs must be validated as finite, non-negative numbers before they are used in a calculation.
- **No magic numbers:** domain constants (such as minutes spent per review) must be named, not inlined as numeric literals.
