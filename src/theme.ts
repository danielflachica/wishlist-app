import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

/*
  Palette (from the mockups)
    snow    #eaf0f4  page background
    spruce  #10302a  text
    berry   #a81f3d  primary buttons
*/

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Bricolage Grotesque', system-ui, sans-serif" },
        body: { value: "'Figtree', system-ui, sans-serif" },
      },
      colors: {
        // Green-tinted greys. Every default "gray" surface, border and text
        // colour in Chakra picks these up, so outline buttons, inputs and
        // muted text all pick up the spruce tint automatically.
        gray: {
          50: { value: "#f4f8fa" },
          100: { value: "#eaf0f4" },
          200: { value: "#cfdbe2" },
          300: { value: "#b3c4cd" },
          400: { value: "#8fa4a6" },
          500: { value: "#6f8480" },
          600: { value: "#5b6f6a" },
          700: { value: "#3f554f" },
          800: { value: "#284039" },
          900: { value: "#1a3a32" },
          950: { value: "#10302a" },
        },

        // Use with colorPalette="brand"
        brand: {
          50: { value: "#fcf0f3" },
          100: { value: "#f8dde3" },
          200: { value: "#f1b8c4" },
          300: { value: "#e68a9d" },
          400: { value: "#d9566f" },
          500: { value: "#c42d4f" },
          600: { value: "#a81f3d" },
          700: { value: "#8c1a33" },
          800: { value: "#70152a" },
          900: { value: "#561021" },
          950: { value: "#3a0b16" },
        },
      },
    },

    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: { _light: "#eaf0f4", _dark: "#0b1f1a" } },
        },
        fg: {
          DEFAULT: { value: { _light: "{colors.gray.950}", _dark: "#eaf0f4" } },
        },

        brand: {
          solid: { value: "{colors.brand.600}" },
          contrast: { value: "white" },
          fg: {
            value: {
              _light: "{colors.brand.700}",
              _dark: "{colors.brand.300}",
            },
          },
          muted: {
            value: {
              _light: "{colors.brand.100}",
              _dark: "{colors.brand.900}",
            },
          },
          subtle: {
            value: { _light: "{colors.brand.50}", _dark: "{colors.brand.950}" },
          },
          emphasized: {
            value: {
              _light: "{colors.brand.200}",
              _dark: "{colors.brand.800}",
            },
          },
          focusRing: { value: "{colors.brand.500}" },
          border: { value: "{colors.brand.500}" },
        },
      },

      // Slightly rounder buttons, inputs and cards (defaults are 4px / 6px).
      radii: {
        l2: { value: "6px" },
        l3: { value: "8px" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
