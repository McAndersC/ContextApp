'use server'

import { getBufferExif, getExif } from "./exifdata.actions.mjs";



export const createLibrary = async (params, prevState, formData) => {

    console.log('Create Library', params)

    let path = 'https://mcdm-resources.ams3.cdn.digitaloceanspaces.com/mediacollge.photo.catalogs/65d47e2d1b72bbf3a60f5165/65d481ae1b72bbf3a60f5172/65d481ae1b72bbf3a60f5174.jpg';
    let localPath = './public/test/test01.jpg';

    const imageRes = await fetch(path)
    let fimgb = Buffer.from(await imageRes.arrayBuffer())



    await getBufferExif(fimgb).then(meta => {
        console.log('Meta: ', meta);
    });
    // await getExif(path).then(meta => {

    //     console.log('meta: ', meta);
     
    // });

    
    
    return JSON.parse(JSON.stringify({message : 'Catalog Created'}));


}
