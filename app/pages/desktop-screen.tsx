import WindowManager from "../componets/WindowManager";
import background from "../images/portfolio_background_lowres.jpg"

export default function DesktopLandingPage() {
    return(
        <div 
      style={{ '--bg-image': `url(${background.src})` } as React.CSSProperties}
      className="bg-[image:var(--bg-image)] bg-cover bg-center h-screen"
    >
        <WindowManager/>
      </div>
    )
}