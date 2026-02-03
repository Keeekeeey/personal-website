export default function ProjectTable() {

    return (
         <div className="overflow-y-auto overflow-x-auto max-h-96 max-w-90 rounded border-2">
            <table className="border-collapse min-w-full ">
            <thead>
            </thead>
                <tbody>
                    <tr>
                        <td className=" border border-dashed p-2 font-bold">Smart Cat Feeder - website
                            <div className="overflow-y-auto max-h-20 ">
                                    <div className="font-normal bg-window-foreground rounded p-2"> == Used:
                                        K3s cluster &&
                                        Websocket &&
                                        postgreSQL
                                    </div>
                                </div>
                            </td>
                        <td className="border border-dashed p-2">
                            <a href="https://github.com/Keeekeeey/smart-feeder-webserver">
                            <button className="bg-window-header-light rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-window-header-light">
                                <img 
                                alt ='Github icon'
                                className="max-h-10 max-w-10" src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img>
                            </button>
                            </a>
                            <a href="#">
                            <button className="bg-window-header-light rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-window-header-light">
                                <img 
                                alt ='Webpage icon'
                                className="max-h-10 max-w-10" src="https://cdn-icons-png.flaticon.com/128/2807/2807258.png"></img>
                            </button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className=" border border-dashed p-2 font-bold">Smart Cat Feeder - trained model
                            <div className="overflow-y-auto max-h-20">
                                    <div className="font-normal bg-window-foreground rounded p-2"> == Used:
                                        NAS &&
                                        jupyter &&
                                        YOLO
                                    </div>
                                </div>
                            </td>
                        <td className="border border-dashed p-2">
                            <a href="https://github.com/Keeekeeey/cat-cam">
                            <button className="bg-window-header-light rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-window-header-light">
                                <img 
                                alt ='Github icon'
                                className="max-h-10 max-w-10" src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img>
                            </button>
                            </a>
                            <a href="#">
                            <button className="bg-window-header-light rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-window-header-light">
                                <img 
                                alt ='Webpage icon'
                                className="max-h-10 max-w-10" src="https://cdn-icons-png.flaticon.com/128/2807/2807258.png"></img>
                            </button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className=" border border-dashed p-2 font-bold">Geometry Node Driven Eyes
                            <div className="overflow-y-auto max-h-20">
                                    <div className="font-normal bg-window-foreground rounded p-2"> == Used:
                                        Blender interal code
                                    </div>
                                </div>
                            </td>
                        <td className="border border-dashed p-2">
                            <a href="https://github.com/Keeekeeey/Geometry-Node-Driven-Eyes">
                            <button className="bg-window-header-light rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-window-header-light">
                                <img 
                                alt ='Github icon'
                                className="max-h-10 max-w-10" src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img>
                            </button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className=" p-2">Procedural Terrian Generation</td>
                        <td className=" p-2">links</td>
                    </tr>
                    <tr>
                        <td className=" p-2">Procedural Animation</td>
                        <td className=" p-2">links</td>
                    </tr>
                    <tr>
                        <td className=" p-2">Jaw creation tool</td>
                        <td className=" p-2">links</td>
                    </tr>
                    <tr>
                        <td className=" border border-dashed p-2 font-bold">Python Workflow Tools
                            <div className="overflow-y-auto max-h-20">
                                    <div className="font-normal bg-window-foreground rounded p-2"> == Used:
                                        
                                    </div>
                                </div>
                            </td>
                        <td className="border border-dashed p-2">
                            <button className="bg-window-header-light rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-window-header-light">
                                <img className="max-h-10 max-w-10" src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img>
                            </button>
                            <button className="bg-window-header-light rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-window-header-light">
                                <img className="max-h-10 max-w-10" src="https://cdn-icons-png.flaticon.com/128/2807/2807258.png"></img>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );


} 