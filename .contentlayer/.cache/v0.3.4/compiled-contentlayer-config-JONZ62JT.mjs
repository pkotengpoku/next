// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-JONZ62JT.mjs.map
