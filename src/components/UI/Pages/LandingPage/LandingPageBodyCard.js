import ModalitiesCard from "./ModalitiesCard";
import { DropDownJson } from "../../../../data";

const LandingPageBodyCard = (props) => {
  const Contents = DropDownJson;

  return (
    <>
      {Contents.map((content) => (
        <ModalitiesCard {...content} />
      ))}
    </>
  );
};
export default LandingPageBodyCard;
