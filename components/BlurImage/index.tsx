import React from 'react';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'node:fs/promises';
import Image, { ImageProps, StaticImageData } from 'next/image';

interface IBlurImage extends ImageProps {
  src: any;
}

async function BlurImage({ src, ...props }: IBlurImage) {
  const buffer = await fs.readFile(`./public${src}`);
  const { base64: blurDataURL } = await getPlaiceholder(buffer);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      src={src}
      fill
      placeholder="blur"
      blurDataURL={blurDataURL}
      {...props}
    />
  );
}

export default BlurImage;
