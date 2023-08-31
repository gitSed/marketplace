import { NftPrice, NftBid } from "@/modules/nft/domain/entities";
import { Media } from "@/modules/shared/domain/entities";

import NftCreator from "./NftCreator";

interface Nft {
  id: string;
  name: string;
  creator: NftCreator;
  price?: NftPrice;
  highestBid?: NftBid;
  image: Media;
}

export default Nft;
