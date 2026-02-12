export default function BottomMenu (){

    return(
        <div className="p-4 flex flex-row justify-center items-center
              bg-linear-360 from-white to-gray-500">
                <img className="max-h-10 max-w-10 px-2" src='https://cdn-icons-png.flaticon.com/128/6424/6424314.png'></img>
                <img className="max-h-10 max-w-10 px-2" src='https://cdn-icons-png.flaticon.com/128/1231/1231223.png'></img>
                <div className="border rounded-2xl w-full bg-background min-h-5 max-w-100 px-5 flex items-center"> 
                  <span className="text-sm">

                  </span>
                </div>
                <img className="max-h-10 max-w-10 px-2" src="https://cdn-icons-png.flaticon.com/128/3917/3917061.png"></img>
        </div>  
    )
}