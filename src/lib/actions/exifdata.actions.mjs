'use server'
import exif from 'exif'
export const getExif = async (path) => {

    return new Promise((resolve, reject) => {

        new exif.ExifImage({ image : path}, function (error, exifData) {
            if (error)
                console.log('Error: '+error.message);
            else {
                // console.log('exifData: ', exifData);
                let { image, thumbnail, exif, gps, interoperability, makernote } = exifData;
                let { PhotometricInterpretation, Make, Model, Orientation, SamplesPerPixel, Software, ModifyDate} = image;
                let { ExifVersion, FileSource, SceneType, LensInfo, ...exifRest} = exif;

                // resolve({
                //     image: {
                //         PhotometricInterpretation,
                //         Make,
                //         Model,
                //         Orientation,
                //         SamplesPerPixel,
                //         Software,
                //         ModifyDate
                //     },
                //     exif : {
                //         ...exifRest,
                //         LensInfo : LensInfo,
                //     },
                    
                // })
                resolve(exifData)
            }
               
            
        });

    });

}

export const getBufferExif = async (buffer) => {

    return new Promise((resolve, reject) => {

        new exif.ExifImage({ image : buffer}, function (error, exifData) {
            if (error)
                console.log('Error: '+error.message);
            else {
                // console.log('exifData: ', exifData);
                let { image, thumbnail, exif, gps, interoperability, makernote } = exifData;
                let { PhotometricInterpretation, Make, Model, Orientation, SamplesPerPixel, Software, ModifyDate} = image;
                let { ExifVersion, FileSource, SceneType, LensInfo, ...exifRest} = exif;

                resolve({
                    image: {
                        PhotometricInterpretation,
                        Make,
                        Model,
                        Orientation,
                        SamplesPerPixel,
                        Software,
                        ModifyDate
                    },
                    exif : {
                        ...exifRest,
                        LensInfo : LensInfo,
                    },
                    
                })
            }
               
            
        });

    });

}
