import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getCurrentMeal } from "./lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import Menu from './components/menu'

export default function Home() {
  return (
    <main>
      <Tabs defaultValue={getCurrentMeal()} className="w-full" >
        <TabsList className=" bg-slate-200 w-full grid grid-cols-3 pt-2 pb-10">
          <TabsTrigger value="Breakfast">Breakfast</TabsTrigger>
          <TabsTrigger value="Lunch">Lunch</TabsTrigger>
          <TabsTrigger value="Dinner">Dinner</TabsTrigger>
        </TabsList>
        <TabsContent value="Breakfast" className="w-3/4 m-auto mt-4 ">
          <Menu meal="Breakfast" />
        </TabsContent>
        <TabsContent value="Lunch" className="w-3/4 m-auto mt-4 ">
          <Menu meal="Lunch" />
        </TabsContent>
        <TabsContent value="Dinner" className="w-3/4 m-auto mt-4 ">
          <Menu meal="Dinner" />
        </TabsContent>
      </Tabs>
    </main>
  )
}
