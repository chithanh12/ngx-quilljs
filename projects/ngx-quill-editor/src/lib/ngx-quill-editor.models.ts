export class QuillConfigs {
  public hasMention: boolean = true;
  public hasEmoji: boolean = true;
  public hasAttachment: boolean = true;
  public mentionList: any;
  public onOpenFile: (file: File) => {};
}

export class MessageOutput {
  public text: string;
  public mentions: MentionItem[] = [];;
}

export class MentionItem {
  public key: string;
  public value: string;
}