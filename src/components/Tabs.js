import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";
import "react-tabs/style/react-tabs.css";
export default function TabsSection() {
  return (
    <div className=" mt-10 w-[40vh] md:w-[100vh] rounded-lg relative">
      <Tabs className="rounded-lg flex flex-col justify-center backdrop-blur-2xl">
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
            <div className=" flex flex-row justify-between align-middle">
              <code>Customize Youtube LiveChat Comissions</code>
              <div className="flex align-text-bottom">
                <a
                  className="p-2 rounded-md bg-secondary hover:ease-in-out hover:duration-300 hover:bg-aksen"
                  href="comissions/livechats"
                >
                  Detail
                </a>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="align-middle space-y-2">
            <div className=" flex flex-row justify-between align-middle">
              <code>Youtube Livechat Demo</code>
              <div className="flex align-text-bottom">
                <Link
                  href="apps/livechatsdummy"
                  className="py-1 px-2 rounded-md bg-secondary hover:ease-in-out hover:duration-300 hover:bg-aksen"
                >
                  Try
                </Link>
              </div>
            </div>
            <div className=" flex flex-row justify-between align-middle">
              <code>Youtube LiveChat Templates Color Editor</code>
              <div className="flex align-text-bottom">
                <Link
                  href="apps/TemplatesMenu"
                  className="py-1 px-2 rounded-md bg-secondary hover:ease-in-out hover:duration-300 hover:bg-aksen"
                >
                  Try
                </Link>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
      <span className="w-28 h-28 bg-purple-800 blur-lg rounded-full absolute -z-50 animate-rndm"></span>
      <span className="w-28 h-28 bg-aksen blur-lg rounded-full absolute -z-50 animate-rndmOne "></span>
    </div>
  );
}
