import React, { useContext } from "react";
import { Contex } from "../../ContexApi/Contex";


const MakeAnAppointment = () => {
    const { theme } = useContext(Contex)
    return (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ${theme === 'dark' ? '' : 'bg-blue-50'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Side: Description */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold">
                        Why Do I need to book an APPOINMENT?
                    </h2>
                    <p className=" text-lg">
                        When you need to know more details of the visa from us, you are required to make an appointment with the applicable charges. Appointments are opportunities to meet your prospects face-to-face and get a better understanding of your visa needs.
                    </p>
                    <p className=" text-lg">
                        Our Appointment System allows you to choose flexible the date and time 24/7 365 days. Once you make the payment and confirm it, you will receive an email notification including all details about the appointment. Thereafter You are free to join the meeting as scheduled.
                    </p>
                    <p className=" text-lg">
                        Furthermore, we provide document pick-up and delivery services (only
                        for visas) for all our clients.
                    </p>
                </div>

                {/* Right Side: Image */}
                <div className="flex justify-center">
                    <img
                        src="https://i.ibb.co.com/yNXKH71/Schedule-rafiki.png"
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default MakeAnAppointment;
