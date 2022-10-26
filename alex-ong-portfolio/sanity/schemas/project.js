export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },

    {
      name: "title",
      title: "Title",
      description: "Title of the Project",
      type: "string",
    },

    {
      name: "summary",
      title: "Summary",
      type: "text",
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url",
    },

    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
  ],
};
