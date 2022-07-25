declare global {
  interface Window {
    /** [MM] my custom global variables */
    MM_VAR: string
  }
}

// fixes ts "Augmentations for the global scope can only be directly nested in external modules or ambient module declarations. ts(2669)"
export {}
