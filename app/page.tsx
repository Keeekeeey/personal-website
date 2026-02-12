

import DisplayType from "./componets/DisplayType";
import background from "./images/portfolio_background_lowres.jpg"
import BottomMenu from "./componets/BottomMenu";
import TopMenu from "./componets/TopMenu";


export default function landingPage() {

return (

    <div className=" border-2 rounded w-full h-full flex flex-col">
      <div className=" w-fill max-h-50">
        <TopMenu/>
      </div>
        <div 
      style={{ '--bg-image': `url(${background.src})` } as React.CSSProperties}
      className=" w-fill h-screen bg-[image:var(--bg-image)] bg-fill bg-center">
        <DisplayType/>
        </div>
      <div className="block md:visible border w-fill">
        <BottomMenu/>
      </div>
            
      </div>

    

    
  );
}