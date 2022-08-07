import { DropdownContainer } from "../../Styles/LandingPageBody.styles";
import { JsonData } from "../../../../data";

// const Content = JsonData.json();
// console.log(Content);

export const DropdownOne = () => {
  return (
    <DropdownContainer>
      <h2>ORTHOPEDIC MASSAGE</h2>
      <p>
        Involves an orthopedic assessment, manipulation and movement of soft
        tissue to reduce pain and dysfunction. Restoring balance throughout the
        body allows us to focus on both prevention and rehabilitation of
        musculoskeletal dysfunctions. Utilized for specific pain and injury
        symptoms
      </p>
    </DropdownContainer>
  );
};

export const DropdownTwo = () => {
  return (
    <DropdownContainer>
      <h2>THERAPEUTIC MASSAGE</h2>
      <p>
        Involves a variety of massage techniques for reducing minor muscle
        tension, pain, and discomfort. Activating the PNS(parasympathetic
        nervous system) or “rest and digest”, our body enters a state of
        relaxation, and relaxation breeds recovery. Utilized for recovery and
        relaxation.
      </p>
    </DropdownContainer>
  );
};

export const DropdownThree = () => {
  return (
    <DropdownContainer>
      <h2>SPORTS MASSAGE</h2>
      <p>
        Geared towards people who have physically demanding lifestyles and/or
        hobbies. This kind of therapeutic massage considers the impact of
        certain activities on specific joints, tendons, ligaments, and muscle
        groups. An initial assessment is used to create a specially informed
        massage treatment plan.
      </p>
    </DropdownContainer>
  );
};

export const DropdownFour = () => {
  return (
    <DropdownContainer>
      <h2>CUPPING</h2>
      <p>
        Or Myofascial Decompression. Creates a vacuum(negative pressure) between
        the skin and underlying tissues helping to lift, stretch, and separate
        tissue layers. Facilitating the reduction of adhesions, hydrating the
        tissues, and enhancing blood flow. Resulting in improved mobility and a
        decrease in pain and dysfunction.
      </p>
    </DropdownContainer>
  );
};
