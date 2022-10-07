export default {
  name: "photography",
  title: "Photography",
  type: "document",
  fields: [
    {
      name: "photos",
      title: "photos",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
