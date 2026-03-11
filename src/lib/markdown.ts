import { marked } from "marked";

export async function parseMarkdown(text: string): Promise<string> {
  return await marked.parse(text);
}
