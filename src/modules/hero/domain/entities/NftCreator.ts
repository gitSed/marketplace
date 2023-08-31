import { Media } from "@/modules/shared/domain/entities";

interface NftCreator {
  id: string;
  name: string;
  image: Media;
}

export default NftCreator;
