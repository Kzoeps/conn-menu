import { ITEM_REGEX, HARRIS_URL, MealCodes } from "./constants";
import { Meal } from "./types";

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
        const response = await fetch(fetchUrl);
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
  const currentTime = new Date();
  let currentHour = currentTime.getHours();
  const currentMinutesInHour = currentTime.getMinutes() / 60; 
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
  const dateParam = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  const menuParams = getMealParams(meal, dateParam);
  return getMealMenu(menuParams);
}