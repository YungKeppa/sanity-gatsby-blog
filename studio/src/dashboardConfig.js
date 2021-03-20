export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60554da34d4b72b70e196595",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-hhddbgsi",
                  apiId: "a038bb5b-83b3-407c-a3b9-7cec3dcb66ce",
                },
                {
                  buildHookId: "60554da3088e78c04e8f7225",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-dcgevbwm",
                  apiId: "c2d6d0f5-8cfe-469c-b19e-5925df6cc6f4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/YungKeppa/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-dcgevbwm.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
