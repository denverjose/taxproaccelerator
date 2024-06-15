"use server";

import { z } from "zod";
import axios from "axios";

export async function getCityWeather(prevState: any, formData: FormData) {
  console.log({ prevState });
  console.log(formData.get("city"));

  const schema = z.object({
    city: z.string().min(1),
  });
  const validatedFields = schema.safeParse({
    city: formData.get("city"),
  });

  if (!validatedFields.success) {
    return {
      type: "error",
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing city. Failed to Get Weather.",
    };
  }

  const { city } = validatedFields.data;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          units: "imperial",
          appid: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY,
        },
      }
    );

    if (!response.data || response.data.cod !== 200) {
      return { type: "error", message: "NO CITY FOUND" };
    }

    return { type: "success", data: response.data };
  } catch (err) {
    let errorMessage = "An unknown error occurred";
    if (axios.isAxiosError(err)) {
      errorMessage = err.response?.data?.message || err.message;
    } else if (err instanceof Error) {
      errorMessage = err.message;
    }

    return {
      type: "error",
      message: errorMessage,
    };
  }
}
