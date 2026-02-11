
import TimerWidget from "./componets/Timer";
import DisplayType from "./componets/DisplayType";


export default function landingPage() {

return (

    <div className=" border rounded w-full h-screen flex flex-col">
      <div className="border">
        {/* desktop outline - top */}
        <div className="p-4 flex x-0 w-full
              bg-linear-180 from-white to-gray-500">
                <div className="ml-auto flex flex-row">
                  <img className="max-h-8 max-w-8 px-1" src='https://cdn-icons-png.flaticon.com/128/3917/3917764.png'></img>
                  <TimerWidget/>
                </div>
              </div>
      </div>
      {/* determines viewer dimentions and handles logic inside the 'screen' */}
      <DisplayType/>
      {/* desktop outline - bottom only renders on desktop view for ease of
        viewing */}
    </div>
    

    
  );
}