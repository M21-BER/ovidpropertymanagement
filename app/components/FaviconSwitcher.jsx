"use client";
import { useEffect } from "react";

export default function FaviconSwitcher() {
  useEffect(() => {
    const setThemeAssets = () => {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      const faviconPath = isDark ? "/favicon/dark" : "/favicon/light";
      const themeColor = isDark ? "#000000" : "#ffffff";

      // Define favicon configurations
      const favicons = [
        { rel: "icon", sizes: "", type: "", file: "favicon.ico" },
        {
          rel: "icon",
          sizes: "16x16",
          type: "image/png",
          file: "favicon-16x16.png",
        },
        {
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
          file: "favicon-32x32.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          type: "",
          file: "apple-touch-icon.png",
        },
      ];

      const updateIcon = ({ rel, sizes, type, file }) => {
        let selector = `link[rel="${rel}"]`;
        if (sizes) selector += `[sizes="${sizes}"]`;
        if (type) selector += `[type="${type}"]`;

        const href = `${faviconPath}/${file}`;
        const fullHref = `${location.origin}${href}`;

        let link = document.querySelector(selector);

        if (link) {
          if (link.href !== fullHref) {
            link.href = href;
          }
        } else {
          link = document.createElement("link");
          link.rel = rel;
          if (sizes) link.sizes = sizes;
          if (type) link.type = type;
          link.href = href;
          document.head.appendChild(link);
        }
      };

      favicons.forEach(updateIcon);

      // Update manifest safely
      const manifestHref = `${faviconPath}/site.webmanifest`;
      const manifest = document.querySelector('link[rel="manifest"]');
      if (manifest) {
        if (manifest.href !== `${location.origin}${manifestHref}`) {
          manifest.href = manifestHref;
        }
      } else {
        const newManifest = document.createElement("link");
        newManifest.rel = "manifest";
        newManifest.href = manifestHref;
        document.head.appendChild(newManifest);
      }

      // Update theme-color meta tag
      let themeMeta = document.querySelector('meta[name="theme-color"]');
      if (themeMeta) {
        if (themeMeta.getAttribute("content") !== themeColor) {
          themeMeta.setAttribute("content", themeColor);
        }
      } else {
        themeMeta = document.createElement("meta");
        themeMeta.name = "theme-color";
        themeMeta.setAttribute("content", themeColor);
        document.head.appendChild(themeMeta);
      }
    };

    // Initial load
    setThemeAssets();

    // Listen to changes in system theme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", setThemeAssets);

    return () => {
      mediaQuery.removeEventListener("change", setThemeAssets);
    };
  }, []);

  return null;
}
