import React, { memo } from "react";
import Pill1 from "../../assets/svg/1.svg";
import Pill2 from "../../assets/svg/2.svg";
import Pill3 from "../../assets/svg/3.svg";
import Pill4 from "../../assets/svg/4.svg";
import Pill5 from "../../assets/svg/5.svg";
import Pill6 from "../../assets/svg/6.svg";
import Pill7 from "../../assets/svg/7.svg";
import Pill8 from "../../assets/svg/8.svg";
const MedicalIcon = memo(({ icon }: any) => {
  if(icon === "1medical"){
    return <Pill1 />;
  }
  if(icon === "2medical"){
    return <Pill2 />;
  }
  if(icon === "3medical"){
    return <Pill3 />;
  }
  if(icon === "4medical"){
    return <Pill4 />;
  }
  if(icon === "5medical"){
    return <Pill5 />;
  }
  if(icon === "6medical"){
    return <Pill6 />;
  }
  if(icon === "7medical"){
    return <Pill7 />;
  }
  if(icon === "8medical"){
    return <Pill8 />;
  }
});

MedicalIcon.displayName ="MedicalIcon";
export default MedicalIcon;
