import Icon from "./icon"
export default function Icons() {
    return (
        <div className="">
            <ul className="flex justify-center mt-5">
                <Icon><a href="https://instagram.com/revernry"><img className="h-[35px] lg:h-12" src="./instagram-ic.svg"></img></a></Icon>
                {/* <Icon><a href="https://dribbble.com/Arzee"><img className="h-[45px] -mt-1 lg:h-14" src="./dribble-ic.svg"></img></a></Icon> */}
                <Icon><a href="https://github.com/AkbarFahreza"><img className="h-[35px] lg:h-12" src="./github-ic.svg"></img></a></Icon>
                <Icon><a href="https://twitter.com/Revernry"><img className="h-[30px] lg:h-11 align-bottom" src="./Twitter-ico.svg"></img></a></Icon>
            </ul>
        </div>
    )
}