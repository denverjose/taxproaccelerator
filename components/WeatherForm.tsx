"use client";

import { useFormState } from "react-dom";
import { getCityWeather } from "@/actions";
import SubmitButton from "./SubmitButton";
import WeatherDisplay from "./WeatherDisplay";
import { WeatherData } from "@/interfaces/weather";

const initialState = {
  type: "",
  message: "",
  errors: null,
  data: null as WeatherData | null,
};

const WeatherForm: React.FC = () => {
  const [state, formAction] = useFormState<any>(
    getCityWeather as any,
    initialState
  );

  return (
    <>
      <form
        className="text-center max-w-xl mx-auto  mt-5 p-12  rounded-xl bg-white"
        action={formAction}
      >
        <div className="relative h-16 w-full min-w-[200px]">
          <input
            type="text"
            placeholder="Enter City Name"
            id="city"
            name="city"
            className="hover:border-4 uppercase peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label
            htmlFor="city"
            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none !overflow-visible truncate text-xl font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-2 before:mr-1 before:box-border before:block before:h-2 before:w-3 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-2 after:ml-1 after:box-border after:block after:h-2 after:w-3 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-lg peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
          >
            City
          </label>
        </div>
        <SubmitButton />
      </form>
      <div
        className={`text-center max-w-xl mx-auto  mt-5 p-12 w-3/4 rounded-xl 
        ${state?.data ? "bg-white" : ""}`}
      >
        {state?.data && <WeatherDisplay weather={state.data} />}
        {state?.type == "error" && (
          <p id="name-error" className="uppercase text-red-600 text-2xl  ">
            {state.message}
          </p>
        )}
      </div>
    </>
  );
};

export default WeatherForm;
