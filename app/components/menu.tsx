import { Suspense } from "react";
import MenuLoader from "./menu-loader";
import { Meal, getDailyMenu, getMealMenuItems } from "../lib/utils";

export interface MenuProps {
    meal: Meal
}

async function fetchMenu(meal: Meal) {
    try {
        const res = await getDailyMenu(new Date(), meal)
        return getMealMenuItems(res)
    } catch (error) {
        if (error instanceof Error) {
            throw error
        } else {
            throw new Error("Error fetching menu")
        }
    }
}
export default async function Menu({ meal }: MenuProps) {
    const menu = await fetchMenu(meal)
    return (
        <section>
            <Suspense fallback={<MenuLoader />}>
                <ul className="list-disc">
                    {menu.map((item, i) => (
                        <li key={i}>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </Suspense>
        </section>
    )
}