import React from "react";
import Pill1 from "../../assets/svg/1.svg";
import Pill2 from "../../assets/svg/2.svg";
import Pill3 from "../../assets/svg/3.svg";
import Pill4 from "../../assets/svg/4.svg";
import Pill5 from "../../assets/svg/5.svg";
import Pill6 from "../../assets/svg/6.svg";
import Pill7 from "../../assets/svg/7.svg";
import Pill8 from "../../assets/svg/8.svg";

type Props = {
  icon?:  string
  width?:number
  height?:number
};

const MedicalIcon = ({ icon, height, width }: Props) => {
  if (icon === "1medical") {
    return <Pill1 height={height} width={width} />;
  }
  if (icon === "2medical") {
    return <Pill2 height={height} width={width}/>;
  }
  if (icon === "3medical") {
    return <Pill3 height={height} width={width}/>;
  }
  if (icon === "4medical") {
    return <Pill4 height={height} width={width}/>;
  }
  if (icon === "5medical") {
    return <Pill5 height={height} width={width}/>;
  }
  if (icon === "6medical") {
    return <Pill6 height={height} width={width}/>;
  }
  if (icon === "7medical") {
    return <Pill7 height={height} width={width}/>;
  }
  if (icon === "8medical") {
    return <Pill8 height={height} width={width}/>;
  }
  return(
    <Pill1 height={height} width={width}/>
  );
};

export default MedicalIcon;
