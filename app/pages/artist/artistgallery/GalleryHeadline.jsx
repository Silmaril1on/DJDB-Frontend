import Headline from "@/app/components/uicomponents/Headline";

const GalleryHeadline = ({ data, active }) => {
  const displayName = data.stageName || data.name;
  const gallery = data.gallery.length;

  return (
    <div className="lg:absolute left-0 top-0 flex-center w-full lg:h-full pl-3 py-5 lg:pl-5">
      <div className="flex flex-col w-full">
        <Headline className="font-bold uppercase text-4xl lg:text-3xl">
          {displayName}
        </Headline>
        <div className="flex flex-col">
          <div className="space-x-1">
            <span className="text-xl text-lightgray">PHOTO</span>
            <span className="text-xl text-lightgray">GALLERY</span>
          </div>
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
