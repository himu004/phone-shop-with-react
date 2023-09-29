import Phone from "../Phone/Phone";

const Phones = ({phones}) => {
    return (
        <div>
            <h1 className="text-2xl py-10 font-bold text-center">All Category Phones</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    phones?.map(phone => <Phone key={phone.key} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;