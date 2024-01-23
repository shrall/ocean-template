type ImageLoader = {
  src: string;
  width: number;
  quality?: number;
};

export const imageLoader = ({ src, width, quality }: ImageLoader) => {
  return `${process.env.NEXT_PUBLIC_OCEAN_PARENT_URL}/${src}?w=${width}&q=${
    quality || 75
  }`;
};
