import {createClient} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { SanityProjectDetails } from '@sanity/image-url/lib/types/types';

// lib/config.js
export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-10-21', 
    useCdn: process.env.NODE_ENV === 'production',  
};


export const sanityClient = createClient(config)

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)
