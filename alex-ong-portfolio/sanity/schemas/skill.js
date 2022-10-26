export default {
  name: "skill",
  title: "Skill",
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
      description: "Title of the Skill",
      type: "string",
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
