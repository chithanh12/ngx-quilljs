import emojiList from "./emoji-list";

const emojiMap = {};

emojiList.forEach((emojiListObject) => {
    emojiMap[emojiListObject.name] = emojiListObject;
});

export class EmojiModel {
    public name: string;
    public unicode: string;
    public shortname: string;
    public code_decimal: string;
    public category: string;
    public emoji_order: string;
}
export class Category {
    public type: string;
    public name: string;
    public icon: string;
}

export default emojiMap;