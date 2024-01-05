import { File } from "./types";

export const TREE: File[] = [
  {
    name: "node_modules",
    children: [
      {
        name: "vite",
        children: [
          {
            name: "react.js",
          },
          {
            name: "vue.js",
          },
          {
            name: "angular.js",
          },
        ],
      },
    ],
  },
  {
    name: "public",
    children: [
      {
        name: "assets",
        children: [
          {
            name: "index.html",
          },
          {
            name: "style.css",
          },
          {
            name: "images",
            children: [
              {
                name: "logo.png",
              },
              {
                name: "asset.jpg",
              },
            ],
          },
          {
            name: "main.go",
          },
        ],
      },
    ],
  },
];
