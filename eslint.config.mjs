import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Apply the Next.js recommended configurations first
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add a new configuration object to override specific rules
  {
    rules: {
      // Disable the no-img-element rule from @next/next plugin
      "@next/next/no-img-element": "off",

      // You can add other rule modifications here if needed
      // Example: "react/react-in-jsx-scope": "off",
    },
  },
];

export default eslintConfig;
