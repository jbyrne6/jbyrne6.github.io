// opens the image in the gallery corresponding to the image caption entered
const handleThumbDescClick = (clickedImageCaption) => {
    let galleryIndexToOpen = 1
    fsLightboxInstances.gallery.props.customAttributes.forEach((imageCaption, index) => {
        if (imageCaption.caption == clickedImageCaption) {
            galleryIndexToOpen = index
        }
    })
    fsLightboxInstances['gallery'].open(galleryIndexToOpen);
}