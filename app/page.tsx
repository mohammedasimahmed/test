import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "Random Images",
  description: "A frame showing random images",
  openGraph: {
    title: "Random Images",
    description: "A frame showing random images",
    images: [
      `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/0.png`,
    ],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Cosmic Cowboys</h1>
      <img src="https://gateway.pinata.cloud/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/0.png" />
    </>
  );
}
