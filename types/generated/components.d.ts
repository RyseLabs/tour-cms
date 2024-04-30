import type { Schema, Attribute } from '@strapi/strapi';

export interface ImagesImageGallery extends Schema.Component {
  collectionName: 'components_images_image_galleries';
  info: {
    displayName: 'image-gallery';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
  };
}

export interface PoisPointOfInterest extends Schema.Component {
  collectionName: 'components_pois_point_of_interests';
  info: {
    displayName: 'point-of-interest';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    cover: Attribute.Media;
    latitude: Attribute.String;
    longitude: Attribute.String;
    images: Attribute.Component<'images.image-gallery', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'images.image-gallery': ImagesImageGallery;
      'pois.point-of-interest': PoisPointOfInterest;
    }
  }
}
