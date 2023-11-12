import { ITEM_REGEX, HARRIS_URL, MealCodes } from "./constants";
import { Meal } from "./types";
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

export const getMealParams = (mealName: Meal, date: string) => {
  const searchParams = {
    locationNum: "01",
    sName: "Connecticut College Dining Services",
    locationName: "Harris",
    naFlag: '1',
    WeeksMenus: "This Week's Menus",
    dtdate: date,
    mealName,
    lngcurselmeal: MealCodes[mealName],
    savedallergens: "ýýýýýýýýýýALL",
    savedwebcodes: "ýýýýýýALL",
  };
  return new URLSearchParams(searchParams);
};

export const getMealMenu = async (params: URLSearchParams) => {
    const fetchUrl = HARRIS_URL + params;
    try {
        const response = await fetch(fetchUrl, { method: "GET", next: { revalidate: 3600}});
        const data = await response.text();
        return data;
    } catch (err) {
        throw err;
    }
}

export const getMealMenuItems = (html: string) => {
  const matches = [...html.matchAll(ITEM_REGEX)];
  const items = matches.map((match) => match[1]);
  return items;
};

/**
 * function to get the meal type for the current time
 * @returns {Meal} - can be either Breakfast, Lunch or Dinner
 */
export const getCurrentMeal = (): Meal => {
  const currentTime = dayjs().tz('America/New_York');
  let currentHour = currentTime.hour();
  const currentMinutesInHour = currentTime.minute() / 60; 
  currentHour += currentMinutesInHour;
  console.log(currentHour);
  if (currentHour < 11.5) {
    return "Breakfast";
  } else if (currentHour < 15) {
    return "Lunch";
  } else {
    return "Dinner";
  }
}
/**
 *  function to get menu for a specific day 
 * @param {Date} date 
 * @param {Meal} meal
 */
export const getDailyMenu = (date: Date, meal: Meal) => {
  const parsedDate = dayjs(date).tz('America/New_York');
  const dateParam = `${parsedDate.month() + 1}/${parsedDate.date()}/${parsedDate.year()}`;
  const menuParams = getMealParams(meal, dateParam);
  return getMealMenu(menuParams);
}