export interface NftAttribute {
  trait_type: "attack" | "health" | "speed";
  value: string;
}

export interface NftMeta {
  description: string;
  image: string;
  name: string;
  attributes: NftAttribute[];
}
