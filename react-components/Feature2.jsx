import React from 'react';

import { Masonry, Image , Text, Box} from "gestalt";


const items = [
  {
    src: "https://picsum.photos/350/200",
    altText: "Slide 1",
    caption: "Slide 1",
    width: 200,
    height: 350
  },
  {
    src: "https://picsum.photos/300/200",
    altText: "Slide 2",
    caption: "Slide 2",
    height: 200,
    width: 200
  },
  {
    src: "https://picsum.photos/100/100",
    altText: "Slide 3",
    caption: "Slide 3",
    height: 100,
    width: 100
  },
  {
    src: "https://picsum.photos/200/150",
    altText: "Slide 3",
    caption: "Slide 3",
    heigth: 150,
    width: 200
  },
];


const Gallery = () => (
  <div style={{ marginTop: 25 }}>
    <h1>Gallery</h1>
    <Masonry
      items={items}
      comp={({ data }) => (
        <Box naturalHeight={data.height} naturalWidth={data.width}>
          <Image alt={data.altText} src={data.src} />
        </Box>
      )}
    />
  </div>
);

export default Gallery;