const Phone = ({phone}) => {
    const {id, brand_name, image, phone_name, price, rating} = phone || {};
    console.log(phone);
  return (
    <div>
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            className="h-full w-full object-cover"
          />
          
        </div>
        <div className="p-6">
        <p className="text-xl font-semibold py-2">{brand_name}</p>
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {phone_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {price}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </p>
          <div className="py-3">
            <p>Rating: {rating}</p>
        </div>
        </div>
        
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-red-300 py-3 px-6 text-center align-middle font-semibold transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default Phone;
