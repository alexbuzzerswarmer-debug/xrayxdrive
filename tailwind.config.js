window.tailwind = window.tailwind || {};

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "error-dim": "#9f0519",
                "outline": "#68788f",
                "on-tertiary-container": "#4a2c00",
                "on-tertiary": "#fff0e3",
                "secondary-container": "#d8e3fb",
                "on-error": "#ffefee",
                "error": "#b31b25",
                "surface-bright": "#f4f6ff",
                "inverse-on-surface": "#8e9eb7",
                "on-error-container": "#570008",
                "primary-dim": "#0046bb",
                "surface-container-low": "#eaf1ff",
                "outline-variant": "#9eaec7",
                "on-primary": "#f1f2ff",
                "tertiary-dim": "#714600",
                "secondary": "#515c70",
                "on-surface": "#203044",
                "secondary-fixed-dim": "#cad5ed",
                "secondary-dim": "#455064",
                "on-tertiary-fixed-variant": "#563400",
                "surface-container-lowest": "#ffffff",
                "on-secondary": "#eff2ff",
                "tertiary": "#815100",
                "surface-variant": "#c9deff",
                "inverse-surface": "#000f21",
                "on-primary-fixed-variant": "#00266e",
                "on-secondary-fixed-variant": "#515c70",
                "primary-container": "#7b9cff",
                "on-tertiary-fixed": "#2a1700",
                "surface-container-highest": "#c9deff",
                "primary-fixed": "#7b9cff",
                "on-background": "#203044",
                "tertiary-fixed": "#f8a010",
                "surface-dim": "#bdd6fc",
                "inverse-primary": "#618bff",
                "surface": "#f4f6ff",
                "surface-tint": "#0050d4",
                "secondary-fixed": "#d8e3fb",
                "error-container": "#fb5151",
                "primary-fixed-dim": "#658eff",
                "on-secondary-container": "#475266",
                "on-secondary-fixed": "#354053",
                "primary": "#0050d4",
                "background": "#f4f6ff",
                "tertiary-container": "#f8a010",
                "surface-container-high": "#d2e4ff",
                "on-primary-container": "#001e5a",
                "surface-container": "#dce9ff",
                "on-primary-fixed": "#000000",
                "on-surface-variant": "#4d5d73",
                "tertiary-fixed-dim": "#e79400"
            },
            fontFamily: {
                headline: ["Epilogue"],
                body: ["Manrope"],
                label: ["Plus Jakarta Sans"]
            },
            borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" }
        }
    }
};
