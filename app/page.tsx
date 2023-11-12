import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Menu from './components/menu'
import { getCurrentMeal } from "./lib/utils"

export default function Home() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className="min-h-screen">
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
      <footer className="w-full bg-slate-300 h-10  text-center absolute bottom-0">
        <p className="font-light italic text-xs leading-10">Made with ❤️ by <a href="https://kzoeps.com" target="_blank"><span className=" underline">@kzoeps</span></a> © {year} </p>
      </footer>
    </div>
  )
}
