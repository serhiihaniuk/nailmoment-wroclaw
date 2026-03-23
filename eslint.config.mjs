import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    rules: {
      "@next/next/no-img-element": "off",
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/blocks/*", "@/components/*", "@/lib/*", "@/shared/content/home/*"],
              message:
                "Use the Feature-Sliced structure instead: shared/ui, shared/lib, shared/config, entities, features, or widgets.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["app/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/features/*", "@/entities/*"],
              message: "App routes should stay thin and import widgets or shared modules only.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["widgets/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/app/*"],
              message: "Widgets must not import route entrypoints.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["entities/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/features/*", "@/widgets/*", "@/app/*"],
              message: "Entities may depend only on shared modules.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["shared/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/app/*", "@/widgets/*", "@/features/*", "@/entities/*"],
              message: "Shared modules must not import from higher layers.",
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
