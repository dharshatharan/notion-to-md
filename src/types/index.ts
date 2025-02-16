import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
import { Client } from "@notionhq/client";

export type ListBlockChildrenResponseResults =
  ListBlockChildrenResponse["results"];

export type ListBlockChildrenResponseResult =
  ListBlockChildrenResponseResults[0];

export type TextRequest = string;

export interface NotionToMarkdownOptions {
  notionClient: Client;
}

export type MdBlock = {
  parent: string;
  children: MdBlock[];
};

export type Annotations = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color:
    | "default"
    | "gray"
    | "brown"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "red"
    | "gray_background"
    | "brown_background"
    | "orange_background"
    | "yellow_background"
    | "green_background"
    | "blue_background"
    | "purple_background"
    | "pink_background"
    | "red_background";
};

export type Text = {
  type: "text";
  text: {
    content: string;
    link: {
      url: TextRequest;
    } | null;
  };
  annotations: Annotations;
  plain_text: string;
  href: string | null;
};
