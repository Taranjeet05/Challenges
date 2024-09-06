import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithClassName/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />


      <BoxWithStyledComponents $isBlack={false} />
      <BoxWithStyledComponents $isBlack={true} />



    </div>


  );
}
