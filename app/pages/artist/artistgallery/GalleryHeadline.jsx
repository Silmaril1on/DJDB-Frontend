import Title from "@/app/components/uicomponents/Title";

const GalleryHeadline = ({ data, active }) => {
  const displayName = data.stageName || data.name;
  const gallery = data.gallery.length;

  return (
    <div className="lg:absolute left-0 top-0 flex-center w-full lg:w-44 lg:h-full pl-3 lg:pl-5">
      <div className="flex flex-col w-full">
        <Title>{displayName}</Title>
        <div className="flex flex-row lg:flex-col space-x-3 lg:space-x-0">
          <span className="text-4xl text-lightgray">PHOTO</span>
          <span className="text-4xl text-lightgray">GALLERY</span>
          <div className="space-x-2 my-2 font-tetriary text-2xl">
            <span className="text-green w-4 inline-flex justify-center">
              {active + 1}
            </span>
            <span>/</span>
            <span>{gallery}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryHeadline;
