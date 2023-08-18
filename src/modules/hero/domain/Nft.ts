import { NftPrice, NftBid } from "@/modules/nft/domain";
import { Media } from "@/modules/shared/domain";

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
