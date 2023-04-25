import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";
import "react-tabs/style/react-tabs.css";
import CobaDeh from "./TabsComponents/Nganu";
export default function TabsSection() {
  return (
    <div className=" mt-10 w-[40vh] md:w-[100vh] rounded-lg relative">
      <Tabs className="rounded-lg flex flex-col justify-center overflow-scroll backdrop-blur-2xl">
        <TabList className="justify-center flex flex-row mt-4">
          <Tab
            className="p-3 text-center  cursor-pointer rounded-sm hover:ease-in-out hover:duration-300"
            selectedClassName="border-b-2 border-aksen"
          >
            Services
          </Tab>
          <Tab
            className="p-3 text-center cursor-pointer rounded-sm hover:ease-in-out hover:duration-300"
            selectedClassName="border-b-2 border-aksen"
          >
            Apps
          </Tab>
        </TabList>
        <div className="mt-5 mb-5 px-3">
          <TabPanel className="align-middle">
            <CobaDeh
              Mana="commissions/livechat"
              Nganu="Customizing LiveChat"
              TombolNganu="More"
            ></CobaDeh>
          </TabPanel>
          <TabPanel className="align-middle space-y-2">
            <CobaDeh
              Mana="apps/livechatsdummy"
              Nganu="Youtube Livechat Dummy"
              TombolNganu="Try"
            ></CobaDeh>
            <CobaDeh
              Mana="apps/templates"
              Nganu="Youtube LiveChat Templates Color Editor"
              TombolNganu="Try"
            ></CobaDeh>
          </TabPanel>
        </div>
      </Tabs>
      <span className="w-28 h-28 bg-purple-800 blur-lg rounded-full absolute -z-50 animate-rndm"></span>
      <span className="w-28 h-28 bg-aksen blur-lg rounded-full absolute -z-50 animate-rndmOne "></span>
    </div>
  );
}
