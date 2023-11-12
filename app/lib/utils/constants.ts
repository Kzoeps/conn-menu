export enum MealCodes {
  "Breakfast" = '1',
  "Lunch" = '2',
  "Dinner" = '3',
}

export const HARRIS_URL =
  "http://pepperbush.conncoll.edu/fpmobile.net/shortmenu.aspx?";

export const ITEM_REGEX = /<div class='shortmenurecipes'>(?:<span[^>]*>)(.*)<\/div>/gm;